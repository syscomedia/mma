import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { query } from '@/lib/db';

const DEFAULT_LAT = 43.5297;
const DEFAULT_LNG = 5.4474;

function extractEmails(text: string): string[] {
  const regex = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g;
  const found = text.match(regex) || [];
  return [...new Set(found)].filter(e =>
    !e.includes('example') &&
    !e.includes('domain.') &&
    !e.includes('sentry') &&
    !e.includes('wixpress') &&
    !e.includes('your-') &&
    !e.endsWith('.png') &&
    !e.endsWith('.jpg') &&
    !e.endsWith('.svg') &&
    e.length < 80 &&
    e.includes('.')
  );
}

async function scrapeEmailsFromWebsite(website: string): Promise<string[]> {
  try {
    const url = website.startsWith('http') ? website : `https://${website}`;
    const base = new URL(url).origin;
    const emails = new Set<string>();

    for (const path of ['', '/contact', '/nous-contacter', '/a-propos']) {
      try {
        const res = await fetch(`${base}${path}`, {
          signal: AbortSignal.timeout(6000),
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
        });
        const html = await res.text();
        extractEmails(html).forEach(e => emails.add(e));
        if (emails.size > 0) break;
      } catch { /* ignore */ }
    }
    return [...emails];
  } catch {
    return [];
  }
}

// Nominatim search — free, no key needed
async function searchNominatim(amenity: string, radiusKm: number, lat: number, lng: number): Promise<any[]> {
  // Calculate bounding box from center + radius
  const deg = radiusKm / 111; // 1 degree ≈ 111km
  const minLat = lat - deg;
  const maxLat = lat + deg;
  const minLng = lng - deg;
  const maxLng = lng + deg;

  const queries = amenity === 'all'
    ? ['pharmacy', 'clinic', 'hospital', 'dentist', 'doctor', 'physiotherapist', 'optician']
    : [amenity];

  const results: any[] = [];
  const seen = new Set<string>();

  for (const q of queries) {
    await new Promise(r => setTimeout(r, 1000)); // Nominatim rate limit: 1 req/sec
    try {
      const url = `https://nominatim.openstreetmap.org/search?` +
        `q=${encodeURIComponent(q)}&format=json&limit=50&bounded=1` +
        `&viewbox=${minLng},${maxLat},${maxLng},${minLat}` +
        `&addressdetails=1&extratags=1`;

      const res = await fetch(url, {
        signal: AbortSignal.timeout(10000),
        headers: {
          'User-Agent': 'MaisonMedicaleAixoise/1.0 (contact@maisonmedicaleaixoise.com)',
          'Accept': 'application/json',
        }
      });
      const data = await res.json();
      for (const item of data) {
        const key = item.osm_id || item.place_id;
        if (!seen.has(String(key))) {
          seen.add(String(key));
          results.push(item);
        }
      }
    } catch (e: any) {
      console.error('[emails] Nominatim error for', q, e.message);
    }
  }
  return results;
}

async function ensureTable() {
  await query(`
    CREATE TABLE IF NOT EXISTS scraped_emails (
      id SERIAL PRIMARY KEY,
      business_name TEXT,
      address TEXT,
      website TEXT,
      email TEXT UNIQUE,
      phone TEXT,
      scraped_at TIMESTAMP DEFAULT NOW()
    )
  `);
}

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    await ensureTable();
    const res = await query(
      `SELECT * FROM scraped_emails ORDER BY scraped_at DESC`
    );
    return NextResponse.json({ success: true, data: res.rows });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const radius = Number(body.radius) || 5000;
  const amenity = body.amenity || 'all';
  const lat = Number(body.lat) || DEFAULT_LAT;
  const lng = Number(body.lng) || DEFAULT_LNG;
  const radiusKm = radius / 1000;

  try {
    await ensureTable();

    console.log('[emails] Starting scan, amenity:', amenity, 'radius:', radiusKm, 'km, position:', lat, lng);
    const places = await searchNominatim(amenity, radiusKm, lat, lng);
    console.log('[emails] Found', places.length, 'places from Nominatim');

    if (places.length === 0) {
      return NextResponse.json({ success: true, found: 0, total_businesses: 0, data: [] });
    }

    const results: any[] = [];

    for (const place of places.slice(0, 30)) {
      const name = place.name || place.display_name?.split(',')[0] || '';
      const address = place.display_name || '';
      const extratags = place.extratags || {};
      const website = extratags.website || extratags['contact:website'] || '';
      const phone = extratags.phone || extratags['contact:phone'] || '';
      const emailTag = extratags.email || extratags['contact:email'] || '';

      let emails: string[] = [];

      if (emailTag) {
        emails = [emailTag];
      } else if (website) {
        emails = await scrapeEmailsFromWebsite(website);
      }

      if (emails.length === 0) continue;

      for (const email of emails) {
        try {
          await query(
            `INSERT INTO scraped_emails (business_name, address, website, email, phone)
             VALUES ($1,$2,$3,$4,$5)
             ON CONFLICT (email) DO NOTHING`,
            [name, address, website, email, phone]
          );
        } catch { /* duplicate */ }
        results.push({ name, address, website, email, phone });
      }
    }

    return NextResponse.json({
      success: true,
      found: results.length,
      total_businesses: places.length,
      data: results,
    });
  } catch (e: any) {
    console.error('[emails] POST error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    await ensureTable();
    await query(`DELETE FROM scraped_emails`);
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

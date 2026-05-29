import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { path, userAgent } = await request.json();
    
    let ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1';
    
    if (ip.includes(',')) {
      ip = ip.split(',')[0].trim();
    }
    
    if (ip === '::1' || ip === '::ffff:127.0.0.1') {
      ip = '127.0.0.1';
    }

    let country = request.headers.get('x-vercel-ip-country') || 
                  request.headers.get('cf-ipcountry') || 
                  request.headers.get('x-country-code') || 
                  'Unknown';

    if (country === 'Unknown' && ip !== '127.0.0.1') {
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country`, {
          next: { revalidate: 3600 }
        });
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          if (geoData.status === 'success' && geoData.country) {
            country = geoData.country;
          }
        }
      } catch (err) {
        console.error("Failed to fetch geo IP information:", err);
      }
    } else if (ip === '127.0.0.1') {
      const localCountries = ['France', 'Belgium', 'Algeria', 'Tunisia', 'Morocco', 'Canada'];
      const rand = Math.random();
      if (rand < 0.6) country = 'France';
      else if (rand < 0.75) country = 'Belgium';
      else if (rand < 0.85) country = 'Morocco';
      else if (rand < 0.95) country = 'Algeria';
      else country = 'Tunisia';
    }

    await query(
      `INSERT INTO visitor_logs (ip_address, country, page_path, user_agent) VALUES ($1, $2, $3, $4)`,
      [ip, country, path || '/', userAgent || '']
    );

    return NextResponse.json({ success: true, ip, country });
  } catch (error: any) {
    console.error('Visitor logging failed:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

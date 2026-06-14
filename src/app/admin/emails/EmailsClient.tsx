'use client';

import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import {
  Mail, Play, Trash2, Download, RefreshCw,
  Building2, Globe, Phone, MapPin, Search,
  CheckCircle, XCircle, Loader2, AlertCircle, LocateFixed, Navigation
} from 'lucide-react';

interface EmailRow {
  id: number;
  business_name: string;
  address: string;
  website: string;
  email: string;
  phone: string;
  scraped_at: string;
}

interface EmailsClientProps {
  username: string;
  role: string;
}

const AMENITIES: { label: string; value: string }[] = [
  { label: 'Tout (général)', value: 'all' },
  { label: 'Pharmacie', value: 'pharmacy' },
  { label: 'Médecin / Clinique', value: 'clinic' },
  { label: 'Hôpital', value: 'hospital' },
  { label: 'Dentiste', value: 'dentist' },
  { label: 'Kiné / Physiothérapeute', value: 'physiotherapist' },
  { label: 'Opticien', value: 'optician' },
  { label: 'Restaurant', value: 'restaurant' },
  { label: 'Hôtel', value: 'hotel' },
  { label: 'Banque', value: 'bank' },
  { label: 'Bureau / Office', value: 'office' },
  { label: 'École', value: 'school' },
];

export default function EmailsClient({ username, role }: EmailsClientProps) {
  const [rows, setRows] = useState<EmailRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [scraping, setScraping] = useState(false);
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('all');
  const [radius, setRadius] = useState(5000);
  const [lastResult, setLastResult] = useState<{ found: number; total: number } | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number; label: string } | null>(null);
  const [locating, setLocating] = useState(false);

  useEffect(() => {
    loadData();
    detectLocation();
  }, []);

  function detectLocation() {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        // Reverse geocode to get address label
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
            { headers: { 'User-Agent': 'MaisonMedicaleAixoise/1.0' } }
          );
          const data = await res.json();
          const label = data.display_name?.split(',').slice(0, 3).join(', ') || `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
          setLocation({ lat, lng, label });
        } catch {
          setLocation({ lat, lng, label: `${lat.toFixed(4)}, ${lng.toFixed(4)}` });
        }
        setLocating(false);
      },
      () => {
        // Permission denied — fall back to shop address
        setLocation({ lat: 43.5297, lng: 5.4474, label: '70 Rue Alain Decaux, 13100 Aix-en-Provence' });
        setLocating(false);
      },
      { timeout: 8000, enableHighAccuracy: true }
    );
  }

  async function loadData() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/emails');
      const data = await res.json();
      if (data.success) {
        setRows(data.data as EmailRow[]);
      }
    } catch (e) {
      setError('Erreur de chargement');
    } finally {
      setLoading(false);
    }
  }

  async function startScraping() {
    setScraping(true);
    setError('');
    setLastResult(null);
    setStatus('Recherche des entreprises via OpenStreetMap...');
    const lat = location?.lat ?? 43.5297;
    const lng = location?.lng ?? 5.4474;
    try {
      const res = await fetch('/api/admin/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ radius, amenity: keyword, lat, lng }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || 'Erreur lors du scraping');
      } else {
        setLastResult({ found: data.found, total: data.total_businesses });
        setStatus(`Terminé — ${data.found} emails trouvés sur ${data.total_businesses} entreprises`);
        await loadData();
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setScraping(false);
    }
  }

  async function clearAll() {
    if (!confirm('Supprimer tous les résultats ?')) return;
    await fetch('/api/admin/emails', { method: 'DELETE' });
    setRows([]);
    setLastResult(null);
    setStatus('');
  }

  function exportCSV() {
    const header = 'Nom,Adresse,Site Web,Email,Téléphone,Date\n';
    const csvRows = filtered.map(r =>
      [r.business_name, r.address, r.website, r.email, r.phone, r.scraped_at]
        .map(v => `"${(v || '').replace(/"/g, '""')}"`)
        .join(',')
    );
    const blob = new Blob([header + csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `emails-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const filtered = rows.filter(r =>
    !search ||
    r.business_name?.toLowerCase().includes(search.toLowerCase()) ||
    r.email?.toLowerCase().includes(search.toLowerCase()) ||
    r.address?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout username={username} role={role}>
      <div className="space-y-8">

        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-tr from-emerald-600 to-teal-600 rounded-2xl shadow-lg shadow-emerald-500/20">
            <Mail className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Scraping Emails</h1>
            <p className="text-slate-400 text-sm">Trouve les emails des entreprises autour de votre position</p>
          </div>
        </div>

        {/* Config + Start */}
        <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 space-y-5">
          {/* Location bar */}
          <div className="flex items-center justify-between gap-3 p-3 bg-slate-800/60 rounded-xl border border-slate-700/50">
            <div className="flex items-center gap-2 min-w-0">
              {locating ? (
                <Loader2 className="w-4 h-4 text-emerald-400 animate-spin shrink-0" />
              ) : (
                <Navigation className="w-4 h-4 text-emerald-400 shrink-0" />
              )}
              <span className="text-slate-300 text-sm truncate">
                {locating ? 'Détection de votre position...' : (location?.label ?? 'Position inconnue')}
              </span>
            </div>
            <button
              onClick={detectLocation}
              disabled={locating || scraping}
              title="Relancer la détection"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-400 rounded-lg text-xs font-medium transition-all shrink-0 disabled:opacity-50"
            >
              <LocateFixed className="w-3.5 h-3.5" />
              Détecter
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2 block">
                Type d&apos;entreprise
              </label>
              <select
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                disabled={scraping}
                className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 disabled:opacity-50"
              >
                {AMENITIES.map(a => (
                  <option key={a.value} value={a.value}>{a.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2 block">
                Rayon de recherche
              </label>
              <select
                value={radius}
                onChange={e => setRadius(Number(e.target.value))}
                disabled={scraping}
                className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 disabled:opacity-50"
              >
                <option value={1000}>1 km</option>
                <option value={2000}>2 km</option>
                <option value={5000}>5 km</option>
                <option value={10000}>10 km</option>
                <option value={20000}>20 km</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={startScraping}
              disabled={scraping}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {scraping
                ? <><Loader2 className="w-4 h-4 animate-spin" /> Scraping en cours...</>
                : <><Play className="w-4 h-4" /> Démarrer le Scan</>
              }
            </button>
            <button
              onClick={loadData}
              disabled={loading || scraping}
              className="flex items-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded-xl transition-all text-sm disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Actualiser
            </button>
          </div>

          {/* Status */}
          {scraping && (
            <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <Loader2 className="w-5 h-5 text-emerald-400 animate-spin shrink-0" />
              <div>
                <p className="text-emerald-300 text-sm font-medium">{status || 'Démarrage...'}</p>
                <p className="text-emerald-400/60 text-xs mt-0.5">Interroge OpenStreetMap puis visite chaque site web. Cela peut prendre 2-3 minutes.</p>
              </div>
            </div>
          )}

          {lastResult && !scraping && (
            <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-emerald-300 text-sm font-medium">{status}</p>
            </div>
          )}

          {error && (
            <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
              <p className="text-rose-300 text-sm">{error}</p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-5">
            <p className="text-3xl font-black text-emerald-400">{rows.length}</p>
            <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">Emails trouvés</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-5">
            <p className="text-3xl font-black text-white">{new Set(rows.map(r => r.business_name)).size}</p>
            <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">Entreprises</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-5 col-span-2 sm:col-span-1">
            <p className="text-3xl font-black text-indigo-400">{filtered.length}</p>
            <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">Résultats filtrés</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 border-b border-slate-800/60">
            <h2 className="text-white font-semibold flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              Base de données emails
            </h2>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
              {rows.length > 0 && (
                <>
                  <button
                    onClick={exportCSV}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium transition-colors shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    CSV
                  </button>
                  <button
                    onClick={clearAll}
                    className="flex items-center gap-2 px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 rounded-xl text-sm transition-colors shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-500">
              <AlertCircle className="w-12 h-12 mb-4 opacity-30" />
              <p className="font-medium">Aucun email trouvé</p>
              <p className="text-sm mt-1">Cliquez sur &quot;Démarrer le Scan&quot; pour commencer</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-800/60">
                    <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wider">Entreprise</th>
                    <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wider">Email</th>
                    <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wider hidden md:table-cell">Site Web</th>
                    <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wider hidden lg:table-cell">Téléphone</th>
                    <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wider hidden lg:table-cell">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/40">
                  {filtered.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-800/30 transition-colors group">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                            <Building2 className="w-4 h-4 text-slate-400" />
                          </div>
                          <div>
                            <p className="text-slate-200 font-medium truncate max-w-[160px]">{row.business_name || '—'}</p>
                            <p className="text-slate-500 text-xs truncate max-w-[160px]">{row.address || '—'}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <a
                          href={`mailto:${row.email}`}
                          className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-mono text-xs"
                        >
                          <Mail className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate max-w-[180px]">{row.email}</span>
                        </a>
                      </td>
                      <td className="px-5 py-3.5 hidden md:table-cell">
                        {row.website ? (
                          <a
                            href={row.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors text-xs truncate max-w-[160px]"
                          >
                            <Globe className="w-3.5 h-3.5 shrink-0" />
                            {row.website.replace(/^https?:\/\//, '').split('/')[0]}
                          </a>
                        ) : <span className="text-slate-600">—</span>}
                      </td>
                      <td className="px-5 py-3.5 hidden lg:table-cell">
                        {row.phone ? (
                          <span className="flex items-center gap-1.5 text-slate-300 text-xs">
                            <Phone className="w-3.5 h-3.5 text-slate-500" />
                            {row.phone}
                          </span>
                        ) : <span className="text-slate-600">—</span>}
                      </td>
                      <td className="px-5 py-3.5 hidden lg:table-cell text-slate-500 text-xs">
                        {row.scraped_at ? new Date(row.scraped_at).toLocaleDateString('fr-FR') : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

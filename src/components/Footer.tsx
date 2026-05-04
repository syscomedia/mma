import Link from "next/link";
import { siteData } from "@/data/site-data";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-medical-accent pt-32 pb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none translate-y-[-20%] translate-x-[20%] uppercase italic">
         MMAIXOISE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-12 group">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center border-4 border-medical-green shadow-[0_0_30px_rgba(57,255,20,0.4)]">
                    <span className="text-medical-accent font-black text-2xl tracking-tighter">M</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black tracking-tighter text-white leading-none">
                      {siteData.name}
                  </span>
                  <span className="text-xs font-bold text-medical-green uppercase tracking-[0.4em] mt-2">
                      EST. 2025 • AIX-EN-PROVENCE
                  </span>
                </div>
            </Link>
            <p className="text-white/40 max-w-sm mb-16 font-bold text-sm leading-relaxed uppercase tracking-widest">
              L&apos;excellence médicale alliée au confort Scholl SS26. Votre partenaire santé au Parc de la Duranne.
            </p>
            <div className="flex gap-6">
              {[
                { name: "Facebook", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { name: "Instagram", d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", rect: true },
                { name: "Linkedin", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", rectLink: true }
              ].map((social, i) => (
                <a key={i} href="#" className="w-16 h-16 bg-white/5 border-2 border-white/10 rounded-[2rem] flex items-center justify-center text-white/20 hover:text-medical-green hover:border-medical-green hover:bg-white/10 hover:scale-110 transition-all shadow-2xl">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.rect && <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>}
                    {social.rectLink && <><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></>}
                    <path d={social.d}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-medical-green font-black uppercase tracking-[0.3em] text-[10px] mb-12 flex items-center gap-3">
               EXPLORATION
            </h4>
            <ul className="space-y-6">
              {["Accueil", "Expertises", "Catalogues", "Engagement", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-white/40 font-black text-xs uppercase tracking-[0.25em] hover:text-white transition-colors flex items-center gap-4 group">
                    <div className="w-0 h-[2px] bg-medical-green group-hover:w-6 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-medical-green font-black uppercase tracking-[0.3em] text-[10px] mb-12 flex items-center gap-3">
               CERTIFICATIONS
            </h4>
            <ul className="space-y-6">
              {["Mentions Légales", "RCS Aix", "Politique Cookies", "Conditions Vente"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/40 font-black text-xs uppercase tracking-[0.25em] hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
             <ShieldCheck className="text-medical-green" size={24} />
             <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">
                © {new Date().getFullYear()} {siteData.name}. TOUS DROITS RÉSERVÉS.
             </p>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10">
             <div className="w-2 h-2 rounded-full bg-medical-green animate-pulse" />
             <p className="text-white/40 text-[9px] font-black uppercase tracking-widest">SIREN {siteData.kbis.siren}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/site-data";
import { ShieldCheck, Target, Users, Award } from "lucide-react";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos — Matériel Médical Aixoise, Spécialiste Orthopédie Aix",
  description:
    "Fondée en 2025 par Amira ABIDI, la Matériel Médical Aixoise est le spécialiste de référence en matériel médical et orthopédie au Parc de la Duranne, Aix-en-Provence. SIREN 939 690 657.",
  keywords: [
    "Matériel Médical Aixoise",
    "Amira ABIDI orthopédie",
    "spécialiste matériel médical Aix",
    "pharmacie orthopédie Parc de la Duranne",
  ],
  alternates: { canonical: "https://mmaixoise.fr/about" },
  openGraph: {
    title: "À Propos — Matériel Médical Aixoise",
    description: "Spécialiste en orthopédie et matériel médical au Parc de la Duranne depuis 2025.",
    url: "https://mmaixoise.fr/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 bg-sage-bg">
      <Navbar />
      
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div>
                <p className="text-medical-green font-black uppercase tracking-[0.5em] text-[10px] mb-6">Notre Histoire</p>
                <h1 className="text-6xl md:text-8xl font-black text-medical-accent leading-none uppercase tracking-tighter mb-10">
                   L&apos;ESPRIT <br />
                   DE <span className="text-medical-green">SOIN.</span>
                </h1>
                <p className="text-medical-accent/50 font-bold text-xl leading-relaxed mb-12">
                   Fondée à Aix-en-Provence au début de l&apos;année 2025, la Matériel Médical Aixoise est née d&apos;une volonté 
                   de moderniser l&apos;accès au matériel médical et à l&apos;orthopédie de pointe.
                </p>
                <div className="grid grid-cols-2 gap-8">
                   <div className="bg-white p-8 rounded-[2rem] border-2 border-black/5 shadow-xl">
                      <p className="text-4xl font-black text-medical-green mb-2 tracking-tighter">2025</p>
                      <p className="text-medical-accent/40 font-black text-[9px] uppercase tracking-widest">Fondation</p>
                   </div>
                   <div className="bg-white p-8 rounded-[2rem] border-2 border-black/5 shadow-xl">
                      <p className="text-4xl font-black text-medical-accent mb-2 tracking-tighter">SS26</p>
                      <p className="text-medical-accent/40 font-black text-[9px] uppercase tracking-widest">Expertise Scholl</p>
                   </div>
                </div>
             </div>
             <div className="relative">
                <div className="absolute -inset-10 bg-medical-green/10 rounded-full blur-3xl" />
                <div className="relative aspect-square rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl">
                   <Image src="/assets/centre.png" alt="Maison Médicale" fill className="object-cover" />
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-medical-accent text-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { icon: Target, title: "Mission", desc: "Offrir le meilleur de la technologie Scholl et du matériel médical pour l'autonomie de tous." },
                { icon: Users, title: "Équipe", desc: "Des experts formés continuellement aux nouvelles normes de santé et d'orthopédie." },
                { icon: Award, title: "Valeurs", desc: "Proximité, expertise technique et respect du patient au cœur d'Aix-en-Provence." }
              ].map((val, i) => (
                <div key={i} className="text-center group">
                   <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:bg-medical-green transition-all shadow-2xl">
                      <val.icon className="text-medical-green group-hover:text-medical-accent" size={40} />
                   </div>
                   <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">{val.title}</h3>
                   <p className="text-white/40 font-bold leading-relaxed">{val.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <div className="bg-white p-16 rounded-[4rem] border-4 border-medical-accent/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-medical-green/5 rounded-bl-[5rem]" />
              <ShieldCheck className="text-medical-green mx-auto mb-10" size={64} />
              <h2 className="text-4xl font-black text-medical-accent mb-8 uppercase tracking-tighter italic">Légalité & Transparence</h2>
              <div className="space-y-6 text-left max-w-sm mx-auto">
                 <div className="flex justify-between border-b border-black/5 pb-4">
                    <span className="text-medical-accent/40 font-black text-[10px] uppercase tracking-widest">Siren</span>
                    <span className="text-medical-accent font-black">{siteData.kbis.siren}</span>
                 </div>
                 <div className="flex justify-between border-b border-black/5 pb-4">
                    <span className="text-medical-accent/40 font-black text-[10px] uppercase tracking-widest">Gérante</span>
                    <span className="text-medical-accent font-black uppercase tracking-tighter">{siteData.founder}</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-medical-accent/40 font-black text-[10px] uppercase tracking-widest">Siège</span>
                    <span className="text-medical-accent font-black uppercase text-[10px] text-right">{siteData.address}</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

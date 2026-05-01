"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/site-data";
import { ArrowRight, Sparkles, Activity, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-sage-bg min-h-screen text-medical-accent selection:bg-neon-green selection:text-medical-accent">
      <Navbar />
      
      <Hero />

      {/* Quick Access to Catalogues */}
      <section className="py-32 relative overflow-hidden bg-medical-accent text-white">
         <div className="absolute top-0 left-0 w-full h-full bg-neon-green/5 blur-[150px] rounded-full" />
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-neon-green/30 rounded-full text-neon-green font-black text-[10px] uppercase tracking-[0.4em] mb-12"
            >
               <Sparkles size={16} />
               Explorez la Collection SS26
            </motion.div>
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 leading-tight">
               L&apos;intégralité des <br /> catalogues <span className="text-neon-green italic">est ici.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {siteData.catalogues.map((cat, i) => (
                  <Link key={cat.id} href="/catalogues" className="group">
                     <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/5 border-2 border-white/10 p-10 rounded-[3.5rem] hover:border-neon-green transition-all hover:bg-white/10 text-left h-full flex flex-col"
                     >
                        <div className="w-14 h-14 bg-neon-green/10 rounded-2xl flex items-center justify-center mb-10 text-neon-green group-hover:bg-neon-green group-hover:text-black transition-all">
                           <Activity size={28} />
                        </div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{cat.name}</h3>
                        <p className="text-white/40 font-bold text-sm mb-8 flex-1">{cat.description}</p>
                        <div className="flex items-center gap-2 text-neon-green font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                           Voir les modèles <ArrowRight size={14} />
                        </div>
                     </motion.div>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* Engagement Preview */}
      <section className="py-40 relative bg-sage-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute -inset-10 bg-neon-green/15 rounded-[6rem] blur-[100px]" />
             <div className="relative aspect-square bg-white rounded-[5rem] border-[12px] border-white shadow-2xl overflow-hidden group">
                <Image 
                  src="/assets/extracted/pharma-002.jpg" 
                  alt="Laboratory Scholl" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                />
             </div>
             <motion.div 
               animate={{ y: [0, -30, 0] }}
               transition={{ duration: 5, repeat: Infinity }}
               className="absolute -bottom-10 -right-10 bg-medical-accent p-10 rounded-[3rem] border-4 border-neon-green/20 shadow-2xl max-w-[280px]"
             >
                <div className="flex items-center gap-3 mb-4">
                   <ShieldCheck className="text-neon-green" size={32} />
                   <p className="text-white font-black text-xl tracking-tighter uppercase leading-none">BIOPRINT®</p>
                </div>
                <p className="text-white/40 font-bold text-[9px] uppercase tracking-widest leading-relaxed">
                   Technologie brevetée assurant un soutien anatomique optimal.
                </p>
             </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 text-neon-green font-black uppercase tracking-[0.5em] text-[10px] mb-10">
                <div className="w-12 h-px bg-neon-green" />
                DÉCOUVREZ NOTRE ENGAGEMENT
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-medical-accent mb-12 uppercase leading-[0.85] tracking-tighter">
              VOTRE SANTÉ <br />
              NOTRE <span className="text-neon-green">MISSION.</span>
            </h2>
            <p className="text-medical-accent/50 font-bold text-xl mb-12 leading-relaxed">
              La Maison Médicale Aixoise définit les nouveaux standards du soin et du confort au Parc de la Duranne.
            </p>
            <Link 
              href="/about"
              className="inline-flex items-center gap-4 bg-medical-accent text-white px-12 py-6 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.4em] hover:bg-neon-green hover:text-medical-accent transition-all shadow-2xl"
            >
               En savoir plus
               <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Services />

      <section className="py-24 bg-medical-accent text-center">
         <Link href="/catalogues">
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="inline-block bg-white/5 border-4 border-neon-green/30 p-10 sm:p-20 rounded-[3rem] sm:rounded-[5rem] hover:border-neon-green transition-all"
            >
               <h2 className="text-4xl sm:text-6xl md:text-9xl font-black text-white uppercase tracking-tighter mb-10">DÉCOUVREZ LE <br /><span className="text-neon-green neon-glow">CATALOGUE.</span></h2>
               <div className="flex items-center justify-center gap-4 text-neon-green font-black text-[10px] sm:text-xs uppercase tracking-[0.5em]">
                  Cliquez pour explorer 300+ modèles <ArrowRight size={24} />
               </div>
            </motion.div>
         </Link>
      </section>

      <Contact />

      <Footer />
    </main>
  );
}

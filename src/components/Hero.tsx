"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ArrowDown, Activity, ShieldCheck, Zap } from "lucide-react";
import { siteData } from "@/data/site-data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex lg:items-center justify-center pt-32 pb-20 overflow-hidden bg-sage-bg">
      {/* Background Neon Pulses */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-neon-green/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[150px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <span className="px-4 py-1.5 rounded-full bg-medical-accent text-neon-green text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] shadow-lg">
              Aix-en-Provence
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-ping" />
            <span className="text-medical-accent/40 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em]">
              La Duranne
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-6xl lg:text-[5rem] font-black text-medical-accent leading-[0.9] mb-10 sm:mb-12 tracking-tighter uppercase"
          >
            Matériel Médical <br />
            <span className="text-neon-green neon-glow">& Orthopédie.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-xl text-medical-accent/60 mb-10 sm:mb-12 max-w-lg leading-relaxed font-bold"
          >
            {siteData.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <button className="w-full sm:w-auto bg-medical-accent text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-neon-green hover:text-medical-accent transition-all neon-border shadow-2xl">
              Catalogues SS26
              <ChevronRight size={18} />
            </button>
            <button className="w-full sm:w-auto bg-white text-medical-accent border-2 border-medical-accent/5 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:border-neon-green transition-all flex items-center justify-center gap-3">
              <Zap className="text-neon-green" size={18} />
              Expertise
            </button>
          </motion.div>

          <div className="mt-12 sm:mt-20 grid grid-cols-2 sm:flex sm:gap-12 border-t border-medical-accent/10 pt-10 sm:pt-12 gap-y-8">
             <div>
                <p className="text-3xl sm:text-4xl font-black text-medical-accent leading-none mb-2 tracking-tighter">939</p>
                <p className="text-medical-accent/30 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">Siren Immat</p>
             </div>
             <div>
                <p className="text-3xl sm:text-4xl font-black text-medical-accent leading-none mb-2 tracking-tighter">SS26</p>
                <p className="text-medical-accent/30 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">Saison Scholl</p>
             </div>
             <div className="col-span-2 sm:col-span-1">
                <p className="text-3xl sm:text-4xl font-black text-neon-green leading-none mb-2 tracking-tighter">100%</p>
                <p className="text-medical-accent/30 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">Engagement</p>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative lg:mt-0 mt-12"
        >
          <div className="absolute -inset-6 bg-neon-green/20 rounded-[4rem] blur-3xl animate-pulse" />
          <div className="relative aspect-[4/5] rounded-[3rem] sm:rounded-[3.5rem] overflow-hidden border-8 border-white shadow-[0_40px_100px_-20px_rgba(44,62,80,0.2)] group">
            <Image
              src="/assets/centre.png"
              alt="Façade de la Maison Médicale Aixoise au Parc de la Duranne, Aix-en-Provence"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-medical-accent/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 glass-sage p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-neon-green/30">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 bg-medical-accent rounded-xl flex items-center justify-center shadow-lg">
                      <ShieldCheck className="text-neon-green" size={24} />
                   </div>
                   <p className="text-medical-accent font-black text-lg sm:text-xl tracking-tighter">CENTRE EXPERT</p>
                </div>
                <p className="text-medical-accent/60 font-bold text-[10px] sm:text-xs uppercase tracking-widest leading-loose">
                   Maison Médicale Aixoise : Votre référence santé au Parc de la Duranne.
                </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neon-green opacity-50"
      >
        <ArrowDown size={40} />
      </motion.div>
    </section>
  );
}

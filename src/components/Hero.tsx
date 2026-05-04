"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ArrowDown, Activity, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { siteData } from "@/data/site-data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex lg:items-center justify-center pt-32 pb-20 overflow-hidden bg-sage-bg">
      {/* Background Neon Pulses */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-medical-green/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-medical-green/5 rounded-full blur-[150px] animate-pulse delay-1000" />

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
            <span className="px-4 py-1.5 rounded-full bg-medical-accent text-medical-green text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] shadow-lg">
              Aix-en-Provence
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-medical-green animate-ping" />
            <span className="text-medical-accent/40 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em]">
              La Duranne
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-black text-medical-accent leading-[0.88] mb-10 sm:mb-12 tracking-tighter uppercase"
          >
            <span className="block text-3xl sm:text-4xl lg:text-5xl">Vente &amp; location de</span>
            <span className="block text-4xl sm:text-6xl lg:text-7xl text-medical-green neon-glow">matériel médical</span>
            <span className="block text-3xl sm:text-5xl lg:text-6xl">&amp; orthopédique.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-medical-accent font-bold mb-10 max-w-2xl leading-relaxed"
          >
            La Maison Médicale Aixoise propose la vente et la location de matériel médical 
            et orthopédique pour particuliers et professionnels de santé.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mb-12"
          >
            <p className="text-medical-green font-black text-[10px] uppercase tracking-[0.4em] mb-6">Nos Équipements Médicaux</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 max-w-2xl">
              {(siteData as any).equipmentCategories.map((cat: any, i: number) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-medical-green/20 flex items-center justify-center text-xl group-hover:bg-medical-green group-hover:scale-110 transition-all duration-300">
                    {cat.emoji}
                  </div>
                  <div>
                    <p className="text-medical-accent font-black text-sm uppercase tracking-tight mb-1">{cat.title}</p>
                    <p className="text-medical-accent/40 font-bold text-[10px] leading-tight italic">{cat.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Link href="/catalogues" className="w-full sm:w-auto">
              <button className="w-full bg-medical-accent text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-medical-green hover:text-medical-accent transition-all neon-border shadow-2xl">
                Explorer les Catalogues
                <ChevronRight size={18} />
              </button>
            </Link>
            <Link href="#services" className="w-full sm:w-auto">
              <button className="w-full bg-white text-medical-accent border-2 border-medical-accent/5 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:border-medical-green transition-all flex items-center justify-center gap-3">
                <Zap className="text-medical-green" size={18} />
                Location & Services
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative lg:mt-0 mt-12"
        >
          <div className="absolute -inset-6 bg-medical-green/20 rounded-[4rem] blur-3xl animate-pulse" />
          <div className="relative aspect-[4/5] rounded-[3rem] sm:rounded-[3.5rem] overflow-hidden border-8 border-white shadow-[0_40px_100px_-20px_rgba(44,62,80,0.2)] group">
            <Image
              src="/assets/centre.png"
              alt="Façade de la Matériel Médical Aixoise au Parc de la Duranne, Aix-en-Provence"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-medical-accent/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 glass-sage p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-medical-green/30">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 bg-medical-accent rounded-xl flex items-center justify-center shadow-lg">
                      <ShieldCheck className="text-medical-green" size={24} />
                   </div>
                   <p className="text-medical-accent font-black text-lg sm:text-xl tracking-tighter">CENTRE EXPERT</p>
                </div>
                <p className="text-medical-accent/60 font-bold text-[10px] sm:text-xs uppercase tracking-widest leading-loose">
                   Matériel Médical Aixoise : Votre référence santé au Parc de la Duranne.
                </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-medical-green opacity-50"
      >
        <ArrowDown size={40} />
      </motion.div>
    </section>
  );
}

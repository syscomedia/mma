"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/site-data";
import { Activity } from "lucide-react";

export function Marques() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-medical-green font-black uppercase tracking-[0.5em] text-[10px] mb-8"
          >
            <div className="w-12 h-px bg-medical-green" />
            NOS PARTENAIRES & MARQUES
            <div className="w-12 h-px bg-medical-green" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-medical-accent uppercase tracking-tighter leading-none"
          >
            L&apos;EXCELLENCE <br /> <span className="text-medical-green italic">PARTAGÉE.</span>
          </motion.h2>
        </div>

        <div className="space-y-24">
          {siteData.brandCategories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center gap-6 mb-12">
                <div className="w-12 h-12 bg-medical-accent rounded-2xl flex items-center justify-center text-medical-green shadow-xl">
                  <Activity size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-medical-accent uppercase tracking-tight">
                  {category.name}
                </h3>
                <div className="flex-1 h-px bg-medical-accent/5" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.brands.map((brand, i) => (
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group relative"
                  >
                    <div className="h-28 bg-sage-bg rounded-[2rem] border-2 border-medical-accent/5 hover:border-medical-green transition-all flex items-center justify-center p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-500">
                      {brand.logo ? (
                        <div className="relative w-full h-full">
                          <img
                            src={brand.logo}
                            alt={`Logo ${brand.name}`}
                            className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500 w-full h-full"
                          />
                        </div>
                      ) : (
                        <span className="text-medical-accent font-black text-xs uppercase tracking-widest leading-tight text-center group-hover:text-medical-green transition-colors">
                          {brand.name}
                        </span>
                      )}
                    </div>
                    <p className="text-center text-[9px] font-black text-medical-accent/30 uppercase tracking-widest mt-3 group-hover:text-medical-green transition-colors">
                      {brand.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-medical-accent rounded-[4rem] text-center border-4 border-medical-green/10">
          <p className="text-white/40 font-bold text-xs sm:text-sm uppercase tracking-[0.4em] max-w-3xl mx-auto leading-relaxed">
            Nous collaborons avec les leaders mondiaux de l&apos;orthopédie et du matériel médical pour vous garantir des solutions certifiées, durables et innovantes.
          </p>
        </div>
      </div>
    </section>
  );
}

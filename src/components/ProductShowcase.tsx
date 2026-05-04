"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { siteData } from "@/data/site-data";

export function ProductShowcase() {
  return (
    <section id="catalogues" className="py-32 bg-sage-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div>
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-3 text-medical-green font-black uppercase tracking-[0.4em] text-[10px] mb-6"
            >
               <Sparkles size={16} />
               Collections SS26
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-[7rem] font-black text-medical-accent leading-[0.85] tracking-tighter uppercase"
            >
              NOS <br />
              <span className="text-medical-green">CATALOGUES.</span>
            </motion.h2>
          </div>
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="bg-medical-accent text-white p-12 rounded-[4rem] border-4 border-medical-green/30 max-w-sm relative shadow-2xl"
          >
             <p className="text-medical-green font-black text-xs uppercase tracking-[0.3em] mb-6 italic">Innovation Hub</p>
             <p className="text-white/60 font-bold text-sm leading-relaxed mb-8">
                Parcourez l&apos;intégralité des modèles Scholl 2026. Technologies brevetées et designs exclusifs.
             </p>
             <div className="flex items-center gap-3 text-medical-green font-black text-[10px] uppercase tracking-widest">
                <CheckCircle2 size={16} />
                Accès PDF Illimité
             </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {siteData.catalogues.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[5rem] overflow-hidden border-2 border-medical-accent/5 hover:border-medical-green transition-all shadow-2xl flex flex-col md:flex-row min-h-[500px]"
            >
              <div className="relative w-full md:w-5/12 overflow-hidden bg-sage-dark">
                <Image
                  src={category.products[0]?.image || "/assets/placeholder.jpg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-8 left-8">
                   <div className="w-14 h-14 bg-medical-accent rounded-2xl flex items-center justify-center text-medical-green font-black text-xl shadow-xl">
                      0{index + 1}
                   </div>
                </div>
              </div>
              
              <div className="p-12 md:w-7/12 flex flex-col justify-center">
                <p className="text-medical-green font-black text-[10px] uppercase tracking-[0.4em] mb-4 italic">
                   Scholl SS26
                </p>
                <h3 className="text-4xl font-black text-medical-accent mb-8 uppercase tracking-tighter leading-none group-hover:text-medical-green transition-colors">
                    {category.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-12">
                   {category.products.slice(0, 3).map((model) => (
                      <div key={model.name} className="flex flex-col mb-4 w-full border-l-4 border-medical-green/20 pl-4">
                         <span className="text-medical-accent font-black text-xs uppercase tracking-widest">{model.name}</span>
                         <span className="text-medical-accent/40 font-bold text-[9px] uppercase tracking-widest mt-1">{model.colors}</span>
                      </div>
                   ))}
                </div>

                <div className="flex gap-4">
                    <a 
                      href={`/assets/BJBR-SCHOLL SS26 - ${category.id.toUpperCase().replace('-', ' ')} - NO PRICE.pdf`} 
                      target="_blank" 
                      className="flex-1 bg-medical-accent text-white px-10 py-6 rounded-[2.5rem] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-medical-green hover:text-medical-accent transition-all shadow-xl"
                    >
                      <Download size={20} />
                      VOIR PDF
                    </a>
                    <div className="w-20 h-20 bg-sage-bg rounded-[2.5rem] flex items-center justify-center text-medical-accent/20 group-hover:text-medical-green transition-colors border-2 border-transparent group-hover:border-medical-green/20">
                       <ArrowUpRight size={32} />
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, Sparkles, Search, SlidersHorizontal, Info, CheckCircle2 } from "lucide-react";
import { siteData } from "@/data/site-data";
import { cn } from "@/lib/utils";

export function FullCatalog() {
  const [activeTab, setActiveTab] = useState(siteData.catalogues[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCatalogues = siteData.catalogues.map(cat => ({
    ...cat,
    products: cat.products.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.colors.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));

  const activeCatalog = filteredCatalogues.find(cat => cat.id === activeTab) || filteredCatalogues[0];

  return (
    <section id="catalogues" className="py-32 bg-sage-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-3 text-neon-green font-black uppercase tracking-[0.4em] text-[10px] mb-6"
            >
               <Sparkles size={16} />
               Catalogue Intégral SS26
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl md:text-[6rem] font-black text-medical-accent leading-[0.85] tracking-tighter uppercase"
            >
              EXPLOREZ LES <br />
              <span className="text-neon-green">COLLECTIONS.</span>
            </motion.h2>
          </div>

          <div className="w-full lg:w-96">
            <div className="relative group">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-medical-accent/20 group-focus-within:text-neon-green transition-colors" size={20} />
               <input 
                  type="text" 
                  placeholder="Modèle, technologie..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border-4 border-medical-accent/5 rounded-[2rem] py-5 sm:py-6 pl-14 sm:pl-16 pr-6 sm:pr-8 text-medical-accent font-bold focus:border-neon-green outline-none transition-all placeholder:text-medical-accent/10 shadow-xl text-sm sm:text-base"
               />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-16 overflow-x-auto pb-4">
          {siteData.catalogues.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all whitespace-nowrap",
                activeTab === cat.id 
                  ? "bg-medical-accent text-neon-green border-4 border-neon-green shadow-[0_20px_40px_-10px_rgba(57,255,20,0.3)]" 
                  : "bg-white text-medical-accent/40 border-4 border-transparent hover:border-medical-accent/10"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mb-12 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <SlidersHorizontal className="text-neon-green" size={20} />
              <p className="text-medical-accent/40 font-black text-[10px] uppercase tracking-widest">
                {activeCatalog.products.length} Modèles affichés dans {activeCatalog.name}
              </p>
           </div>
           <p className="hidden md:block text-medical-accent/20 font-bold text-xs italic">
              Données issues directement des catalogues Scholl SS26 Officiels
           </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {activeCatalog.products.map((product, i) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-[4rem] border-4 border-medical-accent/5 hover:border-neon-green transition-all shadow-2xl group overflow-hidden flex flex-col"
              >
                <div className="relative aspect-square bg-sage-dark overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-medical-accent/5 group-hover:bg-transparent transition-all" />
                  <div className="absolute top-8 left-8 flex gap-2">
                     <span className="px-4 py-2 bg-black text-neon-green rounded-full text-[9px] font-black uppercase tracking-widest shadow-2xl">
                        {product.tech}
                     </span>
                  </div>
                </div>

                <div className="p-8 sm:p-10 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-6">
                     <h3 className="text-xl sm:text-2xl font-black text-medical-accent group-hover:text-neon-green transition-colors leading-none uppercase">
                        {product.name}
                     </h3>
                     <Info className="text-medical-accent/10" size={20} />
                  </div>
                  
                  <div className="space-y-4 mb-10 flex-1">
                     <div className="flex flex-col">
                        <span className="text-[9px] font-black text-medical-accent/20 uppercase tracking-widest mb-1">Matière</span>
                        <span className="text-[11px] sm:text-xs font-bold text-medical-accent/60 uppercase">{product.material}</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[9px] font-black text-medical-accent/20 uppercase tracking-widest mb-1">Coloris Disponibles</span>
                        <span className="text-[11px] sm:text-xs font-bold text-medical-accent/60 uppercase">{product.colors}</span>
                     </div>
                  </div>

                  <button className="w-full bg-sage-bg text-medical-accent py-4 sm:py-5 rounded-[1.5rem] sm:rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] hover:bg-neon-green hover:shadow-[0_15px_30px_-10px_rgba(57,255,20,0.5)] transition-all flex items-center justify-center gap-2 group/btn">
                     <CheckCircle2 className="text-neon-green group-hover/btn:text-medical-accent" size={16} />
                     Réserver un Essai
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Footer of Catalog */}
        <div className="mt-32 p-12 bg-medical-accent rounded-[4rem] border-4 border-neon-green/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-green/5 rounded-full blur-3xl" />
            <div className="relative z-10 text-center lg:text-left">
                <p className="text-neon-green font-black text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4">Besoin du catalogue complet ?</p>
                <h4 className="text-white font-black text-2xl sm:text-3xl uppercase tracking-tighter">Téléchargez les PDF originaux par catégorie</h4>
            </div>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
               {siteData.catalogues.map(cat => (
                  <a 
                    key={cat.id} 
                    href={`/assets/BJBR-SCHOLL SS26 - ${cat.id.toUpperCase().replace('-', ' ')} - NO PRICE.pdf`} // Construct URL
                    target="_blank"
                    className="bg-white/5 border-2 border-white/10 hover:border-neon-green px-8 py-4 rounded-full text-white text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 group/link"
                  >
                     <Download size={14} className="text-neon-green" />
                     {cat.name}
                  </a>
               ))}
            </div>
        </div>
      </div>
    </section>
  );
}

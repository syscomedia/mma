"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, Sparkles, Search, Info, CheckCircle2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { siteData } from "@/data/site-data";
import { cn } from "@/lib/utils";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getProductSlug } from "@/lib/slug";

const brandLogos: Record<string, string> = {
  Scholl: "/assets/logos/scholl.png",
  Gibaud: "/assets/logos/gibaud-test.svg",
  Thuasne: "/assets/logos/thuasne.png",
  Cizeta: "/assets/logos/cizeta.png",
  Systam: "/assets/logos/systam-test.svg",
  Anios: "/assets/logos/anios.png",
  Hartmann: "/assets/logos/hartmann.svg",
  Delical: "/assets/logos/delical.svg",
  "Nestlé Health Science": "/assets/logos/nestle.svg",
};

function BrandBadge({ brand }: { brand?: string }) {
  if (!brand) return null;
  const logo = brandLogos[brand];
  if (logo) {
    return (
      <div className="px-3 py-1.5 bg-white rounded-full shadow-xl border border-medical-green/20 flex items-center justify-center" style={{ minWidth: 64, height: 32 }}>
        <img src={logo} alt={brand} className="object-contain" style={{ width: 'auto', height: '20px' }} />
      </div>
    );
  }
  return (
    <div className="px-4 py-2 bg-white text-medical-accent rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl border-2 border-medical-green/20">
      {brand}
    </div>
  );
}

export function FullCatalog() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat");
  
  const medicalCatalogues = siteData.catalogues.filter(cat => cat.id === "equipements-medicaux");
  const schollCatalogues = siteData.catalogues.filter(cat => cat.id !== "equipements-medicaux");

  const [activeSchollTab, setActiveSchollTab] = useState(
    initialCat && schollCatalogues.some(c => c.id === initialCat) 
      ? initialCat 
      : schollCatalogues[0].id
  );
  
  const schollSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialCat && schollCatalogues.some(c => c.id === initialCat)) {
      setTimeout(() => {
        schollSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  }, [initialCat, schollCatalogues]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filterProducts = (products: any[]) => products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (p.brand?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    p.tech.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.colors.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeSchollCatalog = schollCatalogues.find(cat => cat.id === activeSchollTab) || schollCatalogues[0];

  const nextImage = () => {
    if (!selectedProduct?.gallery) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.gallery.length);
  };

  const prevImage = () => {
    if (!selectedProduct?.gallery) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProduct.gallery.length) % selectedProduct.gallery.length);
  };

  return (
    <section id="catalogues" className="py-32 bg-sage-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-medical-green font-black uppercase tracking-[0.4em] text-[10px] mb-6"
            >
              <Sparkles size={16} />
              Catalogue Officiel 2025-2026
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl md:text-[6rem] font-black text-medical-accent leading-[0.85] tracking-tighter uppercase"
            >
              ÉQUIPEMENTS & <br />
              <span className="text-medical-green">SOINS MÉDICAUX.</span>
            </motion.h2>
          </div>

          <div className="w-full lg:w-96">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-medical-accent/20 group-focus-within:text-medical-green transition-colors" size={20} />
              <input
                type="text"
                placeholder="Rechercher un produit, une marque..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-4 border-medical-accent/5 rounded-[2rem] py-5 sm:py-6 pl-14 sm:pl-16 pr-6 sm:pr-8 text-medical-accent font-bold focus:border-medical-green outline-none transition-all placeholder:text-medical-accent/10 shadow-xl text-sm sm:text-base"
              />
            </div>
          </div>
        </div>

        {/* Medical Equipment Section */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence>
              {filterProducts(medicalCatalogues[0].products).map((product, i) => (
                <motion.div
                  key={product.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex flex-col"
                >
                  <Link
                    href={`/produit/${getProductSlug(product.name)}`}
                    className="bg-white rounded-[4rem] border-4 border-medical-accent/5 hover:border-medical-green transition-all shadow-2xl group overflow-hidden flex flex-col cursor-pointer h-full"
                  >
                    <div className="relative aspect-square bg-sage-dark overflow-hidden w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-medical-accent/5 group-hover:bg-transparent transition-all" />

                      {/* Tech Badge */}
                      <div className="absolute top-8 left-8 flex flex-col gap-2">
                        <span className="px-4 py-1.5 bg-black text-medical-green rounded-full text-[8px] font-black uppercase tracking-widest shadow-2xl w-fit">
                          {product.tech}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 sm:p-10 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col gap-2">
                          {brandLogos[product.brand] ? (
                            <img src={brandLogos[product.brand]} alt={product.brand} className="object-contain" style={{ width: 'auto', height: '20px' }} />
                          ) : (
                            <span className="text-[10px] font-black text-medical-green uppercase tracking-widest">{product.brand}</span>
                          )}
                          <h3 className="text-xl sm:text-2xl font-black text-medical-accent group-hover:text-medical-green transition-colors leading-tight uppercase">
                            {product.name}
                          </h3>
                        </div>
                        <Info className="text-medical-accent/10" size={20} />
                      </div>

                      <div className="space-y-4 mb-10 flex-1">
                        <div className="flex flex-col">
                          <span className="text-[9px] font-black text-medical-accent/20 uppercase tracking-widest mb-1">Matière / Type</span>
                          <span className="text-[11px] sm:text-xs font-bold text-medical-accent/60 uppercase">{product.material}</span>
                        </div>
                      </div>

                      <div className="w-full bg-sage-bg text-medical-accent py-4 sm:py-5 rounded-[1.5rem] sm:rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] group-hover:bg-medical-green hover:shadow-[0_15px_30px_-10px_rgba(57,255,20,0.5)] transition-all flex items-center justify-center gap-2 group/btn">
                        <CheckCircle2 className="text-medical-green group-hover/btn:text-medical-accent" size={16} />
                        Voir Détails
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Scholl Section */}
        <div ref={schollSectionRef} className="mt-48 pt-32 border-t-4 border-medical-accent/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              {/* <p className="text-medical-green font-black uppercase tracking-[0.4em] text-[10px] mb-4">Partenaire Exclusif</p> */}
              {/* <h3 className="text-4xl md:text-6xl font-black text-medical-accent uppercase tracking-tighter">
                COLLECTIONS <span className="text-medical-green">SCHOLL SS26</span>
              </h3> */}
            </div>

            {/* Tabs for Scholl */}
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-4">
              {schollCatalogues.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveSchollTab(cat.id)}
                  className={cn(
                    "px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest transition-all whitespace-nowrap",
                    activeSchollTab === cat.id
                      ? "bg-medical-accent text-medical-green border-2 border-medical-green shadow-xl"
                      : "bg-white text-medical-accent/40 border-2 border-transparent hover:border-medical-accent/10"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filterProducts(activeSchollCatalog.products).map((product, i) => (
                <motion.div
                  key={product.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => {
                    setSelectedProduct(product);
                    setCurrentImageIndex(0);
                  }}
                  className="bg-white rounded-[3rem] border-2 border-medical-accent/5 hover:border-medical-green transition-all shadow-xl group overflow-hidden flex flex-col cursor-pointer"
                >
                  <div className="relative aspect-[4/5] bg-white overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-6 right-6">
                      <BrandBadge brand={product.brand} />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="text-lg font-black text-medical-accent uppercase leading-tight mb-2 group-hover:text-medical-green transition-colors">
                      {product.name}
                    </h4>
                    <span className="text-[9px] font-bold text-medical-accent/40 uppercase tracking-widest">{product.tech}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-medical-accent/90 backdrop-blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-6xl bg-white rounded-[3rem] sm:rounded-[5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 sm:top-10 sm:right-10 z-50 p-4 bg-sage-bg rounded-full text-medical-accent hover:bg-medical-green transition-all"
                >
                  <X size={24} />
                </button>

                {/* Left: Gallery */}
                <div className={cn(
                  "w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full",
                  selectedProduct.brand === "Scholl" ? "bg-white" : "bg-sage-dark"
                )}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative w-full h-full aspect-square lg:aspect-auto"
                    >
                      <Image
                        src={selectedProduct.gallery?.[currentImageIndex] || selectedProduct.image}
                        alt={selectedProduct.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain p-8 sm:p-12"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all"
                      >
                        <ChevronRight size={24} />
                      </button>
                      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProduct.gallery.map((_: any, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={cn(
                              "w-2 h-2 rounded-full transition-all",
                              currentImageIndex === idx ? "w-8 bg-medical-green" : "bg-white/30"
                            )}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Right: Details */}
                <div className="w-full lg:w-1/2 p-8 sm:p-16 lg:p-24 overflow-y-auto">
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-8 flex-wrap">
                      <BrandBadge brand={selectedProduct.brand} />
                      <span className="px-6 py-2 bg-medical-green text-black rounded-full text-[10px] font-black uppercase tracking-widest inline-block">
                        {selectedProduct.tech}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-medical-accent uppercase tracking-tighter leading-none mb-4">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-medical-accent/40 font-bold uppercase tracking-widest text-xs">
                      {siteData.catalogues.find(cat => cat.products.some(p => p.name === selectedProduct.name))?.name}
                    </p>
                  </div>

                  <div className="space-y-12 mb-16">
                    <div>
                      <h4 className="text-[10px] font-black text-medical-green uppercase tracking-[0.3em] mb-4">Description Détaillée</h4>
                      <p className="text-medical-accent/70 font-medium leading-relaxed text-sm sm:text-base italic">
                        {selectedProduct.longDescription || "Ce produit est issu de notre sélection premium de dispositifs médicaux et de confort. Pour plus d'informations techniques, n'hésitez pas à nous contacter."}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <span className="text-[9px] font-black text-medical-accent/20 uppercase tracking-widest mb-1 block">Matériaux</span>
                        <span className="text-xs sm:text-sm font-bold text-medical-accent/80 uppercase">{selectedProduct.material}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-medical-accent/20 uppercase tracking-widest mb-1 block">Options</span>
                        <span className="text-xs sm:text-sm font-bold text-medical-accent/80 uppercase">{selectedProduct.colors}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-medical-accent text-medical-green py-5 sm:py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:shadow-[0_20px_40px_-10px_rgba(57,255,20,0.3)] transition-all flex items-center justify-center gap-3">
                      <CheckCircle2 size={20} />
                      Réserver en Magasin
                    </button>
                    <a
                      href={`mailto:contact@mmaixoise.fr?subject=Demande d'information: ${selectedProduct.name}`}
                      className="flex-1 bg-sage-bg text-medical-accent py-5 sm:py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-medical-accent hover:text-white transition-all flex items-center justify-center gap-3"
                    >
                      Nous Contacter
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Global Footer of Catalog */}
    
      </div>
    </section>
  );
}

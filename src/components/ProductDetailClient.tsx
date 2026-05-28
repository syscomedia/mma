"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  CheckCircle2, 
  FileText, 
  Mail, 
  Phone, 
  User, 
  MessageSquare, 
  ChevronRight, 
  ArrowLeft,
  ArrowRight,
  Download,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductDetail } from "@/lib/slug";

interface ProductDetailClientProps {
  product: ProductDetail;
  relatedProducts: Array<{ name: string; slug: string; brand: string; image: string; tech: string }>;
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `Bonjour, je souhaite obtenir un devis et plus d'informations concernant le produit "${product.name}". Merci.`,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const images = product.gallery && product.gallery.length > 0 
    ? product.gallery 
    : [product.image || "/assets/scraped/placeholder.jpg"];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Back to catalog & Breadcrumbs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
        <a 
          href="/products" 
          className="inline-flex items-center gap-2 text-medical-accent/60 hover:text-medical-accent text-sm font-black uppercase tracking-widest transition-colors"
        >
          <ArrowLeft size={16} />
          Retour au Catalogue
        </a>
        
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-medical-accent/40">
          <a href="/" className="hover:text-medical-accent transition-colors">Accueil</a>
          <ChevronRight size={12} />
          <a href="/products" className="hover:text-medical-accent transition-colors">Produits</a>
          <ChevronRight size={12} />
          <span className="text-medical-green">{product.name}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 mb-20">
        {/* Left Column: Image Gallery (5 cols on lg) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="relative aspect-square w-full bg-sage-dark rounded-[3rem] overflow-hidden border-4 border-medical-accent/5 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full"
              >
                <Image
                  src={images[activeImageIndex]}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-medical-accent/5 pointer-events-none" />
            
            {/* Gallery Navigation Arrows (if multiple images) */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={() => setActiveImageIndex(prev => (prev - 1 + images.length) % images.length)}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/95 text-medical-accent hover:bg-medical-green hover:text-white transition-all shadow-lg flex items-center justify-center cursor-pointer"
                >
                  <ArrowLeft size={18} />
                </button>
                <button 
                  onClick={() => setActiveImageIndex(prev => (prev + 1) % images.length)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/95 text-medical-accent hover:bg-medical-green hover:text-white transition-all shadow-lg flex items-center justify-center cursor-pointer"
                >
                  <ArrowRight size={18} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-medical-accent/10">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-24 h-24 rounded-[1.5rem] overflow-hidden border-3 transition-all shrink-0 ${
                    idx === activeImageIndex 
                      ? "border-medical-green scale-105 shadow-md" 
                      : "border-medical-accent/10 hover:border-medical-accent/40"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Title, Specifications & Inquiry Form (6 cols on lg) */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-black text-medical-green rounded-full text-[9px] font-black uppercase tracking-widest shadow-md">
                {product.tech || "Innovation"}
              </span>
              {product.brand && (
                <span className="px-4 py-1.5 bg-medical-accent/5 text-medical-accent rounded-full text-[9px] font-black uppercase tracking-widest border border-medical-accent/10">
                  Marque: {product.brand}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-medical-accent leading-none tracking-tighter uppercase mb-6">
              {product.name}
            </h1>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-4 p-6 bg-white rounded-[2rem] border border-medical-accent/5 shadow-xl mb-8">
              <div>
                <span className="text-[9px] font-black text-medical-accent/40 uppercase tracking-widest block mb-1">Matériau / Type</span>
                <span className="text-sm font-bold text-medical-accent uppercase">{product.material || "Matériel médical"}</span>
              </div>
              <div>
                <span className="text-[9px] font-black text-medical-accent/40 uppercase tracking-widest block mb-1">Coloris</span>
                <span className="text-sm font-bold text-medical-accent uppercase">{product.colors || "Standard"}</span>
              </div>
            </div>
          </div>

          {/* Glassmorphic Inquiry Form */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[3rem] border-4 border-medical-accent/5 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-medical-green/5 rounded-full blur-3xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  key="inquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-5"
                >
                  <div>
                    <h3 className="text-xl font-black text-medical-accent uppercase tracking-tight mb-2">Demande d'informations</h3>
                    <p className="text-xs text-medical-accent/60 font-medium">Obtenez un devis gratuit ou des conseils personnalisés sous 24h.</p>
                  </div>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-medical-accent/40" size={16} />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Nom complet"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-6 py-4 bg-sage-bg/50 border-2 border-medical-accent/5 rounded-[1.5rem] text-sm text-medical-accent font-semibold placeholder-medical-accent/40 focus:border-medical-green focus:bg-white outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-medical-accent/40" size={16} />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Adresse email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-6 py-4 bg-sage-bg/50 border-2 border-medical-accent/5 rounded-[1.5rem] text-sm text-medical-accent font-semibold placeholder-medical-accent/40 focus:border-medical-green focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-medical-accent/40" size={16} />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Téléphone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-6 py-4 bg-sage-bg/50 border-2 border-medical-accent/5 rounded-[1.5rem] text-sm text-medical-accent font-semibold placeholder-medical-accent/40 focus:border-medical-green focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-5 text-medical-accent/40" size={16} />
                    <textarea
                      name="message"
                      required
                      rows={3}
                      placeholder="Votre message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-6 py-4 bg-sage-bg/50 border-2 border-medical-accent/5 rounded-[1.5rem] text-sm text-medical-accent font-semibold placeholder-medical-accent/40 focus:border-medical-green focus:bg-white outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-medical-accent text-white py-4.5 sm:py-5 rounded-[1.5rem] sm:rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-medical-green hover:shadow-[0_15px_30px_-10px_rgba(57,255,20,0.5)] transition-all flex items-center justify-center gap-2 group/btn cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <CheckCircle2 className="text-medical-green group-hover/btn:text-white" size={16} />
                        Envoyer ma demande
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <div className="w-20 h-20 bg-medical-green/10 text-medical-green rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-medical-accent uppercase tracking-tight mb-3">Demande Envoyée !</h3>
                  <p className="text-sm text-medical-accent/60 font-medium max-w-sm mb-6 leading-relaxed">
                    Merci pour votre intérêt. Notre équipe de conseillers à Aix-en-Provence étudie votre demande et vous contactera dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-3 border-2 border-medical-accent/10 rounded-[1.2rem] text-xs font-black uppercase tracking-widest text-medical-accent/60 hover:text-medical-accent hover:border-medical-accent transition-all cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Tabs and Tech Specs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 border-t border-medical-accent/10 pt-16">
        <div className="lg:col-span-8 flex flex-col gap-8">
          <h2 className="text-2xl sm:text-3xl font-black text-medical-accent uppercase tracking-tight">Description du produit</h2>
          
          {product.description_html ? (
            <div 
              className="prose prose-slate max-w-none text-medical-accent/80 font-medium leading-relaxed
                [&>h2]:text-xl [&>h2]:font-black [&>h2]:uppercase [&>h2]:text-medical-accent [&>h2]:mt-6 [&>h2]:mb-4
                [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-medical-accent [&>h3]:mt-6 [&>h3]:mb-3
                [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-1
                [&>strong]:font-black [&>strong]:text-medical-accent"
              dangerouslySetInnerHTML={{ __html: product.description_html }}
            />
          ) : (
            <p className="text-medical-accent/60 font-medium italic">
              {product.longDescription || "Aucune description détaillée disponible pour le moment."}
            </p>
          )}
        </div>

        {/* Technical datasheets (PDFs) */}
        {product.pdf_datasheets && product.pdf_datasheets.length > 0 && (
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-8 bg-white border border-medical-accent/5 shadow-xl rounded-[2.5rem]">
              <h3 className="text-lg font-black text-medical-accent uppercase tracking-tight mb-4 flex items-center gap-2">
                <FileText className="text-medical-green" size={20} />
                Documents utiles
              </h3>
              <p className="text-xs text-medical-accent/60 font-medium mb-6">
                Téléchargez la documentation technique et commerciale officielle du fabricant.
              </p>
              
              <div className="flex flex-col gap-4">
                {product.pdf_datasheets.map((pdf, idx) => (
                  <a
                    key={idx}
                    href={pdf.path}
                    download
                    className="flex items-center justify-between p-4 bg-sage-bg/30 hover:bg-medical-green/10 rounded-[1.5rem] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 text-red-600 rounded-[1rem] flex items-center justify-center shrink-0">
                        <FileText size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-medical-accent truncate max-w-[150px] sm:max-w-[200px]">
                          {pdf.name}
                        </span>
                        <span className="text-[9px] font-black text-medical-accent/40 uppercase tracking-widest">
                          PDF datasheet
                        </span>
                      </div>
                    </div>
                    <Download className="text-medical-accent/30 group-hover:text-medical-green transition-colors" size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-medical-accent/10 pt-16">
          <h2 className="text-3xl font-black text-medical-accent uppercase tracking-tight text-center mb-12">
            Produits <span className="text-medical-green">Similaires</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p, idx) => (
              <a
                href={`/produit/${p.slug}`}
                key={idx}
                className="bg-white rounded-[3rem] border-4 border-medical-accent/5 hover:border-medical-green transition-all shadow-xl group overflow-hidden flex flex-col"
              >
                <div className="relative aspect-square bg-sage-dark overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-medical-accent/5 group-hover:bg-transparent transition-all" />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 bg-black text-medical-green rounded-full text-[8px] font-black uppercase tracking-widest shadow-md">
                      {p.tech}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-[9px] font-black text-medical-green uppercase tracking-widest mb-2 block">{p.brand}</span>
                  <h3 className="text-lg font-black text-medical-accent group-hover:text-medical-green transition-colors leading-tight uppercase flex-1">
                    {p.name}
                  </h3>
                  <div className="mt-4 flex items-center justify-end text-xs font-black uppercase tracking-widest text-medical-accent/40 group-hover:text-medical-green transition-colors gap-1">
                    Voir la fiche
                    <ChevronRight size={14} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Marques } from "@/components/Marques";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/site-data";
import { ArrowRight, Sparkles, Activity, ShieldCheck, ShoppingCart, Truck, CreditCard, Heart, CheckCircle2, Leaf } from "lucide-react";
import Image from "next/image";

export default function Home() {
   return (
      <main className="bg-sage-bg min-h-screen text-medical-accent selection:bg-medical-green selection:text-medical-accent">
         {/* MedicalBusiness schema */}
         <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
               "@context": "https://schema.org",
               "@type": ["MedicalBusiness", "LocalBusiness"],
               "name": "Matériel Médical Aixoise",
               "alternateName": "MMA Aix-en-Provence",
               "image": "https://maisonmedicaleaixoise.com/assets/centre.png",
               "@id": "https://maisonmedicaleaixoise.com/#business",
               "url": "https://maisonmedicaleaixoise.com",
               "telephone": siteData.phone,
               "email": siteData.email,
               "priceRange": "€€",
               "currenciesAccepted": "EUR",
               "paymentAccepted": "Cash, Credit Card, Chèque",
               "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "70 Rue Alain Decaux",
                  "addressLocality": "Aix-en-Provence",
                  "addressRegion": "Bouches-du-Rhône",
                  "postalCode": "13100",
                  "addressCountry": "FR"
               },
               "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 43.5297,
                  "longitude": 5.4474
               },
               "hasMap": "https://maps.google.com/?q=70+Rue+Alain+Decaux,+13100+Aix-en-Provence",
               "openingHoursSpecification": [
                  {
                     "@type": "OpeningHoursSpecification",
                     "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                     "opens": "09:00",
                     "closes": "18:30"
                  },
                  {
                     "@type": "OpeningHoursSpecification",
                     "dayOfWeek": ["Saturday"],
                     "opens": "09:00",
                     "closes": "12:30"
                  }
               ],
               "sameAs": [
                  "https://www.google.com/maps?cid=VOTRE_CID_GOOGLE",
                  "https://www.pagesjaunes.fr/pro/maison-medicale-aixoise"
               ],
               "description": "Magasin de matériel médical à Aix-en-Provence. Vente & location de matériel médical et orthopédique : lits médicalisés, fauteuils roulants, maintien à domicile, orthopédie et équipements médicaux à Aix-en-Provence.",
               "founder": {
                  "@type": "Person",
                  "name": "Amira ABIDI"
               },
               "areaServed": [
                  { "@type": "City", "name": "Aix-en-Provence" },
                  { "@type": "City", "name": "La Duranne" },
                  { "@type": "City", "name": "Les Milles" },
                  { "@type": "City", "name": "Jas de Bouffan" },
                  { "@type": "City", "name": "Luynes" }
               ],
               "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Matériel Médical & Orthopédie à Aix-en-Provence",
                  "itemListElement": [
                     { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Location lit médicalisé Aix-en-Provence" } },
                     { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vente fauteuil roulant Aix-en-Provence" } },
                     { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maintien à domicile Aix-en-Provence" } },
                     { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Orthopédie Aix-en-Provence" } },
                     { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Matériel infirmier Aix-en-Provence" } }
                  ]
               }
            })
         }} />

         {/* FAQPage schema — boosts rich snippets in Google */}
         <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
               "@context": "https://schema.org",
               "@type": "FAQPage",
               "mainEntity": [
                  {
                     "@type": "Question",
                     "name": "Où acheter du matériel médical à Aix-en-Provence ?",
                     "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Matériel Médical Aixoise, situé au 70 Rue Alain Decaux, Parc de la Duranne, 13100 Aix-en-Provence, est le meilleur magasin de matériel médical proche de vous. Nous proposons lits médicalisés, fauteuils roulants et maintien à domicile."
                     }
                  },
                  {
                     "@type": "Question",
                     "name": "Faites-vous la location de matériel médical à Aix-en-Provence ?",
                     "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui. Matériel Médical Aixoise propose la location de matériel médical à Aix-en-Provence, incluant la location de lits médicalisés et de fauteuils roulants, avec un service de livraison rapide."
                     }
                  },
                  {
                     "@type": "Question",
                     "name": "Livrez-vous le matériel médical à domicile à Aix-en-Provence ?",
                     "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolument. Nous assurons la livraison de matériel médical à Aix-en-Provence, que ce soit au centre-ville, à La Duranne, Les Milles, Jas de Bouffan ou Luynes."
                     }
                  },
                  {
                     "@type": "Question",
                     "name": "Quel matériel médical pour une personne âgée en perte d'autonomie ?",
                     "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pour l'autonomie d'un senior à Aix-en-Provence, nous proposons des lits médicalisés, des déambulateurs, des fauteuils roulants pliables, des chaises de douche et des rampes PMR, adaptés au maintien à domicile."
                     }
                  },
                  {
                     "@type": "Question",
                     "name": "Êtes-vous un magasin médical près de La Duranne ?",
                     "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, notre magasin est idéalement situé au cœur du Parc de la Duranne à Aix-en-Provence, offrant un accès facile pour tous vos besoins en matériel orthopédique et médical."
                     }
                  }
               ]
            })
         }} />
         <Navbar />

         <Hero />

         {/* Quick Access to Catalogues */}
         <section className="py-32 relative overflow-hidden bg-medical-accent text-white">
            <div className="absolute top-0 left-0 w-full h-full bg-medical-green/5 blur-[150px] rounded-full" />
            <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
               <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-medical-green/30 rounded-full text-medical-green font-black text-[10px] uppercase tracking-[0.4em] mb-12"
               >
                  <Sparkles size={16} />
                  Explorez la Collection SS26
               </motion.div>
               <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl font-black uppercase tracking-tighter mb-12 xl:mb-16 leading-tight text-white">
                  L&apos;intégralité des <br className="hidden xl:block" /> catalogues <span className="text-medical-green italic neon-glow">est ici.</span>
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-8">
                  {siteData.catalogues.map((cat, i) => (
                     <Link key={cat.id} href={`/catalogues?cat=${cat.id}`} className="group">
                        <motion.div
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1 }}
                           className="bg-white/5 border-2 border-white/10 p-8 xl:p-10 rounded-[3rem] xl:rounded-[4rem] hover:border-medical-green transition-all hover:bg-white/10 text-left aspect-[3/5] xl:aspect-[4/6] flex flex-col relative overflow-hidden group/card shadow-2xl"
                        >
                           {/* Background Image Preview */}
                           <div className="absolute inset-0 opacity-10 group-hover/card:opacity-30 transition-opacity">
                              <Image
                                 src={cat.products[0].image}
                                 alt=""
                                 fill
                                 className="object-cover scale-150 group-hover/card:scale-110 transition-transform duration-1000"
                              />
                           </div>
                           <div className="absolute inset-0 bg-gradient-to-t from-medical-accent via-medical-accent/60 to-transparent" />

                           <div className="relative z-10 h-full flex flex-col">
                              <div className="w-12 h-12 xl:w-16 xl:h-16 bg-medical-green/10 rounded-2xl flex items-center justify-center mb-8 xl:mb-12 text-medical-green group-hover:bg-medical-green group-hover:text-black transition-all shadow-xl">
                                 <Activity size={24} className="xl:size-[32px]" />
                              </div>

                              <div className="flex-1">
                                 <h3 className="text-xl xl:text-3xl font-black mb-6 uppercase tracking-tight text-white group-hover:text-medical-green transition-colors leading-tight">{cat.name}</h3>
                                 <p className="text-white/40 font-bold text-xs xl:text-sm mb-10 leading-relaxed italic line-clamp-4">{cat.description}</p>
                              </div>

                              <div className="flex items-center gap-3 text-medical-green font-black text-[10px] xl:text-xs uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-all mt-auto pt-8 border-t border-white/5">
                                 Découvrir <ArrowRight size={16} />
                              </div>
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
                  <div className="absolute -inset-10 bg-medical-green/15 rounded-[6rem] blur-[100px]" />
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
                     className="absolute -bottom-10 -right-10 bg-medical-accent p-10 rounded-[3rem] border-4 border-medical-green/20 shadow-2xl max-w-[280px]"
                  >
                     <div className="flex items-center gap-3 mb-4">
                        <ShieldCheck className="text-medical-green" size={32} />
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
                  <div className="flex items-center gap-4 text-medical-green font-black uppercase tracking-[0.5em] text-[10px] mb-10">
                     <div className="w-12 h-px bg-medical-green" />
                     DÉCOUVREZ NOTRE ENGAGEMENT
                  </div>
                  <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-medical-accent mb-12 uppercase leading-[0.85] tracking-tighter">
                     VOTRE SANTÉ <br />
                     NOTRE <span className="text-medical-green">MISSION.</span>
                  </h2>
                  <p className="text-medical-accent/50 font-bold text-xl mb-12 leading-relaxed">
                     Matériel Médical Aixoise définit les nouveaux standards du soin et du confort au Parc de la Duranne.
                  </p>

                  {/* Trust Factors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                     {(siteData as any).trust.map((item: any, i: number) => (
                        <div key={i} className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-lg bg-medical-green/10 flex items-center justify-center text-medical-green">
                              <CheckCircle2 size={18} />
                           </div>
                           <span className="text-medical-accent font-black text-[10px] uppercase tracking-widest">{item.text}</span>
                        </div>
                     ))}
                  </div>

                  <Link
                     href="/about"
                     className="inline-flex items-center gap-4 bg-medical-accent text-white px-12 py-6 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.4em] hover:bg-medical-green hover:text-medical-accent transition-all shadow-2xl"
                  >
                     En savoir plus
                     <ArrowRight size={20} />
                  </Link>
               </motion.div>
            </div>
         </section>

         {/* Featured Products & Vente/Location */}
         <section id="services" className="py-40 bg-medical-accent relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-medical-green/5 blur-[200px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                  {/* Featured Products */}
                  <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                  >
                     <div className="flex items-center gap-4 text-medical-green font-black uppercase tracking-[0.5em] text-[10px] mb-10">
                        <Sparkles size={16} />
                        PRODUITS MIS EN AVANT
                     </div>
                     <h3 className="text-4xl sm:text-5xl font-black text-white mb-16 uppercase tracking-tighter leading-none">
                        NOTRE SÉLECTION <br />
                        <span className="text-medical-green">PREMIUM.</span>
                     </h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(siteData as any).featuredProducts.map((product: string, i: number) => (
                           <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-medical-green transition-all group cursor-default">
                              <div className="flex items-center justify-between">
                                 <span className="text-white font-black text-sm uppercase tracking-tight group-hover:text-medical-green transition-colors">{product}</span>
                                 <ShoppingCart size={16} className="text-white/20 group-hover:text-medical-green transition-colors" />
                              </div>
                           </div>
                        ))}
                     </div>
                  </motion.div>

                  {/* Sale & Rental */}
                  <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                  >
                     <div className="flex items-center gap-4 text-medical-green font-black uppercase tracking-[0.5em] text-[10px] mb-10">
                        <Activity size={16} />
                        VENTE & LOCATION
                     </div>
                     <h3 className="text-4xl sm:text-5xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
                        VOTRE MOBILITÉ, <br />
                        <span className="text-medical-green">NOTRE PRIORITÉ.</span>
                     </h3>
                     <p className="text-white/40 font-bold text-lg mb-12 leading-relaxed italic">
                        {(siteData as any).saleAndRental.description}
                     </p>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem]">
                           <div className="w-12 h-12 rounded-2xl bg-medical-green/20 flex items-center justify-center text-medical-green mb-6">
                              <Truck size={24} />
                           </div>
                           <h4 className="text-xl font-black text-white mb-6 uppercase tracking-tight">{(siteData as any).saleAndRental.purchase.title}</h4>
                           <ul className="space-y-4">
                              {(siteData as any).saleAndRental.purchase.items.map((item: string, i: number) => (
                                 <li key={i} className="flex items-center gap-3 text-white/40 font-bold text-[10px] uppercase tracking-widest">
                                    <div className="w-1 h-1 rounded-full bg-medical-green" />
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem]">
                           <div className="w-12 h-12 rounded-2xl bg-medical-green/20 flex items-center justify-center text-medical-green mb-6">
                              <CreditCard size={24} />
                           </div>
                           <h4 className="text-xl font-black text-white mb-6 uppercase tracking-tight">{(siteData as any).saleAndRental.rental.title}</h4>
                           <ul className="space-y-4">
                              {(siteData as any).saleAndRental.rental.items.map((item: string, i: number) => (
                                 <li key={i} className="flex items-center gap-3 text-white/40 font-bold text-[10px] uppercase tracking-widest">
                                    <div className="w-1 h-1 rounded-full bg-medical-green" />
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Nutrition Section */}
         <section className="py-40 bg-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-medical-green/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
               <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-4 bg-medical-accent text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.4em] mb-12 shadow-2xl"
               >
                  {(siteData as any).nutrition.emoji} {(siteData as any).nutrition.title}
               </motion.div>
               <h2 className="text-5xl sm:text-7xl md:text-9xl font-black text-medical-accent mb-20 uppercase tracking-tighter leading-[0.85]">
                  BIEN-ÊTRE & <br />
                  <span className="text-medical-green">NUTRITION.</span>
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {(siteData as any).nutrition.items.map((item: string, i: number) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-12 rounded-[4rem] border-2 border-medical-accent/5 hover:border-medical-green transition-all group bg-sage-bg/30"
                     >
                        <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-medical-green mb-8 mx-auto shadow-xl group-hover:bg-medical-green group-hover:text-white transition-all">
                           {i === 0 ? <Heart size={32} /> : i === 1 ? <Sparkles size={32} /> : <Leaf size={32} />}
                        </div>
                        <p className="text-medical-accent font-black text-xl uppercase tracking-tight">{item}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         <Services />

         <Marques />

         {/* Point de Vente Video Section */}
         <section className="py-40 bg-medical-accent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-medical-green/5 blur-[150px] rounded-full" />
            <div className="max-w-[1600px] mx-auto px-6 relative z-10 text-center">
               <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-medical-green/30 rounded-full text-medical-green font-black text-[10px] uppercase tracking-[0.4em] mb-12"
               >
                  <Activity size={16} />
                  Immersion Totale
               </motion.div>
               <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-24 leading-tight">
                  NOTRE POINT <br /> <span className="text-medical-green neon-glow">DE VENTE.</span>
               </h2>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
                  <motion.div
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="relative aspect-video rounded-[3.5rem] overflow-hidden border-4 border-white/10 hover:border-medical-green transition-all shadow-2xl group cursor-default"
                  >
                     <video
                        src="/vedio1.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-medical-accent/90 via-medical-accent/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                     <div className="absolute bottom-12 left-12 text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-medical-green font-black text-[10px] uppercase tracking-[0.4em] mb-4">Parc de la Duranne</p>
                        <h3 className="text-white font-black text-3xl xl:text-4xl uppercase tracking-tight">Showroom <br /> MMA.</h3>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     className="relative aspect-video rounded-[3.5rem] overflow-hidden border-4 border-white/10 hover:border-medical-green transition-all shadow-2xl group cursor-default"
                  >
                     <video
                        src="/vedio2.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-medical-accent/90 via-medical-accent/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                     <div className="absolute bottom-12 left-12 text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-medical-green font-black text-[10px] uppercase tracking-[0.4em] mb-4">Accompagnement</p>
                        <h3 className="text-white font-black text-3xl xl:text-4xl uppercase tracking-tight">Conseil & <br /> Expertise.</h3>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         <Contact />

         <Footer />
      </main>
   );
}

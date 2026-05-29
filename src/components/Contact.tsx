"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Info, ShieldCheck, ChevronDown } from "lucide-react";
import { siteData } from "@/data/site-data";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

export function Contact() {
  const [selectedService, setSelectedService] = useState("SCHOLL SS26 / ORTHOPÉDIE");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    "SCHOLL SS26 / ORTHOPÉDIE",
    "LOCATION MATÉRIEL",
    "VENTE MATÉRIEL MÉDICAL",
    "AUTRE DEMANDE"
  ];

  return (
    <section id="contact" className="py-32 bg-sage-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-medical-green/[0.03] blur-[200px] rounded-full translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 text-medical-green font-black uppercase tracking-[0.4em] text-[10px] mb-8">
              <Info size={18} />
              INFORMATIONS LÉGALES
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-[6rem] font-black text-medical-accent mb-8 sm:mb-12 uppercase leading-[0.9] tracking-tighter">
              DISCUTONS <br />
              <span className="text-medical-green">SANTÉ.</span>
            </h2>
            <p className="text-base sm:text-xl text-medical-accent/50 font-bold mb-12 sm:mb-16 leading-relaxed max-w-lg">
              Une question sur une location ou une technologie Scholl ? Notre équipe est à votre entière disposition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 mb-16 sm:mb-20">
              {[
                { icon: MapPin, text: siteData.address, title: "Siège" },
                { icon: Phone, text: siteData.phones, title: "Ligne Directe" },
                { icon: Mail, text: siteData.email, title: "Email" },
                { icon: Clock, text: siteData.workingHours, title: "Disponibilité" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center sm:items-start gap-6 text-center sm:text-left">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-medical-accent rounded-2xl sm:rounded-[2rem] flex items-center justify-center border-2 border-medical-green/30 shadow-2xl">
                    <item.icon className="text-medical-green sm:hidden" size={24} />
                    <item.icon className="text-medical-green hidden sm:block" size={28} />
                  </div>
                  <div>
                    <p className="text-medical-accent/20 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] mb-2">{item.title}</p>
                    {Array.isArray(item.text) ? (
                      <div className="flex flex-col gap-1">
                        {item.text.map((t, i) => (
                          <a key={i} href={`tel:${t.replace(/[^0-9+]/g, '')}`} className="text-medical-accent font-black text-[11px] sm:text-xs uppercase tracking-widest leading-relaxed hover:text-medical-green transition-colors block">
                            {t}
                          </a>
                        ))}
                      </div>
                    ) : item.title === 'Email' ? (
                      <a href={`mailto:${item.text}`} className="text-medical-accent font-black text-[11px] sm:text-xs uppercase tracking-widest leading-relaxed hover:text-medical-green transition-colors block">
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-medical-accent font-black text-[11px] sm:text-xs uppercase tracking-widest leading-relaxed">{item.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Legal Block */}
            {/* <div className="bg-medical-accent p-8 sm:p-12 rounded-[3rem] sm:rounded-[4rem] border-4 border-medical-green/20 relative group overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-medical-green/5 rounded-bl-[6rem]" />
                <div className="flex items-center gap-4 mb-8 sm:mb-10">
                   <ShieldCheck className="text-medical-green sm:hidden" size={28} />
                   <ShieldCheck className="text-medical-green hidden sm:block" size={32} />
                   <p className="text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.4em]">CERTIFICATION RCS</p>
                </div>
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-4 gap-2">
                        <span className="text-white/40 font-bold text-[10px] sm:text-xs uppercase tracking-widest">Siren</span>
                        <span className="text-medical-green font-black text-xl sm:text-2xl tracking-tighter">{siteData.kbis.siren}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-4 gap-2">
                        <span className="text-white/40 font-bold text-[10px] sm:text-xs uppercase tracking-widest">Date Création</span>
                        <span className="text-white font-black text-[11px] sm:text-sm uppercase tracking-widest">{siteData.kbis.date}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <span className="text-white/40 font-bold text-[10px] sm:text-xs uppercase tracking-widest">Capital</span>
                        <span className="text-white font-black text-[11px] sm:text-sm uppercase tracking-widest">{siteData.kbis.capital}</span>
                    </div>
                </div>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 sm:p-16 rounded-[3rem] sm:rounded-[5rem] border-4 border-medical-accent/5 shadow-[0_50px_100px_-30px_rgba(44,62,80,0.15)] relative mt-12 lg:mt-0"
          >
            <div className="absolute top-8 sm:top-16 right-8 sm:right-16">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-medical-green rounded-full animate-ping" />
            </div>
            <form className="space-y-8 sm:space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                <div className="space-y-3 sm:space-y-4">
                  <label className="text-medical-accent font-black uppercase tracking-[0.3em] text-[10px] ml-3">Votre Nom</label>
                  <input
                    type="text"
                    placeholder="DUVAL JEAN"
                    className="w-full bg-sage-bg border-2 border-transparent rounded-[2rem] sm:rounded-[2.5rem] py-6 sm:py-8 px-10 sm:px-12 text-medical-accent font-black uppercase tracking-widest text-[10px] sm:text-xs focus:border-medical-green outline-none transition-all placeholder:text-medical-accent/10"
                  />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <label className="text-medical-accent font-black uppercase tracking-[0.3em] text-[10px] ml-3">Votre Email</label>
                  <input
                    type="email"
                    placeholder="JEAN@EXEMPLE.FR"
                    className="w-full bg-sage-bg border-2 border-transparent rounded-[2rem] sm:rounded-[2.5rem] py-6 sm:py-8 px-10 sm:px-12 text-medical-accent font-black uppercase tracking-widest text-[10px] sm:text-xs focus:border-medical-green outline-none transition-all placeholder:text-medical-accent/10"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 relative" ref={dropdownRef}>
                <label className="text-medical-accent font-black uppercase tracking-[0.3em] text-[10px] ml-3">Service Concerné</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-sage-bg border-2 border-transparent rounded-[2rem] sm:rounded-[2.5rem] py-6 sm:py-8 px-10 sm:px-12 text-medical-accent font-black uppercase tracking-widest text-[10px] sm:text-xs focus:border-medical-green outline-none transition-all flex items-center justify-between group"
                  >
                    <span>{selectedService}</span>
                    <ChevronDown size={20} className={`text-medical-green transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 mt-4 bg-white border-4 border-medical-accent/5 rounded-[2.5rem] shadow-2xl z-[100] overflow-hidden p-4"
                      >
                        {services.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => {
                              setSelectedService(service);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${selectedService === service
                                ? "bg-medical-accent text-medical-green"
                                : "text-medical-accent/40 hover:bg-sage-bg hover:text-medical-accent"
                              }`}
                          >
                            {service}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <label className="text-medical-accent font-black uppercase tracking-[0.3em] text-[10px] ml-3">Message</label>
                <textarea
                  rows={4}
                  placeholder="ÉCRIVEZ VOTRE MESSAGE..."
                  className="w-full bg-sage-bg border-2 border-transparent rounded-[2rem] sm:rounded-[2.5rem] py-8 sm:py-10 px-10 sm:px-12 text-medical-accent font-black uppercase tracking-widest text-[10px] sm:text-xs focus:border-medical-green outline-none transition-all placeholder:text-medical-accent/10 resize-none"
                />
              </div>
              <button className="w-full bg-medical-accent text-white py-6 sm:py-8 rounded-[2rem] sm:rounded-[3rem] font-black uppercase tracking-[0.4em] text-[10px] sm:text-xs hover:bg-medical-green hover:text-medical-accent transition-all shadow-[0_30px_60px_-15px_rgba(44,62,80,0.3)] flex items-center justify-center gap-4 group">
                ENVOYER LE DOSSIER
                <Send size={24} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-all" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Info, ShieldCheck } from "lucide-react";
import { siteData } from "@/data/site-data";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-sage-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-neon-green/[0.03] blur-[200px] rounded-full translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 text-neon-green font-black uppercase tracking-[0.4em] text-[10px] mb-8">
                <Info size={18} />
                INFORMATIONS LÉGALES
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-[6rem] font-black text-medical-accent mb-8 sm:mb-12 uppercase leading-[0.9] tracking-tighter">
               DISCUTONS <br />
               <span className="text-neon-green">SANTÉ.</span>
            </h2>
            <p className="text-base sm:text-xl text-medical-accent/50 font-bold mb-12 sm:mb-16 leading-relaxed max-w-lg">
               Une question sur une location ou une technologie Scholl ? Notre équipe est à votre entière disposition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 mb-16 sm:mb-20">
              {[
                { icon: MapPin, text: siteData.address, title: "Siège" },
                { icon: Phone, text: siteData.phone, title: "Ligne Directe" },
                { icon: Mail, text: siteData.email, title: "Email" },
                { icon: Clock, text: siteData.workingHours, title: "Disponibilité" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center sm:items-start gap-6 text-center sm:text-left">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-medical-accent rounded-2xl sm:rounded-[2rem] flex items-center justify-center border-2 border-neon-green/30 shadow-2xl">
                    <item.icon className="text-neon-green sm:hidden" size={24} />
                    <item.icon className="text-neon-green hidden sm:block" size={28} />
                  </div>
                  <div>
                    <p className="text-medical-accent/20 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] mb-2">{item.title}</p>
                    <p className="text-medical-accent font-black text-[11px] sm:text-xs uppercase tracking-widest leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Legal Block */}
            <div className="bg-medical-accent p-8 sm:p-12 rounded-[3rem] sm:rounded-[4rem] border-4 border-neon-green/20 relative group overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-neon-green/5 rounded-bl-[6rem]" />
                <div className="flex items-center gap-4 mb-8 sm:mb-10">
                   <ShieldCheck className="text-neon-green sm:hidden" size={28} />
                   <ShieldCheck className="text-neon-green hidden sm:block" size={32} />
                   <p className="text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.4em]">CERTIFICATION RCS</p>
                </div>
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-4 gap-2">
                        <span className="text-white/40 font-bold text-[10px] sm:text-xs uppercase tracking-widest">Siren</span>
                        <span className="text-neon-green font-black text-xl sm:text-2xl tracking-tighter">{siteData.kbis.siren}</span>
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 sm:p-16 rounded-[3rem] sm:rounded-[5rem] border-4 border-medical-accent/5 shadow-[0_50px_100px_-30px_rgba(44,62,80,0.15)] relative mt-12 lg:mt-0"
          >
            <div className="absolute top-8 sm:top-16 right-8 sm:right-16">
               <div className="w-4 h-4 sm:w-5 sm:h-5 bg-neon-green rounded-full animate-ping" />
            </div>
            <form className="space-y-8 sm:space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                <div className="space-y-3 sm:space-y-4">
                  <label className="text-medical-accent font-black uppercase tracking-[0.3em] text-[10px] ml-3">Votre Nom</label>
                  <input 
                    type="text" 
                    placeholder="DUVAL JEAN"
                    className="w-full bg-sage-bg border-2 border-transparent rounded-[2rem] sm:rounded-[2.5rem] py-6 sm:py-8 px-10 sm:px-12 text-medical-accent font-black uppercase tracking-widest text-[10px] sm:text-xs focus:border-neon-green outline-none transition-all placeholder:text-medical-accent/10"
                  />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <label className="text-medical-accent font-black uppercase tracking-[0.3em] text-[10px] ml-3">Votre Email</label>
                  <input 
                    type="email" 
                    placeholder="JEAN@EXEMPLE.FR"
                    className="w-full bg-sage-bg border-2 border-transparent rounded-[2rem] sm:rounded-[2.5rem] py-6 sm:py-8 px-10 sm:px-12 text-medical-accent font-black uppercase tracking-widest text-[10px] sm:text-xs focus:border-neon-green outline-none transition-all placeholder:text-medical-accent/10"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <label className="text-medical-accent font-black uppercase tracking-[0.3em] text-[10px] ml-3">Service Concerné</label>
                <select className="w-full bg-sage-bg border-2 border-transparent rounded-[2rem] sm:rounded-[2.5rem] py-6 sm:py-8 px-10 sm:px-12 text-medical-accent font-black uppercase tracking-widest text-[10px] sm:text-xs focus:border-neon-green outline-none transition-all appearance-none">
                  <option>SCHOLL SS26 / ORTHOPÉDIE</option>
                  <option>LOCATION MATÉRIEL</option>
                  <option>VENTE MATÉRIEL MÉDICAL</option>
                  <option>AUTRE DEMANDE</option>
                </select>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <label className="text-medical-accent font-black uppercase tracking-[0.3em] text-[10px] ml-3">Message</label>
                <textarea 
                  rows={4}
                  placeholder="ÉCRIVEZ VOTRE MESSAGE..."
                  className="w-full bg-sage-bg border-2 border-transparent rounded-[2rem] sm:rounded-[2.5rem] py-8 sm:py-10 px-10 sm:px-12 text-medical-accent font-black uppercase tracking-widest text-[10px] sm:text-xs focus:border-neon-green outline-none transition-all placeholder:text-medical-accent/10 resize-none"
                />
              </div>
              <button className="w-full bg-medical-accent text-white py-6 sm:py-8 rounded-[2rem] sm:rounded-[3rem] font-black uppercase tracking-[0.4em] text-[10px] sm:text-xs hover:bg-neon-green hover:text-medical-accent transition-all shadow-[0_30px_60px_-15px_rgba(44,62,80,0.3)] flex items-center justify-center gap-4 group">
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

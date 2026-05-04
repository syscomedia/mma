"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Stethoscope, ShoppingCart, Activity, Truck, MoveRight, CheckCircle } from "lucide-react";
import { siteData } from "@/data/site-data";

const iconMap = {
  ShoppingCart: ShoppingCart,
  Activity: Activity,
  Truck: Truck,
  Stethoscope: Stethoscope,
  CheckCircle: CheckCircle,
};

export function Services() {
  return (
    <section id="services" className="py-32 bg-sage-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-medical-green font-black uppercase tracking-[0.4em] text-[10px] mb-6"
            >
              <div className="w-10 h-[2px] bg-medical-green" />
              Expertise Médicale
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl md:text-8xl font-black text-medical-accent leading-[0.95] tracking-tighter"
            >
              SOLUTIONS SUR <br />
              <span className="text-medical-green">MESURE.</span>
            </motion.h2>
          </div>
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-medical-accent/40 font-bold max-w-sm text-right leading-relaxed italic"
          >
             Nous sélectionnons les meilleures technologies orthopédiques pour garantir votre autonomie.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] border-2 border-medical-accent/5 hover:border-medical-green transition-all shadow-xl group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-medical-accent rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center mb-8 sm:mb-10 group-hover:bg-medical-green transition-colors shadow-2xl">
                  <Icon className="text-medical-green group-hover:text-medical-accent sm:hidden" size={32} />
                  <Icon className="text-medical-green group-hover:text-medical-accent hidden sm:block" size={40} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-medical-accent mb-4 sm:mb-6 uppercase tracking-tighter group-hover:text-medical-green transition-colors">
                    {service.title}
                </h3>
                <p className="text-sm sm:text-base text-medical-accent/50 font-bold leading-relaxed mb-8 sm:mb-10">
                    {service.desc}
                </p>
                <div className="flex items-center gap-2 text-medical-green font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                    En savoir plus <MoveRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technologies Highlight from PDF Data */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {siteData.technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-medical-accent p-8 sm:p-12 rounded-[3rem] sm:rounded-[4rem] border-4 border-medical-green/20 relative group overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-medical-green/5 rounded-bl-[5rem] group-hover:bg-medical-green/10 transition-colors" />
                    <div className="relative z-10">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-medical-green/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                            {i === 0 ? <ShieldCheck className="text-medical-green" /> : i === 1 ? <Zap className="text-medical-green" /> : <Stethoscope className="text-medical-green" />}
                        </div>
                        <h4 className="text-xl sm:text-2xl font-black text-white mb-4 uppercase tracking-tighter italic">
                           {tech.name}
                        </h4>
                        <p className="text-white/50 font-bold text-[11px] sm:text-sm leading-relaxed">
                            {tech.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

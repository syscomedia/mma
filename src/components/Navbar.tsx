"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Activity, ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";
import { siteData } from "@/data/site-data";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Expertises", href: "/services" },
  { name: "Catalogues", href: "/catalogues" },
  { name: "Engagement", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled || pathname !== "/" || isOpen ? "bg-sage-bg/95 backdrop-blur-2xl border-b border-neon-green/30 py-4 px-6" : "bg-transparent py-6 px-8"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group z-[110]" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 sm:w-14 h-14 bg-medical-accent rounded-xl sm:rounded-2xl flex items-center justify-center border-2 border-neon-green shadow-2xl group-hover:scale-110 transition-transform">
              <Activity className="text-neon-green sm:hidden" size={20} />
              <Activity className="text-neon-green hidden sm:block" size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-black tracking-tighter text-medical-accent leading-none">
                {siteData.shortName}
              </span>
              <span className="text-[8px] sm:text-[10px] font-black text-neon-green uppercase tracking-[0.4em] mt-1">
                Innovation 2025
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-xs font-black transition-all uppercase tracking-[0.3em] hover:text-neon-green",
                  pathname === link.href ? "text-neon-green" : "text-medical-accent/40"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-medical-accent text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 hover:bg-neon-green hover:text-medical-accent transition-all neon-border shadow-2xl"
            >
              <Phone size={14} />
              Contact
            </Link>
          </div>

          {/* Mobile Toggle Button - EXPLICITLY VISIBLE */}
          <div className="lg:hidden flex items-center">
            <button 
              className="relative w-12 h-12 sm:w-14 sm:h-14 bg-medical-accent rounded-xl sm:rounded-2xl flex items-center justify-center border-2 border-neon-green text-neon-green shadow-[0_0_20px_rgba(57,255,20,0.4)] z-[110] active:scale-95 transition-all" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} className="sm:hidden" /> : <Menu size={24} className="sm:hidden" />}
              {isOpen ? <X size={32} className="hidden sm:block" strokeWidth={3} /> : <Menu size={32} className="hidden sm:block" strokeWidth={3} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-medical-accent flex flex-col lg:hidden"
          >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-green/10 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-green/5 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 pt-24 relative z-10">
               <div className="space-y-6 sm:space-y-8">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 100 }}
                    >
                      <Link 
                        href={link.href}
                        className={cn(
                          "flex items-center gap-6 group",
                          pathname === link.href ? "text-neon-green" : "text-white/60 hover:text-white"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-sm font-black text-neon-green/30 font-mono tracking-tighter">0{i + 1}</span>
                        <span className="text-5xl sm:text-7xl font-black uppercase tracking-tighter transition-all group-hover:translate-x-4">
                          {link.name}
                        </span>
                        <ArrowRight className={cn(
                          "transition-all duration-500",
                          pathname === link.href ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0"
                        )} size={40} />
                      </Link>
                    </motion.div>
                  ))}
               </div>

               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6 }}
                 className="mt-16 sm:mt-24 pt-10 border-t border-white/10"
               >
                  <p className="text-neon-green font-black text-[10px] uppercase tracking-[0.4em] mb-8 text-center sm:text-left">Connectez-vous</p>
                  <div className="flex justify-center sm:justify-start gap-6">
                     {[
                       { icon: Facebook, href: "#" },
                       { icon: Instagram, href: "#" },
                       { icon: Linkedin, href: "#" }
                     ].map((item, i) => (
                       <a 
                         key={i} 
                         href={item.href}
                         className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 hover:text-neon-green hover:bg-white/10 hover:scale-110 transition-all border border-white/5"
                       >
                          <item.icon size={28} />
                       </a>
                     ))}
                  </div>
               </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="p-8 sm:p-12 bg-black/20 flex items-center justify-between relative z-10"
            >
               <div className="flex flex-col">
                  <p className="text-white/20 text-[9px] font-black uppercase tracking-widest mb-1">© 2025 MMAIXOISE</p>
                  <p className="text-neon-green font-black text-[9px] uppercase tracking-[0.3em]">Excellence Médicale Aix</p>
               </div>
               <Link 
                 href="/contact" 
                 onClick={() => setIsOpen(false)}
                 className="bg-neon-green text-medical-accent p-4 rounded-xl hover:scale-110 transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)]"
               >
                 <Phone size={20} />
               </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

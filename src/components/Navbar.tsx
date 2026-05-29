"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Activity, ArrowRight, Instagram, Facebook, Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import { siteData } from "@/data/site-data";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", href: "/" },
  {
    name: "Location",
    href: "/location",
    subLinks: [
      { name: "Matériel médical", href: "/location/materiel-medical" },
      { name: "Oxygénothérapie", href: "/location/oxygenotherapie" },
      { name: "Services sur mesure", href: "/location/services-sur-mesure" },
      { name: "La respiration", href: "/location/la-respiration" },
      { name: "Tire lait", href: "/location/tire-lait" }
    ]
  },
  {
    name: "Vente",
    href: "/vente",
    subLinks: [
      { name: "La marche", href: "/vente/la-marche" },
      { name: "La mobilité", href: "/vente/la-mobilite" },
      { name: "La respiration", href: "/vente/la-respiration" },
      { name: "Autour du lit et repos", href: "/vente/autour-du-lit-et-repos" },
      { name: "Hygiène", href: "/vente/hygiene" },
      { name: "Incontinence", href: "/vente/incontinence" },
      { name: "Aides techniques", href: "/vente/aides-techniques" },
      { name: "Maintien postural", href: "/vente/maintien-postural" },
      { name: "Au quotidien", href: "/vente/au-quotidien" },
      { name: "Matériel professionnel", href: "/vente/materiel-professionnel" }
    ]
  },
  { name: "Expertises", href: "/services" },
  { name: "Engagement", href: "/about" },
  { name: "Contact", href: "/contact", mobileOnly: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

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
        "fixed top-0 left-0 right-0 transition-all duration-500",
        isOpen ? "z-[130]" : "z-[100]",
        isOpen
          ? "bg-transparent border-b border-transparent py-4 px-6"
          : scrolled || pathname !== "/"
            ? "bg-sage-bg/95 backdrop-blur-2xl border-b border-medical-green/30 py-4 px-6"
            : "bg-transparent py-6 px-8"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group z-[110]" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 sm:w-14 h-14 bg-medical-accent rounded-xl sm:rounded-2xl flex items-center justify-center border-2 border-medical-green shadow-2xl group-hover:scale-110 transition-transform">
              <Activity className="text-medical-green sm:hidden" size={20} />
              <Activity className="text-medical-green hidden sm:block" size={28} />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-lg sm:text-xl font-black tracking-tighter leading-none uppercase transition-colors duration-300",
                isOpen ? "text-white" : "text-medical-accent"
              )}>
                Maison Médicale
              </span>
              <span className={cn(
                "text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] mt-1 transition-colors duration-300",
                isOpen ? "text-white/90" : "text-medical-green"
              )}>
                Aixoise
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.filter(link => !link.mobileOnly).map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "text-xs font-black transition-all uppercase tracking-[0.3em] hover:text-medical-green",
                    pathname === link.href || (link.subLinks && pathname.startsWith(link.href)) ? "text-medical-green" : "text-medical-accent/40"
                  )}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="absolute top-full left-0 mt-6 w-64 bg-white/95 backdrop-blur-md border-t-4 border-medical-green rounded-b-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 before:absolute before:-top-6 before:left-0 before:w-full before:h-6">
                    <div className="py-3">
                      {link.subLinks.map(sub => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-6 py-3 text-sm font-medium text-medical-accent/70 hover:text-medical-green hover:bg-medical-green/5 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="bg-medical-accent text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 hover:bg-medical-green hover:text-medical-accent transition-all neon-border shadow-2xl"
            >
              <Phone size={14} />
              Contact
            </Link>
          </div>

          {/* Mobile Toggle Button - EXPLICITLY VISIBLE */}
          <div className="lg:hidden flex items-center">
            <button
              className="relative w-12 h-12 sm:w-14 sm:h-14 bg-medical-accent rounded-xl sm:rounded-2xl flex items-center justify-center border-2 border-medical-green text-medical-green shadow-[0_0_20px_rgba(57,255,20,0.4)] z-[110] active:scale-95 transition-all"
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
            className="fixed inset-0 z-[120] bg-medical-accent flex flex-col lg:hidden overflow-y-auto"
          >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-medical-green/10 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-medical-green/5 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="flex-1 flex flex-col justify-start px-8 sm:px-12 pt-28 pb-8 relative z-10">
              <div className="space-y-6 sm:space-y-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 100 }}
                    className="flex flex-col"
                  >
                    {link.subLinks ? (
                      <button
                        onClick={() => toggleSubmenu(link.name)}
                        className={cn(
                          "flex items-center gap-6 group w-full text-left focus:outline-none",
                          pathname.startsWith(link.href) ? "text-medical-green" : "text-white/60 hover:text-white"
                        )}
                      >
                        <span className="text-sm font-black text-medical-green/30 font-mono tracking-tighter">0{i + 1}</span>
                        <span className="text-4xl sm:text-6xl font-black uppercase tracking-tighter flex items-center gap-4">
                          {link.name}
                          <span className="inline-block transition-transform duration-300">
                            {openSubmenus[link.name] ? (
                              <ChevronUp className="w-8 h-8 sm:w-12 sm:h-12 text-medical-green" />
                            ) : (
                              <ChevronDown className="w-8 h-8 sm:w-12 sm:h-12 text-white/40 group-hover:text-white" />
                            )}
                          </span>
                        </span>
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-6 group w-fit",
                          pathname === link.href ? "text-medical-green" : "text-white/60 hover:text-white"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-sm font-black text-medical-green/30 font-mono tracking-tighter">0{i + 1}</span>
                        <span className="text-4xl sm:text-6xl font-black uppercase tracking-tighter transition-all group-hover:translate-x-4">
                          {link.name}
                        </span>
                        <ArrowRight className={cn(
                          "transition-all duration-500",
                          pathname === link.href ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0"
                        )} size={40} />
                      </Link>
                    )}

                    <AnimatePresence>
                      {link.subLinks && openSubmenus[link.name] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden pl-16 sm:pl-20 mt-4 flex flex-col gap-3"
                        >
                          {link.subLinks.map(sub => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="text-lg sm:text-xl font-medium text-white/50 hover:text-medical-green transition-colors py-1"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 sm:mt-16 pt-8 border-t border-white/10"
              >
                <p className="text-medical-green font-black text-[10px] uppercase tracking-[0.4em] mb-6 text-center sm:text-left">Connectez-vous</p>
                <div className="flex justify-center sm:justify-start gap-6">
                  {[
                    { icon: Facebook, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Linkedin, href: "#" }
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 hover:text-medical-green hover:bg-white/10 hover:scale-110 transition-all border border-white/5"
                    >
                      <item.icon size={20} className="sm:hidden" />
                      <item.icon size={28} className="hidden sm:block" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="p-8 sm:p-12 bg-black/20 flex items-center justify-between relative z-10 mt-auto"
            >
              <div className="flex flex-col">
                <p className="text-white/20 text-[9px] font-black uppercase tracking-widest mb-1">© 2025 MMAIXOISE</p>
                <p className="text-medical-green font-black text-[9px] uppercase tracking-[0.3em]">Excellence Médicale Aix</p>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-medical-green text-medical-accent p-4 rounded-xl hover:scale-110 transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)]"
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

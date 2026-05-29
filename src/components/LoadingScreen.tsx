"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
   const [progress, setProgress] = useState(0);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      // Prevent scrolling while loading
      document.body.style.overflow = "hidden";

      const duration = 2000; // 2 seconds total loading
      const interval = 20; // update every 20ms
      const steps = duration / interval;
      let currentStep = 0;

      const timer = setInterval(() => {
         currentStep++;
         const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
         setProgress(newProgress);

         if (currentStep >= steps) {
            clearInterval(timer);
            setTimeout(() => {
               setIsLoading(false);
               document.body.style.overflow = "unset";
            }, 500); // Wait a bit at 100% before fading out
         }
      }, interval);

      return () => {
         clearInterval(timer);
         document.body.style.overflow = "unset";
      };
   }, []);

   return (
      <AnimatePresence>
         {isLoading && (
            <motion.div
               initial={{ opacity: 1 }}
               exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
               transition={{ duration: 0.8, ease: "easeInOut" }}
               className="fixed inset-0 z-[9999] bg-[#0a0d10] flex flex-col items-center justify-center text-white overflow-hidden"
            >
               {/* Huge faint background text like 'PNEUS' in the image */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none z-0">
                  <span className="text-[20vw] font-black italic tracking-tighter text-white/[0.03] uppercase transform -skew-x-12 whitespace-nowrap select-none">
                     MÉDICAL
                  </span>
               </div>

               {/* Top Text */}
               <div className="flex flex-col items-center justify-center w-full max-w-3xl px-6 relative z-10 mt-auto">
                  {/* Glow effect behind text */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-medical-green/20 blur-[100px] rounded-full pointer-events-none" />

                  <div className="flex flex-row items-center justify-center gap-x-2 sm:gap-x-3 relative z-10 w-full">
                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter text-medical-green drop-shadow-[0_0_15px_rgba(57,255,20,0.5)] leading-none uppercase transform -skew-x-12">
                        LA MAISON
                     </h1>
                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter text-white drop-shadow-lg leading-none uppercase transform -skew-x-12">
                        MÉDICALE AIXOISE
                     </h1>
                  </div>

                  <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-medical-green/40 to-transparent mt-6 sm:mt-8 opacity-70" />
               </div>

               {/* Progress Section */}
               <div className="w-full max-w-md px-8 pb-32 flex flex-col gap-4 relative z-10 mt-8 mb-auto">
                  <div className="flex justify-between items-end px-1">
                     <span className="text-medical-green font-black text-[8px] sm:text-[10px] uppercase tracking-[0.4em] italic drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">
                        Initialisation
                     </span>
                     <span className="text-white font-black text-2xl sm:text-3xl italic tracking-tighter transform -skew-x-12">
                        {progress}%
                     </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="h-1 sm:h-1 w-full bg-white/10 rounded-full overflow-hidden relative backdrop-blur-sm">
                     <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-medical-green via-emerald-400 to-[#f39c12] rounded-full shadow-[0_0_10px_rgba(57,255,20,0.5)]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.1 }}
                     />
                  </div>

                  {/* Footer text */}
                  <div className="mt-4 flex justify-center">
                     <p className="text-white/20 text-[6px] sm:text-[8px] font-black uppercase tracking-[0.5em] text-center italic">
                        MATÉRIEL MÉDICAL AIXOISE — PARC DE LA DURANNE
                     </p>
                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}

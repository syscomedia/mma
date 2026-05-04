import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FullCatalog } from "@/components/FullCatalog";

export const metadata = {
  title: "Nos Produits SS26 | Matériel Médical Aixoise",
  description: "Découvrez la gamme complète de produits Scholl et matériel médical.",
};

import { Suspense } from "react";

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24 bg-sage-bg">
      <Navbar />
      <div className="py-20 text-center bg-medical-accent text-white">
         <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Produits</h1>
         <p className="text-medical-green font-black uppercase tracking-[0.5em] text-xs">Innovation & Performance Scholl</p>
      </div>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-medical-accent font-black uppercase tracking-[0.5em]">Chargement...</div>}>
        <FullCatalog />
      </Suspense>
      <Footer />
    </main>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FullCatalog } from "@/components/FullCatalog";

export const metadata = {
  title: "Nos Produits SS26 | Maison Médicale Aixoise",
  description: "Découvrez la gamme complète de produits Scholl et matériel médical.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24 bg-sage-bg">
      <Navbar />
      <div className="py-20 text-center bg-medical-accent text-white">
         <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Produits</h1>
         <p className="text-neon-green font-black uppercase tracking-[0.5em] text-xs">Innovation & Performance Scholl</p>
      </div>
      <FullCatalog />
      <Footer />
    </main>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FullCatalog } from "@/components/FullCatalog";

export const metadata = {
  title: "Catalogues Scholl SS26 | Maison Médicale Aixoise",
  description: "Parcourez l'intégralité des catalogues Scholl Pharma, Lifestyle et Sneakers 2026.",
};

export default function CataloguesPage() {
  return (
    <main className="min-h-screen pt-24 bg-sage-bg">
      <Navbar />
      <FullCatalog />
      <Footer />
    </main>
  );
}

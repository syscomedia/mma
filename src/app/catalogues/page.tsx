import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FullCatalog } from "@/components/FullCatalog";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalogues Scholl SS26 — Pharma, Lifestyle & Sneakers — Aix-en-Provence",
  description:
    "Découvrez l'intégralité des catalogues Scholl SS26 disponibles à Aix-en-Provence : Pharma Femme/Homme, Lifestyle Femme/Homme, Pescura et Pharma Sneakers. Technologies Bioprint® et Memory Cushion®.",
  keywords: [
    "catalogue Scholl SS26 France",
    "chaussures Scholl Pharma Aix",
    "Scholl Lifestyle Femme 2026",
    "Scholl Sneakers médicaux",
    "Scholl Bioprint Aix-en-Provence",
    "chaussures orthopédiques Aix",
    "Pescura Scholl France",
  ],
  alternates: { canonical: "https://mmaixoise.fr/catalogues" },
  openGraph: {
    title: "Catalogues Scholl SS26 — Maison Médicale Aixoise",
    description: "300+ modèles Scholl SS26 disponibles à Aix-en-Provence. Pharma, Lifestyle, Sneakers avec Bioprint® et Memory Cushion®.",
    url: "https://mmaixoise.fr/catalogues",
    type: "website",
  },
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

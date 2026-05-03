import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { siteData } from "@/data/site-data";
import { CheckCircle2 } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matériel Médical & Orthopédie Aix-en-Provence — Nos Services",
  description:
    "Orthopédie, semelles sur mesure, location lit médicalisé, fauteuil roulant, monte-escalier et maintien à domicile à Aix-en-Provence. Marques Gibaud, Thuasne, Invacare, Scholl.",
  keywords: [
    "orthopédie Aix-en-Provence",
    "location lit médicalisé 13100",
    "fauteuil roulant Aix",
    "semelles orthopédiques sur mesure Aix",
    "monte-escalier Aix-en-Provence",
    "maintien à domicile Aix",
    "orthèse Gibaud Aix",
    "orthèse Thuasne Aix",
  ],
  alternates: { canonical: "https://mmaixoise.fr/services" },
  openGraph: {
    title: "Matériel Médical & Services Orthopédiques — Maison Médicale Aixoise",
    description:
      "Tous nos services : orthopédie, lits médicalisés, fauteuils roulants, orthèses Gibaud/Thuasne à Aix-en-Provence.",
    url: "https://mmaixoise.fr/services",
    type: "website",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://mmaixoise.fr" },
    { "@type": "ListItem", "position": 2, "name": "Nos Services", "item": "https://mmaixoise.fr/services" },
  ],
};

const servicesItemsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services Maison Médicale Aixoise",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Orthopédie & Semelles sur Mesure Aix-en-Provence", "url": "https://mmaixoise.fr/services#orthopédie" },
    { "@type": "ListItem", "position": 2, "name": "Location Lit Médicalisé Aix-en-Provence", "url": "https://mmaixoise.fr/services#location" },
    { "@type": "ListItem", "position": 3, "name": "Vente Fauteuil Roulant Aix-en-Provence", "url": "https://mmaixoise.fr/services#fauteuil" },
    { "@type": "ListItem", "position": 4, "name": "Maintien à Domicile 13100", "url": "https://mmaixoise.fr/services#domicile" },
    { "@type": "ListItem", "position": 5, "name": "Chaussures Médicales Scholl SS26", "url": "https://mmaixoise.fr/services#scholl" },
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 bg-sage-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemsSchema) }} />
      <Navbar />
      <div className="py-20 text-center bg-medical-accent text-white">
         <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Expertises</h1>
         <p className="text-neon-green font-black uppercase tracking-[0.5em] text-xs">Solutions Médicales & Orthopédiques</p>
      </div>
      <Services />
      
      {/* Detailed Services list from PDF logic */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-4xl font-black text-medical-accent mb-16 uppercase tracking-tighter text-center">Nos Domaines d&apos;Intervention</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: "Orthopédie de Pointe", items: ["Bilan podologique complet", "Semelles Scholl sur mesure", "Technologie Bioprint® intégrée", "Suivi post-appareillage"] },
                { title: "Matériel Médical", items: ["Location de lits médicalisés", "Vente de fauteuils roulants", "Installation de monte-escaliers", "Maintenance certifiée"] },
                { title: "Maintien à Domicile", items: ["Aménagement de salle de bain", "Aides techniques quotidiennes", "Conseil en autonomie", "Livraison urgente Aix"] },
                { title: "Espace Scholl Pro", items: ["Chaussures certifiées Pharma", "Équipement pour blocs opératoires", "Hygiène et protection", "Gamme Energystep Active"] }
              ].map((box, i) => (
                <div key={i} className="bg-sage-bg p-12 rounded-[3rem] border-4 border-medical-accent/5">
                   <h3 className="text-2xl font-black text-medical-accent mb-8 uppercase tracking-tight italic underline decoration-neon-green decoration-4">{box.title}</h3>
                   <ul className="space-y-4">
                      {box.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-medical-accent/60 font-bold">
                           <CheckCircle2 className="text-neon-green" size={20} />
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>

           <div className="mt-32">
              <h3 className="text-xl font-black text-neon-green mb-12 uppercase tracking-[0.4em] text-center italic">Marques & Partenaires Officiels</h3>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                 {siteData.brandCategories.flatMap(cat => cat.brands).map((brand) => (
                    <div key={brand} className="px-8 py-4 bg-medical-accent/5 rounded-2xl border-2 border-medical-accent/10 hover:border-neon-green transition-all group">
                       <span className="text-medical-accent/40 font-black text-[10px] sm:text-xs uppercase tracking-widest group-hover:text-medical-accent transition-colors">{brand}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

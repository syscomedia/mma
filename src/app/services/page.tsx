import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { siteData } from "@/data/site-data";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matériel médical à Aix-en-Provence | Vente & location",
  description:
    "Découvrez notre magasin de matériel médical à Aix-en-Provence : lits médicalisés, fauteuils roulants, maintien à domicile, orthopédie et équipements médicaux.",
  keywords: [
    "maintien à domicile Aix-en-Provence",
    "matériel maintien à domicile Aix",
    "aide à domicile médicalisée Aix-en-Provence",
    "autonomie senior Aix-en-Provence",
    "matériel senior Aix",
    "soins à domicile Aix-en-Provence",
    "lit médicalisé Aix-en-Provence",
    "location lit médicalisé Aix",
    "aide mobilité senior Aix",
    "fauteuil roulant Aix-en-Provence",
    "location fauteuil roulant Aix",
    "déambulateur Aix-en-Provence",
    "canne de marche Aix",
    "scooter handicap Aix-en-Provence",
    "matériel handicap Aix",
    "équipement PMR Aix-en-Provence",
    "chaise roulante Aix",
    "rampe handicap Aix-en-Provence",
    "orthopédie Aix-en-Provence",
    "matériel orthopédique Aix",
    "attelle Aix-en-Provence",
    "ceinture lombaire Aix",
    "genouillère médicale Aix",
    "bas de contention Aix-en-Provence",
    "semelles orthopédiques Aix",
    "matériel infirmier Aix-en-Provence",
    "fournisseur médical infirmier Aix",
    "consommables médicaux Aix",
    "matériel médical professionnel Aix",
    "équipement cabinet infirmier Aix-en-Provence",
    "où acheter du matériel médical à Aix-en-Provence",
    "meilleur magasin de matériel médical Aix",
    "location de matériel médical Aix-en-Provence",
    "livraison matériel médical Aix",
    "matériel médical ouvert aujourd’hui Aix-en-Provence",
    "matériel médical proche centre-ville Aix",
    "magasin médical près de La Duranne",
    "matériel médical Jas de Bouffan",
    "matériel médical Les Milles",
    "matériel médical Luynes"
  ],
  alternates: { canonical: "https://maisonmedicaleaixoise.com/services" },
  openGraph: {
    title: "Matériel médical à Aix-en-Provence | Vente & location",
    description:
      "Découvrez notre magasin de matériel médical à Aix-en-Provence : lits médicalisés, fauteuils roulants, maintien à domicile, orthopédie et équipements médicaux.",
    url: "https://maisonmedicaleaixoise.com/services",
    type: "website",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://maisonmedicaleaixoise.com" },
    { "@type": "ListItem", "position": 2, "name": "Nos Services", "item": "https://maisonmedicaleaixoise.com/services" },
  ],
};

const servicesItemsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services Matériel Médical Aixoise",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Orthopédie & Semelles sur Mesure Aix-en-Provence", "url": "https://maisonmedicaleaixoise.com/services#orthopédie" },
    { "@type": "ListItem", "position": 2, "name": "Location Lit Médicalisé Aix-en-Provence", "url": "https://maisonmedicaleaixoise.com/services#location" },
    { "@type": "ListItem", "position": 3, "name": "Vente Fauteuil Roulant Aix-en-Provence", "url": "https://maisonmedicaleaixoise.com/services#fauteuil" },
    { "@type": "ListItem", "position": 4, "name": "Maintien à Domicile Aix-en-Provence", "url": "https://maisonmedicaleaixoise.com/services#domicile" },
    { "@type": "ListItem", "position": 5, "name": "Matériel Infirmier Aix-en-Provence", "url": "https://maisonmedicaleaixoise.com/services#infirmier" },
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
        <p className="text-medical-green font-black uppercase tracking-[0.5em] text-xs">Solutions Médicales & Orthopédiques</p>
      </div>
      <Services />

      {/* Detailed Services list from PDF logic */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-medical-accent mb-16 uppercase tracking-tighter text-center">Nos Domaines d&apos;Intervention à Aix</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Maintien à Domicile",
                items: ["Maintien à domicile Aix-en-Provence", "Matériel maintien à domicile Aix", "Aide à domicile médicalisée Aix-en-Provence", "Autonomie senior Aix-en-Provence", "Matériel senior Aix", "Soins à domicile Aix-en-Provence", "Lit médicalisé Aix-en-Provence", "Location lit médicalisé Aix", "Aide mobilité senior Aix"]
              },
              {
                title: "Mobilité & Handicap",
                items: ["Fauteuil roulant Aix-en-Provence", "Location fauteuil roulant Aix", "Déambulateur Aix-en-Provence", "Canne de marche Aix", "Scooter handicap Aix-en-Provence", "Matériel handicap Aix", "Équipement PMR Aix-en-Provence", "Chaise roulante Aix", "Rampe handicap Aix-en-Provence"]
              },
              {
                title: "Orthopédie",
                items: ["Orthopédie Aix-en-Provence", "Matériel orthopédique Aix", "Attelle Aix-en-Provence", "Ceinture lombaire Aix", "Genouillère médicale Aix", "Bas de contention Aix-en-Provence", "Semelles orthopédiques Aix"]
              },
              {
                title: "Diagnostic & Soins",
                items: ["Tensiomètre", "Oxymètre", "Thermomètre médical", "Glucomètre", "Stétho\u00ADscope", "Matériel de diagnostic", "Équipement de soins", "Pansements médicaux"]
              },
              {
                title: "Hygiène & Protection",
                items: ["Gants médicaux", "Masques chirurgicaux", "Désinfection médicale", "Produits d’hygiène médicale", "Protections médicales"]
              },
              {
                title: "Infirmiers & Pro",
                items: ["Matériel infirmier Aix-en-Provence", "Fournisseur médical infirmier Aix", "Consommables médicaux Aix", "Matériel médical professionnel Aix", "Équipement cabinet infirmier Aix-en-Provence"]
              }
            ].map((box, i) => (
              <div key={i} className="bg-sage-bg p-8 rounded-[2.5rem] border-4 border-medical-accent/5 hover:border-medical-green transition-colors duration-300">
                <h3 className="text-xl font-black text-medical-accent mb-6 uppercase tracking-tight italic underline decoration-medical-green decoration-4">{box.title}</h3>
                <ul className="space-y-3">
                  {box.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-medical-accent/70 font-bold text-sm">
                      <CheckCircle2 className="text-medical-green shrink-0 mt-0.5" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-32">
            <h3 className="text-xl font-black text-medical-green mb-12 uppercase tracking-[0.4em] text-center italic">Marques & Partenaires Officiels</h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {siteData.brandCategories.flatMap(cat => cat.brands).map((brand) => (
                <div key={brand.name} className="h-16 px-6 bg-white rounded-2xl border-2 border-medical-accent/10 hover:border-medical-green transition-all group flex items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300" style={{ minWidth: 100 }}>
                  {brand.logo ? (
                    <img src={brand.logo} alt={`Logo ${brand.name}`} className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300" style={{ width: 'auto', height: '30px' }} />
                  ) : (
                    <span className="text-medical-accent/40 font-black text-[10px] sm:text-xs uppercase tracking-widest group-hover:text-medical-accent transition-colors text-center">{brand.name}</span>
                  )}
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

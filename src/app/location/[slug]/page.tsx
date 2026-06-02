import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/site-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, Info } from "lucide-react";
import { getProductSlug } from "@/lib/slug";

const BASE = "https://maisonmedicaleaixoise.com";

const categoryMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  "materiel-medical": {
    title: "Location Matériel Médical Aix-en-Provence | Lits, Fauteuils Roulants",
    description: "Location courte et longue durée de lits médicalisés, fauteuils roulants et matelas anti-escarres à Aix-en-Provence. Livraison à domicile 13100. Matériel Médical Aixoise.",
    keywords: ["location lit médicalisé Aix-en-Provence", "location fauteuil roulant Aix", "location matériel médical domicile 13100", "location matelas anti-escarres Marseille", "location matériel médical France"],
  },
  "oxygenotherapie": {
    title: "Location Concentrateur Oxygène Aix-en-Provence | Oxygénothérapie",
    description: "Location de concentrateurs d'oxygène et matériel d'oxygénothérapie à Aix-en-Provence. Livraison et installation à domicile. Matériel Médical Aixoise.",
    keywords: ["location concentrateur oxygène Aix-en-Provence", "oxygénothérapie domicile Aix", "location oxygène médical 13100", "concentrateur oxygène Marseille", "oxygénothérapie domicile France"],
  },
  "services-sur-mesure": {
    title: "Services Médicaux Sur Mesure Aix-en-Provence | Accompagnement Santé",
    description: "Accompagnement personnalisé et solutions médicales sur mesure à Aix-en-Provence. Service à domicile pour particuliers et professionnels de santé. Matériel Médical Aixoise.",
    keywords: ["service médical sur mesure Aix", "accompagnement santé domicile Aix-en-Provence", "service médical personnalisé 13100", "aide à domicile Marseille", "service médical France"],
  },
  "la-respiration": {
    title: "Location Matériel Respiratoire Aix-en-Provence | Aérosols, Aspirateurs",
    description: "Location d'aérosols, aspirateurs trachéaux et matériel d'assistance respiratoire à Aix-en-Provence. Livraison à domicile 13100. Matériel Médical Aixoise.",
    keywords: ["location matériel respiratoire Aix", "location aérosol médical Aix-en-Provence", "aspirateur trachéal 13100", "matériel respiration Marseille", "location respiratoire France"],
  },
  "tire-lait": {
    title: "Location Tire-Lait Aix-en-Provence | Tire-Laits Hospitaliers",
    description: "Location de tire-laits électriques de qualité hospitalière à Aix-en-Provence. Livraison rapide à domicile. Matériel Médical Aixoise au Parc de la Duranne.",
    keywords: ["location tire-lait Aix-en-Provence", "tire-lait hospitalier Aix", "location tire-lait électrique 13100", "location tire-lait Marseille", "tire-lait hospitalier France"],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = categoryMeta[slug];
  if (!meta) return { title: "Location Matériel Médical | Matériel Médical Aixoise" };
  return {
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords, "matériel médical Aix-en-Provence", "Matériel Médical Aixoise"],
    alternates: { canonical: `${BASE}/location/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${BASE}/location/${slug}`,
      siteName: "Matériel Médical Aixoise",
      locale: "fr_FR",
      type: "website",
      images: [{ url: "/assets/centre.png", width: 1200, height: 630, alt: meta.title }],
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Map slug to catalogue id
  const catalogueIdMap: Record<string, string> = {
    "materiel-medical": "materiel-medical-location",
    "oxygenotherapie": "oxygenotherapie-location",
    "services-sur-mesure": "services-sur-mesure-location",
    "la-respiration": "la-respiration-location",
    "tire-lait": "tire-lait-location",
    // Add more mappings here as other pages are scraped
  };

  const catalogueId = catalogueIdMap[slug];
  const catalogue = siteData.catalogues.find((c) => c.id === catalogueId);

  if (!catalogue) {
    // We can show a coming soon or not found
    return (
      <main className="min-h-screen pt-24 bg-sage-bg">
        <Navbar />
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl md:text-6xl font-black text-medical-accent uppercase tracking-tighter mb-6 text-center">
            BIENTÔT <span className="text-medical-green">DISPONIBLE</span>
          </h1>
          <p className="text-medical-accent/60 font-medium text-center max-w-2xl">
            Les informations pour la catégorie "{slug}" seront bientôt disponibles sur notre site. 
            N'hésitez pas à nous contacter directement pour plus de détails.
          </p>
        </div>
        <Footer />
      </main>
    );
  }

  const meta = categoryMeta[slug];
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE },
      { "@type": "ListItem", "position": 2, "name": "Location", "item": `${BASE}/location` },
      { "@type": "ListItem", "position": 3, "name": meta?.title ?? catalogue.name, "item": `${BASE}/location/${slug}` },
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": catalogue.name,
    "description": catalogue.description,
    "url": `${BASE}/location/${slug}`,
    "numberOfItems": catalogue.products.length,
    "itemListElement": catalogue.products.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": p.name,
      "url": `${BASE}/produit/${getProductSlug(p.name)}`,
    }))
  };

  return (
    <main className="min-h-screen pt-24 bg-sage-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Navbar />

      <section className="pt-12 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl sm:text-6xl md:text-[6rem] font-black text-medical-accent leading-[0.85] tracking-tighter uppercase mb-6">
              {catalogue.name.split(" ").slice(0, -2).join(" ")} <br />
              <span className="text-medical-green">{catalogue.name.split(" ").slice(-2).join(" ")}</span>
            </h2>
            <p className="text-medical-accent/70 text-lg md:text-xl font-medium">
              {catalogue.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {catalogue.products.map((product, i) => (
              <div
                key={`${product.name}-${i}`}
                className="bg-white rounded-[4rem] border-4 border-medical-accent/5 hover:border-medical-green transition-all shadow-2xl group overflow-hidden flex flex-col"
              >
                <div className="relative aspect-square bg-sage-dark overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-medical-accent/5 group-hover:bg-transparent transition-all" />

                  {/* Tech Badge */}
                  <div className="absolute top-8 left-8 flex flex-col gap-2">
                    <span className="px-4 py-1.5 bg-black text-medical-green rounded-full text-[8px] font-black uppercase tracking-widest shadow-2xl w-fit">
                      {product.tech}
                    </span>
                  </div>
                </div>

                <div className="p-8 sm:p-10 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-black text-medical-green uppercase tracking-widest">{product.brand}</span>
                      <a href={`/produit/${getProductSlug(product.name)}`}>
                        <h3 className="text-xl sm:text-2xl font-black text-medical-accent hover:text-medical-green transition-colors leading-tight uppercase">
                          {product.name}
                        </h3>
                      </a>
                    </div>
                    <a href={`/produit/${getProductSlug(product.name)}`} className="text-medical-accent/20 hover:text-medical-green transition-colors">
                      <Info size={20} />
                    </a>
                  </div>

                  <p className="text-sm text-medical-accent/60 mb-6 italic flex-1">
                    {'longDescription' in product ? product.longDescription : ''}
                  </p>

                  <a 
                    href={`/produit/${getProductSlug(product.name)}`}
                    className="w-full bg-sage-bg text-medical-accent py-4 sm:py-5 rounded-[1.5rem] sm:rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] hover:bg-medical-green hover:shadow-[0_15px_30px_-10px_rgba(57,255,20,0.5)] transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <CheckCircle2 className="text-medical-green group-hover/btn:text-medical-accent" size={16} />
                    Louer / Devis
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

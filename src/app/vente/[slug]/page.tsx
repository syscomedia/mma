import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/site-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { getProductSlug } from "@/lib/slug";

const BASE = "https://maisonmedicaleaixoise.com";

const categoryMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  "la-marche": {
    title: "Aides à la Marche Aix-en-Provence | Déambulateurs, Rollators, Cannes",
    description: "Vente de déambulateurs, rollators et cannes de marche à Aix-en-Provence. Matériel certifié, livraison rapide 13100. Matériel Médical Aixoise.",
    keywords: ["déambulateur Aix-en-Provence", "rollator Aix", "canne marche 13100", "aide à la marche Marseille", "déambulateur France"],
  },
  "la-mobilite": {
    title: "Fauteuils Roulants & Mobilité Aix-en-Provence | Vente & Location",
    description: "Fauteuils roulants manuels et électriques, scooters de mobilité à Aix-en-Provence. Vente et location. Matériel Médical Aixoise, La Duranne.",
    keywords: ["fauteuil roulant Aix-en-Provence", "fauteuil roulant électrique Aix", "scooter mobilité 13100", "fauteuil roulant Marseille", "fauteuil roulant France"],
  },
  "la-respiration": {
    title: "Matériel Respiratoire Aix-en-Provence | Aérosols, Nébuliseurs",
    description: "Vente de matériel respiratoire à Aix-en-Provence : aérosolthérapie, nébuliseurs et assistants respiratoires. Livraison 13100. Matériel Médical Aixoise.",
    keywords: ["matériel respiratoire Aix-en-Provence", "nébuliseur Aix", "aérosol médical 13100", "matériel respiration Marseille", "nébuliseur France"],
  },
  "autour-du-lit-et-repos": {
    title: "Lits Médicalisés & Repos Aix-en-Provence | Vente & Location",
    description: "Lits médicalisés, tables de lit et accessoires de confort à Aix-en-Provence. Vente et location. Matériel Médical Aixoise au Parc de la Duranne.",
    keywords: ["lit médicalisé Aix-en-Provence", "lit médicalisé vente Aix", "table de lit 13100", "lit médical Marseille", "lit médicalisé France"],
  },
  "hygiene": {
    title: "Matériel Hygiène Médical Aix-en-Provence | Sièges Douche, Chaises",
    description: "Sièges de douche, chaises garde-robe, rehausses WC à Aix-en-Provence. Vente de matériel d'hygiène certifié. Matériel Médical Aixoise.",
    keywords: ["siège douche Aix-en-Provence", "chaise garde-robe Aix", "rehausse WC 13100", "hygiène médical Marseille", "matériel hygiène France"],
  },
  "incontinence": {
    title: "Produits Incontinence Aix-en-Provence | Protections, Alèses",
    description: "Protections absorbantes et alèses médicales à Aix-en-Provence. Large choix de produits d'incontinence certifiés. Matériel Médical Aixoise.",
    keywords: ["produits incontinence Aix-en-Provence", "protection incontinence Aix", "alèse médicale 13100", "incontinence Marseille", "protection incontinence France"],
  },
  "aides-techniques": {
    title: "Aides Techniques Médicales Aix-en-Provence | Accessoires Autonomie",
    description: "Accessoires d'aide au repas, habillement et préhension à Aix-en-Provence. Matériel d'autonomie certifié. Matériel Médical Aixoise.",
    keywords: ["aides techniques Aix-en-Provence", "accessoires autonomie Aix", "aide préhension 13100", "aides techniques Marseille", "accessoires autonomie France"],
  },
  "maintien-postural": {
    title: "Maintien Postural Aix-en-Provence | Coussins, Cales Anatomiques",
    description: "Coussins de positionnement et cales anatomiques à Aix-en-Provence. Vente de matériel de maintien postural certifié. Matériel Médical Aixoise.",
    keywords: ["coussin positionnement Aix-en-Provence", "maintien postural Aix", "cale anatomique 13100", "coussin médical Marseille", "positionnement médical France"],
  },
  "au-quotidien": {
    title: "Matériel Médical Quotidien Aix-en-Provence | Objets Ergonomiques",
    description: "Objets ergonomiques et accessoires du quotidien médical à Aix-en-Provence. Confort et autonomie au quotidien. Matériel Médical Aixoise.",
    keywords: ["matériel quotidien Aix-en-Provence", "accessoire ergonomique Aix", "autonomie quotidienne 13100", "matériel médical domicile Marseille"],
  },
  "materiel-professionnel": {
    title: "Matériel Professionnel Médical Aix-en-Provence | Consommables Santé",
    description: "Consommables et matériel professionnel pour soignants à Aix-en-Provence. Vente en gros et au détail. Matériel Médical Aixoise.",
    keywords: ["matériel professionnel médical Aix", "consommables médicaux Aix-en-Provence", "matériel soignant 13100", "consommables médicaux Marseille", "matériel médical pro France"],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = categoryMeta[slug];
  if (!meta) return { title: "Vente Matériel Médical | Matériel Médical Aixoise" };
  return {
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords, "matériel médical Aix-en-Provence", "Matériel Médical Aixoise"],
    alternates: { canonical: `${BASE}/vente/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${BASE}/vente/${slug}`,
      siteName: "Matériel Médical Aixoise",
      locale: "fr_FR",
      type: "website",
      images: [{ url: "/assets/centre.png", width: 1200, height: 630, alt: meta.title }],
    },
  };
}

export default async function VentePage({ 
  params,
  searchParams 
}: { 
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const ITEMS_PER_PAGE = 12;

  // Map slug to catalogue id
  const catalogueIdMap: Record<string, string> = {
    "la-marche": "la-marche-vente",
    "la-mobilite": "la-mobilite-vente",
    "la-respiration": "la-respiration-vente",
    "autour-du-lit-et-repos": "autour-du-lit-et-repos-vente",
    "hygiene": "hygiene-vente",
    "incontinence": "incontinence-vente",
    "aides-techniques": "aides-techniques-vente",
    "maintien-postural": "maintien-postural-vente",
    "au-quotidien": "au-quotidien-vente",
    "materiel-professionnel": "materiel-professionnel-vente",
    // We will add mappings here as we scrape the pages
  };

  const catalogueId = catalogueIdMap[slug];
  const catalogue = siteData.catalogues.find((c) => c.id === catalogueId);

  if (!catalogue) {
    // Show coming soon if not scraped yet
    return (
      <main className="min-h-screen pt-24 bg-sage-bg">
        <Navbar />
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl md:text-6xl font-black text-medical-accent uppercase tracking-tighter mb-6 text-center">
            BIENTÔT <span className="text-medical-green">DISPONIBLE</span>
          </h1>
          <p className="text-medical-accent/60 font-medium text-center max-w-2xl">
            Les informations pour la catégorie de vente "{slug.replace(/-/g, ' ')}" seront bientôt disponibles sur notre site. 
            N'hésitez pas à nous contacter directement pour plus de détails.
          </p>
        </div>
        <Footer />
      </main>
    );
  }

  const totalPages = Math.ceil(catalogue.products.length / ITEMS_PER_PAGE);
  const paginatedProducts = catalogue.products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getPageNumbers = (curr: number, total: number) => {
    const pages: (number | string)[] = [];
    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      const start = Math.max(2, curr - 1);
      const end = Math.min(total - 1, curr + 1);
      if (start > 2) pages.push("...");
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (end < total - 1) pages.push("...");
      pages.push(total);
    }
    return pages;
  };

  const meta = categoryMeta[slug];
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE },
      { "@type": "ListItem", "position": 2, "name": "Vente", "item": `${BASE}/vente` },
      { "@type": "ListItem", "position": 3, "name": meta?.title ?? catalogue.name, "item": `${BASE}/vente/${slug}` },
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": catalogue.name,
    "description": catalogue.description,
    "url": `${BASE}/vente/${slug}`,
    "numberOfItems": catalogue.products.length,
    "itemListElement": paginatedProducts.map((p, i) => ({
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
            {paginatedProducts.map((product, i) => (
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
                    {'longDescription' in product ? (product as any).longDescription : ''}
                  </p>

                  <a 
                    href={`/produit/${getProductSlug(product.name)}`}
                    className="w-full bg-sage-bg text-medical-accent py-4 sm:py-5 rounded-[1.5rem] sm:rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] hover:bg-medical-green hover:shadow-[0_15px_30px_-10px_rgba(57,255,20,0.5)] transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <CheckCircle2 className="text-medical-green group-hover/btn:text-medical-accent" size={16} />
                    Acheter / Devis
                  </a>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 sm:gap-4 mt-24">
              {currentPage > 1 && (
                <a
                  href={`/vente/${slug}?page=${currentPage - 1}`}
                  className="w-14 h-14 rounded-[1.5rem] flex items-center justify-center font-black bg-white text-medical-accent hover:bg-sage-bg border-2 border-medical-accent/5 hover:scale-105 transition-all"
                  aria-label="Page précédente"
                >
                  <ChevronLeft size={20} />
                </a>
              )}
              {getPageNumbers(currentPage, totalPages).map((pageVal, i) => {
                if (pageVal === "...") {
                  return (
                    <span
                      key={`dots-${i}`}
                      className="w-10 h-14 flex items-center justify-center font-black text-medical-accent/40"
                    >
                      ...
                    </span>
                  );
                }
                const pageNum = pageVal as number;
                return (
                  <a
                    key={pageNum}
                    href={`/vente/${slug}?page=${pageNum}`}
                    className={`w-14 h-14 rounded-[1.5rem] flex items-center justify-center font-black transition-all ${
                      currentPage === pageNum 
                        ? 'bg-medical-green text-white shadow-[0_15px_30px_-10px_rgba(57,255,20,0.5)] scale-110' 
                        : 'bg-white text-medical-accent hover:bg-sage-bg hover:scale-105 border-2 border-medical-accent/5'
                    }`}
                  >
                    {pageNum}
                  </a>
                );
              })}
              {currentPage < totalPages && (
                <a
                  href={`/vente/${slug}?page=${currentPage + 1}`}
                  className="w-14 h-14 rounded-[1.5rem] flex items-center justify-center font-black bg-white text-medical-accent hover:bg-sage-bg border-2 border-medical-accent/5 hover:scale-105 transition-all"
                  aria-label="Page suivante"
                >
                  <ChevronRight size={20} />
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

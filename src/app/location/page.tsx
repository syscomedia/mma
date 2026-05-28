import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/site-data";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Info, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getProductSlug } from "@/lib/slug";

export default async function LocationIndexPage({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const ITEMS_PER_PAGE = 12;

  const locationCategories = [
    { slug: "materiel-medical", name: "Matériel Médical", desc: "Lits médicalisés, fauteuils roulants, matelas anti-escarres.", emoji: "🛏️", image: "/assets/scraped/lit-location-ecofit-alzheimer.jpg" },
    { slug: "oxygenotherapie", name: "Oxygénothérapie", desc: "Concentrateurs d'oxygène, matériel respiratoire à domicile.", emoji: "🫁", image: "/assets/scraped/concentrateur-oxygene-525-ks-450x450.jpg" },
    { slug: "services-sur-mesure", name: "Services sur Mesure", desc: "Accompagnement personnalisé et solutions sur-mesure.", emoji: "🤝", image: "/assets/scraped/services-sur-mesure.jpg" },
    { slug: "la-respiration", name: "La Respiration", desc: "Aérosols, aspirateurs de mucosités, assistance respiratoire.", emoji: "💨", image: "/assets/scraped/aspirateur-tracheal-de-mucosites-portable-flaem-450x450.jpg" },
    { slug: "tire-lait", name: "Tire-lait", desc: "Tire-laits électriques de qualité hospitalière pour l'allaitement.", emoji: "🍼", image: "/assets/scraped/tire-lait-en-location-1-450x450.jpg" },
  ];

  const locationCatalogueIds = [
    "materiel-medical-location",
    "oxygenotherapie-location",
    "services-sur-mesure-location",
    "la-respiration-location",
    "tire-lait-location"
  ];

  // Get all unique products in location catalogues
  const seenProducts = new Set<string>();
  const allLocationProducts = siteData.catalogues
    .filter(cat => locationCatalogueIds.includes(cat.id))
    .flatMap(cat => cat.products)
    .filter(product => {
      if (seenProducts.has(product.name)) {
        return false;
      }
      seenProducts.add(product.name);
      return true;
    });

  const totalPages = Math.ceil(allLocationProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = allLocationProducts.slice(
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

  return (
    <main className="min-h-screen pt-24 bg-sage-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="px-4 py-1.5 bg-medical-accent text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl w-fit inline-block mb-6">
                Location de Matériel
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] xl:text-[6.5rem] font-black text-medical-accent leading-[0.85] tracking-tighter uppercase mb-8">
                Location <br />
                <span className="text-medical-green">Matériel Médical</span>
              </h1>
              <p className="text-medical-accent/70 text-lg md:text-xl font-medium">
                Au quotidien nous mettons en œuvre l’écoute, le conseil, la disponibilité et les compétences nécessaires pour apporter notre aide au malade et à son entourage. Nous offrons une réelle prestation d'assistance dans la location de matériel médical à Aix-en-Provence et ses alentours.
              </p>
            </div>
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-square w-full rounded-[3.5rem] border-4 border-medical-accent/5 overflow-hidden shadow-2xl hidden lg:block">
              <Image
                src="/assets/scraped/location_hero.png"
                alt="Matériel Médical en Location"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-medical-accent/15 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 bg-white/40 backdrop-blur-md border-y border-medical-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-medical-accent uppercase tracking-wider mb-8">
            Catégories de Location
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {locationCategories.map((cat) => (
              <Link 
                key={cat.slug} 
                href={`/location/${cat.slug}`}
                className="bg-white rounded-[2rem] border-2 border-medical-accent/5 hover:border-medical-green p-6 transition-all group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="text-4xl mb-4">{cat.emoji}</div>
                  <h3 className="text-lg font-black text-medical-accent uppercase group-hover:text-medical-green transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-medical-accent/60 line-clamp-3">
                    {cat.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-medical-green font-black text-[9px] uppercase tracking-widest mt-6">
                  Découvrir <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-medical-accent uppercase tracking-tight">
                Tous nos produits <span className="text-medical-green">à la louer</span>
              </h2>
              <p className="text-medical-accent/60 mt-2 font-medium">
                Découvrez la sélection complète d'équipements médicaux disponibles immédiatement à la location.
              </p>
            </div>
            <div className="text-xs font-black text-medical-accent/50 uppercase tracking-widest bg-white px-6 py-3 rounded-full border border-medical-accent/5">
              {allLocationProducts.length} Produits disponibles
            </div>
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
                        <h3 className="text-xl sm:text-2xl font-black text-medical-accent hover:text-medical-green transition-colors leading-tight uppercase line-clamp-2 min-h-[3rem]">
                          {product.name}
                        </h3>
                      </a>
                    </div>
                    <a href={`/produit/${getProductSlug(product.name)}`} className="text-medical-accent/20 hover:text-medical-green transition-colors">
                      <Info size={20} />
                    </a>
                  </div>

                  <p className="text-sm text-medical-accent/60 mb-6 italic flex-1 line-clamp-3">
                    {(product as any).longDescription || ''}
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

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 sm:gap-4 mt-24">
              {currentPage > 1 && (
                <Link
                  href={`/location?page=${currentPage - 1}`}
                  className="w-14 h-14 rounded-[1.5rem] flex items-center justify-center font-black bg-white text-medical-accent hover:bg-sage-bg border-2 border-medical-accent/5 hover:scale-105 transition-all"
                  aria-label="Page précédente"
                >
                  <ChevronLeft size={20} />
                </Link>
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
                  <Link
                    key={pageNum}
                    href={`/location?page=${pageNum}`}
                    className={`w-14 h-14 rounded-[1.5rem] flex items-center justify-center font-black transition-all ${
                      currentPage === pageNum 
                        ? 'bg-medical-green text-white shadow-[0_15px_30px_-10px_rgba(57,255,20,0.5)] scale-110' 
                        : 'bg-white text-medical-accent hover:bg-sage-bg hover:scale-105 border-2 border-medical-accent/5'
                    }`}
                  >
                    {pageNum}
                  </Link>
                );
              })}
              {currentPage < totalPages && (
                <Link
                  href={`/location?page=${currentPage + 1}`}
                  className="w-14 h-14 rounded-[1.5rem] flex items-center justify-center font-black bg-white text-medical-accent hover:bg-sage-bg border-2 border-medical-accent/5 hover:scale-105 transition-all"
                  aria-label="Page suivante"
                >
                  <ChevronRight size={20} />
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

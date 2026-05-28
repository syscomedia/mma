import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/site-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, Info } from "lucide-react";
import { getProductSlug } from "@/lib/slug";

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

  return (
    <main className="min-h-screen pt-24 bg-sage-bg">
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

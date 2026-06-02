import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getProductBySlug, getProductSlug } from "@/lib/slug";
import { ProductDetailClient } from "@/components/ProductDetailClient";
import { siteData } from "@/data/site-data";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const BASE = "https://maisonmedicaleaixoise.com";

export async function generateMetadata({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produit Introuvable | MMA",
      description: "Le produit demandé n'existe pas ou a été déplacé.",
      robots: { index: false, follow: false },
    };
  }

  const description = product.longDescription ||
    `Découvrez ${product.name} de ${product.brand} chez Matériel Médical Aixoise. Vente et location d'équipements de santé certifiés à Aix-en-Provence, La Duranne.`;

  return {
    title: `${product.name} ${product.brand} | Matériel Médical Aixoise Aix-en-Provence`,
    description,
    keywords: [
      `${product.name}`,
      `${product.brand} Aix-en-Provence`,
      `${product.brand} France`,
      "matériel médical Aix-en-Provence",
      "matériel médical Marseille",
      "orthopédie Bouches-du-Rhône",
    ],
    alternates: { canonical: `${BASE}/produit/${slug}` },
    openGraph: {
      title: `${product.name} | Matériel Médical Aixoise`,
      description,
      url: `${BASE}/produit/${slug}`,
      siteName: "Matériel Médical Aixoise",
      locale: "fr_FR",
      type: "website",
      images: product.image
        ? [{ url: product.image, width: 800, height: 600, alt: product.name }]
        : [{ url: "/assets/centre.png", width: 1200, height: 630, alt: "Matériel Médical Aixoise" }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Find related products in the same catalogue
  let relatedProducts: Array<{ name: string; slug: string; brand: string; image: string; tech: string }> = [];
  
  // Find which catalogue contains this product
  const parentCatalogue = siteData.catalogues.find(cat => 
    cat.products.some(p => p.name.toLowerCase().trim() === product.name.toLowerCase().trim())
  );

  if (parentCatalogue) {
    relatedProducts = parentCatalogue.products
      .filter(p => p.name.toLowerCase().trim() !== product.name.toLowerCase().trim())
      .slice(0, 3)
      .map(p => ({
        name: p.name,
        slug: getProductSlug(p.name),
        brand: p.brand,
        image: p.image,
        tech: p.tech
      }));
  }

  // Fallback to any 3 products if we couldn't find enough in the same catalogue
  if (relatedProducts.length < 3) {
    const allProducts = siteData.catalogues.flatMap(cat => cat.products);
    const additional = allProducts
      .filter(p => p.name.toLowerCase().trim() !== product.name.toLowerCase().trim())
      .filter(p => !relatedProducts.some(r => r.name.toLowerCase().trim() === p.name.toLowerCase().trim()))
      .slice(0, 3 - relatedProducts.length)
      .map(p => ({
        name: p.name,
        slug: getProductSlug(p.name),
        brand: p.brand,
        image: p.image,
        tech: p.tech
      }));
    relatedProducts = [...relatedProducts, ...additional];
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "brand": { "@type": "Brand", "name": product.brand },
    "image": product.image ? `${BASE}${product.image}` : `${BASE}/assets/centre.png`,
    "description": product.longDescription || `${product.name} de ${product.brand} — disponible chez Matériel Médical Aixoise à Aix-en-Provence.`,
    "offers": {
      "@type": "Offer",
      "url": `${BASE}/produit/${slug}`,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "Matériel Médical Aixoise",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "70 Rue Alain Decaux",
          "addressLocality": "Aix-en-Provence",
          "postalCode": "13100",
          "addressCountry": "FR"
        }
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE },
      { "@type": "ListItem", "position": 2, "name": "Produits", "item": `${BASE}/products` },
      { "@type": "ListItem", "position": 3, "name": product.name, "item": `${BASE}/produit/${slug}` },
    ]
  };

  return (
    <main className="min-h-screen pt-24 bg-sage-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      <Footer />
    </main>
  );
}

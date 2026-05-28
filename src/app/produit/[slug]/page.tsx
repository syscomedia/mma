import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getProductBySlug, getProductSlug } from "@/lib/slug";
import { ProductDetailClient } from "@/components/ProductDetailClient";
import { siteData } from "@/data/site-data";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produit Introuvable | MMA",
      description: "Le produit demandé n'existe pas ou a été déplacé.",
    };
  }

  return {
    title: `${product.name} | Vente & Location Matériel Médical Aix`,
    description: product.longDescription || `Découvrez ${product.name} chez Matériel Médical Aixoise. Vente et location d'équipements de santé de haute qualité à Aix-en-Provence.`,
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

  return (
    <main className="min-h-screen pt-24 bg-sage-bg">
      <Navbar />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      <Footer />
    </main>
  );
}

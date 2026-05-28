import { siteData } from "@/data/site-data";
import productDetails from "@/data/product-details.json";

export interface ProductDetail {
  name: string;
  slug: string;
  link: string;
  description_html: string;
  gallery: string[];
  pdf_datasheets: Array<{ name: string; path: string }>;
  brand?: string;
  material?: string;
  colors?: string;
  tech?: string;
  image?: string;
  longDescription?: string;
}

// Generate a lookup map for fast name-to-slug conversion
const nameToSlugMap = new Map<string, string>();
Object.entries(productDetails).forEach(([slug, details]) => {
  nameToSlugMap.set((details as any).name.toLowerCase().trim(), slug);
});

export function getProductSlug(name: string): string {
  const normalized = name.toLowerCase().trim();
  const cachedSlug = nameToSlugMap.get(normalized);
  if (cachedSlug) return cachedSlug;
  
  // Fallback programmatic slugification
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function getProductBySlug(slug: string): ProductDetail | null {
  const details = (productDetails as any)[slug];
  if (!details) return null;
  
  // Find matching basic product from siteData
  const basicProduct = siteData.catalogues
    .flatMap(c => c.products)
    .find(p => p.name.toLowerCase().trim() === details.name.toLowerCase().trim());
    
  return {
    brand: "Divers",
    material: "Matériel médical",
    colors: "Standard",
    tech: "Innovation",
    image: details.gallery?.[0] || "",
    ...basicProduct,
    ...details
  };
}

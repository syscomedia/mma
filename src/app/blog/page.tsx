import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Santé & Orthopédie — Conseils Matériel Médical Aix-en-Provence",
  description:
    "Conseils d'experts en matériel médical, orthopédie et chaussures Scholl. Guide location lit médicalisé, choix orthèses Gibaud/Thuasne, semelles sur mesure à Aix-en-Provence.",
  keywords: [
    "blog matériel médical Aix",
    "conseils orthopédie Aix-en-Provence",
    "guide location lit médicalisé",
    "choisir chaussures Scholl",
    "orthèse Gibaud guide",
  ],
  alternates: { canonical: "https://mmaixoise.fr/blog" },
  openGraph: {
    title: "Blog Santé & Orthopédie — Matériel Médical Aixoise",
    description: "Conseils d'experts en matériel médical et orthopédie à Aix-en-Provence.",
    url: "https://mmaixoise.fr/blog",
    type: "website",
  },
};

const articles = [
  {
    slug: "comment-choisir-chaussures-scholl",
    title: "Comment choisir ses chaussures Scholl SS26 ?",
    description:
      "Guide complet pour choisir entre les gammes Pharma, Lifestyle et Sneakers Scholl. Différences entre Bioprint®, Memory Cushion® et Biomechanics®.",
    category: "Scholl & Confort",
    date: "2025-04-15",
    readTime: "5 min",
  },
  {
    slug: "location-lit-medicalise-aix-en-provence",
    title: "Location lit médicalisé à Aix-en-Provence : le guide complet",
    description:
      "Tout savoir sur la location d'un lit médicalisé à Aix-en-Provence : prix, remboursement Sécurité Sociale, livraison, modèles disponibles.",
    category: "Matériel Médical",
    date: "2025-04-22",
    readTime: "7 min",
  },
  {
    slug: "ortho-gibaud-thuasne-guide",
    title: "Pourquoi choisir une orthèse Gibaud ou Thuasne ?",
    description:
      "Comparatif complet des marques Gibaud et Thuasne pour genouillères, chevillères et ceintures lombaires. Quel produit pour quelle pathologie ?",
    category: "Orthopédie",
    date: "2025-04-29",
    readTime: "6 min",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-sage-bg">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog Matériel Médical Aixoise",
            "description": "Conseils en matériel médical, orthopédie et chaussures Scholl à Aix-en-Provence.",
            "url": "https://mmaixoise.fr/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Matériel Médical Aixoise",
              "url": "https://mmaixoise.fr",
            },
          }),
        }}
      />

      <div className="py-24 bg-medical-accent text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 text-[15rem] font-black text-white/[0.03] select-none pointer-events-none translate-x-1/4">BLOG</div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-medical-green/30 rounded-full text-medical-green font-black text-[10px] uppercase tracking-[0.4em] mb-10">
            <BookOpen size={14} />
            Conseils d&apos;Experts
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
            Santé & <span className="text-medical-green">Orthopédie</span>
          </h1>
          <p className="text-white/50 font-bold text-xl">
            Guides pratiques sur le matériel médical et l&apos;orthopédie à Aix-en-Provence
          </p>
        </div>
      </div>

      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
              <article className="bg-white rounded-[2.5rem] border-2 border-black/5 p-10 hover:border-medical-green transition-all shadow-xl h-full flex flex-col">
                <div className="inline-block px-4 py-1.5 bg-medical-green/10 text-medical-green text-[9px] font-black uppercase tracking-widest rounded-full mb-8">
                  {article.category}
                </div>
                <h2 className="text-xl font-black text-medical-accent mb-4 uppercase tracking-tight leading-tight flex-1">
                  {article.title}
                </h2>
                <p className="text-medical-accent/50 font-bold text-sm leading-relaxed mb-8">
                  {article.description}
                </p>
                <div className="flex items-center justify-between text-[10px] text-medical-accent/30 font-black uppercase tracking-widest">
                  <span>{article.readTime} de lecture</span>
                  <div className="flex items-center gap-1 text-medical-green group-hover:gap-3 transition-all">
                    Lire <ArrowRight size={12} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

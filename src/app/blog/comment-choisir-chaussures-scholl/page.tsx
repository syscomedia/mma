import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Comment Choisir ses Chaussures Scholl SS26 — Guide Expert Aix-en-Provence",
  description:
    "Guide complet pour choisir vos chaussures Scholl SS26 : différences Pharma vs Lifestyle vs Sneakers, technologies Bioprint® Memory Cushion® Biomechanics®. Disponibles à Aix-en-Provence.",
  keywords: [
    "choisir chaussures Scholl",
    "Scholl SS26 guide",
    "Scholl Pharma vs Lifestyle",
    "Bioprint Scholl explication",
    "chaussures orthopédiques Aix-en-Provence",
    "Memory Cushion Scholl",
    "semelles Scholl confort",
  ],
  alternates: { canonical: "https://mmaixoise.fr/blog/comment-choisir-chaussures-scholl" },
  openGraph: {
    title: "Comment Choisir ses Chaussures Scholl SS26 ?",
    description: "Guide expert sur les gammes Scholl SS26 avec les technologies Bioprint® et Memory Cushion®. Disponibles à Aix-en-Provence.",
    url: "https://mmaixoise.fr/blog/comment-choisir-chaussures-scholl",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Comment choisir ses chaussures Scholl SS26 ?",
  "description": "Guide complet pour choisir entre les gammes Pharma, Lifestyle et Sneakers Scholl SS26 avec les technologies Bioprint® et Memory Cushion®.",
  "author": { "@type": "Organization", "name": "Matériel Médical Aixoise" },
  "publisher": {
    "@type": "Organization",
    "name": "Matériel Médical Aixoise",
    "logo": { "@type": "ImageObject", "url": "https://mmaixoise.fr/assets/centre.png" },
  },
  "datePublished": "2025-04-15",
  "dateModified": "2025-04-15",
  "url": "https://mmaixoise.fr/blog/comment-choisir-chaussures-scholl",
  "mainEntityOfPage": "https://mmaixoise.fr/blog/comment-choisir-chaussures-scholl",
};

export default function ArticleScholl() {
  return (
    <main className="min-h-screen bg-sage-bg">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://mmaixoise.fr" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://mmaixoise.fr/blog" },
          { "@type": "ListItem", "position": 3, "name": "Choisir ses Chaussures Scholl SS26", "item": "https://mmaixoise.fr/blog/comment-choisir-chaussures-scholl" },
        ],
      }) }} />

      <div className="pt-32 pb-16 max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-medical-green font-black text-[10px] uppercase tracking-widest mb-12 hover:gap-4 transition-all">
          <ArrowLeft size={14} /> Retour au Blog
        </Link>

        <div className="inline-block px-4 py-1.5 bg-medical-green/10 text-medical-green text-[9px] font-black uppercase tracking-widest rounded-full mb-8">
          Scholl &amp; Confort
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-medical-accent uppercase tracking-tighter leading-tight mb-6">
          Comment choisir ses chaussures <span className="text-medical-green">Scholl SS26</span> ?
        </h1>
        <p className="text-medical-accent/50 font-bold text-lg mb-16 leading-relaxed">
          La collection Scholl SS26 regroupe plusieurs gammes aux usages bien distincts. Voici le guide de nos experts
          pour faire le bon choix selon votre morphologie et vos besoins.
        </p>

        <article className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-3xl font-black text-medical-accent uppercase tracking-tight mb-6">
              Les 3 technologies Scholl SS26
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { name: "Bioprint®", desc: "Soutien anatomique de la voûte plantaire. Idéal pour les personnes debout toute la journée ou en situation de travail intense." },
                { name: "Memory Cushion®", desc: "Amorti à mémoire de forme. Distribue homogènement la pression. Parfait pour le quotidien et les longues marches." },
                { name: "Biomechanics®", desc: "Contrôle du mouvement articulaire. Recommandé pour les personnes avec des douleurs de genoux ou de hanches." },
              ].map((tech) => (
                <div key={tech.name} className="bg-white p-8 rounded-[2rem] border-2 border-medical-green/20 shadow-xl">
                  <p className="text-medical-green font-black text-lg uppercase tracking-tight mb-3">{tech.name}</p>
                  <p className="text-medical-accent/60 font-bold text-sm leading-relaxed">{tech.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black text-medical-accent uppercase tracking-tight mb-6">
              Quelle gamme pour quel usage ?
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Scholl Pharma — Pour les professionnels de santé",
                  desc: "La gamme Pharma est conçue pour les environments médicaux (blocs opératoires, cliniques, pharmacies). Matériaux certifiés, semelles Bioprint®, design sobre. Modèles phares : Harmony 2 Straps, Boa Vista, Monterey 2 Straps.",
                },
                {
                  title: "Scholl Lifestyle Femme — Élégance au quotidien",
                  desc: "Combinaison de style et de confort avec Memory Cushion®. Pour les femmes actives qui ne veulent pas sacrifier le look. Modèles phares : Bora 2 Buckles, Gala Sandal, Pescura Heel.",
                },
                {
                  title: "Scholl Pharma Sneakers — Mobilité active",
                  desc: "Des baskets médicalement validées pour une mobilité quotidienne. Idéales pour les personnes âgées ou en rééducation. Technologie Biomechanics®. Modèles : Wind Step, Camden, New Sprinter.",
                },
                {
                  title: "Scholl Lifestyle Homme — Robustesse & Confort",
                  desc: "Modèles masculins en cuir et suède avec Bioprint®. Pour les hommes qui souhaitent un chaussage confortable au bureau comme en extérieur.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white p-10 rounded-[2rem] border-2 border-black/5 shadow-xl">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-medical-green mt-1 shrink-0" size={22} />
                    <div>
                      <h3 className="text-lg font-black text-medical-accent uppercase tracking-tight mb-3">{item.title}</h3>
                      <p className="text-medical-accent/60 font-bold text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black text-medical-accent uppercase tracking-tight mb-6">
              Comment prendre votre pointure Scholl ?
            </h2>
            <p className="text-medical-accent/60 font-bold leading-relaxed mb-4">
              Scholl recommande de mesurer votre pied en fin de journée, quand il est légèrement gonflé. Ajoutez 1 cm
              à votre longueur de pied pour obtenir votre pointure idéale. En cas de doute entre deux pointures,
              choisissez la plus grande.
            </p>
            <p className="text-medical-accent/60 font-bold leading-relaxed">
              Chez la Matériel Médical Aixoise, nos conseillers réalisent un bilan podologique complet pour vous
              orienter vers le modèle le mieux adapté à votre morphologie.
            </p>
          </section>

          <div className="bg-medical-accent text-white p-12 rounded-[3rem] border-4 border-medical-green/30">
            <div className="flex items-start gap-4">
              <MapPin className="text-medical-green shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                  Essayez les Scholl SS26 à Aix-en-Provence
                </h3>
                <p className="text-white/60 font-bold leading-relaxed mb-6">
                  Tous les modèles Scholl SS26 sont disponibles en magasin au <strong className="text-white">70 Rue Alain Decaux,
                  Parc de la Duranne, 13100 Aix-en-Provence</strong>. Venez essayer et bénéficier du conseil de nos experts.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-medical-green text-medical-accent px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}

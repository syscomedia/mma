import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Orthèse Gibaud ou Thuasne : Laquelle Choisir ? Guide Expert Aix-en-Provence",
  description:
    "Comparatif complet Gibaud vs Thuasne pour genouillères, chevillères, ceintures lombaires et poignets. Quel produit pour quelle pathologie ? Disponibles à Aix-en-Provence, Maison Médicale Aixoise.",
  keywords: [
    "orthèse Gibaud Aix-en-Provence",
    "orthèse Thuasne Aix",
    "genouillère Gibaud",
    "chevillère Thuasne",
    "ceinture lombaire Aix-en-Provence",
    "orthopédie Aix maintien",
    "Gibaud vs Thuasne comparatif",
    "orthèse poignet Aix",
  ],
  alternates: { canonical: "https://mmaixoise.fr/blog/ortho-gibaud-thuasne-guide" },
  openGraph: {
    title: "Orthèse Gibaud ou Thuasne ? Guide Comparatif Expert",
    description: "Comparatif Gibaud vs Thuasne : genouillères, chevillères, lombaires. Disponibles à Aix-en-Provence.",
    url: "https://mmaixoise.fr/blog/ortho-gibaud-thuasne-guide",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Pourquoi choisir une orthèse Gibaud ou Thuasne ?",
  "description": "Comparatif complet des marques Gibaud et Thuasne pour genouillères, chevillères et ceintures lombaires.",
  "author": { "@type": "Organization", "name": "Maison Médicale Aixoise" },
  "publisher": {
    "@type": "Organization",
    "name": "Maison Médicale Aixoise",
    "logo": { "@type": "ImageObject", "url": "https://mmaixoise.fr/assets/centre.png" },
  },
  "datePublished": "2025-04-29",
  "dateModified": "2025-04-29",
  "url": "https://mmaixoise.fr/blog/ortho-gibaud-thuasne-guide",
};

const comparison = [
  {
    zone: "Genou",
    gibaud: "Genouillère Dynastab® — maintien ligamentaire fort, idéale post-entorse ou arthrose. Tissu thermorégulateur.",
    thuasne: "Genu Ligaflex® — stabilisation renforcée avec baleines rigides. Recommandée post-chirurgie ligamentaire.",
    conseil: "Arthrose légère → Gibaud. Post-op ligament → Thuasne.",
  },
  {
    zone: "Cheville",
    gibaud: "Chevillère Dynastab® — contention élastique pour entorses légères à modérées. Port discret dans la chaussure.",
    thuasne: "Malleo Dynastab® — maintien semi-rigide avec renforts latéraux. Pour entorses modérées à sévères.",
    conseil: "Entorse légère → Gibaud. Entorse récidivante ou sévère → Thuasne.",
  },
  {
    zone: "Lombaires",
    gibaud: "Lombogib® — ceinture de contention souple pour lombalgie chronique. Port journalier confortable.",
    thuasne: "Lombamum® ou Lomba — maintien plus rigide avec baleines postérieures. Pour lombalgies aiguës.",
    conseil: "Douleur chronique légère → Gibaud. Crise aiguë ou hernie → Thuasne.",
  },
  {
    zone: "Poignet",
    gibaud: "Poignet Gibaud® — contention légère pour tendinite ou syndrome du canal carpien léger.",
    thuasne: "Ligaflex® Poignet — immobilisation plus importante, attelle rigide optionnelle.",
    conseil: "Tendinite de bureau → Gibaud. Post-fracture ou canal carpien sévère → Thuasne.",
  },
];

export default function ArticleOrtho() {
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
          { "@type": "ListItem", "position": 3, "name": "Guide Orthèses Gibaud & Thuasne", "item": "https://mmaixoise.fr/blog/ortho-gibaud-thuasne-guide" },
        ],
      }) }} />

      <div className="pt-32 pb-16 max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-neon-green font-black text-[10px] uppercase tracking-widest mb-12 hover:gap-4 transition-all">
          <ArrowLeft size={14} /> Retour au Blog
        </Link>

        <div className="inline-block px-4 py-1.5 bg-neon-green/10 text-neon-green text-[9px] font-black uppercase tracking-widest rounded-full mb-8">
          Orthopédie
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-medical-accent uppercase tracking-tighter leading-tight mb-6">
          Orthèse <span className="text-neon-green">Gibaud</span> ou <span className="text-neon-green">Thuasne</span> ?
        </h1>
        <p className="text-medical-accent/50 font-bold text-lg mb-16 leading-relaxed">
          Gibaud et Thuasne sont les deux références en orthopédie en France. Ce guide comparatif vous aide à choisir
          le bon produit selon votre pathologie, rédigé par nos experts à Aix-en-Provence.
        </p>

        <article className="space-y-10">
          <section>
            <h2 className="text-3xl font-black text-medical-accent uppercase tracking-tight mb-6">
              Comparatif zone par zone
            </h2>
            <div className="space-y-8">
              {comparison.map((item) => (
                <div key={item.zone} className="bg-white rounded-[2rem] border-2 border-black/5 shadow-xl overflow-hidden">
                  <div className="bg-medical-accent px-10 py-5">
                    <h3 className="text-neon-green font-black text-lg uppercase tracking-wider">{item.zone}</h3>
                  </div>
                  <div className="p-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-neon-green mb-3">Gibaud</p>
                      <p className="text-medical-accent/70 font-bold text-sm leading-relaxed">{item.gibaud}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-medical-accent/40 mb-3">Thuasne</p>
                      <p className="text-medical-accent/70 font-bold text-sm leading-relaxed">{item.thuasne}</p>
                    </div>
                  </div>
                  <div className="px-10 pb-8">
                    <p className="text-[9px] font-black uppercase tracking-widest text-medical-accent/30 mb-2">Conseil expert</p>
                    <p className="text-medical-accent font-bold text-sm italic">{item.conseil}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black text-medical-accent uppercase tracking-tight mb-6">
              Sont-elles remboursées ?
            </h2>
            <p className="text-medical-accent/60 font-bold leading-relaxed mb-4">
              La plupart des orthèses Gibaud et Thuasne sont inscrites à la nomenclature LPPR et sont partiellement
              ou totalement remboursées par l&apos;Assurance Maladie sur prescription médicale.
            </p>
            <p className="text-medical-accent/60 font-bold leading-relaxed">
              Certaines mutuelles prennent en charge le reste à charge. Nos conseillers vous accompagnent dans les
              démarches de remboursement chez la Maison Médicale Aixoise.
            </p>
          </section>

          <div className="bg-medical-accent text-white p-12 rounded-[3rem] border-4 border-neon-green/30">
            <h3 className="text-xl font-black uppercase tracking-tight mb-4">
              Essayez vos orthèses à Aix-en-Provence
            </h3>
            <p className="text-white/60 font-bold leading-relaxed mb-6">
              Toutes les gammes Gibaud et Thuasne sont disponibles au <strong className="text-white">70 Rue Alain Decaux,
              Parc de la Duranne, 13100 Aix-en-Provence</strong>. Nos experts vous aident à choisir la bonne taille
              et le bon modèle.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-neon-green text-medical-accent px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all"
            >
              <MapPin size={16} /> Nous rendre visite
            </Link>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}

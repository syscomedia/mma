import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Location Lit Médicalisé à Aix-en-Provence — Guide Complet Prix & Remboursement",
  description:
    "Tout savoir sur la location d'un lit médicalisé à Aix-en-Provence : prix, remboursement Sécurité Sociale, délai de livraison, modèles disponibles. Maison Médicale Aixoise, Parc de la Duranne 13100.",
  keywords: [
    "location lit médicalisé Aix-en-Provence",
    "prix location lit médicalisé",
    "remboursement lit médicalisé sécurité sociale",
    "lit médicalisé 13100",
    "matériel médical maintien domicile Aix",
    "lit électrique médicalisé location",
    "livraison lit médicalisé Aix",
  ],
  alternates: { canonical: "https://mmaixoise.fr/blog/location-lit-medicalise-aix-en-provence" },
  openGraph: {
    title: "Location Lit Médicalisé Aix-en-Provence — Guide Complet",
    description: "Prix, remboursement SS, livraison. Tout savoir sur la location de lit médicalisé à Aix-en-Provence.",
    url: "https://mmaixoise.fr/blog/location-lit-medicalise-aix-en-provence",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Location lit médicalisé à Aix-en-Provence : le guide complet",
  "description": "Prix, remboursement Sécurité Sociale, délai de livraison et modèles disponibles pour la location d'un lit médicalisé à Aix-en-Provence.",
  "author": { "@type": "Organization", "name": "Maison Médicale Aixoise" },
  "publisher": {
    "@type": "Organization",
    "name": "Maison Médicale Aixoise",
    "logo": { "@type": "ImageObject", "url": "https://mmaixoise.fr/assets/centre.png" },
  },
  "datePublished": "2025-04-22",
  "dateModified": "2025-04-22",
  "url": "https://mmaixoise.fr/blog/location-lit-medicalise-aix-en-provence",
};

export default function ArticleLitMedicalise() {
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
          { "@type": "ListItem", "position": 3, "name": "Location Lit Médicalisé Aix-en-Provence", "item": "https://mmaixoise.fr/blog/location-lit-medicalise-aix-en-provence" },
        ],
      }) }} />

      <div className="pt-32 pb-16 max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-neon-green font-black text-[10px] uppercase tracking-widest mb-12 hover:gap-4 transition-all">
          <ArrowLeft size={14} /> Retour au Blog
        </Link>

        <div className="inline-block px-4 py-1.5 bg-neon-green/10 text-neon-green text-[9px] font-black uppercase tracking-widest rounded-full mb-8">
          Matériel Médical
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-medical-accent uppercase tracking-tighter leading-tight mb-6">
          Location lit médicalisé à <span className="text-neon-green">Aix-en-Provence</span>
        </h1>
        <p className="text-medical-accent/50 font-bold text-lg mb-16 leading-relaxed">
          Guide complet : conditions, prix, remboursement Sécurité Sociale et démarches pour louer un lit médicalisé
          à Aix-en-Provence et dans le 13100.
        </p>

        <article className="space-y-12">
          <section>
            <h2 className="text-3xl font-black text-medical-accent uppercase tracking-tight mb-6">
              Qu&apos;est-ce qu&apos;un lit médicalisé ?
            </h2>
            <p className="text-medical-accent/60 font-bold leading-relaxed mb-4">
              Un lit médicalisé est un lit à hauteur variable et dossier relevable, conçu pour faciliter les soins
              à domicile. Il permet au patient de se lever seul, réduit les risques d&apos;escarres et simplifie le
              travail des aidants et soignants.
            </p>
            <p className="text-medical-accent/60 font-bold leading-relaxed">
              Il existe deux types principaux : les lits médicalisés manuels et les lits médicalisés électriques
              (avec télécommande). Ces derniers sont les plus confortables mais aussi les plus onéreux.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-medical-accent uppercase tracking-tight mb-6">
              Est-ce remboursé par la Sécurité Sociale ?
            </h2>
            <div className="bg-white p-10 rounded-[2rem] border-2 border-neon-green/20 shadow-xl mb-6">
              <p className="text-medical-accent font-bold leading-relaxed mb-4">
                <strong className="text-neon-green">Oui</strong>, la location d&apos;un lit médicalisé est prise en charge
                à <strong>100% par l&apos;Assurance Maladie</strong> sous prescription médicale, selon la nomenclature
                LPPR (Liste des Produits et Prestations Remboursables).
              </p>
              <p className="text-medical-accent/60 font-bold text-sm leading-relaxed">
                La prescription doit être établie par votre médecin traitant ou un médecin spécialiste. Elle doit
                mentionner explicitement le besoin de lit médicalisé.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Ordonnance médicale obligatoire",
                "Prescription renouvée tous les 6 mois",
                "Remboursement direct possible (tiers payant)",
                "Prise en charge des accessoires (matelas anti-escarres) sous conditions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-medical-accent/70 font-bold">
                  <CheckCircle2 className="text-neon-green shrink-0" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black text-medical-accent uppercase tracking-tight mb-6">
              Quel est le délai de livraison à Aix-en-Provence ?
            </h2>
            <p className="text-medical-accent/60 font-bold leading-relaxed mb-4">
              La Maison Médicale Aixoise assure la livraison et l&apos;installation de vos lits médicalisés dans un
              délai de <strong className="text-medical-accent">24 à 48h</strong> à Aix-en-Provence et dans les
              communes alentour (Gardanne, Pertuis, Lambesc, Salon-de-Provence).
            </p>
            <p className="text-medical-accent/60 font-bold leading-relaxed">
              En cas d&apos;urgence médicale avérée, nous mobilisons notre équipe pour une livraison le jour même
              sous réserve de disponibilité. Contactez-nous directement par téléphone.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-medical-accent uppercase tracking-tight mb-6">
              Nos marques de lits médicalisés disponibles
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["Invacare", "Drive DeVilbiss", "Systam", "Herdegen", "Vermeiren", "Mobio"].map((brand) => (
                <div key={brand} className="bg-white px-6 py-4 rounded-2xl border-2 border-black/5 text-center">
                  <p className="text-medical-accent font-black text-sm uppercase tracking-widest">{brand}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-medical-accent text-white p-12 rounded-[3rem] border-4 border-neon-green/30">
            <h3 className="text-xl font-black uppercase tracking-tight mb-4">
              Demandez un devis gratuit
            </h3>
            <p className="text-white/60 font-bold leading-relaxed mb-8">
              Venez au <strong className="text-white">70 Rue Alain Decaux, Parc de la Duranne, 13100 Aix-en-Provence</strong>
              {" "}ou appelez-nous pour obtenir un devis immédiat et vérifier votre prise en charge.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-neon-green text-medical-accent px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all"
              >
                <MapPin size={16} /> Nous trouver
              </Link>
              <Link
                href="tel:+33442XXXXXX"
                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                <Phone size={16} /> Appeler
              </Link>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}

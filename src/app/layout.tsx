import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LoadingScreen } from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://mmaixoise.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Matériel Médical Aixoise | Matériel Médical & Orthopédie Aix-en-Provence",
    template: "%s | Matériel Médical Aixoise",
  },
  description:
    "Spécialiste en matériel médical, orthopédie et chaussures Scholl SS26 à Aix-en-Provence (La Duranne). Location lits médicalisés, vente fauteuils roulants, orthèses Gibaud, Thuasne. Livraison rapide 13100.",
  keywords: [
    "matériel médical Aix-en-Provence",
    "orthopédie Aix-en-Provence",
    "chaussures Scholl Aix",
    "location lit médicalisé Aix",
    "fauteuil roulant Aix-en-Provence",
    "orthèse Gibaud Aix",
    "maintien à domicile 13100",
    "semelles orthopédiques Aix",
    "matériel médical La Duranne",
    "pharmacie orthopédie Aix",
    "Matériel Médical Aixoise",
    "monte-escalier Aix-en-Provence",
    "déambulateur Aix",
    "matelas anti-escarres Aix",
    "Scholl SS26 France",
  ],
  authors: [{ name: "Amira ABIDI", url: BASE_URL }],
  creator: "Matériel Médical Aixoise",
  publisher: "Matériel Médical Aixoise",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "fr-FR": BASE_URL,
    },
  },
  openGraph: {
    title: "Matériel Médical Aixoise | Matériel Médical & Orthopédie",
    description:
      "Votre expert en matériel médical et orthopédie au Parc de la Duranne, Aix-en-Provence. Scholl SS26, lits médicalisés, fauteuils roulants, orthèses.",
    url: BASE_URL,
    siteName: "Matériel Médical Aixoise",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/assets/centre.png",
        width: 1200,
        height: 630,
        alt: "Matériel Médical Aixoise - Matériel Médical Aix-en-Provence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matériel Médical Aixoise | Matériel Médical Aix-en-Provence",
    description:
      "Expert en orthopédie et matériel médical au Parc de la Duranne. Scholl SS26, lits médicalisés, fauteuils roulants.",
    images: ["/assets/centre.png"],
  },
  verification: {
    google: "REMPLACER_PAR_VOTRE_CODE_SEARCH_CONSOLE",
  },
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="FR-13" />
        <meta name="geo.placename" content="Aix-en-Provence" />
        <meta name="geo.position" content="43.5297;5.4474" />
        <meta name="ICBM" content="43.5297, 5.4474" />
        <meta name="language" content="French" />
        <meta name="revisit-after" content="7 days" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}

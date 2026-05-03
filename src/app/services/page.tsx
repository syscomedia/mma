import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { siteData } from "@/data/site-data";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Nos Expertises | Maison Médicale Aixoise",
  description: "Découvrez nos solutions en orthopédie, matériel médical et maintien à domicile.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 bg-sage-bg">
      <Navbar />
      <div className="py-20 text-center bg-medical-accent text-white">
         <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Expertises</h1>
         <p className="text-neon-green font-black uppercase tracking-[0.5em] text-xs">Solutions Médicales & Orthopédiques</p>
      </div>
      <Services />
      
      {/* Detailed Services list from PDF logic */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-4xl font-black text-medical-accent mb-16 uppercase tracking-tighter text-center">Nos Domaines d&apos;Intervention</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: "Orthopédie de Pointe", items: ["Bilan podologique complet", "Semelles Scholl sur mesure", "Technologie Bioprint® intégrée", "Suivi post-appareillage"] },
                { title: "Matériel Médical", items: ["Location de lits médicalisés", "Vente de fauteuils roulants", "Installation de monte-escaliers", "Maintenance certifiée"] },
                { title: "Maintien à Domicile", items: ["Aménagement de salle de bain", "Aides techniques quotidiennes", "Conseil en autonomie", "Livraison urgente Aix"] },
                { title: "Espace Scholl Pro", items: ["Chaussures certifiées Pharma", "Équipement pour blocs opératoires", "Hygiène et protection", "Gamme Energystep Active"] }
              ].map((box, i) => (
                <div key={i} className="bg-sage-bg p-12 rounded-[3rem] border-4 border-medical-accent/5">
                   <h3 className="text-2xl font-black text-medical-accent mb-8 uppercase tracking-tight italic underline decoration-neon-green decoration-4">{box.title}</h3>
                   <ul className="space-y-4">
                      {box.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-medical-accent/60 font-bold">
                           <CheckCircle2 className="text-neon-green" size={20} />
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>

           <div className="mt-32">
              <h3 className="text-xl font-black text-neon-green mb-12 uppercase tracking-[0.4em] text-center italic">Marques & Partenaires Officiels</h3>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                 {siteData.brandCategories.flatMap(cat => cat.brands).map((brand) => (
                    <div key={brand} className="px-8 py-4 bg-medical-accent/5 rounded-2xl border-2 border-medical-accent/10 hover:border-neon-green transition-all group">
                       <span className="text-medical-accent/40 font-black text-[10px] sm:text-xs uppercase tracking-widest group-hover:text-medical-accent transition-colors">{brand}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteData } from "@/data/site-data";

export const metadata = {
  title: "Contactez-nous | Maison Médicale Aixoise",
  description: "Prenez rendez-vous ou demandez un devis pour votre matériel médical à Aix-en-Provence.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 bg-sage-bg">
      <Navbar />
      
      <div className="py-24 bg-medical-accent text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 text-[15rem] font-black text-white/[0.03] select-none pointer-events-none translate-x-1/4">CONTACT</div>
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-none">Parlons de <br /><span className="text-neon-green neon-glow">votre santé.</span></h1>
            <p className="text-white/40 font-bold text-xl max-w-2xl mx-auto">Une équipe d&apos;experts à votre service pour vous accompagner dans chaque étape de votre mobilité.</p>
         </div>
      </div>

      <Contact />

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="bg-sage-bg p-12 rounded-[4rem] border-4 border-medical-accent/5">
                 <h2 className="text-4xl font-black text-medical-accent mb-12 uppercase tracking-tighter">Venir nous voir</h2>
                 <div className="aspect-video bg-medical-accent/10 rounded-[3rem] border-2 border-neon-green/20 flex items-center justify-center mb-12 overflow-hidden relative">
                    {/* Placeholder for Map - In real app would use Google Maps embed */}
                    <div className="text-center p-12">
                       <MapPin className="text-neon-green mx-auto mb-6" size={48} />
                       <p className="text-medical-accent font-black text-xl uppercase tracking-widest">{siteData.address}</p>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                       <p className="text-medical-accent/40 font-black text-[10px] uppercase tracking-widest mb-4">Téléphone</p>
                       <p className="text-medical-accent font-black text-lg">{siteData.phone}</p>
                    </div>
                    <div>
                       <p className="text-medical-accent/40 font-black text-[10px] uppercase tracking-widest mb-4">Email</p>
                       <p className="text-medical-accent font-black text-lg">{siteData.email}</p>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col justify-center">
                 <h2 className="text-4xl font-black text-medical-accent mb-12 uppercase tracking-tighter">Horaires d&apos;accueil</h2>
                 <div className="space-y-6">
                    {siteData.workingHours.split(', ').map((hour, i) => (
                       <div key={i} className="flex justify-between items-center bg-sage-bg p-8 rounded-[2.5rem] border-2 border-black/5 hover:border-neon-green transition-all shadow-xl group">
                          <div className="flex items-center gap-4">
                             <Clock className="text-neon-green" size={24} />
                             <span className="text-medical-accent font-black uppercase tracking-widest">{hour.split(': ')[0]}</span>
                          </div>
                          <span className="text-medical-accent/60 font-bold">{hour.split(': ')[1]}</span>
                       </div>
                    ))}
                 </div>
                 <div className="mt-16 p-8 bg-neon-green/10 rounded-[2.5rem] border-2 border-neon-green/30">
                    <p className="text-medical-accent font-bold leading-relaxed italic text-center">
                       &quot;Nous privilégions l&apos;accueil sur rendez-vous pour les bilans podologiques et l&apos;orthopédie.&quot;
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

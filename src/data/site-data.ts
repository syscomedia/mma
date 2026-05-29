export const siteData = {
  name: "MAISON MÉDICAL AIXOISE",
  shortName: "MMA",
  slogan: "L'Innovation Scholl SS26 au cœur d'Aix",
  description: "La Maison Médicale Aixoise propose la vente et la location de matériel médical et orthopédique pour particuliers et professionnels de santé. Nous mettons à votre disposition une large gamme d’équipements fiables et certifiés : fauteuils roulants, déambulateurs, rollators, orthèses (genouillères, ceintures lombaires), bas de contention, aides à la marche, produits d’incontinence, literie médicalisée et coussins de positionnement, ainsi que des dispositifs de diagnostic.",
  address: "70 Rue Alain Decaux, 13100 Aix-en-Provence",
  phone: "09.83.09.57.58",
  phones: ["09.83.09.57.58", "06.16.51.08.54"],
  email: "lamaison.medaix@hotmail.com",
  workingHours: "Lun - Ven: 9h00 - 18h30, Sam: 9h00 - 12h30",
  founder: "Amira ABIDI",
  kbis: {
    siren: "939 690 657",
    rcs: "Aix-en-Provence",
    date: "23/01/2025",
    capital: "1 000,00 €",
    activity: "Commerce de détail d'articles médicaux"
  },

  equipmentCategories: [
    {
      title: "Orthèses & maintien orthopédique",
      details: "genouillères, ceintures lombaires, bas de contention, attelles…",
      emoji: "🦴"
    },
    {
      title: "Incontinence & hygiène",
      details: "protections, alèses…",
      emoji: "🧻"
    },
    {
      title: "Literie & confort médicalisé",
      details: "matelas orthopédiques, coussins de positionnement…",
      emoji: "🛏️"
    },
    {
      title: "Diagnostic médical",
      details: "tensiomètres, thermomètres…",
      emoji: "❤️"
    },
    {
      title: "Mobilité & déplacement",
      details: "fauteuils roulants, déambulateurs, rollators",
      emoji: "🦽"
    },
    {
      title: "Aides à la marche",
      details: "béquilles, cannes, appuis",
      emoji: "🚶"
    }
  ],

  featuredProducts: [
    "Fauteuil roulant pliable",
    "Déambulateur avec roues",
    "Rollator avec siège",
    "Genouillère de maintien",
    "Ceinture lombaire",
    "Bas de contention",
    "Coussin de positionnement",
    "Tensiomètre électronique"
  ],

  saleAndRental: {
    description: "Nous proposons la vente et la location de matériel médical adapté à chaque situation.",
    purchase: {
      title: "Achat",
      items: ["Produits neufs certifiés", "Large gamme disponible", "Livraison rapide"]
    },
    rental: {
      title: "Location",
      items: ["Fauteuils roulants", "Déambulateurs / rollators", "Literie médicalisée", "Solutions courte et longue durée"]
    }
  },

  trust: [
    { text: "Produits conformes aux normes CE", icon: "CheckCircle" },
    { text: "Vente & location flexible", icon: "CheckCircle" },
    { text: "Service client disponible", icon: "CheckCircle" },
    { text: "Basé à Aix-en-Provence", icon: "CheckCircle" }
  ],

  nutrition: {
    title: "Nutrition & compléments médicaux",
    emoji: "🥤",
    items: [
      "boissons protéinées",
      "desserts hyperprotéinés",
      "compléments alimentaires"
    ]
  },

  technologies: [
    {
      name: "Bioprint®",
      description: "Technologie brevetée assurant un soutien anatomique optimal de la voûte plantaire.",
      icon: "ShieldCheck"
    },
    {
      name: "Memory Cushion®",
      description: "Amorti à mémoire de forme pour une répartition homogène de la pression.",
      icon: "Zap"
    },
    {
      name: "Biomechanics®",
      description: "Système de contrôle du mouvement pour une marche plus saine et alignée.",
      icon: "Activity"
    }
  ],
  services: [
    { title: "Vente & Location", desc: "Solutions adaptées : Achat de produits certifiés ou location flexible.", icon: "ShoppingCart" },
    { title: "Matériel Médical", desc: "Large gamme d'équipements : mobilité, literie, diagnostic.", icon: "Stethoscope" },
    { title: "Orthopédie", desc: "Expertise en maintien : orthèses, ceintures et contention.", icon: "Activity" }
  ],
  catalogues: [
    {
      id: "materiel-medical-location",
      name: "Matériel Médical en Location",
      description: "Découvrez notre gamme complète de matériel médical à la location pour le maintien à domicile dans les meilleures conditions de confort et de sécurité.",
      products: [
        {
          name: "Lit ALDRYS",
          brand: "Drive DeVilbiss",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Location",
          image: "/assets/scraped/aldrys_1_3-450x450.jpeg",
          gallery: ["/assets/scraped/aldrys_1_3-450x450.jpeg"],
          longDescription: "Gamme matériel médical en location : Lit ALDRYS."
        },
        {
          name: "Lit médicalisé Alzheimer Cinétis DeVilbiss",
          brand: "Drive DeVilbiss",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Location",
          image: "/assets/scraped/lit-location-ecofit-alzheimer.jpg",
          gallery: ["/assets/scraped/lit-location-ecofit-alzheimer.jpg"],
          longDescription: "Gamme matériel médical en location : Lit médicalisé Alzheimer Cinétis DeVilbiss."
        },
        {
          name: "Fauteuils roulants Médical ,manuels et pliant location et vent a Marseille",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Location",
          image: "/assets/scraped/fauteuils-roulants-medical-manuels-et-pliant-location-et-vent-a-marseille-1-300x300.jpg",
          gallery: ["/assets/scraped/fauteuils-roulants-medical-manuels-et-pliant-location-et-vent-a-marseille-1-300x300.jpg"],
          longDescription: "Gamme matériel médical en location : Fauteuils roulants Médical ,manuels et pliant location et vent a Marseille."
        },
        {
          name: "Fauteuil roulant pour enfant",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Location",
          image: "/assets/scraped/fauteuil-enfant-aa-300x300.jpg",
          gallery: ["/assets/scraped/fauteuil-enfant-aa-300x300.jpg"],
          longDescription: "Gamme matériel médical en location : Fauteuil roulant pour enfant."
        },
        {
          name: "Aspirateur de mucosité  VACUAIDE QSU",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Location",
          image: "/assets/scraped/aspirateur-de-mucosite-vacuaide-qsu-300x300.jpg",
          gallery: ["/assets/scraped/aspirateur-de-mucosite-vacuaide-qsu-300x300.jpg"],
          longDescription: "Gamme matériel médical en location : Aspirateur de mucosité  VACUAIDE QSU."
        },
        {
          name: "Matelas à air avec compresseur CAIRFLOW  PM100A EVO",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Location",
          image: "/assets/scraped/matelas-pm-100-a-evo-pharmaouest-4x4-1-300x218.jpg",
          gallery: ["/assets/scraped/matelas-pm-100-a-evo-pharmaouest-4x4-1-300x218.jpg"],
          longDescription: "Gamme matériel médical en location : Matelas à air avec compresseur CAIRFLOW  PM100A EVO."
        },
        {
          name: "Pied à sérum Dupont réglable en hauteur",
          brand: "Dupont",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Location",
          image: "/assets/scraped/pied-a-serum-dupont-reglable-en-hauteur-1-300x300.jpg",
          gallery: ["/assets/scraped/pied-a-serum-dupont-reglable-en-hauteur-1-300x300.jpg"],
          longDescription: "Gamme matériel médical en location : Pied à sérum Dupont réglable en hauteur."
        },
        {
          name: "Soulève-malade électrique Samsoft 175",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Location",
          image: "/assets/scraped/leve-patient-samsoft-200x200-1.jpg",
          gallery: ["/assets/scraped/leve-patient-samsoft-200x200-1.jpg"],
          longDescription: "Gamme matériel médical en location : Soulève-malade électrique Samsoft 175."
        },
        {
          name: "SURMATELAS AXTAIR AUTOMORPHO PLUS",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Location",
          image: "/assets/scraped/matelas-300x266.jpg",
          gallery: ["/assets/scraped/matelas-300x266.jpg"],
          longDescription: "Gamme matériel médical en location : SURMATELAS AXTAIR AUTOMORPHO PLUS."
        }
      ]
    },
    {
      id: "oxygenotherapie-location",
      name: "Oxygénothérapie",
      description: "Notre gamme d'équipements d'oxygénothérapie disponibles à la location pour le traitement de l'insuffisance respiratoire.",
      products: [
        {
          name: "CONCENTRATEUR OXYGÈNE 525 KS",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Oxygénothérapie",
          image: "/assets/scraped/525ks-new-300x300.jpg",
          gallery: ["/assets/scraped/525ks-new-300x300.jpg"],
          longDescription: "Gamme oxygénothérapie : CONCENTRATEUR OXYGÈNE 525 KS."
        },
        {
          name: "CONCENTRATEUR d'oxygène portable",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Oxygénothérapie",
          image: "/assets/scraped/concentrateur-portatif-300x300.jpg",
          gallery: ["/assets/scraped/concentrateur-portatif-300x300.jpg"],
          longDescription: "Gamme oxygénothérapie : CONCENTRATEUR d'oxygène portable."
        },
        {
          name: "LUNETTE A OXYGENE",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Oxygénothérapie",
          image: "/assets/scraped/lunette-a-oxygene-adulte.png",
          gallery: ["/assets/scraped/lunette-a-oxygene-adulte.png"],
          longDescription: "Gamme oxygénothérapie : LUNETTE A OXYGENE."
        },
        {
          name: "Obus d'oxygène médical Linde Healthcare",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Oxygénothérapie",
          image: "/assets/scraped/obus-oxygene-2x2-1-200x300.png",
          gallery: ["/assets/scraped/obus-oxygene-2x2-1-200x300.png"],
          longDescription: "Gamme oxygénothérapie : Obus d'oxygène médical Linde Healthcare."
        }
      ]
    },
    {
      id: "services-sur-mesure-location",
      name: "Services sur Mesure",
      description: "Nos services d'accompagnement et équipements spécialisés pour une prise en charge sur mesure de votre traitement à domicile.",
      products: [
        {
          name: "Acquisition d'un fauteuil roulant",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Service Médical",
          image: "/assets/scraped/istockphoto2199822768612x612jpg-450x450.",
          gallery: ["/assets/scraped/istockphoto2199822768612x612jpg-450x450."],
          longDescription: "Gamme services sur mesure : Acquisition d'un fauteuil roulant."
        },
        {
          name: "Lit médicalisé électrique",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Service Médical",
          image: "/assets/scraped/lit-medicalise-aldrys-90-cm-3-fonctions-2-300x300.jpg",
          gallery: ["/assets/scraped/lit-medicalise-aldrys-90-cm-3-fonctions-2-300x300.jpg"],
          longDescription: "Gamme services sur mesure : Lit médicalisé électrique."
        }
      ]
    },
    {
      id: "la-respiration-location",
      name: "La Respiration (Location)",
      description: "Appareils d'assistance respiratoire de pointe disponibles à la location.",
      products: [
        {
          name: "AEROSOL ULTRASONIQUE AirProjet Plus – En location",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Respiration",
          image: "/assets/scraped/aerosol-ultrasonique-airprojet-plus-1-300x300.jpg",
          gallery: ["/assets/scraped/aerosol-ultrasonique-airprojet-plus-1-300x300.jpg"],
          longDescription: "Gamme la respiration (location) : AEROSOL ULTRASONIQUE AirProjet Plus – En location."
        },
        {
          name: "Aspirateur de mucosité  VACUAIDE QSU",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Respiration",
          image: "/assets/scraped/aspirateur-de-mucosite-vacuaide-qsu-300x300.jpg",
          gallery: ["/assets/scraped/aspirateur-de-mucosite-vacuaide-qsu-300x300.jpg"],
          longDescription: "Gamme la respiration (location) : Aspirateur de mucosité  VACUAIDE QSU."
        }
      ]
    },
    {
      id: "tire-lait-location",
      name: "Tire-lait",
      description: "Tire-laits électriques de qualité hospitalière disponibles à la location pour accompagner l'allaitement en toute sérénité.",
      products: [
        {
          name: "Tire-lait FISIO PRO",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Maternité",
          image: "/assets/scraped/tire-lait-fisio-pro-1-300x300.jpg",
          gallery: ["/assets/scraped/tire-lait-fisio-pro-1-300x300.jpg"],
          longDescription: "Gamme tire-lait : Tire-lait FISIO PRO."
        },
        {
          name: "Tire-lait MEDELA Symphony électrique",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Maternité",
          image: "/assets/scraped/tir-lait-symphony-300x300.jpg",
          gallery: ["/assets/scraped/tir-lait-symphony-300x300.jpg"],
          longDescription: "Gamme tire-lait : Tire-lait MEDELA Symphony électrique."
        }
      ]
    },
    {
      id: "la-marche-vente",
      name: "La Marche",
      description: "Notre sélection de déambulateurs, rollators et cannes pour faciliter la marche et la mobilité au quotidien.",
      products: [
        {
          name: "Cannes anglaises grande taille",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/726-1-450x450.jpg",
          gallery: ["/assets/scraped/726-1-450x450.jpg"],
          longDescription: "Gamme la marche : Cannes anglaises grande taille."
        },
        {
          name: "NITRO rollator pliant",
          brand: "Drive DeVilbiss",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/nitro-300x300.jpg",
          gallery: ["/assets/scraped/nitro-300x300.jpg"],
          longDescription: "Gamme la marche : NITRO rollator pliant."
        },
        {
          name: "Rollator 4 roues Road pliable avec siège et panier",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/deambulateur-4-roues-road-pliable-avec-siege-et-panier-1-300x300.jpg",
          gallery: ["/assets/scraped/deambulateur-4-roues-road-pliable-avec-siege-et-panier-1-300x300.jpg"],
          longDescription: "Gamme la marche : Rollator 4 roues Road pliable avec siège et panier."
        },
        {
          name: "Déambulateur Angelo adulte",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/angelo-100-adulte-300x300.jpg",
          gallery: ["/assets/scraped/angelo-100-adulte-300x300.jpg"],
          longDescription: "Gamme la marche : Déambulateur Angelo adulte."
        },
        {
          name: "Rollator 3 roues pliant avec panier Madrid",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/rollator-pliant-madrid-3-roues--300x300.jpg",
          gallery: ["/assets/scraped/rollator-pliant-madrid-3-roues--300x300.jpg"],
          longDescription: "Gamme la marche : Rollator 3 roues pliant avec panier Madrid."
        },
        {
          name: "Rollator Fortissimo 4 roues réglable",
          brand: "HMS Vilgo",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/rollator-4-roues-fortissimo-hms-vilgo-1-300x300.jpg",
          gallery: ["/assets/scraped/rollator-4-roues-fortissimo-hms-vilgo-1-300x300.jpg"],
          longDescription: "Gamme la marche : Rollator Fortissimo 4 roues réglable."
        },
        {
          name: "Rollator Fortissimo 2 roues réglable",
          brand: "HMS Vilgo",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/rollator-2-roues-fortissimo-hms-vilgo-1-300x300.jpg",
          gallery: ["/assets/scraped/rollator-2-roues-fortissimo-hms-vilgo-1-300x300.jpg"],
          longDescription: "Gamme la marche : Rollator Fortissimo 2 roues réglable."
        },
        {
          name: "Rollator Londres 2 roues pliable avec siège",
          brand: "Dupont",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/rollator-pliant-londres-drive-2x2-1-300x300.jpg",
          gallery: ["/assets/scraped/rollator-pliant-londres-drive-2x2-1-300x300.jpg"],
          longDescription: "Gamme la marche : Rollator Londres 2 roues pliable avec siège."
        },
        {
          name: "Déambulateur Miami (pliant)",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/deambulateur-pliant-miami-4dcdf39a-1.jpg",
          gallery: ["/assets/scraped/deambulateur-pliant-miami-4dcdf39a-1.jpg"],
          longDescription: "Gamme la marche : Déambulateur Miami (pliant)."
        },
        {
          name: "Déambulateur fixe ultra léger et réglable",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/deambulateur-fixe-ultra-leger-reglable-en-hauteur-brighton-1-300x300.jpg",
          gallery: ["/assets/scraped/deambulateur-fixe-ultra-leger-reglable-en-hauteur-brighton-1-300x300.jpg"],
          longDescription: "Gamme la marche : Déambulateur fixe ultra léger et réglable."
        },
        {
          name: "Déambulateur Fortissimo pliant",
          brand: "HMS Vilgo",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/deambulateur-pliant-fortissimo-hms-vilgo-1-300x300.jpg",
          gallery: ["/assets/scraped/deambulateur-pliant-fortissimo-hms-vilgo-1-300x300.jpg"],
          longDescription: "Gamme la marche : Déambulateur Fortissimo pliant."
        },
        {
          name: "CANNE SIEGE PLIANT 3 PIEDS",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/preview-1-450x450.jpg",
          gallery: ["/assets/scraped/preview-1-450x450.jpg"],
          longDescription: "Gamme la marche : CANNE SIEGE PLIANT 3 PIEDS."
        },
        {
          name: "Canne poignée T",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/4-ter.jpg",
          gallery: ["/assets/scraped/4-ter.jpg"],
          longDescription: "Gamme la marche : Canne poignée T."
        },
        {
          name: "Béquille Vilgo sous axillaire",
          brand: "HMS Vilgo",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/bequille-sous-axillaire-vilgo-1-300x300.jpg",
          gallery: ["/assets/scraped/bequille-sous-axillaire-vilgo-1-300x300.jpg"],
          longDescription: "Gamme la marche : Béquille Vilgo sous axillaire."
        },
        {
          name: "Canne de marche repliable aluminium",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/ref-c43-2-300x300.jpg",
          gallery: ["/assets/scraped/ref-c43-2-300x300.jpg"],
          longDescription: "Gamme la marche : Canne de marche repliable aluminium."
        },
        {
          name: "Béquille Vilgo poignée anatomique",
          brand: "HMS Vilgo",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/canne-anglaises-reglables-en-hauteur-300x300.jpg",
          gallery: ["/assets/scraped/canne-anglaises-reglables-en-hauteur-300x300.jpg"],
          longDescription: "Gamme la marche : Béquille Vilgo poignée anatomique."
        },
        {
          name: "Canne Derby (8 MOTIFS)",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/canne-derby-8-modeles-herdegen-300x300.webp",
          gallery: ["/assets/scraped/canne-derby-8-modeles-herdegen-300x300.webp"],
          longDescription: "Gamme la marche : Canne Derby (8 MOTIFS)."
        },
        {
          name: "Canne DeVilbiss anatomique réglable",
          brand: "Drive DeVilbiss",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/canne-anatomique-reglable-hauteur-300x300.jpg",
          gallery: ["/assets/scraped/canne-anatomique-reglable-hauteur-300x300.jpg"],
          longDescription: "Gamme la marche : Canne DeVilbiss anatomique réglable."
        },
        {
          name: "Canne tout-terrain",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/canne-tout-terrain-1-300x300.jpg",
          gallery: ["/assets/scraped/canne-tout-terrain-1-300x300.jpg"],
          longDescription: "Gamme la marche : Canne tout-terrain."
        },
        {
          name: "Canne Vilgo en T pliante et réglable",
          brand: "HMS Vilgo",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/canne-metalliques-pliante-vilgo-2x2-1-300x200.png",
          gallery: ["/assets/scraped/canne-metalliques-pliante-vilgo-2x2-1-300x200.png"],
          longDescription: "Gamme la marche : Canne Vilgo en T pliante et réglable."
        },
        {
          name: "Cannes de marche design",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide à la marche",
          image: "/assets/scraped/3693-canne-design-fixe-reglable-aluminium_edited-300x300.jpg",
          gallery: ["/assets/scraped/3693-canne-design-fixe-reglable-aluminium_edited-300x300.jpg"],
          longDescription: "Gamme la marche : Cannes de marche design."
        }
      ]
    },
    {
      id: "la-mobilite-vente",
      name: "La Mobilité",
      description: "Notre gamme de fauteuils roulants électriques et manuels pour préserver votre autonomie de déplacement.",
      products: [
        {
          name: "Acquisition d'un fauteuil roulant",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/istockphoto2199822768612x612jpg-450x450.",
          gallery: ["/assets/scraped/istockphoto2199822768612x612jpg-450x450."],
          longDescription: "Gamme la mobilité : Acquisition d'un fauteuil roulant."
        },
        {
          name: "Fauteuil Carbone pliable",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/fauteuilelectriquecarboneaerocarbonjpg-450x450.",
          gallery: ["/assets/scraped/fauteuilelectriquecarboneaerocarbonjpg-450x450."],
          longDescription: "Gamme la mobilité : Fauteuil Carbone pliable."
        },
        {
          name: "TRAVELITE",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/travelite-fr-fc99e939.jpg",
          gallery: ["/assets/scraped/travelite-fr-fc99e939.jpg"],
          longDescription: "Gamme la mobilité : TRAVELITE."
        },
        {
          name: "FAUTEUIL ROULANT ELECTRIQUE INVACARE STORM 4X-plore",
          brand: "Invacare",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/1651701905_mpic013247_storm4-xplore-cv06-300x300.jpg",
          gallery: ["/assets/scraped/1651701905_mpic013247_storm4-xplore-cv06-300x300.jpg"],
          longDescription: "Gamme la mobilité : FAUTEUIL ROULANT ELECTRIQUE INVACARE STORM 4X-plore."
        },
        {
          name: "QUICKIE Q 50 R Carbon",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/q-50-r--300x300.jpg",
          gallery: ["/assets/scraped/q-50-r--300x300.jpg"],
          longDescription: "Gamme la mobilité : QUICKIE Q 50 R Carbon."
        },
        {
          name: "FAUTEUIL ROULANT ELECTRIQUE FOREST 3",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/forest-3-c85-side-view-300x300.jpg",
          gallery: ["/assets/scraped/forest-3-c85-side-view-300x300.jpg"],
          longDescription: "Gamme la mobilité : FAUTEUIL ROULANT ELECTRIQUE FOREST 3."
        },
        {
          name: "VERSO fauteuil démontable VERMEIREN",
          brand: "Vermeiren",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/verso-black-frame-orange-forks-3q-view-300x300.jpg",
          gallery: ["/assets/scraped/verso-black-frame-orange-forks-3q-view-300x300.jpg"],
          longDescription: "Gamme la mobilité : VERSO fauteuil démontable VERMEIREN."
        },
        {
          name: "FAUTEUIL roulant manuel hémiplégique",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/fauteuil-roulant-manuel-de-transfert-action-r-4-ng-dual-hr-double-main-courante--450x450.jpg",
          gallery: ["/assets/scraped/fauteuil-roulant-manuel-de-transfert-action-r-4-ng-dual-hr-double-main-courante--450x450.jpg"],
          longDescription: "Gamme la mobilité : FAUTEUIL roulant manuel hémiplégique."
        },
        {
          name: "Fauteuils roulants Médical ,manuels et pliant location et vent a Marseille",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/fauteuils-roulants-medical-manuels-et-pliant-location-et-vent-a-marseille-1-300x300.jpg",
          gallery: ["/assets/scraped/fauteuils-roulants-medical-manuels-et-pliant-location-et-vent-a-marseille-1-300x300.jpg"],
          longDescription: "Gamme la mobilité : Fauteuils roulants Médical ,manuels et pliant location et vent a Marseille."
        },
        {
          name: "Fauteuil roulant pour enfant",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/fauteuil-enfant-aa-300x300.jpg",
          gallery: ["/assets/scraped/fauteuil-enfant-aa-300x300.jpg"],
          longDescription: "Gamme la mobilité : Fauteuil roulant pour enfant."
        },
        {
          name: "ROLLATOR et UN FAUTEUIL DE TRANSFERT",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/rollator-diamond-deluxe-3-cb39099a.jpg",
          gallery: ["/assets/scraped/rollator-diamond-deluxe-3-cb39099a.jpg"],
          longDescription: "Gamme la mobilité : ROLLATOR et UN FAUTEUIL DE TRANSFERT."
        },
        {
          name: "Fauteuil à pousser électrique l’aide au transfert debout",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/starleviivelourschocoed05jpg_6193c1f896c84-1-300x300.jpg",
          gallery: ["/assets/scraped/starleviivelourschocoed05jpg_6193c1f896c84-1-300x300.jpg"],
          longDescription: "Gamme la mobilité : Fauteuil à pousser électrique l’aide au transfert debout."
        },
        {
          name: "Fauteuil à pousser LIBERTY II ultra maniable",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/libertymanuelgrischine03jpg_6193bc0508ce2-1-300x300.jpg",
          gallery: ["/assets/scraped/libertymanuelgrischine03jpg_6193bc0508ce2-1-300x300.jpg"],
          longDescription: "Gamme la mobilité : Fauteuil à pousser LIBERTY II ultra maniable."
        },
        {
          name: "Fauteuil de confort INOVYS II",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/web_inovys-ii-evo-l58c-c89-200x30-3q-view-300x300.jpg",
          gallery: ["/assets/scraped/web_inovys-ii-evo-l58c-c89-200x30-3q-view-300x300.jpg"],
          longDescription: "Gamme la mobilité : Fauteuil de confort INOVYS II."
        },
        {
          name: "FAUTEUIL DE TRANSFERT Stan’Up",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/fauteuil-transfert-300x300.webp",
          gallery: ["/assets/scraped/fauteuil-transfert-300x300.webp"],
          longDescription: "Gamme la mobilité : FAUTEUIL DE TRANSFERT Stan’Up."
        },
        {
          name: "Fauteuil roulant de transfert pliant Stan",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/fauteuil-roulant-de-transfert-pliant-stan-1-300x300.jpg",
          gallery: ["/assets/scraped/fauteuil-roulant-de-transfert-pliant-stan-1-300x300.jpg"],
          longDescription: "Gamme la mobilité : Fauteuil roulant de transfert pliant Stan."
        },
        {
          name: "Fauteuil Roulant Enfant",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/fauteuil-enfant-aa-300x300.jpg",
          gallery: ["/assets/scraped/fauteuil-enfant-aa-300x300.jpg"],
          longDescription: "Gamme la mobilité : Fauteuil Roulant Enfant."
        },
        {
          name: "Fauteuil roulant manuel Novo Light",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/a-10025092-fauteuil-roulant-manuel-novo-light-alu-300x300.webp",
          gallery: ["/assets/scraped/a-10025092-fauteuil-roulant-manuel-novo-light-alu-300x300.webp"],
          longDescription: "Gamme la mobilité : Fauteuil roulant manuel Novo Light."
        },
        {
          name: "Fauteuil roulant manuel V500 30°",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/v500-30-c80-3q-view-300x300.jpg",
          gallery: ["/assets/scraped/v500-30-c80-3q-view-300x300.jpg"],
          longDescription: "Gamme la mobilité : Fauteuil roulant manuel V500 30°."
        },
        {
          name: "Fauteuils roulants manuels pliants NOVO ET ALTO",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/fauteuils-roulants-manuels-pliants-novo-et-alto-1-300x300.jpg",
          gallery: ["/assets/scraped/fauteuils-roulants-manuels-pliants-novo-et-alto-1-300x300.jpg"],
          longDescription: "Gamme la mobilité : Fauteuils roulants manuels pliants NOVO ET ALTO."
        },
        {
          name: "Fauteuils roulants PLURIEL enfant DRIVE de VILBISS",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/fauteuils-roulants-pluriel-enfant-drivedevilbiss-1-300x300.jpg",
          gallery: ["/assets/scraped/fauteuils-roulants-pluriel-enfant-drivedevilbiss-1-300x300.jpg"],
          longDescription: "Gamme la mobilité : Fauteuils roulants PLURIEL enfant DRIVE de VILBISS."
        },
        {
          name: "LIBERTY OU LIBERTY e INNOV’ SA",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Mobilité",
          image: "/assets/scraped/liberty-ou-liberty-e-innov-sa-1-300x300.jpg",
          gallery: ["/assets/scraped/liberty-ou-liberty-e-innov-sa-1-300x300.jpg"],
          longDescription: "Gamme la mobilité : LIBERTY OU LIBERTY e INNOV’ SA."
        }
      ]
    },
    {
      id: "la-respiration-vente",
      name: "La Respiration",
      description: "Notre gamme d'appareils d'assistance et d'aérosolthérapie pour le confort respiratoire à domicile.",
      products: [
        {
          name: "Aérosol manosonique pour traitement tubo-tympaniques",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Respiration",
          image: "/assets/scraped/aerosol-manosonique-pour-traitement-otite-et-sinusite-en-vente-a-marseille-1-300x300.jpg",
          gallery: ["/assets/scraped/aerosol-manosonique-pour-traitement-otite-et-sinusite-en-vente-a-marseille-1-300x300.jpg"],
          longDescription: "Gamme la respiration : Aérosol manosonique pour traitement tubo-tympaniques."
        },
        {
          name: "Aérosol pneumatique à commande automatique",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Respiration",
          image: "/assets/scraped/aerosol-pneumatique-a-commande-automatique-1-300x300.jpg",
          gallery: ["/assets/scraped/aerosol-pneumatique-a-commande-automatique-1-300x300.jpg"],
          longDescription: "Gamme la respiration : Aérosol pneumatique à commande automatique."
        },
        {
          name: "Aérosol pneumatique Anycare",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Respiration",
          image: "/assets/scraped/aerosol-pneumatique-anycare-4-300x300.jpg",
          gallery: ["/assets/scraped/aerosol-pneumatique-anycare-4-300x300.jpg"],
          longDescription: "Gamme la respiration : Aérosol pneumatique Anycare."
        },
        {
          name: "AEROSOL ULTRASONIQUE AirProjet Plus",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Respiration",
          image: "/assets/scraped/aerosol-ultrasonique-airprojet-plus-1-300x300.jpg",
          gallery: ["/assets/scraped/aerosol-ultrasonique-airprojet-plus-1-300x300.jpg"],
          longDescription: "Gamme la respiration : AEROSOL ULTRASONIQUE AirProjet Plus."
        },
        {
          name: "CONCENTRATEUR d'oxygène portable",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Respiration",
          image: "/assets/scraped/concentrateur-portatif-300x300.jpg",
          gallery: ["/assets/scraped/concentrateur-portatif-300x300.jpg"],
          longDescription: "Gamme la respiration : CONCENTRATEUR d'oxygène portable."
        },
        {
          name: "Kit et accessoires pour les aérosols à ultrasons AirProjet",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Respiration",
          image: "/assets/scraped/kit-et-accessoires-pour-les-aerosols-a-ultrasons-airprojet-1-300x300.jpg",
          gallery: ["/assets/scraped/kit-et-accessoires-pour-les-aerosols-a-ultrasons-airprojet-1-300x300.jpg"],
          longDescription: "Gamme la respiration : Kit et accessoires pour les aérosols à ultrasons AirProjet."
        },
        {
          name: "Kit Sidestream pour aérosol pneumatique",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Respiration",
          image: "/assets/scraped/kit-sidestream-pour-aerosol-pneumatique-1-300x300.jpg",
          gallery: ["/assets/scraped/kit-sidestream-pour-aerosol-pneumatique-1-300x300.jpg"],
          longDescription: "Gamme la respiration : Kit Sidestream pour aérosol pneumatique."
        },
        {
          name: "MASQUE pour aérosol MANOSONIQUE",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Respiration",
          image: "/assets/scraped/ms1ae-2-300x300.png",
          gallery: ["/assets/scraped/ms1ae-2-300x300.png"],
          longDescription: "Gamme la respiration : MASQUE pour aérosol MANOSONIQUE."
        }
      ]
    },
    {
      id: "autour-du-lit-et-repos-vente",
      name: "Autour du Lit et Repos",
      description: "Lits médicalisés, tables de lit et accessoires de confort pour le repos à domicile.",
      products: [
        {
          name: "COUSSIN BOOMERANG",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/coussin-boomerang-e1633434227507.jpeg",
          gallery: ["/assets/scraped/coussin-boomerang-e1633434227507.jpeg"],
          longDescription: "Gamme autour du lit et repos : COUSSIN BOOMERANG."
        },
        {
          name: "Coussin de positionnement latéral",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/capture-300x270.png",
          gallery: ["/assets/scraped/capture-300x270.png"],
          longDescription: "Gamme autour du lit et repos : Coussin de positionnement latéral."
        },
        {
          name: "Coussin bouée percé rond",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/coussin-bouee-perce-rond-1-300x300.jpg",
          gallery: ["/assets/scraped/coussin-bouee-perce-rond-1-300x300.jpg"],
          longDescription: "Gamme autour du lit et repos : Coussin bouée percé rond."
        },
        {
          name: "Coussin de positionnement semi-flowler",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/askle-300x253.png",
          gallery: ["/assets/scraped/askle-300x253.png"],
          longDescription: "Gamme autour du lit et repos : Coussin de positionnement semi-flowler."
        },
        {
          name: "COUSSIN DÉCUBITUS SEMI LATÉRAL",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/coussin-decubitus-semi-lateral-300x300.jpeg",
          gallery: ["/assets/scraped/coussin-decubitus-semi-lateral-300x300.jpeg"],
          longDescription: "Gamme autour du lit et repos : COUSSIN DÉCUBITUS SEMI LATÉRAL."
        },
        {
          name: "Coussin petits et moyens tout usage",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/petit-300x230.jpg",
          gallery: ["/assets/scraped/petit-300x230.jpg"],
          longDescription: "Gamme autour du lit et repos : Coussin petits et moyens tout usage."
        },
        {
          name: "Coussin anti-escarres en mousse visco élastique classe 2",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/coussinprimaform-pharmaouest-2x2-1.jpg",
          gallery: ["/assets/scraped/coussinprimaform-pharmaouest-2x2-1.jpg"],
          longDescription: "Gamme autour du lit et repos : Coussin anti-escarres en mousse visco élastique classe 2."
        },
        {
          name: "Fauteuil de confort INOVYS II",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/web_inovys-ii-evo-l58c-c89-200x30-3q-view-300x300.jpg",
          gallery: ["/assets/scraped/web_inovys-ii-evo-l58c-c89-200x30-3q-view-300x300.jpg"],
          longDescription: "Gamme autour du lit et repos : Fauteuil de confort INOVYS II."
        },
        {
          name: "Fauteuil releveur électrique ultra confortable, COCOON",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/cocoong2veloursgrege5jpg_617a6b2485571-300x300.jpg",
          gallery: ["/assets/scraped/cocoong2veloursgrege5jpg_617a6b2485571-300x300.jpg"],
          longDescription: "Gamme autour du lit et repos : Fauteuil releveur électrique ultra confortable, COCOON."
        },
        {
          name: "Fauteuil ultra confortable et multi-position NOSTRESS",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/nostress-pupvc-framboise-2-276x300.png",
          gallery: ["/assets/scraped/nostress-pupvc-framboise-2-276x300.png"],
          longDescription: "Gamme autour du lit et repos : Fauteuil ultra confortable et multi-position NOSTRESS."
        },
        {
          name: "Fauteuils releveurs électriques 1 ou 2 moteurs Relax Touch",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/fauteuils-releveurs-electriques-1-ou-2-moteurs-relax-touch-1-300x300.jpg",
          gallery: ["/assets/scraped/fauteuils-releveurs-electriques-1-ou-2-moteurs-relax-touch-1-300x300.jpg"],
          longDescription: "Gamme autour du lit et repos : Fauteuils releveurs électriques 1 ou 2 moteurs Relax Touch."
        },
        {
          name: "Fauteuils releveurs électriques 2 moteurs",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/fauteuils-releveurs-electriques-2-moteurs-1-300x300.jpg",
          gallery: ["/assets/scraped/fauteuils-releveurs-electriques-2-moteurs-1-300x300.jpg"],
          longDescription: "Gamme autour du lit et repos : Fauteuils releveurs électriques 2 moteurs."
        },
        {
          name: "Matelas anti-escarres en mousse visco élastique classe 2",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/matelas-anti-escarres-en-mousse-visco-elastique-classe-2-1-300x300.jpg",
          gallery: ["/assets/scraped/matelas-anti-escarres-en-mousse-visco-elastique-classe-2-1-300x300.jpg"],
          longDescription: "Gamme autour du lit et repos : Matelas anti-escarres en mousse visco élastique classe 2."
        },
        {
          name: "Matelas anti-escarres en mousse visco élastique classe 3",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/matelas-anti-escarres-en-mousse-visco-elastique-classe-3-1-300x300.jpg",
          gallery: ["/assets/scraped/matelas-anti-escarres-en-mousse-visco-elastique-classe-3-1-300x300.jpg"],
          longDescription: "Gamme autour du lit et repos : Matelas anti-escarres en mousse visco élastique classe 3."
        },
        {
          name: "Pied à sérum DeVilbiss réglable en hauteur",
          brand: "Drive DeVilbiss",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/pied-a-serum-drive-600x600-1-300x300.jpg",
          gallery: ["/assets/scraped/pied-a-serum-drive-600x600-1-300x300.jpg"],
          longDescription: "Gamme autour du lit et repos : Pied à sérum DeVilbiss réglable en hauteur."
        },
        {
          name: "Pied à sérum Dupont réglable en hauteur",
          brand: "Dupont",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/pied-a-serum-dupont-reglable-en-hauteur-1-300x300.jpg",
          gallery: ["/assets/scraped/pied-a-serum-dupont-reglable-en-hauteur-1-300x300.jpg"],
          longDescription: "Gamme autour du lit et repos : Pied à sérum Dupont réglable en hauteur."
        },
        {
          name: "Arceau de lit Invacare réglable",
          brand: "Invacare",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/arceau-lit-200x200-1.jpg",
          gallery: ["/assets/scraped/arceau-lit-200x200-1.jpg"],
          longDescription: "Gamme autour du lit et repos : Arceau de lit Invacare réglable."
        },
        {
          name: "Poignée de sortie de lit",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/barre-d-appui-stand-up-5050996024721-300x300.jpg",
          gallery: ["/assets/scraped/barre-d-appui-stand-up-5050996024721-300x300.jpg"],
          longDescription: "Gamme autour du lit et repos : Poignée de sortie de lit."
        },
        {
          name: "Potence sur pied Invacare",
          brand: "Invacare",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/potence-sur-pied-invacare-1-300x300.jpg",
          gallery: ["/assets/scraped/potence-sur-pied-invacare-1-300x300.jpg"],
          longDescription: "Gamme autour du lit et repos : Potence sur pied Invacare."
        },
        {
          name: "Relève-buste Appui dos manuel avec têtière",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/releve-buste-appui-dos-manuel-avec-tetiere-1-300x300.jpg",
          gallery: ["/assets/scraped/releve-buste-appui-dos-manuel-avec-tetiere-1-300x300.jpg"],
          longDescription: "Gamme autour du lit et repos : Relève-buste Appui dos manuel avec têtière."
        },
        {
          name: "Soulève-malade électrique Samsoft 175",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/leve-patient-samsoft-200x200-1.jpg",
          gallery: ["/assets/scraped/leve-patient-samsoft-200x200-1.jpg"],
          longDescription: "Gamme autour du lit et repos : Soulève-malade électrique Samsoft 175."
        },
        {
          name: "SURMATELAS AXTAIR AUTOMORPHO PLUS",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/matelas-300x266.jpg",
          gallery: ["/assets/scraped/matelas-300x266.jpg"],
          longDescription: "Gamme autour du lit et repos : SURMATELAS AXTAIR AUTOMORPHO PLUS."
        },
        {
          name: "Table a manger",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/table-a-manger-1-300x300.jpg",
          gallery: ["/assets/scraped/table-a-manger-1-300x300.jpg"],
          longDescription: "Gamme autour du lit et repos : Table a manger."
        },
        {
          name: "Table de lit médicalisé Liftis réglable en hauteur automatique",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Chambre",
          image: "/assets/scraped/table-de-lit-medicalise-liftis-reglable-en-hauteur-automatique-1-300x300.jpg",
          gallery: ["/assets/scraped/table-de-lit-medicalise-liftis-reglable-en-hauteur-automatique-1-300x300.jpg"],
          longDescription: "Gamme autour du lit et repos : Table de lit médicalisé Liftis réglable en hauteur automatique."
        }
      ]
    },
    {
      id: "hygiene-vente",
      name: "Hygiène",
      description: "Notre sélection de produits et chaises de douche pour sécuriser la toilette et l'hygiène quotidienne.",
      products: [
        {
          name: "Gant nitrile PEHA SOFT FINO",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/gants-s-450x257.jpg",
          gallery: ["/assets/scraped/gants-s-450x257.jpg"],
          longDescription: "Gamme hygiène : Gant nitrile PEHA SOFT FINO."
        },
        {
          name: "ONTEX-ID Expert Belt large Maxi",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/ontex-id-expert-belt-l-maxi.jpg",
          gallery: ["/assets/scraped/ontex-id-expert-belt-l-maxi.jpg"],
          longDescription: "Gamme hygiène : ONTEX-ID Expert Belt large Maxi."
        },
        {
          name: "CHANGE COMPLET MAXI +",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/soffisof-slip-maxi-plus-381x450.jpg",
          gallery: ["/assets/scraped/soffisof-slip-maxi-plus-381x450.jpg"],
          longDescription: "Gamme hygiène : CHANGE COMPLET MAXI +."
        },
        {
          name: "REHAUSSE-WC TSE 150 PLUS",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/rs2373_5201000_hauptbild_marmlehne-copie-a27dc73d.jpg",
          gallery: ["/assets/scraped/rs2373_5201000_hauptbild_marmlehne-copie-a27dc73d.jpg"],
          longDescription: "Gamme hygiène : REHAUSSE-WC TSE 150 PLUS."
        },
        {
          name: "Chaise garde robe Invacare Omega pliante H407",
          brand: "Invacare",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/omega_pliante.jpg",
          gallery: ["/assets/scraped/omega_pliante.jpg"],
          longDescription: "Gamme hygiène : Chaise garde robe Invacare Omega pliante H407."
        },
        {
          name: "Chaise garde-robe Candy 155",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/candy-155-450x450.jpg",
          gallery: ["/assets/scraped/candy-155-450x450.jpg"],
          longDescription: "Gamme hygiène : Chaise garde-robe Candy 155."
        },
        {
          name: "Chaise garde robe Osiris DeVilbiss bleue",
          brand: "Drive DeVilbiss",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/chaise-garde-robe-osiris-devilbiss-bleue-1-300x300.jpg",
          gallery: ["/assets/scraped/chaise-garde-robe-osiris-devilbiss-bleue-1-300x300.jpg"],
          longDescription: "Gamme hygiène : Chaise garde robe Osiris DeVilbiss bleue."
        },
        {
          name: "Chaise garde-robe Candy 155",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/candy-155-300x300.jpg",
          gallery: ["/assets/scraped/candy-155-300x300.jpg"],
          longDescription: "Gamme hygiène : Chaise garde-robe Candy 155."
        },
        {
          name: "Chaise garde-robe remboursée sécurité sociale Sitis",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/chaise-garde-robe-remboursee-securite-sociale-sitis-1-300x300.jpg",
          gallery: ["/assets/scraped/chaise-garde-robe-remboursee-securite-sociale-sitis-1-300x300.jpg"],
          longDescription: "Gamme hygiène : Chaise garde-robe remboursée sécurité sociale Sitis."
        },
        {
          name: "Chaises garde-robe GR 50",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/gr-50-52-300x300.jpg",
          gallery: ["/assets/scraped/gr-50-52-300x300.jpg"],
          longDescription: "Gamme hygiène : Chaises garde-robe GR 50."
        },
        {
          name: "Chaise garde-robe GR10 Fortissimo",
          brand: "HMS Vilgo",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/chaise-garde-robe-gr10-fortissimo-hms-vilgo-1-300x300.jpg",
          gallery: ["/assets/scraped/chaise-garde-robe-gr10-fortissimo-hms-vilgo-1-300x300.jpg"],
          longDescription: "Gamme hygiène : Chaise garde-robe GR10 Fortissimo."
        },
        {
          name: "Chaise garde-robe GR50 Fortissimo HMS-VILGO",
          brand: "HMS Vilgo",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/chaise-garde-robe-gr50-fortissimo-hms-vilgo-1-300x300.jpg",
          gallery: ["/assets/scraped/chaise-garde-robe-gr50-fortissimo-hms-vilgo-1-300x300.jpg"],
          longDescription: "Gamme hygiène : Chaise garde-robe GR50 Fortissimo HMS-VILGO."
        },
        {
          name: "CHAISE MOBILE DE DOUCHE ET DE TOILETTES MAHINA",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/chaise-mobile-douche-toilette-mahina.jpg",
          gallery: ["/assets/scraped/chaise-mobile-douche-toilette-mahina.jpg"],
          longDescription: "Gamme hygiène : CHAISE MOBILE DE DOUCHE ET DE TOILETTES MAHINA."
        },
        {
          name: "Siège de douche Spidra 1000",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/spidra-1000.jpg",
          gallery: ["/assets/scraped/spidra-1000.jpg"],
          longDescription: "Gamme hygiène : Siège de douche Spidra 1000."
        },
        {
          name: "SIEGE de bain pivotant EDORA",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/siege-bain-pivotant-accoudoirs-relevables-edora-33153300.jpg",
          gallery: ["/assets/scraped/siege-bain-pivotant-accoudoirs-relevables-edora-33153300.jpg"],
          longDescription: "Gamme hygiène : SIEGE de bain pivotant EDORA."
        },
        {
          name: "CHANGE COMPLET SUPER XL SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/soffisof-slip-super-xl-1.jpg",
          gallery: ["/assets/scraped/soffisof-slip-super-xl-1.jpg"],
          longDescription: "Gamme hygiène : CHANGE COMPLET SUPER XL SOFFISOF."
        },
        {
          name: "Alèses",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/alese-60x90cm-300x300.jpg",
          gallery: ["/assets/scraped/alese-60x90cm-300x300.jpg"],
          longDescription: "Gamme hygiène : Alèses."
        },
        {
          name: "ALESES 60×60 cm",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/alese-60x60-1-300x300.jpg",
          gallery: ["/assets/scraped/alese-60x60-1-300x300.jpg"],
          longDescription: "Gamme hygiène : ALESES 60×60 cm."
        },
        {
          name: "CHANGE COMPLET MAXI  L SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/changes-comples-maxi-l-soffisof-air-dry-1-300x300.jpg",
          gallery: ["/assets/scraped/changes-comples-maxi-l-soffisof-air-dry-1-300x300.jpg"],
          longDescription: "Gamme hygiène : CHANGE COMPLET MAXI  L SOFFISOF."
        },
        {
          name: "CHANGE COMPLET MAXI  M SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/changes-comples-maxi-m-soffisof-air-dry-1-300x300.jpg",
          gallery: ["/assets/scraped/changes-comples-maxi-m-soffisof-air-dry-1-300x300.jpg"],
          longDescription: "Gamme hygiène : CHANGE COMPLET MAXI  M SOFFISOF."
        },
        {
          name: "Fauteuil garde-robe à roulettes GR 30",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/oip-1.jpg",
          gallery: ["/assets/scraped/oip-1.jpg"],
          longDescription: "Gamme hygiène : Fauteuil garde-robe à roulettes GR 30."
        },
        {
          name: "CHANGE COMPLET MAXI XXL SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/soffisof-slip-maxi-xxl-300x300.jpg",
          gallery: ["/assets/scraped/soffisof-slip-maxi-xxl-300x300.jpg"],
          longDescription: "Gamme hygiène : CHANGE COMPLET MAXI XXL SOFFISOF."
        },
        {
          name: "CHANGE COMPLET MAXI XXXL SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/soffisif-maxi-xxl-300x300.jpg",
          gallery: ["/assets/scraped/soffisif-maxi-xxl-300x300.jpg"],
          longDescription: "Gamme hygiène : CHANGE COMPLET MAXI XXXL SOFFISOF."
        },
        {
          name: "CHANGE COMPLET SUPER L SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/00963_pme_super_l-300x300.jpg",
          gallery: ["/assets/scraped/00963_pme_super_l-300x300.jpg"],
          longDescription: "Gamme hygiène : CHANGE COMPLET SUPER L SOFFISOF."
        },
        {
          name: "CHANGE COMPLET SUPER M SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/fralda-soffisof-super-m-600x737-1-300x300.jpg",
          gallery: ["/assets/scraped/fralda-soffisof-super-m-600x737-1-300x300.jpg"],
          longDescription: "Gamme hygiène : CHANGE COMPLET SUPER M SOFFISOF."
        },
        {
          name: "COUCHE DROITE SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/couches-droites-soffisof-traversable-midi-super-300x300.jpg",
          gallery: ["/assets/scraped/couches-droites-soffisof-traversable-midi-super-300x300.jpg"],
          longDescription: "Gamme hygiène : COUCHE DROITE SOFFISOF."
        },
        {
          name: "Détergent désinfectant de surface Surfa’safe premium 750 ml",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/desinfectant-toutes-surfaces-anios-surfa-safe-premium--300x300.jpg",
          gallery: ["/assets/scraped/desinfectant-toutes-surfaces-anios-surfa-safe-premium--300x300.jpg"],
          longDescription: "Gamme hygiène : Détergent désinfectant de surface Surfa’safe premium 750 ml."
        },
        {
          name: "Distributeur de gel automatique sur pied",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/distributeur-de-gel-sur-pied-300x300.jpg",
          gallery: ["/assets/scraped/distributeur-de-gel-sur-pied-300x300.jpg"],
          longDescription: "Gamme hygiène : Distributeur de gel automatique sur pied."
        },
        {
          name: "DRAPS D’EXAMEN",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/draps-d-examen-1-300x300.jpg",
          gallery: ["/assets/scraped/draps-d-examen-1-300x300.jpg"],
          longDescription: "Gamme hygiène : DRAPS D’EXAMEN."
        },
        {
          name: "Gant de toilette à usage unique MEDILIS",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/gant-de-toilette-a-usage-unique-medilis-1-300x300.jpg",
          gallery: ["/assets/scraped/gant-de-toilette-a-usage-unique-medilis-1-300x300.jpg"],
          longDescription: "Gamme hygiène : Gant de toilette à usage unique MEDILIS."
        },
        {
          name: "Gant nitrile",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/ecoshi-300x300.jpeg",
          gallery: ["/assets/scraped/ecoshi-300x300.jpeg"],
          longDescription: "Gamme hygiène : Gant nitrile."
        },
        {
          name: "Gant vinyle TITANS MEDICAL",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/telechargement.jpg",
          gallery: ["/assets/scraped/telechargement.jpg"],
          longDescription: "Gamme hygiène : Gant vinyle TITANS MEDICAL."
        },
        {
          name: "Gants latex sans poudre EUROTEX",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/285001_1_b-300x300.jpg",
          gallery: ["/assets/scraped/285001_1_b-300x300.jpg"],
          longDescription: "Gamme hygiène : Gants latex sans poudre EUROTEX."
        },
        {
          name: "GEL HYDROALCOOLIQUE 1L ANIOSGEL 85",
          brand: "Anios",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/gel-hydroalcoolique-1l-aniosgel-85-1-300x300.jpg",
          gallery: ["/assets/scraped/gel-hydroalcoolique-1l-aniosgel-85-1-300x300.jpg"],
          longDescription: "Gamme hygiène : GEL HYDROALCOOLIQUE 1L ANIOSGEL 85."
        },
        {
          name: "GEL HYDROALCOOLIQUE 75ML ANIOSGEL 85 carton de 20 flacons",
          brand: "Anios",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/aniosgel-85-npc-gel-hydroalcoolique-300x300.jpg",
          gallery: ["/assets/scraped/aniosgel-85-npc-gel-hydroalcoolique-300x300.jpg"],
          longDescription: "Gamme hygiène : GEL HYDROALCOOLIQUE 75ML ANIOSGEL 85 carton de 20 flacons."
        },
        {
          name: "Gel SAVYL 1L",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/gel-500-1l-avec-pompe-300x300.jpg",
          gallery: ["/assets/scraped/gel-500-1l-avec-pompe-300x300.jpg"],
          longDescription: "Gamme hygiène : Gel SAVYL 1L."
        },
        {
          name: "Lingettes Multi-Usages Désinfectante",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/lingettes-biogenyamultiusages-300x300.jpg",
          gallery: ["/assets/scraped/lingettes-biogenyamultiusages-300x300.jpg"],
          longDescription: "Gamme hygiène : Lingettes Multi-Usages Désinfectante."
        },
        {
          name: "Lingettes Nettoyantes Désinfectantes",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/lingettes-nettoyantes-desinfectantes-sleepy-300x300.jpg",
          gallery: ["/assets/scraped/lingettes-nettoyantes-desinfectantes-sleepy-300x300.jpg"],
          longDescription: "Gamme hygiène : Lingettes Nettoyantes Désinfectantes."
        },
        {
          name: "Lingettes nettoyantes désinfectantes WIP’ANIOS",
          brand: "Anios",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/lingettes-nettoyantes-desinfectantes-wip-anios-1-300x300.jpg",
          gallery: ["/assets/scraped/lingettes-nettoyantes-desinfectantes-wip-anios-1-300x300.jpg"],
          longDescription: "Gamme hygiène : Lingettes nettoyantes désinfectantes WIP’ANIOS."
        },
        {
          name: "Marche pied double de baignoire",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/marche-pied-double-de-baignoire-dupont-medical-1-300x300.jpg",
          gallery: ["/assets/scraped/marche-pied-double-de-baignoire-dupont-medical-1-300x300.jpg"],
          longDescription: "Gamme hygiène : Marche pied double de baignoire."
        },
        {
          name: "Masque chirurgical MULTICOLOR",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/masqueschirurgicauxmulticolorestypeiir5couleurspaquetsde10masquesen-146832019-bleu_rose_jaune_orange_gris_600x-300x300.jpg",
          gallery: ["/assets/scraped/masqueschirurgicauxmulticolorestypeiir5couleurspaquetsde10masquesen-146832019-bleu_rose_jaune_orange_gris_600x-300x300.jpg"],
          longDescription: "Gamme hygiène : Masque chirurgical MULTICOLOR."
        },
        {
          name: "Masque de protection à usage unique 3 plis",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/masque-800x600d-300x300.png",
          gallery: ["/assets/scraped/masque-800x600d-300x300.png"],
          longDescription: "Gamme hygiène : Masque de protection à usage unique 3 plis."
        },
        {
          name: "Masque de protection à usage unique 3 plis TYPE IIR",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/masques-chirurgicaux-type-2r-300x300.jpg",
          gallery: ["/assets/scraped/masques-chirurgicaux-type-2r-300x300.jpg"],
          longDescription: "Gamme hygiène : Masque de protection à usage unique 3 plis TYPE IIR."
        },
        {
          name: "Masque de protection pour enfant",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/masque-fille-800x600d-1-300x300.png",
          gallery: ["/assets/scraped/masque-fille-800x600d-1-300x300.png"],
          longDescription: "Gamme hygiène : Masque de protection pour enfant."
        },
        {
          name: "GRENOUILLERE MAMYNETT",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/grenouillere-incontinence-lourde-mamynett-modele-unisexe-300x300.jpg",
          gallery: ["/assets/scraped/grenouillere-incontinence-lourde-mamynett-modele-unisexe-300x300.jpg"],
          longDescription: "Gamme hygiène : GRENOUILLERE MAMYNETT."
        },
        {
          name: "Planche de bain Benny et Benny XL",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/planche-bain-benny-drive-200x200p.jpg",
          gallery: ["/assets/scraped/planche-bain-benny-drive-200x200p.jpg"],
          longDescription: "Gamme hygiène : Planche de bain Benny et Benny XL."
        },
        {
          name: "Réhausse WC Clipper III",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/500400-300x300.jpg",
          gallery: ["/assets/scraped/500400-300x300.jpg"],
          longDescription: "Gamme hygiène : Réhausse WC Clipper III."
        },
        {
          name: "Rehausse wc surélévateur de toilettes",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/rehausse-wc-surelevateur-de-toilettes-rehofix-7-cm-1-e1607078164551-300x300.jpg",
          gallery: ["/assets/scraped/rehausse-wc-surelevateur-de-toilettes-rehofix-7-cm-1-e1607078164551-300x300.jpg"],
          longDescription: "Gamme hygiène : Rehausse wc surélévateur de toilettes."
        },
        {
          name: "Réhausse WC TICCO 2G",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/ticco-couvercle-300x300.jpg",
          gallery: ["/assets/scraped/ticco-couvercle-300x300.jpg"],
          longDescription: "Gamme hygiène : Réhausse WC TICCO 2G."
        },
        {
          name: "Réhausse-WC en mousse",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/rehausse-wc-en-mousse-joleti-300x300.jpg",
          gallery: ["/assets/scraped/rehausse-wc-en-mousse-joleti-300x300.jpg"],
          longDescription: "Gamme hygiène : Réhausse-WC en mousse."
        },
        {
          name: "Siège de bain pivotant Alisé H3000 Invacare",
          brand: "Invacare",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/siege-de-bain-pivotant-alise-h3000-invacare-1-300x300.jpg",
          gallery: ["/assets/scraped/siege-de-bain-pivotant-alise-h3000-invacare-1-300x300.jpg"],
          longDescription: "Gamme hygiène : Siège de bain pivotant Alisé H3000 Invacare."
        },
        {
          name: "Siège élévateur de bain électrique Bellavita",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/siege-elevateur-de-bain-electrique-bellavita-1-300x300.jpg",
          gallery: ["/assets/scraped/siege-elevateur-de-bain-electrique-bellavita-1-300x300.jpg"],
          longDescription: "Gamme hygiène : Siège élévateur de bain électrique Bellavita."
        },
        {
          name: "Surblouse jetable médical non tissé 35g et 25g",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/s-blouse-800x600-d-300x300.png",
          gallery: ["/assets/scraped/s-blouse-800x600-d-300x300.png"],
          longDescription: "Gamme hygiène : Surblouse jetable médical non tissé 35g et 25g."
        },
        {
          name: "Tabouret de bain Eco",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/tabouret-de-bain-eco-1-300x300.jpg",
          gallery: ["/assets/scraped/tabouret-de-bain-eco-1-300x300.jpg"],
          longDescription: "Gamme hygiène : Tabouret de bain Eco."
        },
        {
          name: "TABOURET DE DOUCHE INSPIRATION BOIS Drive DeVilbiss",
          brand: "Drive DeVilbiss",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/tabouret-de-douche-inspiration-bois-drive-devilbiss-1-300x300.jpg",
          gallery: ["/assets/scraped/tabouret-de-douche-inspiration-bois-drive-devilbiss-1-300x300.jpg"],
          longDescription: "Gamme hygiène : TABOURET DE DOUCHE INSPIRATION BOIS Drive DeVilbiss."
        },
        {
          name: "Tabouret de douche réglable en hauteur Pacific",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/tabouret-de-douche-reglable-en-hauteur-pacific-1-300x300.jpg",
          gallery: ["/assets/scraped/tabouret-de-douche-reglable-en-hauteur-pacific-1-300x300.jpg"],
          longDescription: "Gamme hygiène : Tabouret de douche réglable en hauteur Pacific."
        },
        {
          name: "Tapis de bain et de douche antidérapant",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/tapis-de-bain-et-de-douche-antiderapant-1-300x300.jpg",
          gallery: ["/assets/scraped/tapis-de-bain-et-de-douche-antiderapant-1-300x300.jpg"],
          longDescription: "Gamme hygiène : Tapis de bain et de douche antidérapant."
        },
        {
          name: "TSE 120 – RÉHAUSSE-WC AVEC ACCOUDOIRS RELEVABLES",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/rehausse-wc-tse-120-trois-quart-en-situ-1744e6b1.jpg",
          gallery: ["/assets/scraped/rehausse-wc-tse-120-trois-quart-en-situ-1744e6b1.jpg"],
          longDescription: "Gamme hygiène : TSE 120 – RÉHAUSSE-WC AVEC ACCOUDOIRS RELEVABLES."
        },
        {
          name: "Visière de protection transparente",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Hygiène",
          image: "/assets/scraped/visiere-face-shield-300x300.jpg",
          gallery: ["/assets/scraped/visiere-face-shield-300x300.jpg"],
          longDescription: "Gamme hygiène : Visière de protection transparente."
        }
      ]
    },
    {
      id: "incontinence-vente",
      name: "Incontinence",
      description: "Notre sélection de protections absorbantes et alèses pour la gestion de l'incontinence chez l'adulte.",
      products: [
        {
          name: "ONTEX-ID Expert Belt large Maxi",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Protection",
          image: "/assets/scraped/ontex-id-expert-belt-l-maxi.jpg",
          gallery: ["/assets/scraped/ontex-id-expert-belt-l-maxi.jpg"],
          longDescription: "Gamme incontinence : ONTEX-ID Expert Belt large Maxi."
        },
        {
          name: "CHANGE COMPLET MAXI +",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Protection",
          image: "/assets/scraped/soffisof-slip-maxi-plus-381x450.jpg",
          gallery: ["/assets/scraped/soffisof-slip-maxi-plus-381x450.jpg"],
          longDescription: "Gamme incontinence : CHANGE COMPLET MAXI +."
        },
        {
          name: "CHANGE COMPLET SUPER XL SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Protection",
          image: "/assets/scraped/soffisof-slip-super-xl-1.jpg",
          gallery: ["/assets/scraped/soffisof-slip-super-xl-1.jpg"],
          longDescription: "Gamme incontinence : CHANGE COMPLET SUPER XL SOFFISOF."
        },
        {
          name: "Alèses",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Protection",
          image: "/assets/scraped/alese-60x90cm-300x300.jpg",
          gallery: ["/assets/scraped/alese-60x90cm-300x300.jpg"],
          longDescription: "Gamme incontinence : Alèses."
        },
        {
          name: "ALESES 60×60 cm",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Protection",
          image: "/assets/scraped/alese-60x60-1-300x300.jpg",
          gallery: ["/assets/scraped/alese-60x60-1-300x300.jpg"],
          longDescription: "Gamme incontinence : ALESES 60×60 cm."
        },
        {
          name: "CHANGE COMPLET MAXI  L SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Protection",
          image: "/assets/scraped/changes-comples-maxi-l-soffisof-air-dry-1-300x300.jpg",
          gallery: ["/assets/scraped/changes-comples-maxi-l-soffisof-air-dry-1-300x300.jpg"],
          longDescription: "Gamme incontinence : CHANGE COMPLET MAXI  L SOFFISOF."
        },
        {
          name: "CHANGE COMPLET MAXI  M SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Protection",
          image: "/assets/scraped/changes-comples-maxi-m-soffisof-air-dry-1-300x300.jpg",
          gallery: ["/assets/scraped/changes-comples-maxi-m-soffisof-air-dry-1-300x300.jpg"],
          longDescription: "Gamme incontinence : CHANGE COMPLET MAXI  M SOFFISOF."
        },
        {
          name: "CHANGE COMPLET MAXI XXL SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Protection",
          image: "/assets/scraped/soffisof-slip-maxi-xxl-300x300.jpg",
          gallery: ["/assets/scraped/soffisof-slip-maxi-xxl-300x300.jpg"],
          longDescription: "Gamme incontinence : CHANGE COMPLET MAXI XXL SOFFISOF."
        },
        {
          name: "CHANGE COMPLET MAXI XXXL SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Protection",
          image: "/assets/scraped/soffisif-maxi-xxl-300x300.jpg",
          gallery: ["/assets/scraped/soffisif-maxi-xxl-300x300.jpg"],
          longDescription: "Gamme incontinence : CHANGE COMPLET MAXI XXXL SOFFISOF."
        },
        {
          name: "CHANGE COMPLET SUPER L SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Protection",
          image: "/assets/scraped/00963_pme_super_l-300x300.jpg",
          gallery: ["/assets/scraped/00963_pme_super_l-300x300.jpg"],
          longDescription: "Gamme incontinence : CHANGE COMPLET SUPER L SOFFISOF."
        },
        {
          name: "CHANGE COMPLET SUPER M SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Protection",
          image: "/assets/scraped/fralda-soffisof-super-m-600x737-1-300x300.jpg",
          gallery: ["/assets/scraped/fralda-soffisof-super-m-600x737-1-300x300.jpg"],
          longDescription: "Gamme incontinence : CHANGE COMPLET SUPER M SOFFISOF."
        },
        {
          name: "COUCHE DROITE SOFFISOF",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Protection",
          image: "/assets/scraped/couches-droites-soffisof-traversable-midi-super-300x300.jpg",
          gallery: ["/assets/scraped/couches-droites-soffisof-traversable-midi-super-300x300.jpg"],
          longDescription: "Gamme incontinence : COUCHE DROITE SOFFISOF."
        },
        {
          name: "GRENOUILLERE MAMYNETT",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Protection",
          image: "/assets/scraped/grenouillere-incontinence-lourde-mamynett-modele-unisexe-300x300.jpg",
          gallery: ["/assets/scraped/grenouillere-incontinence-lourde-mamynett-modele-unisexe-300x300.jpg"],
          longDescription: "Gamme incontinence : GRENOUILLERE MAMYNETT."
        }
      ]
    },
    {
      id: "aides-techniques-vente",
      name: "Aides Techniques",
      description: "Notre gamme d'aides techniques pour faciliter les gestes de la vie quotidienne et préserver l'autonomie.",
      products: [
        {
          name: "MEDELA Set double Symphony",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/medela-set-double-symphony-personnalfit-plus-21-mm-450x450.webp",
          gallery: ["/assets/scraped/medela-set-double-symphony-personnalfit-plus-21-mm-450x450.webp"],
          longDescription: "Gamme aides techniques : MEDELA Set double Symphony."
        },
        {
          name: "MEDELA Set double Symphony",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/kit-21-mm-p10.webp",
          gallery: ["/assets/scraped/kit-21-mm-p10.webp"],
          longDescription: "Gamme aides techniques : MEDELA Set double Symphony."
        },
        {
          name: "MEDELA Set double Symphony",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/kit-21-mm-p10.webp",
          gallery: ["/assets/scraped/kit-21-mm-p10.webp"],
          longDescription: "Gamme aides techniques : MEDELA Set double Symphony."
        },
        {
          name: "DISPOSITIF ANTIVIRAL ET ANTI-MOUSTIQUES",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/1211082000-2-768x676-1-450x450.jpg",
          gallery: ["/assets/scraped/1211082000-2-768x676-1-450x450.jpg"],
          longDescription: "Gamme aides techniques : DISPOSITIF ANTIVIRAL ET ANTI-MOUSTIQUES."
        },
        {
          name: "DISPOSITIF ANTIVIRAL et ANTI-MOUSTIQUES",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/aeriashield-travel-1-480x777-1-450x450.jpg",
          gallery: ["/assets/scraped/aeriashield-travel-1-480x777-1-450x450.jpg"],
          longDescription: "Gamme aides techniques : DISPOSITIF ANTIVIRAL et ANTI-MOUSTIQUES."
        },
        {
          name: "OXYMETRE de pouls",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/lk87-oxymetre-de-pouls-du-bout-des-doigts-capteur-d-oxygene-portable-300x300.jpg",
          gallery: ["/assets/scraped/lk87-oxymetre-de-pouls-du-bout-des-doigts-capteur-d-oxygene-portable-300x300.jpg"],
          longDescription: "Gamme aides techniques : OXYMETRE de pouls."
        },
        {
          name: "Oxymètre de pouls au doigt",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/oxymetre-de-pouls-8000x600-d-300x300.jpg",
          gallery: ["/assets/scraped/oxymetre-de-pouls-8000x600-d-300x300.jpg"],
          longDescription: "Gamme aides techniques : Oxymètre de pouls au doigt."
        },
        {
          name: "Oxymètre de pouls Oxypad au doigt Colson",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/oxymetre-de-pouls-oxypad-home2-800x600-d-300x300.jpg",
          gallery: ["/assets/scraped/oxymetre-de-pouls-oxypad-home2-800x600-d-300x300.jpg"],
          longDescription: "Gamme aides techniques : Oxymètre de pouls Oxypad au doigt Colson."
        },
        {
          name: "Stéthoscope BK3001",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/sethoscope-bk3001-powerscan-300x300.png",
          gallery: ["/assets/scraped/sethoscope-bk3001-powerscan-300x300.png"],
          longDescription: "Gamme aides techniques : Stéthoscope BK3001."
        },
        {
          name: "Tensiomètre automatique au bras",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/tensometre-automatique-au-bras-1-300x300.jpg",
          gallery: ["/assets/scraped/tensometre-automatique-au-bras-1-300x300.jpg"],
          longDescription: "Gamme aides techniques : Tensiomètre automatique au bras."
        },
        {
          name: "Tensiomètre Manuel au bras BK2015",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/tensiometre-manuel-au-bras-large-ecran-bk2015-powerscan-1-300x300.png",
          gallery: ["/assets/scraped/tensiometre-manuel-au-bras-large-ecran-bk2015-powerscan-1-300x300.png"],
          longDescription: "Gamme aides techniques : Tensiomètre Manuel au bras BK2015."
        },
        {
          name: "TENSIOMETRE AUTOMATIQUE AU BRAS BLUETOOTH",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/2powerscan-tensiometre-bras-cs80b-300x300.jpg",
          gallery: ["/assets/scraped/2powerscan-tensiometre-bras-cs80b-300x300.jpg"],
          longDescription: "Gamme aides techniques : TENSIOMETRE AUTOMATIQUE AU BRAS BLUETOOTH."
        },
        {
          name: "Tensiometre automatique au bras POWERSCAN",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/tensiometre-automatique-au-bras-powerscan-1-300x300.jpg",
          gallery: ["/assets/scraped/tensiometre-automatique-au-bras-powerscan-1-300x300.jpg"],
          longDescription: "Gamme aides techniques : Tensiometre automatique au bras POWERSCAN."
        },
        {
          name: "Tensiomètre automatique au poignet POWERSCAN",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/tensiometre-automatique-au-poignet-powerscan-1-300x300.jpg",
          gallery: ["/assets/scraped/tensiometre-automatique-au-poignet-powerscan-1-300x300.jpg"],
          longDescription: "Gamme aides techniques : Tensiomètre automatique au poignet POWERSCAN."
        },
        {
          name: "Tensiométre automatique Powerscan",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/tensiometre-automatique-powerscan-1-300x300.jpg",
          gallery: ["/assets/scraped/tensiometre-automatique-powerscan-1-300x300.jpg"],
          longDescription: "Gamme aides techniques : Tensiométre automatique Powerscan."
        },
        {
          name: "Tensiomètre brassard manopoire Holtex Easy 2",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/tensiometre-brassard-manopoire-holtex-easy-2-1-300x300.jpg",
          gallery: ["/assets/scraped/tensiometre-brassard-manopoire-holtex-easy-2-1-300x300.jpg"],
          longDescription: "Gamme aides techniques : Tensiomètre brassard manopoire Holtex Easy 2."
        },
        {
          name: "Tensiomètre Manuel au bras BK2006",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/tensiometre-manuel-au-bras-robuste-bk2006-powerscan-300x300.png",
          gallery: ["/assets/scraped/tensiometre-manuel-au-bras-robuste-bk2006-powerscan-300x300.png"],
          longDescription: "Gamme aides techniques : Tensiomètre Manuel au bras BK2006."
        },
        {
          name: "Thermomètre Sans Contact Powerscan Scan Color",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/powerscan-test-800x600-1-300x300.png",
          gallery: ["/assets/scraped/powerscan-test-800x600-1-300x300.png"],
          longDescription: "Gamme aides techniques : Thermomètre Sans Contact Powerscan Scan Color."
        },
        {
          name: "Neurostimulateur transcutané Tens éco 2",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/2neurostimulateur-transcutane-tens-eco-2-1-300x300.jpg",
          gallery: ["/assets/scraped/2neurostimulateur-transcutane-tens-eco-2-1-300x300.jpg"],
          longDescription: "Gamme aides techniques : Neurostimulateur transcutané Tens éco 2."
        },
        {
          name: "Tire-lait électrique simple ou double pompage MINIKIT PRO",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/minikit-duo-1-300x300.jpg",
          gallery: ["/assets/scraped/minikit-duo-1-300x300.jpg"],
          longDescription: "Gamme aides techniques : Tire-lait électrique simple ou double pompage MINIKIT PRO."
        },
        {
          name: "Tire-lait FISIO PRO",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/tire-lait-fisio-pro-1-300x300.jpg",
          gallery: ["/assets/scraped/tire-lait-fisio-pro-1-300x300.jpg"],
          longDescription: "Gamme aides techniques : Tire-lait FISIO PRO."
        },
        {
          name: "Tire-lait MEDELA Symphony électrique",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Aide quotidienne",
          image: "/assets/scraped/tir-lait-symphony-300x300.jpg",
          gallery: ["/assets/scraped/tir-lait-symphony-300x300.jpg"],
          longDescription: "Gamme aides techniques : Tire-lait MEDELA Symphony électrique."
        }
      ]
    },
    {
      id: "maintien-postural-vente",
      name: "Maintien Postural",
      description: "Coussins de positionnement et cales pour assurer le confort et prévenir les escarres.",
      products: [
        {
          name: "Brassière de maintien postural",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Maintien",
          image: "/assets/scraped/03winnsave_brassiere_de_securite_zjpg-450x450.jpg",
          gallery: ["/assets/scraped/03winnsave_brassiere_de_securite_zjpg-450x450.jpg"],
          longDescription: "Gamme maintien postural : Brassière de maintien postural."
        },
        {
          name: "Ceinture pelvienne",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Maintien",
          image: "/assets/scraped/04winnsave_ceinture_pelvienne_classique_zjpg-450x450.jpg",
          gallery: ["/assets/scraped/04winnsave_ceinture_pelvienne_classique_zjpg-450x450.jpg"],
          longDescription: "Gamme maintien postural : Ceinture pelvienne."
        },
        {
          name: "Maintien pelvien",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Maintien",
          image: "/assets/scraped/01winnsave_brassiere_pelvienne_classique_zjpg-450x450.jpg",
          gallery: ["/assets/scraped/01winnsave_brassiere_pelvienne_classique_zjpg-450x450.jpg"],
          longDescription: "Gamme maintien postural : Maintien pelvien."
        }
      ]
    },
    {
      id: "au-quotidien-vente",
      name: "Au Quotidien",
      description: "Notre sélection d'accessoires et d'équipements pour simplifier votre vie quotidienne à la maison.",
      products: [
        {
          name: "Chaise haute de cuisine Kizine",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/kizine-trois-quart-450x450.jpg",
          gallery: ["/assets/scraped/kizine-trois-quart-450x450.jpg"],
          longDescription: "Gamme au quotidien : Chaise haute de cuisine Kizine."
        },
        {
          name: "Cannes anglaises grande taille",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/726-1-450x450.jpg",
          gallery: ["/assets/scraped/726-1-450x450.jpg"],
          longDescription: "Gamme au quotidien : Cannes anglaises grande taille."
        },
        {
          name: "REHAUSSE-WC TSE 150 PLUS",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/rs2373_5201000_hauptbild_marmlehne-copie-a27dc73d.jpg",
          gallery: ["/assets/scraped/rs2373_5201000_hauptbild_marmlehne-copie-a27dc73d.jpg"],
          longDescription: "Gamme au quotidien : REHAUSSE-WC TSE 150 PLUS."
        },
        {
          name: "Elévateur de bain Aquatec Orca",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/elevateur-de-bain_orca-cv02-450x450.jpg",
          gallery: ["/assets/scraped/elevateur-de-bain_orca-cv02-450x450.jpg"],
          longDescription: "Gamme au quotidien : Elévateur de bain Aquatec Orca."
        },
        {
          name: "TASSE EROGONOMIQUE",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/tasse_ergonomique_ergo-450x329.jpg",
          gallery: ["/assets/scraped/tasse_ergonomique_ergo-450x329.jpg"],
          longDescription: "Gamme au quotidien : TASSE EROGONOMIQUE."
        },
        {
          name: "NITRO rollator pliant",
          brand: "Drive DeVilbiss",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/nitro-300x300.jpg",
          gallery: ["/assets/scraped/nitro-300x300.jpg"],
          longDescription: "Gamme au quotidien : NITRO rollator pliant."
        },
        {
          name: "Rollator 4 roues Road pliable avec siège et panier",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/deambulateur-4-roues-road-pliable-avec-siege-et-panier-1-300x300.jpg",
          gallery: ["/assets/scraped/deambulateur-4-roues-road-pliable-avec-siege-et-panier-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Rollator 4 roues Road pliable avec siège et panier."
        },
        {
          name: "Déambulateur Angelo adulte",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/angelo-100-adulte-300x300.jpg",
          gallery: ["/assets/scraped/angelo-100-adulte-300x300.jpg"],
          longDescription: "Gamme au quotidien : Déambulateur Angelo adulte."
        },
        {
          name: "Rollator 3 roues pliant avec panier Madrid",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/rollator-pliant-madrid-3-roues--300x300.jpg",
          gallery: ["/assets/scraped/rollator-pliant-madrid-3-roues--300x300.jpg"],
          longDescription: "Gamme au quotidien : Rollator 3 roues pliant avec panier Madrid."
        },
        {
          name: "Chaise garde-robe Candy 155",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/candy-155-450x450.jpg",
          gallery: ["/assets/scraped/candy-155-450x450.jpg"],
          longDescription: "Gamme au quotidien : Chaise garde-robe Candy 155."
        },
        {
          name: "DISPOSITIF ANTIVIRAL ET ANTI-MOUSTIQUES",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/1211082000-2-768x676-1-450x450.jpg",
          gallery: ["/assets/scraped/1211082000-2-768x676-1-450x450.jpg"],
          longDescription: "Gamme au quotidien : DISPOSITIF ANTIVIRAL ET ANTI-MOUSTIQUES."
        },
        {
          name: "Siège de douche Spidra 1000",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/spidra-1000.jpg",
          gallery: ["/assets/scraped/spidra-1000.jpg"],
          longDescription: "Gamme au quotidien : Siège de douche Spidra 1000."
        },
        {
          name: "Protections barrières de lit",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/capture-450x450.jpg",
          gallery: ["/assets/scraped/capture-450x450.jpg"],
          longDescription: "Gamme au quotidien : Protections barrières de lit."
        },
        {
          name: "Assise SITSMART POSTURE +",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/assise-sitsmart-posture-200x200-1-300x200.jpg",
          gallery: ["/assets/scraped/assise-sitsmart-posture-200x200-1-300x200.jpg"],
          longDescription: "Gamme au quotidien : Assise SITSMART POSTURE +."
        },
        {
          name: "BALLES DE REEDUCATION",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/balles-de-reeducation-1.jpg",
          gallery: ["/assets/scraped/balles-de-reeducation-1.jpg"],
          longDescription: "Gamme au quotidien : BALLES DE REEDUCATION."
        },
        {
          name: "BARRE D&#8217;APPUI",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/barre-dappui-pour-toilettes-rabattable-avec-pied-300x300.jpg",
          gallery: ["/assets/scraped/barre-dappui-pour-toilettes-rabattable-avec-pied-300x300.jpg"],
          longDescription: "Gamme au quotidien : BARRE D&#8217;APPUI."
        },
        {
          name: "ROLLATOR et UN FAUTEUIL DE TRANSFERT",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/rollator-diamond-deluxe-3-cb39099a.jpg",
          gallery: ["/assets/scraped/rollator-diamond-deluxe-3-cb39099a.jpg"],
          longDescription: "Gamme au quotidien : ROLLATOR et UN FAUTEUIL DE TRANSFERT."
        },
        {
          name: "Rollator Fortissimo 4 roues réglable",
          brand: "HMS Vilgo",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/rollator-4-roues-fortissimo-hms-vilgo-1-300x300.jpg",
          gallery: ["/assets/scraped/rollator-4-roues-fortissimo-hms-vilgo-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Rollator Fortissimo 4 roues réglable."
        },
        {
          name: "Rollator Fortissimo 2 roues réglable",
          brand: "HMS Vilgo",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/rollator-2-roues-fortissimo-hms-vilgo-1-300x300.jpg",
          gallery: ["/assets/scraped/rollator-2-roues-fortissimo-hms-vilgo-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Rollator Fortissimo 2 roues réglable."
        },
        {
          name: "Rollator Londres 2 roues pliable avec siège",
          brand: "Dupont",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/rollator-pliant-londres-drive-2x2-1-300x300.jpg",
          gallery: ["/assets/scraped/rollator-pliant-londres-drive-2x2-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Rollator Londres 2 roues pliable avec siège."
        },
        {
          name: "Déambulateur Miami (pliant)",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/deambulateur-pliant-miami-4dcdf39a-1.jpg",
          gallery: ["/assets/scraped/deambulateur-pliant-miami-4dcdf39a-1.jpg"],
          longDescription: "Gamme au quotidien : Déambulateur Miami (pliant)."
        },
        {
          name: "Déambulateur fixe ultra léger et réglable",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/deambulateur-fixe-ultra-leger-reglable-en-hauteur-brighton-1-300x300.jpg",
          gallery: ["/assets/scraped/deambulateur-fixe-ultra-leger-reglable-en-hauteur-brighton-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Déambulateur fixe ultra léger et réglable."
        },
        {
          name: "Déambulateur Fortissimo pliant",
          brand: "HMS Vilgo",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/deambulateur-pliant-fortissimo-hms-vilgo-1-300x300.jpg",
          gallery: ["/assets/scraped/deambulateur-pliant-fortissimo-hms-vilgo-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Déambulateur Fortissimo pliant."
        },
        {
          name: "CANNE SIEGE PLIANT 3 PIEDS",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/preview-1-450x450.jpg",
          gallery: ["/assets/scraped/preview-1-450x450.jpg"],
          longDescription: "Gamme au quotidien : CANNE SIEGE PLIANT 3 PIEDS."
        },
        {
          name: "Canne poignée T",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/4-ter.jpg",
          gallery: ["/assets/scraped/4-ter.jpg"],
          longDescription: "Gamme au quotidien : Canne poignée T."
        },
        {
          name: "Béquille Vilgo sous axillaire",
          brand: "HMS Vilgo",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/bequille-sous-axillaire-vilgo-1-300x300.jpg",
          gallery: ["/assets/scraped/bequille-sous-axillaire-vilgo-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Béquille Vilgo sous axillaire."
        },
        {
          name: "Canne de marche repliable aluminium",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/ref-c43-2-300x300.jpg",
          gallery: ["/assets/scraped/ref-c43-2-300x300.jpg"],
          longDescription: "Gamme au quotidien : Canne de marche repliable aluminium."
        },
        {
          name: "Béquille Vilgo poignée anatomique",
          brand: "HMS Vilgo",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/canne-anglaises-reglables-en-hauteur-300x300.jpg",
          gallery: ["/assets/scraped/canne-anglaises-reglables-en-hauteur-300x300.jpg"],
          longDescription: "Gamme au quotidien : Béquille Vilgo poignée anatomique."
        },
        {
          name: "Canne Derby (8 MOTIFS)",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/canne-derby-8-modeles-herdegen-300x300.webp",
          gallery: ["/assets/scraped/canne-derby-8-modeles-herdegen-300x300.webp"],
          longDescription: "Gamme au quotidien : Canne Derby (8 MOTIFS)."
        },
        {
          name: "Canne DeVilbiss anatomique réglable",
          brand: "Drive DeVilbiss",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/canne-anatomique-reglable-hauteur-300x300.jpg",
          gallery: ["/assets/scraped/canne-anatomique-reglable-hauteur-300x300.jpg"],
          longDescription: "Gamme au quotidien : Canne DeVilbiss anatomique réglable."
        },
        {
          name: "Canne tout-terrain",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/canne-tout-terrain-1-300x300.jpg",
          gallery: ["/assets/scraped/canne-tout-terrain-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Canne tout-terrain."
        },
        {
          name: "Canne Vilgo en T pliante et réglable",
          brand: "HMS Vilgo",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/canne-metalliques-pliante-vilgo-2x2-1-300x200.png",
          gallery: ["/assets/scraped/canne-metalliques-pliante-vilgo-2x2-1-300x200.png"],
          longDescription: "Gamme au quotidien : Canne Vilgo en T pliante et réglable."
        },
        {
          name: "Cannes de marche design",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/3693-canne-design-fixe-reglable-aluminium_edited-300x300.jpg",
          gallery: ["/assets/scraped/3693-canne-design-fixe-reglable-aluminium_edited-300x300.jpg"],
          longDescription: "Gamme au quotidien : Cannes de marche design."
        },
        {
          name: "Chaise de douche avec poignée",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/chaise-oceane-av-poignees-3quart-8413cd69.jpg",
          gallery: ["/assets/scraped/chaise-oceane-av-poignees-3quart-8413cd69.jpg"],
          longDescription: "Gamme au quotidien : Chaise de douche avec poignée."
        },
        {
          name: "Coussin coccyx SITFIT plus",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/coussin-coccyx-sitfit-plus-1-300x300.jpg",
          gallery: ["/assets/scraped/coussin-coccyx-sitfit-plus-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Coussin coccyx SITFIT plus."
        },
        {
          name: "CUVETTE LAVE-TÊTE",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/cuvette-lave-tete-300x300.jpg",
          gallery: ["/assets/scraped/cuvette-lave-tete-300x300.jpg"],
          longDescription: "Gamme au quotidien : CUVETTE LAVE-TÊTE."
        },
        {
          name: "GRENOUILLÈRE OUESSANT",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/grenouillere-ouessant_web-8x6-1-300x300.jpg",
          gallery: ["/assets/scraped/grenouillere-ouessant_web-8x6-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : GRENOUILLÈRE OUESSANT."
        },
        {
          name: "Kit double pompage pour tire-lait SYMPHONY",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/kit-double-pompage-pour-tire-lait-symphony-1-300x300.jpg",
          gallery: ["/assets/scraped/kit-double-pompage-pour-tire-lait-symphony-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Kit double pompage pour tire-lait SYMPHONY."
        },
        {
          name: "Lingettes Nettoyantes Désinfectantes",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/lingettes-nettoyantes-desinfectantes-sleepy-300x300.jpg",
          gallery: ["/assets/scraped/lingettes-nettoyantes-desinfectantes-sleepy-300x300.jpg"],
          longDescription: "Gamme au quotidien : Lingettes Nettoyantes Désinfectantes."
        },
        {
          name: "Masque de protection pour enfant",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/masque-fille-800x600d-1-300x300.png",
          gallery: ["/assets/scraped/masque-fille-800x600d-1-300x300.png"],
          longDescription: "Gamme au quotidien : Masque de protection pour enfant."
        },
        {
          name: "Pinces de préhension légères aimantées Libra",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/pince-de-prehension-standart-60-cm-pharmaouest-2x2-1.jpg",
          gallery: ["/assets/scraped/pince-de-prehension-standart-60-cm-pharmaouest-2x2-1.jpg"],
          longDescription: "Gamme au quotidien : Pinces de préhension légères aimantées Libra."
        },
        {
          name: "Planche de bain Benny et Benny XL",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/planche-bain-benny-drive-200x200p.jpg",
          gallery: ["/assets/scraped/planche-bain-benny-drive-200x200p.jpg"],
          longDescription: "Gamme au quotidien : Planche de bain Benny et Benny XL."
        },
        {
          name: "PROTEGE OREILLE POUR LUNETTES A OXYGENE",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/protege-oreille-pour-lunettes-a-oxygene-2x2-1-300x200.png",
          gallery: ["/assets/scraped/protege-oreille-pour-lunettes-a-oxygene-2x2-1-300x200.png"],
          longDescription: "Gamme au quotidien : PROTEGE OREILLE POUR LUNETTES A OXYGENE."
        },
        {
          name: "Siège de bain pivotant Alisé H3000 Invacare",
          brand: "Invacare",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/siege-de-bain-pivotant-alise-h3000-invacare-1-300x300.jpg",
          gallery: ["/assets/scraped/siege-de-bain-pivotant-alise-h3000-invacare-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Siège de bain pivotant Alisé H3000 Invacare."
        },
        {
          name: "Siège élévateur de bain électrique Bellavita",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/siege-elevateur-de-bain-electrique-bellavita-1-300x300.jpg",
          gallery: ["/assets/scraped/siege-elevateur-de-bain-electrique-bellavita-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Siège élévateur de bain électrique Bellavita."
        },
        {
          name: "Siège pivotant pour baignoire",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/siege-bain-pivotant-dakara-32097de6.jpg",
          gallery: ["/assets/scraped/siege-bain-pivotant-dakara-32097de6.jpg"],
          longDescription: "Gamme au quotidien : Siège pivotant pour baignoire."
        },
        {
          name: "Table a manger",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/table-a-manger-1-300x300.jpg",
          gallery: ["/assets/scraped/table-a-manger-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Table a manger."
        },
        {
          name: "Tabouret de bain Eco",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/tabouret-de-bain-eco-1-300x300.jpg",
          gallery: ["/assets/scraped/tabouret-de-bain-eco-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Tabouret de bain Eco."
        },
        {
          name: "TABOURET DE DOUCHE INSPIRATION BOIS Drive DeVilbiss",
          brand: "Drive DeVilbiss",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/tabouret-de-douche-inspiration-bois-drive-devilbiss-1-300x300.jpg",
          gallery: ["/assets/scraped/tabouret-de-douche-inspiration-bois-drive-devilbiss-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : TABOURET DE DOUCHE INSPIRATION BOIS Drive DeVilbiss."
        },
        {
          name: "Tabouret de douche réglable en hauteur Pacific",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/tabouret-de-douche-reglable-en-hauteur-pacific-1-300x300.jpg",
          gallery: ["/assets/scraped/tabouret-de-douche-reglable-en-hauteur-pacific-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Tabouret de douche réglable en hauteur Pacific."
        },
        {
          name: "Talonnière anti-escarres Pharma fibres Pharmaouest",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/talonniere-anti-escarres-pharma-fibres-pharmaouest-1-300x300.jpg",
          gallery: ["/assets/scraped/talonniere-anti-escarres-pharma-fibres-pharmaouest-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Talonnière anti-escarres Pharma fibres Pharmaouest."
        },
        {
          name: "Talonnières anti-escarre peau de mouton synthétique (la paire)",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/talonnieres-anti-escarre-peau-de-mouton-synthetique-la-paire-pharmaouest-1-300x300.jpg",
          gallery: ["/assets/scraped/talonnieres-anti-escarre-peau-de-mouton-synthetique-la-paire-pharmaouest-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Talonnières anti-escarre peau de mouton synthétique (la paire)."
        },
        {
          name: "Tapis de bain et de douche antidérapant",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/tapis-de-bain-et-de-douche-antiderapant-1-300x300.jpg",
          gallery: ["/assets/scraped/tapis-de-bain-et-de-douche-antiderapant-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Tapis de bain et de douche antidérapant."
        },
        {
          name: "TENSIOMETRE AUTOMATIQUE AU BRAS BLUETOOTH",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/2powerscan-tensiometre-bras-cs80b-300x300.jpg",
          gallery: ["/assets/scraped/2powerscan-tensiometre-bras-cs80b-300x300.jpg"],
          longDescription: "Gamme au quotidien : TENSIOMETRE AUTOMATIQUE AU BRAS BLUETOOTH."
        },
        {
          name: "Tire Lait B to B",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/tire-lait-b-to-b-1-300x300.jpg",
          gallery: ["/assets/scraped/tire-lait-b-to-b-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Tire Lait B to B."
        },
        {
          name: "Tire-lait électrique simple ou double pompage MINIKIT PRO",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Quotidien",
          image: "/assets/scraped/minikit-duo-1-300x300.jpg",
          gallery: ["/assets/scraped/minikit-duo-1-300x300.jpg"],
          longDescription: "Gamme au quotidien : Tire-lait électrique simple ou double pompage MINIKIT PRO."
        }
      ]
    },
    {
      id: "materiel-professionnel-vente",
      name: "Matériel Professionnel",
      description: "Notre sélection de consommables et dispositifs médicaux pour les professionnels de santé.",
      products: [
        {
          name: "Pince Adson sans griffe",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Professionnel",
          image: "/assets/scraped/pinceadsonpng-450x450.jpg",
          gallery: ["/assets/scraped/pinceadsonpng-450x450.jpg"],
          longDescription: "Gamme matériel professionnel : Pince Adson sans griffe."
        },
        {
          name: "CHAMPS STERILES FOLIODRAPE",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Professionnel",
          image: "/assets/scraped/foliodrape-450x450.webp",
          gallery: ["/assets/scraped/foliodrape-450x450.webp"],
          longDescription: "Gamme matériel professionnel : CHAMPS STERILES FOLIODRAPE."
        },
        {
          name: "Gant nitrile PEHA SOFT FINO",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Professionnel",
          image: "/assets/scraped/gants-s-450x257.jpg",
          gallery: ["/assets/scraped/gants-s-450x257.jpg"],
          longDescription: "Gamme matériel professionnel : Gant nitrile PEHA SOFT FINO."
        },
        {
          name: "CHARLOTTE",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Professionnel",
          image: "/assets/scraped/charlotte-jetable-en-tnt-bleue-450x450.jpg",
          gallery: ["/assets/scraped/charlotte-jetable-en-tnt-bleue-450x450.jpg"],
          longDescription: "Gamme matériel professionnel : CHARLOTTE."
        },
        {
          name: "Détergent désinfectant de surface Surfa’safe premium 750 ml",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Professionnel",
          image: "/assets/scraped/desinfectant-toutes-surfaces-anios-surfa-safe-premium--300x300.jpg",
          gallery: ["/assets/scraped/desinfectant-toutes-surfaces-anios-surfa-safe-premium--300x300.jpg"],
          longDescription: "Gamme matériel professionnel : Détergent désinfectant de surface Surfa’safe premium 750 ml."
        },
        {
          name: "Distributeur de gel automatique sur pied",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Professionnel",
          image: "/assets/scraped/distributeur-de-gel-sur-pied-300x300.jpg",
          gallery: ["/assets/scraped/distributeur-de-gel-sur-pied-300x300.jpg"],
          longDescription: "Gamme matériel professionnel : Distributeur de gel automatique sur pied."
        },
        {
          name: "Surblouse jetable médical non tissé",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Professionnel",
          image: "/assets/scraped/surblouse-jetable-1-1-450x450.jpg",
          gallery: ["/assets/scraped/surblouse-jetable-1-1-450x450.jpg"],
          longDescription: "Gamme matériel professionnel : Surblouse jetable médical non tissé."
        },
        {
          name: "DRAPS D’EXAMEN",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Professionnel",
          image: "/assets/scraped/draps-d-examen-1-300x300.jpg",
          gallery: ["/assets/scraped/draps-d-examen-1-300x300.jpg"],
          longDescription: "Gamme matériel professionnel : DRAPS D’EXAMEN."
        },
        {
          name: "Obus d'oxygène médical Linde Healthcare",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Professionnel",
          image: "/assets/scraped/obus-oxygene-2x2-1-200x300.png",
          gallery: ["/assets/scraped/obus-oxygene-2x2-1-200x300.png"],
          longDescription: "Gamme matériel professionnel : Obus d'oxygène médical Linde Healthcare."
        },
        {
          name: "OXYMETRE de pouls",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Professionnel",
          image: "/assets/scraped/lk87-oxymetre-de-pouls-du-bout-des-doigts-capteur-d-oxygene-portable-300x300.jpg",
          gallery: ["/assets/scraped/lk87-oxymetre-de-pouls-du-bout-des-doigts-capteur-d-oxygene-portable-300x300.jpg"],
          longDescription: "Gamme matériel professionnel : OXYMETRE de pouls."
        },
        {
          name: "Stéthoscope BK3001",
          brand: "Divers",
          material: "Matériel médical",
          colors: "Standard",
          tech: "Professionnel",
          image: "/assets/scraped/sethoscope-bk3001-powerscan-300x300.png",
          gallery: ["/assets/scraped/sethoscope-bk3001-powerscan-300x300.png"],
          longDescription: "Gamme matériel professionnel : Stéthoscope BK3001."
        }
      ]
    },

    {
      id: "equipements-medicaux",
      name: "Équipements & Soins",
      description: "Notre sélection premium d'équipements médicaux et solutions de soins spécialisés.",
      products: [
        {
          name: "Aniosgel 85 NPC",
          brand: "Anios",
          material: "Gel Hydroalcoolique Thixotropique",
          colors: "Incolore / Transparent",
          tech: "Désinfection Chirurgicale",
          image: "/assets/extracted/products/aniosgel.png",
          gallery: ["/assets/extracted/products/aniosgel.png"],
          longDescription: "Gel hydroalcoolique thixotropique pour le traitement hygiénique et la désinfection chirurgicale des mains par friction. Sa formule est hypoallergénique et testée sous contrôle dermatologique."
        },
        {
          name: "Clinutren (Gamme Nestlé)",
          brand: "Nestlé Health Science",
          material: "Complément Nutritionnel Oral",
          colors: "Vanille, Chocolat, Café, Fraise",
          tech: "Hyperprotéiné & Hypercalorique",
          image: "/assets/extracted/products/clinutren1.png",
          gallery: ["/assets/extracted/products/clinutren1.png", "/assets/extracted/products/clinutren2.png", "/assets/extracted/products/clinutren3.png", "/assets/extracted/products/clinutren4.png"],
          longDescription: "Clinutren est un complément nutritionnel oral complet, hyperprotéiné et hypercalorique. Conçu pour répondre aux besoins nutritionnels des patients en cas de dénutrition ou de risque de dénutrition. Existe en plusieurs formats et saveurs gourmandes."
        },
        {
          name: "Delical (Gamme Lactalis)",
          brand: "Delical",
          material: "Boisson Lactée / Crème Dessert",
          colors: "Saveurs Fruitées & Gourmandes",
          tech: "Soutien Nutritionnel Clinique",
          image: "/assets/extracted/products/delical1.png",
          gallery: ["/assets/extracted/products/delical1.png", "/assets/extracted/products/delical2.png", "/assets/extracted/products/delical3.png"],
          longDescription: "Les produits Delical sont des denrées alimentaires destinées à des fins médicales spéciales. Ils offrent un soutien nutritionnel efficace avec une grande variété de saveurs et de textures (boissons, crèmes, purées) pour lutter contre la dénutrition."
        },
        {
          name: "MoliCare Premium",
          brand: "Hartmann",
          material: "Protection Absorbante Haute Performance",
          colors: "Blanc / Bleu (Tailles S à XL)",
          tech: "Technologie Hartmann Confiance",
          image: "/assets/extracted/products/molicare.png",
          gallery: ["/assets/extracted/products/molicare.png"],
          longDescription: "Protections pour l'incontinence Hartmann MoliCare Premium. Haute absorption, protection de la peau et confort optimal grâce à un voile externe doux et respirant pour une sécurité totale au quotidien."
        },
        {
          name: "Veroval Diagnostic",
          brand: "Hartmann",
          material: "Appareillage d'Automesure Précis",
          colors: "Gamme Complète Pro",
          tech: "Précision Certifiée Hartmann",
          image: "/assets/extracted/products/veroval1.png",
          gallery: ["/assets/extracted/products/veroval1.png", "/assets/extracted/products/veroval2.png", "/assets/extracted/products/veroval3.png"],
          longDescription: "Gamme d'appareils de diagnostic Veroval par Hartmann. Tensiomètres de bras et de poignet, thermomètres infrarouges et balances connectées offrant une précision médicale et une facilité d'utilisation exceptionnelle pour le suivi à domicile."
        },
        {
          name: "Cizeta Medicali",
          brand: "Cizeta",
          material: "Compression Veineuse & Orthopédie",
          colors: "Beige, Noir, Naturel",
          tech: "Expertise en Phlébologie",
          image: "/assets/extracted/products/cizeta.png",
          gallery: ["/assets/extracted/products/cizeta.png"],
          longDescription: "Solutions de compression veineuse Cizeta Medicali. Allie l'expertise thérapeutique italienne à un design moderne pour le traitement efficace des pathologies veineuses et lymphatiques, tout en assurant un confort au porté."
        },
        {
          name: "Genugib Gibaud",
          brand: "Gibaud",
          material: "Orthèse de Genou Articulée",
          colors: "Gris Anthracite / Bleu",
          tech: "Stabilisation Ligamentaire",
          image: "/assets/extracted/products/genugib.png",
          gallery: ["/assets/extracted/products/genugib.png", "/assets/extracted/products/genugib1.png"],
          longDescription: "L'orthèse de genou Genugib de Gibaud est conçue pour la stabilisation et le maintien du genou après un traumatisme ou en phase post-opératoire. Dotée de montants latéraux articulés pour un contrôle optimal du mouvement."
        },
        {
          name: "Systam Orthopédie",
          brand: "Systam",
          material: "Dispositif de Prévention Anti-escarres",
          colors: "Bleu Médical / Gris",
          tech: "Mousse Viscoélastique Haute Densité",
          image: "/assets/extracted/products/systam.png",
          gallery: ["/assets/extracted/products/systam.png"],
          longDescription: "Dispositifs Systam pour la prévention et l'aide au traitement des escarres. Coussins et matelas en mousse viscoélastique à mémoire de forme haute densité, assurant une répartition optimale des pressions et un confort accru."
        },
        {
          name: "Lombaskin Thuasne",
          brand: "Thuasne",
          material: "Ceinture de Soutien Lombaire Fine",
          colors: "Noir, Beige (Toutes Tailles)",
          tech: "Tissu Élastique Aéré Combitex",
          image: "/assets/extracted/products/lombaskin.png",
          gallery: ["/assets/extracted/products/lombaskin.png"],
          longDescription: "Ceinture de soutien lombaire compacte Lombaskin par Thuasne. Légère et aérée grâce au tissu breveté Combitex, elle offre un maintien efficace et un effet 'seconde peau' pour rester discrète sous les vêtements tout au long de la journée."
        }
      ]
    },
    {
      id: "pharma",
      name: "Scholl Pharma",
      description: "Gamme médicale et certifiée pour les professionnels.",
      products: [
        { name: "Harmony 2 Straps", brand: "Scholl", material: "Synthetic", colors: "Black, Light Gold, Rose Gold", tech: "Bioprint", image: "/assets/extracted/pharma-001.jpg" },
        { name: "Boa Vista", brand: "Scholl", material: "Synthetic Laminated", colors: "Black, Gold, Silver", tech: "Bioprint", image: "/assets/extracted/pharma-002.jpg" },
        { name: "Bowy 2.0", brand: "Scholl", material: "Synthetic Laminated", colors: "Gunmetal, Rose Gold, Off White", tech: "Bioprint", image: "/assets/extracted/pharma-003.jpg" },
        { name: "Monterey 2 Straps", brand: "Scholl", material: "Microfiber/Synthetic", colors: "Black, Taupe", tech: "Bioprint", image: "/assets/extracted/pharma-004.jpg" },
        { name: "Luce T-Bar", brand: "Scholl", material: "Microfiber/Synthetic", colors: "Silver, Dark Taupe", tech: "Bioprint", image: "/assets/extracted/pharma-006.jpg" },
        { name: "Bogotá Sandal", brand: "Scholl", material: "Textile Satin", colors: "Silver/Blue, Black/Multi", tech: "Bioprint", image: "/assets/extracted/pharma-008.jpg" }
      ]
    },
    {
      id: "lifestyle-femme",
      name: "Lifestyle Femme",
      description: "Élégance et confort quotidien pour la saison SS26.",
      products: [
        { name: "Bora 2 Buckles", brand: "Scholl", material: "Suede", colors: "Dark Beige, Peach, Olive, Fuchsia", tech: "Memory Cushion", image: "/assets/extracted/lifestyle-001.jpg" },
        { name: "Bora Moccasin", brand: "Scholl", material: "Suede", colors: "Cacao, Light Brown, Light Grey", tech: "Memory Cushion", image: "/assets/extracted/lifestyle-002.jpg" },
        { name: "Pescura Heel", brand: "Scholl", material: "Leather/Wood", colors: "Original, Black, White", tech: "Pescura Tech", image: "/assets/extracted/lifestyle-005.jpg" },
        { name: "Gala Sandal", brand: "Scholl", material: "Premium Leather", colors: "Tan, Black, Gold", tech: "Bioprint", image: "/assets/extracted/lifestyle-008.jpg" }
      ]
    },
    {
      id: "sneakers",
      name: "Pharma Sneakers",
      description: "Baskets médicales pour une mobilité active.",
      products: [
        { name: "Wind Step", brand: "Scholl", material: "Mesh + PU", colors: "White, Silver, Navy", tech: "Memory Cushion", image: "/assets/extracted/pharma-005.jpg" },
        { name: "Camden", brand: "Scholl", material: "Knitted Textile", colors: "Off White, Antique Pink, Sage", tech: "Memory Cushion", image: "/assets/extracted/pharma-009.jpg" },
        { name: "Mars Laces", brand: "Scholl", material: "Knitted Textile", colors: "White/Turquoise, Fuchsia, Sand", tech: "Memory Cushion", image: "/assets/extracted/pharma-011.jpg" },
        { name: "New Sprinter", brand: "Scholl", material: "Mesh Active", colors: "Off White/Multi, Khaki", tech: "Biomechanics", image: "/assets/extracted/pharma-012.jpg" },
        { name: "Walker", brand: "Scholl", material: "Mesh High Tech", colors: "White, Sage/Multi", tech: "Biomechanics", image: "/assets/extracted/pharma-015.jpg" }
      ]
    },
    {
      id: "lifestyle-homme",
      name: "Lifestyle Homme",
      description: "Design robuste et technologies de confort masculin.",
      products: [
        { name: "Wind Step Homme", brand: "Scholl", material: "Mesh / PU", colors: "Navy, Grey, Black", tech: "Memory Cushion", image: "/assets/extracted/pharma-020.jpg" },
        { name: "Ryan Moccasin", brand: "Scholl", material: "Leather / Suede", colors: "Brown, Navy, Black", tech: "Bioprint", image: "/assets/extracted/pharma-025.jpg" },
        { name: "Kyle Sandal", brand: "Scholl", material: "Synthetic", colors: "Grey, Black", tech: "Bioprint", image: "/assets/extracted/pharma-030.jpg" }
      ]
    }
  ],
  brandCategories: [
    {
      id: "medical",
      name: "Distributeur / Médical Terrain",
      brands: [
        { name: "Drive DeVilbiss Healthcare", logo: null },
        { name: "Invacare", logo: null },
        { name: "Hartmann", logo: "/assets/logos/hartmann.svg" },
        { name: "Anios", logo: "/assets/logos/anios.png" },
        { name: "Nestlé Health Science", logo: "/assets/logos/nestle.svg" },
        { name: "Délical", logo: "/assets/logos/delical.svg" },
        { name: "Systam", logo: "/assets/logos/systam-test.svg" },
        { name: "Herdegen", logo: null },
        { name: "Mobio", logo: null },
        { name: "Vermeiren", logo: null },
      ]
    },
    {
      id: "ortho",
      name: "Orthopédie / Orthèses",
      brands: [
        { name: "Gibaud", logo: "/assets/logos/gibaud-test.svg" },
        { name: "Cizeta Medicali", logo: "/assets/logos/cizeta.png" },
        { name: "Thuasne", logo: "/assets/logos/thuasne.png" },
        { name: "Bauerfeind", logo: null },
      ]
    },
    {
      id: "scholl",
      name: "Partenaire Exclusif Chaussures",
      brands: [
        { name: "Scholl", logo: "/assets/logos/scholl.png" },
      ]
    }
  ]
};


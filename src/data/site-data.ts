export const siteData = {
  name: "MATÉRIEL MÉDICAL AIXOISE",
  shortName: "MMA",
  slogan: "L'Innovation Scholl SS26 au cœur d'Aix",
  description: "La Maison Médicale Aixoise propose la vente et la location de matériel médical et orthopédique pour particuliers et professionnels de santé. Nous mettons à votre disposition une large gamme d’équipements fiables et certifiés : fauteuils roulants, déambulateurs, rollators, orthèses (genouillères, ceintures lombaires), bas de contention, aides à la marche, produits d’incontinence, literie médicalisée et coussins de positionnement, ainsi que des dispositifs de diagnostic.",
  address: "70 Rue Alain Decaux, 13100 Aix-en-Provence",
  phone: "+33 4 42 XX XX XX",
  email: "contact@mmaixoise.fr",
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


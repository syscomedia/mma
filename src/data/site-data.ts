export const siteData = {
  name: "LA MAISON MEDICALE AIXOISE",
  shortName: "MMA",
  slogan: "L'Innovation Scholl SS26 au cœur d'Aix",
  description: "La Maison Médicale Aixoise, située au Parc de la Duranne, est votre distributeur exclusif des collections Scholl SS26. Nous intégrons l'intégralité du catalogue Pharma, Lifestyle et Pescura directement sur notre plateforme pour vous offrir une expérience de choix inégalée.",
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
    { title: "Orthopédie", desc: "Expertise podologique et semelles sur mesure.", icon: "Activity" },
    { title: "Matériel Médical", desc: "Lits, fauteuils et aides techniques SS26.", icon: "Stethoscope" },
    { title: "Expertise Scholl", desc: "Conseillers formés aux technologies 2026.", icon: "CheckCircle" }
  ],
  catalogues: [
    {
      id: "pharma",
      name: "Scholl Pharma",
      description: "Gamme médicale et certifiée pour les professionnels.",
      products: [
        { name: "Harmony 2 Straps", material: "Synthetic", colors: "Black, Light Gold, Rose Gold", tech: "Bioprint", image: "/assets/extracted/pharma-001.jpg" },
        { name: "Boa Vista", material: "Synthetic Laminated", colors: "Black, Gold, Silver", tech: "Bioprint", image: "/assets/extracted/pharma-002.jpg" },
        { name: "Bowy 2.0", material: "Synthetic Laminated", colors: "Gunmetal, Rose Gold, Off White", tech: "Bioprint", image: "/assets/extracted/pharma-003.jpg" },
        { name: "Monterey 2 Straps", material: "Microfiber/Synthetic", colors: "Black, Taupe", tech: "Bioprint", image: "/assets/extracted/pharma-004.jpg" },
        { name: "Luce T-Bar", material: "Microfiber/Synthetic", colors: "Silver, Dark Taupe", tech: "Bioprint", image: "/assets/extracted/pharma-006.jpg" },
        { name: "Bogotá Sandal", material: "Textile Satin", colors: "Silver/Blue, Black/Multi", tech: "Bioprint", image: "/assets/extracted/pharma-008.jpg" }
      ]
    },
    {
      id: "lifestyle-femme",
      name: "Lifestyle Femme",
      description: "Élégance et confort quotidien pour la saison SS26.",
      products: [
        { name: "Bora 2 Buckles", material: "Suede", colors: "Dark Beige, Peach, Olive, Fuchsia", tech: "Memory Cushion", image: "/assets/extracted/lifestyle-001.jpg" },
        { name: "Bora Moccasin", material: "Suede", colors: "Cacao, Light Brown, Light Grey", tech: "Memory Cushion", image: "/assets/extracted/lifestyle-002.jpg" },
        { name: "Pescura Heel", material: "Leather/Wood", colors: "Original, Black, White", tech: "Pescura Tech", image: "/assets/extracted/lifestyle-005.jpg" },
        { name: "Gala Sandal", material: "Premium Leather", colors: "Tan, Black, Gold", tech: "Bioprint", image: "/assets/extracted/lifestyle-008.jpg" }
      ]
    },
    {
      id: "sneakers",
      name: "Pharma Sneakers",
      description: "Baskets médicales pour une mobilité active.",
      products: [
        { name: "Wind Step", material: "Mesh + PU", colors: "White, Silver, Navy", tech: "Memory Cushion", image: "/assets/extracted/pharma-005.jpg" },
        { name: "Camden", material: "Knitted Textile", colors: "Off White, Antique Pink, Sage", tech: "Memory Cushion", image: "/assets/extracted/pharma-009.jpg" },
        { name: "Mars Laces", material: "Knitted Textile", colors: "White/Turquoise, Fuchsia, Sand", tech: "Memory Cushion", image: "/assets/extracted/pharma-011.jpg" },
        { name: "New Sprinter", material: "Mesh Active", colors: "Off White/Multi, Khaki", tech: "Biomechanics", image: "/assets/extracted/pharma-012.jpg" },
        { name: "Walker", material: "Mesh High Tech", colors: "White, Sage/Multi", tech: "Biomechanics", image: "/assets/extracted/pharma-015.jpg" }
      ]
    },
    {
      id: "lifestyle-homme",
      name: "Lifestyle Homme",
      description: "Design robuste et technologies de confort masculin.",
      products: [
        { name: "Wind Step Homme", material: "Mesh / PU", colors: "Navy, Grey, Black", tech: "Memory Cushion", image: "/assets/extracted/pharma-020.jpg" },
        { name: "Ryan Moccasin", material: "Leather / Suede", colors: "Brown, Navy, Black", tech: "Bioprint", image: "/assets/extracted/pharma-025.jpg" },
        { name: "Kyle Sandal", material: "Synthetic", colors: "Grey, Black", tech: "Bioprint", image: "/assets/extracted/pharma-030.jpg" }
      ]
    }
  ]
};

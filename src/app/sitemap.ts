import { MetadataRoute } from 'next'

const BASE = 'https://maisonmedicaleaixoise.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                   lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/vente`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE}/location`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE}/services`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/catalogues`,   lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/contact`,      lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/about`,        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,         lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/blog/comment-choisir-chaussures-scholl`,              lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog/location-lit-medicalise-aix-en-provence`,        lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog/ortho-gibaud-thuasne-guide`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
  ]

  const venteCategories = [
    'la-marche', 'la-mobilite', 'la-respiration', 'autour-du-lit-et-repos',
    'hygiene', 'incontinence', 'aides-techniques', 'maintien-postural',
    'au-quotidien', 'materiel-professionnel',
  ]

  const locationCategories = [
    'materiel-medical', 'oxygenotherapie', 'services-sur-mesure',
    'la-respiration', 'tire-lait',
  ]

  const catalogueCategories = [
    'pharma', 'lifestyle-femme', 'sneakers', 'lifestyle-homme',
  ]

  const ventePages: MetadataRoute.Sitemap = venteCategories.map(slug => ({
    url: `${BASE}/vente/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const locationPages: MetadataRoute.Sitemap = locationCategories.map(slug => ({
    url: `${BASE}/location/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const cataloguePages: MetadataRoute.Sitemap = catalogueCategories.map(slug => ({
    url: `${BASE}/catalogues/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...ventePages, ...locationPages, ...cataloguePages]
}

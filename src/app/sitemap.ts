import { MetadataRoute } from 'next'

const BASE = 'https://mmaixoise.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/catalogues`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/blog/comment-choisir-chaussures-scholl`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/location-lit-medicalise-aix-en-provence`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/ortho-gibaud-thuasne-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]

  // Catalogue category pages
  const cataloguePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/catalogues/pharma`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/catalogues/lifestyle-femme`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/catalogues/sneakers`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/catalogues/lifestyle-homme`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  return [...staticPages, ...cataloguePages]
}

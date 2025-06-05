import { PROJECTS } from '@/modules/Trabajo/data/projects';
import { type MetadataRoute } from 'next';

interface SitemapEntry {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const APP_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const now = new Date();

  const staticRoutes: SitemapEntry[] = [
    { url: `${APP_URL}/`, lastModified: now, priority: 1.0, changeFrequency: 'daily' },
    { url: `${APP_URL}/contacto`, lastModified: now, priority: 0.5, changeFrequency: 'yearly' },
    { url: `${APP_URL}/servicios`, lastModified: now, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${APP_URL}/trabajos`, lastModified: now, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${APP_URL}/nosotros`, lastModified: now, priority: 0.5, changeFrequency: 'yearly' },
  ];

  const categoriesSet = new Set<string>();
  PROJECTS.forEach((proj) => {
    proj.categories.forEach((cat) => categoriesSet.add(cat));
  });
  const categories = Array.from(categoriesSet);

  const categoryRoutes: SitemapEntry[] = categories.map((cat) => ({
    url: `${APP_URL}/trabajos/${encodeURIComponent(cat)}`,
    lastModified: now,
    priority: 0.6,
    changeFrequency: 'monthly',
  }));

  const projectRoutes: SitemapEntry[] = PROJECTS.map((proj) => ({
    url: `${APP_URL}/${proj.url}`, // ej: /proyectos/birds
    lastModified: now,
    priority: 0.7,
    changeFrequency: 'monthly',
  }));

  // El cast final asegura que el tipo cumple MetadataRoute.Sitemap (un array de SitemapEntry)
  return [...staticRoutes, ...categoryRoutes, ...projectRoutes] as MetadataRoute.Sitemap;
}

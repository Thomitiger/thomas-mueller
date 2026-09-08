import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${site.meta.url}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.meta.url}/impressum`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${site.meta.url}/datenschutz`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}

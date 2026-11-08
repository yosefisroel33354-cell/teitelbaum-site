import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://teitelbaum-legacy.example.org';
  const routes = [
    '',
    '/dynasty',
    '/family-tree',
    '/reb-yoel',
    '/rebbes',
    '/history',
    '/geography',
    '/satmar-life',
    '/books',
    '/archive',
    '/about'
  ];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}

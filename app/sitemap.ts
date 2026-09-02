import { MetadataRoute } from 'next';

const BASE_URL = 'https://infolinkservices.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/contact', '/resources', '/faq', '/job-fairs', '/partners', '/careers', '/company-gallery'];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}

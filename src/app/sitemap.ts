import type { MetadataRoute } from 'next';
import { isRealProduction, metadataBase } from '@/lib/env';

export const dynamic = 'force-static';

const routes = [
  '/',
  '/service/',
  '/news/',
  '/case-study/',
  '/company/',
  '/contact/',
  '/privacy/',
  '/terms/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isRealProduction || !metadataBase) {
    return [];
  }

  const baseUrl = metadataBase;

  return routes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified: new Date(),
  }));
}

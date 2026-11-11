import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/config';
import { LAUNCH_CONFIG } from '@/config/launch';
import { LEGAL_CONFIG } from '@/config/legal';
import { INDUSTRIES_DATA } from '@/data/industries';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.siteUrl;

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/invoice`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/demo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mygarage`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Add the 6 Nagpur Industry Shop Pages
  Object.keys(INDUSTRIES_DATA).forEach((slug) => {
    routes.push({
      url: `${baseUrl}/industry/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    });
  });

  // Only include legal pages if LEGAL_APPROVED === true
  const isLegalApproved = LEGAL_CONFIG.LEGAL_APPROVED && LAUNCH_CONFIG.LEGAL_APPROVED;
  if (isLegalApproved) {
    const legalPages = [
      '/privacy-policy',
      '/terms',
      '/subscription-terms',
      '/refund-policy',
      '/lifetime-terms',
      '/data-retention',
      '/support-sla',
      '/legal',
    ];
    legalPages.forEach((path) => {
      routes.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      });
    });
  }

  return routes;
}

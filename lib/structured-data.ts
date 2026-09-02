import { CONTACT, FAQS, SERVICES } from '@/lib/constants';

export const SITE_URL = 'https://infolinkservices.com';

/**
 * Organization schema — identifies Infolink Services as a business entity.
 * Rendered once, site-wide, in the root layout.
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Infolink Services',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.jpeg`,
    image: `${SITE_URL}/images/logo.jpeg`,
    foundingDate: '2010',
    description:
      'Infolink Services is a Nagpur-based software development company delivering custom software, web & mobile apps, ERP/CRM, AI, and cloud solutions since 2010.',
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nagpur',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    sameAs: [],
  };
}

/**
 * LocalBusiness schema — helps Infolink Services surface in local/map search results.
 * Rendered once, site-wide, in the root layout.
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Infolink Services',
    url: SITE_URL,
    image: `${SITE_URL}/images/logo.jpeg`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nagpur',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.1458,
      longitude: 79.0882,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };
}

/**
 * BreadcrumbList schema — improves how inner pages are represented in
 * search results and reinforces the site's structure for crawlers.
 * Pass the page trail excluding Home, e.g. [{ name: 'Services', url: '/services' }].
 */
export function getBreadcrumbSchema(trail: { name: string; url: string }[]) {
  const items = [{ name: 'Home', url: '/' }, ...trail];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * FAQPage schema — built from the same FAQS data source used to render
 * the visible FAQ accordion, so schema and on-page content can never drift.
 */
export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * ImageGallery schema — describes the company office photo gallery for
 * search engines, linking each photo back to the Organization entity.
 */
export function getOfficeGallerySchema(images: { src: string; alt: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `${SITE_URL}/company-gallery#gallery`,
    name: 'Infolink Services — Company Office Gallery',
    description: 'Photos of the Infolink Services office in Nagpur, Maharashtra.',
    url: `${SITE_URL}/company-gallery`,
    about: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Infolink Services',
    },
    associatedMedia: images.map((image) => ({
      '@type': 'ImageObject',
      contentUrl: `${SITE_URL}${image.src}`,
      description: image.alt,
    })),
  };
}
export function getServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: SERVICES.map((service, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.short,
        url: `${SITE_URL}/services#${service.slug}`,
        provider: {
          '@type': 'Organization',
          name: 'Infolink Services',
        },
        areaServed: {
          '@type': 'State',
          name: 'Maharashtra',
        },
      },
    })),
  };
}

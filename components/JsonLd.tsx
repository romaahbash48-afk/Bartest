import { site } from '@/content/site';

const openingHoursStr = site.openingHours
  .map((h) => `${h.day === 'sun' ? 'Su' : h.day === 'mon' ? 'Mo' : h.day === 'tue' ? 'Tu' : h.day === 'wed' ? 'We' : h.day === 'thu' ? 'Th' : h.day === 'fri' ? 'Fr' : 'Sa'} ${h.open}-${h.close}`)
  .join(', ');

export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Bar',
    name: site.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: 'Berlin',
      postalCode: '13347',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.5488,
      longitude: 13.3788,
    },
    openingHoursSpecification: site.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day === 'sun' ? 'Sunday' : h.day === 'mon' ? 'Monday' : h.day === 'tue' ? 'Tuesday' : h.day === 'wed' ? 'Wednesday' : h.day === 'thu' ? 'Thursday' : h.day === 'fri' ? 'Friday' : 'Saturday',
      opens: h.open,
      closes: h.close,
    })),
    email: site.email,
    url: 'https://bar-henrietta.berlin',
    sameAs: [site.instagram],
    areaServed: site.area,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

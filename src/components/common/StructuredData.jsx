import { organization } from '../../data/organization';
import { absoluteUrl } from '../../lib/site';

/**
 * Site-level JSON-LD: the business (ProfessionalService) and the WebSite.
 * Rendered on the home page. URLs are included only when VITE_SITE_URL is
 * set; unconfirmed contact details are never published.
 */
export default function StructuredData() {
  const url = absoluteUrl('/');
  const { name, description, areaServed, ...confirmedExtras } = organization;

  const graph = [
    {
      '@type': 'ProfessionalService',
      ...(url && { '@id': `${url}#organization`, url }),
      name,
      description,
      areaServed: { '@type': 'Country', name: areaServed },
      ...confirmedExtras,
    },
    {
      '@type': 'WebSite',
      ...(url && { '@id': `${url}#website`, url }),
      name,
      inLanguage: 'en-GB',
      ...(url && { publisher: { '@id': `${url}#organization` } }),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: it contains only our own data
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c'),
      }}
    />
  );
}

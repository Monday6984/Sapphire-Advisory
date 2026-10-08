// Per-route metadata — the single source for page titles, descriptions,
// canonical paths and the sitemap (see vite.config.js). Descriptions are
// drawn from each page's own copy.
//
// Pure data: also imported by vite.config.js at build time, so no
// browser-only APIs (import.meta.env etc.) belong in this file.

export const SITE_NAME = 'Sapphire Advisory';

// Confirmed production domain (no trailing slash). Can be overridden per
// build with VITE_SITE_URL, e.g. for a staging preview.
export const DEFAULT_SITE_URL = 'https://sapphireadvisorygroup.co.uk';

export const seo = {
  home: {
    path: '/',
    title: 'Sapphire Advisory | Data protection made easy',
    description:
      'Practical UK GDPR and data protection support for fintech and healthtech startups and scaleups, including outsourced DPO, DPIAs and training.',
  },
  about: {
    path: '/about',
    title: 'About Sapphire Advisory | UK Data Protection Consultancy',
    description:
      'Learn about Sapphire Advisory and its practical approach to UK data protection support for growing fintech and healthtech businesses.',
  },
  services: {
    path: '/services',
    title: 'Data Protection Services | Sapphire Advisory',
    description:
      'Practical UK GDPR and data protection services, including outsourced DPO support, compliance, DPIAs, breach support, training and UK expansion support.',
  },
  whoWeHelp: {
    path: '/who-we-help',
    title: 'Data Protection for Fintech, Healthtech & UK Expansion',
    description:
      'Specialist data protection support for fintech, healthtech and businesses entering the UK market.',
  },
  training: {
    path: '/training',
    title: 'Data Protection Training for Teams | Sapphire Advisory',
    description:
      'Practical data protection training built around your business, your sector, your team roles and the situations your team faces.',
  },
  faqs: {
    path: '/faqs',
    title: 'Data Protection FAQs for Startups | Sapphire Advisory',
    description:
      'Straight answers to common UK data protection questions about DPOs, data breaches, DPIAs, subject access requests and expanding into the UK.',
  },
  contact: {
    path: '/contact',
    title: 'Contact Sapphire Advisory | Data Protection Support',
    description:
      'Talk to Sapphire Advisory about your data protection needs, compliance questions, training or support. You don’t need to have everything figured out first.',
  },
};

// Indexable routes, in navigation order, for the sitemap.
export const indexablePaths = Object.values(seo).map((page) => page.path);

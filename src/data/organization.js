// Facts used for structured data (JSON-LD). Only confirmed information
// belongs here. Still placeholders on the site, so deliberately omitted
// until the client confirms them: email, telephone, address, LinkedIn
// (sameAs), company and ICO registration numbers, founder.

import { SITE_NAME, seo } from './seo';

export const organization = {
  name: SITE_NAME,
  description: seo.home.description,
  areaServed: 'United Kingdom',
  // email: '',     // e.g. 'hello@…' once confirmed
  // telephone: '', // e.g. '+44 …' once confirmed
  // sameAs: [],    // e.g. ['https://www.linkedin.com/company/…'] once confirmed
};

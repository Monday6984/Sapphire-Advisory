// Production site URL used for canonical, og:url and structured data.
// Defaults to the confirmed domain; VITE_SITE_URL overrides it per build
// (see .env.example).

import { DEFAULT_SITE_URL } from '../data/seo';

export const SITE_URL = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).trim().replace(/\/+$/, '');

export const absoluteUrl = (path = '/') => (SITE_URL ? `${SITE_URL}${path}` : undefined);

// Social sharing image. None has been approved yet; set to an absolute URL
// (or an imported asset combined with SITE_URL) once one exists — Seo then
// switches to the large-image Twitter card automatically.
export const SOCIAL_IMAGE = undefined;

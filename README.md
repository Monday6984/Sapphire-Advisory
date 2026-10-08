# Sapphire Advisory

Website for Sapphire Advisory, a UK data protection and information governance consultancy for fintech and healthtech startups and scaleups, and for businesses expanding into the UK.

## Tech stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) (browser history routing, clean URLs)
- [Lucide React](https://lucide.dev/) for interface icons
- [vite-imagetools](https://github.com/JonasKruckenberg/imagetools) for build-time image resizing and WebP conversion
- CSS Modules plus a global design-token stylesheet (`src/index.css`)

## Getting started

Requires Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Preview the production build

```bash
npm run preview
```

## Environment variables

No environment variables are required for a normal production build. Never commit `.env` files; `.env.example` documents the available variables.

| Variable | Purpose |
| --- | --- |
| `VITE_SITE_URL` | Optional. Overrides the site URL used for canonical URLs, `og:url`, structured data, `robots.txt` and `sitemap.xml`. Defaults to the production domain `https://sapphireadvisorygroup.co.uk` (set in `src/data/seo.js`). Use only for non-production builds, such as a staging preview. |

## Project structure

```
src/
  assets/images/   Source photography + index.js (imports, alt text, crops)
  components/
    common/        Small reusable pieces (Button, Logo, Seo, SectionHeading, …)
    layout/        Header, Footer, PageHeader, Section, ScrollToTop
    sections/      Page sections (hero, explorer, accordion, form, …)
  data/            All website copy and SEO metadata, one file per page/topic
  lib/             Non-visual helpers (site URL, enquiry delivery stub)
  pages/           One component per route
public/            Static files served as-is (favicon)
```

Website copy lives in `src/data/`, so text changes rarely require touching components. Bracketed text such as `[Founder name]` or `[Privacy Notice]` is an intentional client placeholder awaiting confirmed details.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services (situations deep-link as `/services#ongoing`, `#compliant`, …) |
| `/who-we-help` | Who we help (`#fintech`, `#healthtech`, `#uk`) |
| `/training` | Training |
| `/faqs` | FAQs |
| `/contact` | Contact |

Unknown paths redirect to the home page.

## Deployment

This is a single-page application using clean URLs (`/about`, not `#/about`). **The host must serve `index.html` for any path that is not a real file**, otherwise refreshing or directly visiting `/about` returns a 404. For example:

- **Netlify:** add `public/_redirects` containing `/*  /index.html  200`
- **Vercel:** add a `vercel.json` rewrite of `/(.*)` to `/index.html`
- **Apache / Nginx / others:** configure an equivalent fallback to `index.html`

The production domain is **https://sapphireadvisorygroup.co.uk**. The build generates `robots.txt` and `sitemap.xml` for it automatically. Configure the host so `www.sapphireadvisorygroup.co.uk` and `http://` both redirect to that address, so there is only one canonical version of each page.

## Contact form

The form validates input in the browser but is **not yet connected to an email service**. Submissions show a notice instead of being sent. To connect it, implement `sendEnquiry()` in `src/lib/sendEnquiry.js`.

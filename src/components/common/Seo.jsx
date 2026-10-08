import { SITE_NAME } from '../../data/seo';
import { absoluteUrl, SOCIAL_IMAGE } from '../../lib/site';

/**
 * Per-page metadata. React 19 hoists <title>, <meta> and <link> rendered
 * anywhere in the tree into <head>, and swaps them on route change.
 *
 * Pass a route entry from data/seo.js: <Seo {...seo.about} />
 * Canonical and og:url are only emitted once VITE_SITE_URL is configured.
 */
export default function Seo({ title, description, path = '/', type = 'website', image = SOCIAL_IMAGE }) {
  const url = absoluteUrl(path);

  return (
    <>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:locale" content="en_GB" />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter / X — large card only when a sharing image exists */}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </>
  );
}

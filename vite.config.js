import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import { DEFAULT_SITE_URL, indexablePaths } from './src/data/seo.js';

/**
 * Emits robots.txt and sitemap.xml into the build for the site URL
 * (DEFAULT_SITE_URL in src/data/seo.js, overridable with VITE_SITE_URL).
 * If the URL were ever empty, robots.txt is still written but the sitemap
 * (which needs absolute URLs) is skipped with a warning.
 */
function seoFiles(siteUrl) {
  return {
    name: 'sapphire-seo-files',
    apply: 'build',
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /'];

      if (siteUrl) {
        const urls = indexablePaths
          .map((path) => `  <url>\n    <loc>${siteUrl}${path}</loc>\n  </url>`)
          .join('\n');
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        });
        robots.push('', `Sitemap: ${siteUrl}/sitemap.xml`);
      } else {
        this.warn('Site URL is empty: sitemap.xml skipped, canonical/og:url tags omitted.');
      }

      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `${robots.join('\n')}\n` });
    },
  };
}

export default defineConfig(({ mode }) => {
  const siteUrl = (loadEnv(mode, process.cwd(), 'VITE_').VITE_SITE_URL || DEFAULT_SITE_URL).trim().replace(/\/+$/, '');

  return {
    // imagetools resizes and converts imported images at build time
    // (e.g. `photo.png?w=640;1280&format=webp&as=srcset`).
    plugins: [react(), imagetools(), seoFiles(siteUrl)],
  };
});

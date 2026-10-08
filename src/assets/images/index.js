// Site photography. Each source PNG is converted at build time into a set of
// WebP widths (srcset) plus a mid-size WebP fallback, via vite-imagetools.
//
// - width/height: intrinsic size, so the browser can reserve space
// - position: object-position focal point, keeping faces in frame when cropped
//
// Note for `sizes` in components: with object-fit: cover, a 16:9 photo in a
// square or portrait frame is drawn wider than the frame (width = height × 1.78).
// `sizes` must describe that drawn width, not the frame width, or the browser
// picks a file that is too small and the photo looks soft.

import heroSrcSet from './sapphire-hero.png?w=640;960;1280;1672&format=webp&quality=86&as=srcset';
import heroSrc from './sapphire-hero.png?w=1280&format=webp&quality=86';
import helpSrcSet from './help-when-the-questions-arrive.png?w=480;800;1200;1672&format=webp&quality=86&as=srcset';
import helpSrc from './help-when-the-questions-arrive.png?w=1200&format=webp&quality=86';
import fintechSrcSet from './fintech.png?w=480;800;1200;1672&format=webp&quality=86&as=srcset';
import fintechSrc from './fintech.png?w=800&format=webp&quality=86';
import healthcareSrcSet from './healthcare.png?w=480;800;1200;1672&format=webp&quality=86&as=srcset';
import healthcareSrc from './healthcare.png?w=800&format=webp&quality=86';
import ukSrcSet from './uk-expansion.png?w=480;800;1200;1672&format=webp&quality=86&as=srcset';
import ukSrc from './uk-expansion.png?w=800&format=webp&quality=86';
import whySrcSet from './why-sapphire.png?w=480;800;1200;1671&format=webp&quality=86&as=srcset';
import whySrc from './why-sapphire.png?w=1200&format=webp&quality=86';

// Services page photography (service-advice.png is the same photograph as
// why-sapphire.png; the build emits identical files only once).
import adviceSrcSet from './service-advice.png?w=480;800;1200;1671&format=webp&quality=86&as=srcset';
import adviceSrc from './service-advice.png?w=800&format=webp&quality=86';
import complianceSrcSet from './service-compliance.png?w=480;800;1200;1536&format=webp&quality=86&as=srcset';
import complianceSrc from './service-compliance.png?w=800&format=webp&quality=86';
import cultureSrcSet from './service-culture.png?w=480;800;1200;1536&format=webp&quality=86&as=srcset';
import cultureSrc from './service-culture.png?w=800&format=webp&quality=86';

// Who we help page photography
import ukSkylineSrcSet from './uk-skyline.png?w=480;800;1200;1536&format=webp&quality=86&as=srcset';
import ukSkylineSrc from './uk-skyline.png?w=800&format=webp&quality=86';

const SIZE = { width: 1672, height: 941 };

export const images = {
  hero: {
    src: heroSrc,
    srcSet: heroSrcSet,
    ...SIZE,
    alt: 'Professional adviser working in a modern office',
    position: '64% 30%',
  },
  help: {
    src: helpSrc,
    srcSet: helpSrcSet,
    ...SIZE,
    alt: 'Business professionals discussing data protection and strategy',
    position: '44% 40%',
  },
  fintech: {
    src: fintechSrc,
    srcSet: fintechSrcSet,
    ...SIZE,
    alt: 'Finance professional reviewing financial data and technology',
    position: '50% 35%',
  },
  healthtech: {
    src: healthcareSrc,
    srcSet: healthcareSrcSet,
    ...SIZE,
    alt: 'Healthcare professional using digital technology in a modern clinical setting',
    position: '48% 35%',
  },
  uk: {
    src: ukSrc,
    srcSet: ukSrcSet,
    ...SIZE,
    alt: 'Business professionals discussing expansion in London',
    position: '50% 40%',
  },
  why: {
    src: whySrc,
    srcSet: whySrcSet,
    width: 1671,
    height: 941,
    alt: 'Professional adviser consulting with a client',
    position: '40% 30%',
  },
};

// About page — reuses the existing collection (same files, page-specific
// alt text and crop) until About-specific photography is supplied.
export const aboutImages = {
  hero: {
    ...images.why,
    alt: 'Business professionals discussing data protection in a modern office',
    position: '42% 30%',
  },
  story: {
    ...images.help,
    alt: 'Business professionals discussing strategy in a modern office',
    position: '46% 40%',
  },
};

// Services page. Situations with dedicated photography (service-*.png) use
// it; the rest borrow the closest existing photo until theirs is supplied.
// To add one: import it above and replace its entry below. A service without
// an entry simply renders without a photo.
export const servicesHeroImage = {
  ...images.help,
  position: '44% 40%',
};

export const serviceImages = {
  ongoing: {
    src: adviceSrc,
    srcSet: adviceSrcSet,
    width: 1671,
    height: 941,
    alt: 'Professional adviser consulting with a client',
    position: '40% 30%',
  },
  compliant: {
    src: complianceSrc,
    srcSet: complianceSrcSet,
    width: 1536,
    height: 1024,
    alt: 'Two professionals reviewing compliance documents in a modern office',
    position: '48% 35%',
  },
  incident: { ...images.hero, position: '64% 30%' },
  new: { ...images.fintech, position: '42% 35%' },
  partners: { ...images.uk, position: '52% 40%' },
  culture: {
    src: cultureSrc,
    srcSet: cultureSrcSet,
    width: 1536,
    height: 1024,
    alt: 'Adviser leading a data protection training session with a team',
    position: '50% 30%',
  },
  uk: { ...images.uk, position: '30% 40%' },
};

// Sector photography, keyed by sector id (see data/sectors.js).
export const sectorImages = {
  fintech: images.fintech,
  healthtech: images.healthtech,
  uk: images.uk,
};

// Who we help page. No dedicated hero file has been supplied, so the hero
// uses the three-person London discussion (closest to the approved mockup);
// the UK section uses the dedicated skyline photograph.
export const whoWeHelpImages = {
  hero: { ...images.uk, position: '50% 40%' },
  sectors: {
    fintech: { ...images.fintech, position: '45% 35%' },
    healthtech: { ...images.healthtech, position: '45% 35%' },
    uk: {
      src: ukSkylineSrc,
      srcSet: ukSkylineSrcSet,
      width: 1536,
      height: 1024,
      alt: 'Business professional viewing the London skyline',
      position: '40% 40%',
    },
  },
};

// Training page. No training-specific files (training-hero / training-matters)
// have been supplied, so these reuse the closest existing photographs: the
// team training session, and two people working through compliance guidance.
export const trainingImages = {
  hero: {
    src: cultureSrc,
    srcSet: cultureSrcSet,
    width: 1536,
    height: 1024,
    alt: 'Professional team taking part in a data protection training workshop',
    position: '56% 30%',
  },
  matters: {
    src: complianceSrc,
    srcSet: complianceSrcSet,
    width: 1536,
    height: 1024,
    alt: 'Two professionals working through data protection guidance together',
    position: '18% 35%',
  },
};

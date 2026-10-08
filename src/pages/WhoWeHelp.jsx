import Seo from '../components/common/Seo';
import PageHeader from '../components/layout/PageHeader';
import SectorSection from '../components/sections/SectorSection';
import CtaBand from '../components/sections/CtaBand';
import { whoWeHelpImages } from '../assets/images';
import { seo } from '../data/seo';
import { sectors } from '../data/sectors';
import { whoWeHelpHero, whoWeHelpCta } from '../data/whoWeHelp';

// Alternate photo side and background down the page: white, paper, white…
const TONES = ['white', 'paper'];

export default function WhoWeHelp() {
  return (
    <>
      <Seo {...seo.whoWeHelp} />

      <PageHeader
        title={whoWeHelpHero.title}
        intro={whoWeHelpHero.intro}
        image={whoWeHelpImages.hero}
      />

      {sectors.map((sector, index) => (
        <SectorSection
          key={sector.id}
          sector={sector}
          image={whoWeHelpImages.sectors[sector.id]}
          imagePosition={index % 2 === 0 ? 'left' : 'right'}
          tone={TONES[index % 2]}
        />
      ))}

      <CtaBand
        id="who-we-help-cta"
        heading={whoWeHelpCta.heading}
        text={whoWeHelpCta.text}
        action={whoWeHelpCta.action}
      />
    </>
  );
}

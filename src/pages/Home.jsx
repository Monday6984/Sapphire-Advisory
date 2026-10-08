import Seo from '../components/common/Seo';
import StructuredData from '../components/common/StructuredData';
import HomeHero from '../components/sections/HomeHero';
import SplitSection from '../components/sections/SplitSection';
import SectorList from '../components/sections/SectorList';
import SituationList from '../components/sections/SituationList';
import WhyGrid from '../components/sections/WhyGrid';
import ProcessSteps from '../components/sections/ProcessSteps';
import CtaBand from '../components/sections/CtaBand';
import { images, sectorImages } from '../assets/images';
import { seo } from '../data/seo';
import { sectors } from '../data/sectors';
import { services } from '../data/services';
import { hero, intro, sectorsIntro, situationsIntro, why, steps, cta } from '../data/home';

export default function Home() {
  return (
    <>
      <Seo {...seo.home} />
      <StructuredData />

      <HomeHero content={hero} image={images.hero} sectors={sectors} />

      <SplitSection
        id="intro"
        heading={intro.heading}
        lede={intro.lede}
        paragraphs={intro.paragraphs}
        image={images.help}
      />

      <SectorList heading={sectorsIntro.heading} sectors={sectors} images={sectorImages} />

      <SituationList
        heading={situationsIntro.heading}
        intro={situationsIntro.intro}
        linkLabel={situationsIntro.linkLabel}
        services={services}
      />

      <WhyGrid
        heading={why.heading}
        points={why.points}
        image={images.why}
        draftNote={why.draftNote}
      />

      <ProcessSteps heading={steps.heading} steps={steps.items} />

      <CtaBand heading={cta.heading} text={cta.text} action={cta.action} />
    </>
  );
}

import Seo from '../components/common/Seo';
import PageHeader from '../components/layout/PageHeader';
import SplitSection from '../components/sections/SplitSection';
import MissionVision from '../components/sections/MissionVision';
import ValuesList from '../components/sections/ValuesList';
import FounderSection from '../components/sections/FounderSection';
import CtaBand from '../components/sections/CtaBand';
import { aboutImages } from '../assets/images';
import { seo } from '../data/seo';
import { aboutHero, story, mission, vision, values, founder, aboutCta } from '../data/about';

export default function About() {
  return (
    <>
      <Seo {...seo.about} />

      <PageHeader title={aboutHero.title} intro={aboutHero.intro} image={aboutImages.hero} />

      <SplitSection
        id="story"
        heading={story.heading}
        lede={story.lede}
        paragraphs={story.paragraphs}
        image={aboutImages.story}
        layout="below"
      />

      <MissionVision mission={mission} vision={vision} />

      <ValuesList heading={values.heading} items={values.items} />

      {/* Pass photo={…} once the client supplies a founder photograph */}
      <FounderSection content={founder} />

      <CtaBand
        id="about-cta"
        heading={aboutCta.heading}
        text={aboutCta.text}
        action={aboutCta.action}
      />
    </>
  );
}

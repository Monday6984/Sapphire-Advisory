import Seo from '../components/common/Seo';
import SectionHeading from '../components/common/SectionHeading';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/layout/Section';
import ServicesExplorer from '../components/sections/ServicesExplorer';
import SplitSection from '../components/sections/SplitSection';
import { servicesHeroImage, serviceImages } from '../assets/images';
import { seo } from '../data/seo';
import { services } from '../data/services';
import { servicesHero, explorerIntro, notSure } from '../data/servicesPage';

export default function Services() {
  return (
    <>
      <Seo {...seo.services} />

      <PageHeader title={servicesHero.title} intro={servicesHero.intro} image={servicesHeroImage} />

      <Section tone="paper" labelledBy="explorer-heading">
        <SectionHeading id="explorer-heading" eyebrow={explorerIntro.eyebrow}>
          {explorerIntro.heading}
        </SectionHeading>
        <ServicesExplorer
          services={services}
          images={serviceImages}
          tablistLabel={explorerIntro.tablistLabel}
          outcomeLabel={explorerIntro.outcomeLabel}
        />
      </Section>

      <SplitSection
        id="not-sure"
        heading={notSure.heading}
        lede={notSure.lede}
        paragraphs={notSure.paragraphs}
        action={notSure.action}
        decorated
      />
    </>
  );
}

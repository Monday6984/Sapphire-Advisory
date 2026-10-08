import Seo from '../components/common/Seo';
import PageHeader from '../components/layout/PageHeader';
import SplitSection from '../components/sections/SplitSection';
import OfferList from '../components/sections/OfferList';
import { trainingImages } from '../assets/images';
import { seo } from '../data/seo';
import { trainingHero, whyTraining, offers, delivery } from '../data/training';

export default function Training() {
  return (
    <>
      <Seo {...seo.training} />

      <PageHeader title={trainingHero.title} intro={trainingHero.intro} image={trainingImages.hero} />

      <SplitSection
        id="why-training"
        heading={whyTraining.heading}
        lede={whyTraining.lede}
        paragraphs={whyTraining.paragraphs}
        image={trainingImages.matters}
        layout="stretch"
      />

      <OfferList heading={offers.heading} items={offers.items} />

      <SplitSection
        id="delivery"
        tone="navy"
        heading={delivery.heading}
        paragraphs={delivery.paragraphs}
        action={delivery.action}
        decorated
      />
    </>
  );
}

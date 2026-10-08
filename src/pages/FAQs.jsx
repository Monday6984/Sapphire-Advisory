import Seo from '../components/common/Seo';
import PageHeader from '../components/layout/PageHeader';
import FaqAccordion from '../components/sections/FaqAccordion';
import CtaBand from '../components/sections/CtaBand';
import { seo } from '../data/seo';
import { faqs } from '../data/faqs';
import { faqsHero, faqsCta } from '../data/faqsPage';

export default function FAQs() {
  return (
    <>
      <Seo {...seo.faqs} />

      <PageHeader title={faqsHero.title} intro={faqsHero.intro} />

      <FaqAccordion faqs={faqs} />

      <CtaBand
        id="faqs-cta"
        heading={faqsCta.heading}
        text={faqsCta.text}
        action={faqsCta.action}
        accent="rule"
      />
    </>
  );
}

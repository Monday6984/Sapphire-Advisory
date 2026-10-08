import { useRef, useState } from 'react';
import Seo from '../components/common/Seo';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/layout/Section';
import ContactForm from '../components/sections/ContactForm';
import ContactDetails from '../components/sections/ContactDetails';
import BreachCallout from '../components/sections/BreachCallout';
import { seo } from '../data/seo';
import { contactHero, contactForm, contactDetails, breachCallout } from '../data/contact';
import styles from './Contact.module.css';

export default function Contact() {
  // "How can we help?" is shared so the breach callout can preselect it.
  const [help, setHelp] = useState(contactForm.fields.help.options[0]);
  const helpRef = useRef(null);

  const selectBreachOption = () => {
    setHelp(breachCallout.option);
    helpRef.current?.focus();
  };

  return (
    <>
      <Seo {...seo.contact} />

      <PageHeader title={contactHero.title} intro={contactHero.intro} />

      <Section tone="paper" spacing="tight">
        <div className={styles.layout}>
          <ContactForm content={contactForm} help={help} onHelpChange={setHelp} helpRef={helpRef} />

          <div className={styles.aside}>
            <ContactDetails heading={contactDetails.heading} items={contactDetails.items} />
            <BreachCallout content={breachCallout} onSelectOption={selectBreachOption} />
          </div>
        </div>
      </Section>
    </>
  );
}

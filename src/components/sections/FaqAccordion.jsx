import { useState } from 'react';
import Section from '../layout/Section';
import FaqItem from './FaqItem';
import styles from './FaqAccordion.module.css';

/**
 * Numbered editorial accordion. Items open independently; those marked
 * `defaultOpen` in the data start expanded (the first question).
 */
export default function FaqAccordion({ faqs, tone = 'white' }) {
  const [openIds, setOpenIds] = useState(
    () => new Set(faqs.filter((faq) => faq.defaultOpen).map((faq) => faq.id)),
  );

  const toggle = (id) =>
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <Section tone={tone} aria-label="Frequently asked questions">
      <ol className={styles.list}>
        {faqs.map((faq, index) => (
          <FaqItem
            key={faq.id}
            faq={faq}
            number={String(index + 1).padStart(2, '0')}
            open={openIds.has(faq.id)}
            onToggle={() => toggle(faq.id)}
          />
        ))}
      </ol>
    </Section>
  );
}

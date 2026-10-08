import Section from '../layout/Section';
import SectionHeading from '../common/SectionHeading';
import styles from './ValuesList.module.css';

/**
 * Numbered values in a two-column editorial list on navy, with faint
 * Sapphire ring linework behind. Uses a description list, as the original.
 */
export default function ValuesList({ heading, items }) {
  return (
    <Section tone="navy" labelledBy="values-heading" className={styles.section}>
      <span className={styles.rings} aria-hidden="true" />

      <SectionHeading id="values-heading">{heading}</SectionHeading>

      <dl className={styles.list}>
        {items.map((value, index) => (
          <div key={value.name} className={styles.item}>
            <dt className={styles.term}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.name}>{value.name}</span>
            </dt>
            <dd className={styles.text}>{value.text}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

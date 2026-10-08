import Section from '../layout/Section';
import SectionHeading from '../common/SectionHeading';
import styles from './OfferList.module.css';

/**
 * Text-led editorial list: serif title on the left, description on the
 * right, a hairline between rows. Stacks title above description on mobile.
 */
export default function OfferList({ id = 'offers', heading, items, tone = 'paper' }) {
  const headingId = `${id}-heading`;

  return (
    <Section tone={tone} labelledBy={headingId} id={id}>
      <SectionHeading id={headingId}>{heading}</SectionHeading>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.title} className={styles.item}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

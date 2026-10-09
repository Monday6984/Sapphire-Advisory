import Section from '../layout/Section';
import SectionHeading from '../common/SectionHeading';
import BrandMark from '../common/BrandMark';
import styles from './ProcessSteps.module.css';

/**
 * Numbered process along a fine connecting line — horizontal on desktop,
 * vertical on mobile.
 */
export default function ProcessSteps({ heading, steps, tone = 'navy' }) {
  return (
    <Section tone={tone} labelledBy="steps-heading">
      <SectionHeading id="steps-heading">{heading}</SectionHeading>

      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <BrandMark className={styles.node} />
            <span className={styles.number} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

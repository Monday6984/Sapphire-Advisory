import Section from '../layout/Section';
import SectionHeading from '../common/SectionHeading';
import styles from './MissionVision.module.css';

/**
 * Quiet, typographic pair: the short mission as a serif statement beside
 * the vision in body copy.
 */
export default function MissionVision({ mission, vision, tone = 'paper' }) {
  return (
    <Section tone={tone}>
      <div className={styles.grid}>
        <section aria-labelledby="mission-heading" className={styles.column}>
          <SectionHeading id="mission-heading">{mission.heading}</SectionHeading>
          <p className={styles.statement}>{mission.statement}</p>
        </section>

        <section aria-labelledby="vision-heading" className={styles.column}>
          <SectionHeading id="vision-heading">{vision.heading}</SectionHeading>
          <div className={styles.copy}>
            {vision.paragraphs.map((text, index) => (
              <p key={text.slice(0, 32)} className={index === 0 ? styles.lead : styles.text}>
                {text}
              </p>
            ))}
          </div>
        </section>
      </div>
    </Section>
  );
}

import Section from '../layout/Section';
import Button from '../common/Button';
import GemIcon from '../common/GemIcon';
import styles from './CtaBand.module.css';

/**
 * Closing call to action used at the foot of pages.
 * `accent`: 'gem' (default) shows the small gem mark; 'rule' shows the short
 * gold rule above the heading instead.
 */
export default function CtaBand({ id = 'cta', heading, text, action, tone = 'paper', accent = 'gem' }) {
  const headingId = `${id}-heading`;

  return (
    <Section tone={tone} spacing="tight" labelledBy={headingId} className={styles.band}>
      <div className={`${styles.inner} ${accent === 'rule' ? styles.ruled : ''}`}>
        {accent === 'gem' && <GemIcon className={styles.gem} />}
        <div>
          {accent === 'rule' && <span className={styles.rule} aria-hidden="true" />}
          <h2 id={headingId} className={styles.heading}>
            {heading}
          </h2>
          {text && <p className={styles.text}>{text}</p>}
        </div>
        <Button to={action.to} variant="navy" className={styles.button}>
          {action.label}
        </Button>
      </div>
    </Section>
  );
}

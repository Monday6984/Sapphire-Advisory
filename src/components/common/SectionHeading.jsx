import styles from './SectionHeading.module.css';

/**
 * Short gold rule followed by a serif heading — the section opener used
 * throughout the site. Colours follow the surrounding <Section> tone.
 */
export default function SectionHeading({
  as: Heading = 'h2',
  id,
  eyebrow,
  intro,
  className = '',
  children,
}) {
  return (
    <div className={`${styles.wrapper} ${className}`.trim()}>
      <span className={styles.rule} aria-hidden="true" />
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Heading id={id} className={styles.heading}>
        {children}
      </Heading>
      {intro && <p className={styles.intro}>{intro}</p>}
    </div>
  );
}

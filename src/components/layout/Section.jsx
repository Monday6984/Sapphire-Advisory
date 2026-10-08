import styles from './Section.module.css';

/**
 * Page section with consistent vertical rhythm and a background tone.
 * Tones set CSS variables (--section-heading, --section-muted, --section-rule)
 * that child components read, so headings and text adapt automatically.
 *
 *   <Section tone="navy" spacing="default" labelledBy="how-heading">…</Section>
 */
export default function Section({
  tone = 'paper',
  spacing = 'default',
  labelledBy,
  className = '',
  children,
  ...rest
}) {
  const classes = [styles.section, styles[tone], styles[spacing], className]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes} aria-labelledby={labelledBy} {...rest}>
      <div className="container">{children}</div>
    </section>
  );
}

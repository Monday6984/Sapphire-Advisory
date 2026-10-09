import { Link } from 'react-router';
import { LOGO_VIEWBOX, MARK_PATHS, WORDMARK_PATHS } from './logoArtwork';
import styles from './Logo.module.css';

/**
 * Sapphire Advisory logo lockup (official artwork, inline SVG), linking home.
 *
 * Colourways from the brand guide:
 * - variant="dark"  (default) for navy/charcoal backgrounds: Gold mark, white wordmark
 * - variant="light" for white/light backgrounds: Deep Navy mark, charcoal wordmark
 */
export default function Logo({ variant = 'dark', className = '', ...rest }) {
  return (
    <Link
      to="/"
      className={`${styles.logo} ${styles[variant]} ${className}`.trim()}
      aria-label="Sapphire Advisory home"
      {...rest}
    >
      <svg className={styles.svg} viewBox={LOGO_VIEWBOX} aria-hidden="true" focusable="false">
        {MARK_PATHS.map(({ transform, d }) => (
          <path key={d.slice(0, 24)} transform={transform} d={d} className={styles.mark} />
        ))}
        {WORDMARK_PATHS.map(({ transform, d }, i) => (
          <path key={i} transform={transform} d={d} className={styles.word} />
        ))}
      </svg>
    </Link>
  );
}

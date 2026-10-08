import { Link } from 'react-router';
import GemIcon from './GemIcon';
import styles from './Logo.module.css';

/**
 * Sapphire Advisory wordmark: gold-outlined gem inside a circle,
 * "Sapphire" in the serif face and "ADVISORY" letter-spaced beneath.
 * Inline SVG so it stays crisp at any resolution.
 */
export default function Logo({ className = '', ...rest }) {
  return (
    <Link
      to="/"
      className={`${styles.logo} ${className}`.trim()}
      aria-label="Sapphire Advisory home"
      {...rest}
    >
      <GemIcon className={styles.mark} />
      <span className={styles.wordmark} aria-hidden="true">
        Sapphire
        <span className={styles.descriptor}>Advisory</span>
      </span>
    </Link>
  );
}

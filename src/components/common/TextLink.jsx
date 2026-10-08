import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import styles from './TextLink.module.css';

/**
 * Understated inline link with a gold underline and trailing arrow.
 * Colours follow the surrounding <Section> tone.
 */
export default function TextLink({ to, className = '', children, ...rest }) {
  return (
    <Link to={to} className={`${styles.link} ${className}`.trim()} {...rest}>
      <span className={styles.label}>{children}</span>
      <ArrowRight className={styles.icon} size={16} strokeWidth={1.5} aria-hidden="true" />
    </Link>
  );
}

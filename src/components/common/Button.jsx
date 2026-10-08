import { Link } from 'react-router';
import styles from './Button.module.css';

const VARIANTS = ['gold', 'navy', 'outline'];

/**
 * Brand button.
 *
 *   <Button to="/contact" variant="gold">Talk to us</Button>   → router <Link>
 *   <Button href="mailto:…">Email us</Button>                  → plain <a>
 *   <Button type="submit" variant="navy">Send message</Button> → <button>
 *
 * Variants: gold (default), navy, outline (for dark backgrounds).
 */
export default function Button({
  to,
  href,
  variant = 'gold',
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const classes = [
    styles.button,
    styles[VARIANTS.includes(variant) ? variant : 'gold'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}

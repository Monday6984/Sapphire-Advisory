import { Mail, Phone } from 'lucide-react';
import styles from './ContactDetails.module.css';

// Allow a line break after "@" so long addresses wrap cleanly (display only).
const withBreaks = (value) =>
  value.includes('@')
    ? value.split('@').flatMap((part, i) => (i === 0 ? [part] : ['@', <wbr key={i} />, part]))
    : value;

// Lucide no longer ships brand logos, so LinkedIn uses a simple "in" mark.
const ICONS = {
  email: <Mail size={20} strokeWidth={1.5} />,
  phone: <Phone size={20} strokeWidth={1.5} />,
  linkedin: <span className={styles.monogram}>in</span>,
};

/**
 * "Other ways to reach us". Values render as links only when an `href` is
 * supplied (mailto:, tel:, https://) — placeholders stay as plain text.
 */
export default function ContactDetails({ heading, items }) {
  return (
    <section aria-labelledby="contact-details-heading">
      <span className={styles.rule} aria-hidden="true" />
      <h2 id="contact-details-heading" className={styles.heading}>
        {heading}
      </h2>

      <dl className={styles.list}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <dt className={styles.label}>
              <span className={styles.icon} aria-hidden="true">
                {ICONS[item.id]}
              </span>
              {item.label}
            </dt>
            <dd className={styles.value}>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {withBreaks(item.value)}
                </a>
              ) : (
                withBreaks(item.value)
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

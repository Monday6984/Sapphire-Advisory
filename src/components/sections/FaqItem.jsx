import { ChevronDown } from 'lucide-react';
import styles from './FaqItem.module.css';

/**
 * One accordion row (WAI-ARIA accordion pattern): the question is a real
 * <button> inside a heading, exposing aria-expanded and aria-controls; the
 * answer is a labelled region. Closed answers are hidden from assistive
 * technology and the tab order via visibility.
 */
export default function FaqItem({ faq, number, open, onToggle }) {
  const buttonId = `faq-q-${faq.id}`;
  const panelId = `faq-a-${faq.id}`;

  return (
    <li className={`${styles.item} ${open ? styles.open : ''}`}>
      <h2 className={styles.heading}>
        <button
          type="button"
          id={buttonId}
          className={styles.trigger}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className={styles.number} aria-hidden="true">
            {number}
          </span>
          <span className={styles.question}>{faq.question}</span>
          <ChevronDown className={styles.chevron} size={20} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </h2>

      <div id={panelId} role="region" aria-labelledby={buttonId} className={styles.panel}>
        <div className={styles.panelInner}>
          <p className={styles.answer}>{faq.answer}</p>
        </div>
      </div>
    </li>
  );
}

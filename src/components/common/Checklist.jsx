import styles from './Checklist.module.css';

/**
 * Plain list with the site's small gold dash markers.
 */
export default function Checklist({ items, className = '' }) {
  return (
    <ul className={`${styles.list} ${className}`.trim()}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

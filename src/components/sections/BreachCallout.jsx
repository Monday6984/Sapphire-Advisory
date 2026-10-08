import styles from './BreachCallout.module.css';

/**
 * Navy callout for urgent enquiries. The quoted option name is a button
 * that selects "Something has happened" in the form and moves focus there;
 * the visible wording is unchanged from the source.
 */
export default function BreachCallout({ content, onSelectOption }) {
  const { heading, before, option, after } = content;

  return (
    <aside className={styles.callout} aria-labelledby="breach-heading">
      <span className={styles.rule} aria-hidden="true" />
      <h2 id="breach-heading" className={styles.heading}>
        {heading}
      </h2>
      <p className={styles.text}>
        {before}
        {/* Keep the quote marks with the phrase when the line wraps */}
        <span className={styles.quoted}>
          &quot;
          <button type="button" className={styles.optionLink} onClick={onSelectOption}>
            {option}
          </button>
          &quot;
        </span>
        {after}
      </p>
    </aside>
  );
}

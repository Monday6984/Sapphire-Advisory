import ResponsiveImage from '../common/ResponsiveImage';
import Checklist from '../common/Checklist';
import styles from './ServicePanel.module.css';

/**
 * Content of one service situation: eyebrow, heading and context, the
 * supporting photograph, the list of services and the outcome.
 * Hidden panels' lazy images are not fetched until their tab is selected.
 */
export default function ServicePanel({ service, image, outcomeLabel }) {
  const { eyebrow, heading, context, items, outcome } = service;

  return (
    <div className={`${styles.grid} ${image ? styles.withImage : ''}`}>
      <div className={styles.head}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.context}>{context}</p>
      </div>

      {image && (
        <div className={styles.media}>
          <ResponsiveImage
            image={image}
            sizes="(max-width: 520px) 125vw, (max-width: 820px) calc(100vw - 80px), (max-width: 1080px) 62vw, 560px"
            className={styles.photo}
          />
        </div>
      )}

      <Checklist items={items} className={styles.list} />

      <div className={styles.outcome}>
        <strong className={styles.outcomeLabel}>{outcomeLabel}</strong>
        <p className={styles.outcomeText}>{outcome}</p>
      </div>
    </div>
  );
}

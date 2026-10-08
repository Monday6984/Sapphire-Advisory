import ResponsiveImage from '../common/ResponsiveImage';
import styles from './PageHeader.module.css';

/**
 * Navy intro band for inner pages.
 *
 * - Without `image`: title and intro with the decorative gold rings top-right.
 * - With `image`:    title and intro on the left; a full-bleed photograph on
 *                    the right that fades into the navy, with the rings
 *                    sitting quietly on the seam. Text first on small screens.
 */
export default function PageHeader({ title, intro, image }) {
  return (
    <section
      className={`${styles.pageHeader} ${image ? styles.withImage : ''}`}
      aria-labelledby="page-title"
    >
      {!image && <span className={styles.rings} aria-hidden="true" />}

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 id="page-title" className={styles.title}>
            {title}
          </h1>
          {intro && <p className={styles.intro}>{intro}</p>}
        </div>
      </div>

      {image && (
        <div className={styles.media}>
          <ResponsiveImage
            image={image}
            sizes="(max-width: 640px) 134vw, (max-width: 980px) 100vw, 920px"
            className={styles.photo}
            priority
          />
          <span className={styles.seamRings} aria-hidden="true" />
        </div>
      )}
    </section>
  );
}

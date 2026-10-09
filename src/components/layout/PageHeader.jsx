import ResponsiveImage from '../common/ResponsiveImage';
import BrandMark from '../common/BrandMark';
import BrandPattern from '../common/BrandPattern';
import styles from './PageHeader.module.css';

/**
 * Navy intro band for inner pages.
 *
 * - Without `image`: title and intro, with the brand pattern on the right.
 * - With `image`:    title and intro on the left; a full-bleed photograph on
 *                    the right that fades into the navy, with the outlined
 *                    brand mark on the seam. Text first on small screens.
 */
export default function PageHeader({ title, intro, image }) {
  return (
    <section
      className={`${styles.pageHeader} ${image ? styles.withImage : ''}`}
      aria-labelledby="page-title"
    >
      {!image && <BrandPattern className={styles.pattern} size={50} />}

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
          <div className={styles.seamMark}>
            <BrandMark variant="outline" className={styles.seamMarkSvg} />
          </div>
        </div>
      )}
    </section>
  );
}

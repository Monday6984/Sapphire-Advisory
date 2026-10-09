import Section from '../layout/Section';
import SectionHeading from '../common/SectionHeading';
import ResponsiveImage from '../common/ResponsiveImage';
import Button from '../common/Button';
import BrandPattern from '../common/BrandPattern';
import styles from './SplitSection.module.css';

// `sizes` reflects the drawn width under object-fit: cover (see assets/images).
const IMAGE_SIZES = {
  beside: '(max-width: 820px) 119vw, 930px',
  below: '(max-width: 820px) 134vw, 700px',
  stretch: '(max-width: 820px) 134vw, 800px',
};

/**
 * Editorial two-column section. Reusable across pages.
 *
 * - No `image`:                 heading left; lede and copy right.
 * - `image`, layout="beside":   photograph left; heading, lede and copy right.
 * - `image`, layout="below":    heading above the photograph on the left;
 *                               lede and copy right, level with the photo.
 *                               Stacks heading → photo → copy on mobile.
 * - `image`, layout="stretch":  photograph left, stretched to the full height
 *                               of the heading and copy on the right.
 *                               Stacks photo → heading → copy on mobile.
 *
 * Options: `action` ({ to, label, variant? }) adds a button after the copy
 * (navy unless `variant` is given);
 * `decorated` adds a faint patch of the brand pattern and a gold divider
 * between columns.
 */
export default function SplitSection({
  id,
  heading,
  lede,
  paragraphs = [],
  image,
  layout = 'beside',
  action,
  decorated = false,
  tone = 'white',
  children,
}) {
  const headingId = `${id}-heading`;

  const body = (
    <>
      {lede && <p className={styles.lede}>{lede}</p>}
      {paragraphs.map((text) => (
        <p key={text.slice(0, 32)} className={styles.text}>
          {text}
        </p>
      ))}
      {children}
      {action && (
        <div className={styles.action}>
          <Button to={action.to} variant={action.variant ?? 'navy'}>
            {action.label}
          </Button>
        </div>
      )}
    </>
  );

  const photo = image && (
    <div className={styles.media}>
      <ResponsiveImage image={image} sizes={IMAGE_SIZES[layout]} className={styles.photo} />
    </div>
  );

  let content;
  if (!image) {
    content = (
      <div className={`${styles.split} ${decorated ? styles.divided : ''}`}>
        <SectionHeading id={headingId}>{heading}</SectionHeading>
        <div className={styles.body}>{body}</div>
      </div>
    );
  } else if (layout === 'stretch') {
    content = (
      <div className={styles.stretch}>
        {photo}
        <div className={styles.body}>
          <SectionHeading id={headingId}>{heading}</SectionHeading>
          <div className={styles.afterHeading}>{body}</div>
        </div>
      </div>
    );
  } else if (layout === 'below') {
    content = (
      <div className={styles.headingOver}>
        <div className={styles.headingArea}>
          <SectionHeading id={headingId}>{heading}</SectionHeading>
        </div>
        <div className={styles.mediaArea}>{photo}</div>
        <div className={`${styles.body} ${styles.bodyArea}`}>{body}</div>
      </div>
    );
  } else {
    content = (
      <div className={styles.withImage}>
        {photo}
        <div className={styles.body}>
          <SectionHeading id={headingId}>{heading}</SectionHeading>
          <div className={styles.afterHeading}>{body}</div>
        </div>
      </div>
    );
  }

  return (
    <Section
      tone={tone}
      labelledBy={headingId}
      id={id}
      className={decorated ? styles.decorated : undefined}
    >
      {decorated && <BrandPattern className={styles.pattern} size={44} />}
      {content}
    </Section>
  );
}

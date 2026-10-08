import Section from '../layout/Section';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import GemIcon from '../common/GemIcon';
import ResponsiveImage from '../common/ResponsiveImage';
import styles from './FounderSection.module.css';

/**
 * Founder introduction: large portrait on the left, name and bio on the
 * right. Until the client supplies a photograph, a branded placeholder
 * slot is shown with the original "[Founder photo]" label — pass `photo`
 * (an entry from assets/images) to replace it.
 */
export default function FounderSection({ content, photo }) {
  const { heading, nameLine, paragraphs, photoPlaceholder, action } = content;

  return (
    <Section tone="white" labelledBy="founder-heading">
      <div className={styles.layout}>
        <div className={styles.portrait}>
          {photo ? (
            <ResponsiveImage
              image={photo}
              sizes="(max-width: 640px) calc(100vw - 40px), 480px"
              className={styles.photo}
            />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderRings} aria-hidden="true" />
              <GemIcon className={styles.placeholderGem} />
              <span className={styles.placeholderLabel}>{photoPlaceholder}</span>
            </div>
          )}
        </div>

        <div className={styles.content}>
          <SectionHeading id="founder-heading">{heading}</SectionHeading>
          <p className={styles.nameLine}>{nameLine}</p>
          {paragraphs.map((text) => (
            <p key={text.slice(0, 32)} className={styles.text}>
              {text}
            </p>
          ))}
          <Button to={action.to} variant="navy" className={styles.button}>
            {action.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}

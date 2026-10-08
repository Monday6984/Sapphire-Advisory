import Section from '../layout/Section';
import SectionHeading from '../common/SectionHeading';
import DraftNote from '../common/DraftNote';
import ResponsiveImage from '../common/ResponsiveImage';
import styles from './WhyGrid.module.css';

/**
 * "Why Sapphire Advisory" — heading and photograph anchor the left column;
 * the reasons sit in a ruled grid on the right.
 */
export default function WhyGrid({ heading, points, image, draftNote }) {
  return (
    <Section tone="white" labelledBy="why-heading">
      <div className={styles.layout}>
        <div>
          <SectionHeading id="why-heading">{heading}</SectionHeading>
          {image && (
            <div className={styles.media}>
              <ResponsiveImage
                image={image}
                sizes="(max-width: 640px) 134vw, (max-width: 980px) 100vw, 940px"
                className={styles.photo}
              />
            </div>
          )}
        </div>

        <div className={styles.points}>
          {points.map((point) => (
            <div key={point.title} className={styles.point}>
              <h3 className={styles.title}>
                <span className={styles.marker} aria-hidden="true" />
                {point.title}
              </h3>
              <p className={styles.text}>{point.text}</p>
            </div>
          ))}
        </div>
      </div>

      {draftNote && (
        <div className={styles.note}>
          <DraftNote>{draftNote}</DraftNote>
        </div>
      )}
    </Section>
  );
}

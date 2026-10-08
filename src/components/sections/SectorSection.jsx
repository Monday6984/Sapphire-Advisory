import Section from '../layout/Section';
import SectionHeading from '../common/SectionHeading';
import Checklist from '../common/Checklist';
import ResponsiveImage from '../common/ResponsiveImage';
import styles from './SectorSection.module.css';

/**
 * One sector story: photograph beside the sector's introduction and the
 * list of ways we help. `imagePosition` ("left" | "right") alternates the
 * layout down the page. On desktop the photo stretches to the full height
 * of the text beside it. Stacks heading → photo → copy → list on mobile.
 * The section id matches the sector id so /who-we-help#fintech works.
 */
export default function SectorSection({ sector, image, imagePosition = 'left', tone = 'white' }) {
  const { id, name, intro, helpHeading, help } = sector;
  const headingId = `${id}-heading`;

  return (
    <Section tone={tone} labelledBy={headingId} id={id}>
      <div className={`${styles.layout} ${imagePosition === 'right' ? styles.imageRight : ''}`}>
        <div className={styles.head}>
          <SectionHeading id={headingId}>{name}</SectionHeading>
        </div>

        {image && (
          <div className={styles.media}>
            <ResponsiveImage
              image={image}
              // Drawn width under object-fit: cover. On desktop the frame is as tall
              // as the text (~400–560px), so a 16:9 photo is drawn ~750–1000px wide.
              sizes="(max-width: 480px) 134vw, (max-width: 820px) 119vw, 1000px"
              className={styles.photo}
            />
          </div>
        )}

        <div className={styles.body}>
          <p className={styles.intro}>{intro}</p>
          <h3 className={styles.helpHeading}>{helpHeading}</h3>
          <Checklist items={help} />
        </div>
      </div>
    </Section>
  );
}

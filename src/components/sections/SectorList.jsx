import Section from '../layout/Section';
import SectionHeading from '../common/SectionHeading';
import TextLink from '../common/TextLink';
import ResponsiveImage from '../common/ResponsiveImage';
import styles from './SectorList.module.css';

/**
 * Numbered, ruled list of the sectors we serve — an editorial alternative
 * to a row of cards. Each row: index, photograph, then name, summary and
 * a link to its block on /who-we-help. `images` is keyed by sector id.
 */
export default function SectorList({ heading, sectors, images = {}, tone = 'paper' }) {
  return (
    <Section tone={tone} labelledBy="sectors-heading">
      <SectionHeading id="sectors-heading">{heading}</SectionHeading>

      <ol className={styles.list}>
        {sectors.map((sector, index) => {
          const image = images[sector.id];

          return (
            <li key={sector.id} className={`${styles.item} ${image ? styles.hasImage : ''}`}>
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              {image && (
                <div className={styles.media}>
                  <ResponsiveImage
                    image={image}
                    sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 980px) 44vw, 510px"
                    className={styles.photo}
                  />
                </div>
              )}
              <div className={styles.content}>
                <h3 className={styles.name}>{sector.name}</h3>
                <p className={styles.summary}>{sector.summary}</p>
                <TextLink to={`/who-we-help#${sector.id}`}>{sector.linkLabel}</TextLink>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

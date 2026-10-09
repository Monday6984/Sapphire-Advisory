import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import BrandMark from '../common/BrandMark';
import BrandPattern from '../common/BrandPattern';
import ResponsiveImage from '../common/ResponsiveImage';
import styles from './HomeHero.module.css';

/**
 * Home hero: editorial headline, supporting copy and CTAs beside a
 * full-bleed photograph that fades into the navy, with the outlined brand
 * mark as a quiet detail on the seam and the brand pattern faintly behind. A ruled strip of sector shortcuts runs
 * along the base.
 */
export default function HomeHero({ content, image, sectors }) {
  const { title, titleAccent, subtitle, primaryCta, secondaryCta } = content;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <BrandPattern className={styles.pattern} size={54} />
      <div className={styles.stage}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.copy}>
            <h1 id="hero-title" className={styles.title}>
              <span className={styles.line}>{title}</span>{' '}
              <em className={styles.accent}>{titleAccent}</em>
            </h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.actions}>
              <Button to={primaryCta.to} variant="gold">
                {primaryCta.label}
              </Button>
              <Button to={secondaryCta.to} variant="outline">
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.media}>
          <ResponsiveImage
            image={image}
            sizes="(max-width: 640px) 134vw, (max-width: 980px) 100vw, 1140px"
            className={styles.photo}
            priority
          />
          <div className={styles.gem}>
            <BrandMark variant="outline" animated className={styles.emblem} />
          </div>
        </div>
      </div>

      <div className="container">
        <nav aria-label="Who we work with">
          <ul className={styles.strip}>
            {sectors.map((sector, index) => (
              <li key={sector.id}>
                <Link to={`/who-we-help#${sector.id}`} className={styles.stripLink}>
                  <span className={styles.stripIndex} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.stripName}>{sector.name}</span>
                  <ArrowRight
                    className={styles.stripIcon}
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

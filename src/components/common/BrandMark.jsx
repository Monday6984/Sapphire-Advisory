import { MARK_PATHS, MARK_VIEWBOX } from './logoArtwork';
import styles from './BrandMark.module.css';

/**
 * The Sapphire Advisory hexagon mark on its own (official artwork).
 * Colour follows CSS `color`. Decorative unless a `title` is given.
 *
 * - variant="solid"   (default) filled mark
 * - variant="outline" stroked mark, as in the brand pattern; `animated`
 *   draws the outline in once on load (skipped for reduced motion)
 */
export default function BrandMark({ className = '', title, variant = 'solid', animated = false }) {
  const outline = variant === 'outline';

  return (
    <svg
      className={`${outline ? styles.outline : ''} ${animated ? styles.animated : ''} ${className}`.trim() || undefined}
      viewBox={MARK_VIEWBOX}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      aria-label={title}
      focusable="false"
      overflow="visible"
    >
      {MARK_PATHS.map(({ transform, d }) => (
        <path
          key={d.slice(0, 24)}
          transform={transform}
          d={d}
          pathLength={outline ? 1 : undefined}
          fill={outline ? 'none' : 'currentColor'}
        />
      ))}
    </svg>
  );
}

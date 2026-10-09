import { useId } from 'react';
import { MARK_PATHS, MARK_VIEWBOX } from './logoArtwork';
import styles from './BrandPattern.module.css';

const [, , MARK_W, MARK_H] = MARK_VIEWBOX.split(' ').map(Number);

/**
 * The brand-guide pattern: offset rows of hexagon-mark outlines.
 * Purely decorative; fills its positioned parent. Size the motif with
 * `size` (mark height in px) and colour/opacity via CSS on `className`
 * (stroke uses currentColor).
 */
export default function BrandPattern({ className = '', size = 46 }) {
  const id = useId().replace(/:/g, '');
  const markW = (size * MARK_W) / MARK_H;
  // Brick layout: tile holds two marks, the second offset half a tile
  const tileW = markW * 2.6;
  const tileH = size * 2.3;

  const mark = (x, y) => (
    <svg x={x} y={y} width={markW} height={size} viewBox={MARK_VIEWBOX} overflow="visible" aria-hidden="true">
      {MARK_PATHS.map(({ transform, d }) => (
        <path key={d.slice(0, 24)} transform={transform} d={d} />
      ))}
    </svg>
  );

  return (
    <svg className={`${styles.pattern} ${className}`.trim()} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width={tileW} height={tileH} patternUnits="userSpaceOnUse">
          {mark(0, 0)}
          {mark(tileW / 2, tileH / 2)}
          {mark(-tileW / 2, tileH / 2)}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

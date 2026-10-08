import styles from './GemMark.module.css';

// Fine dial of ticks around the gem — every sixth tick is longer.
const TICKS = Array.from({ length: 72 }, (_, i) => {
  const angle = (i * 5 * Math.PI) / 180;
  const major = i % 6 === 0;
  const r1 = 196;
  const r2 = major ? 184 : 190;
  return {
    x1: 200 + r1 * Math.sin(angle),
    y1: 200 - r1 * Math.cos(angle),
    x2: 200 + r2 * Math.sin(angle),
    y2: 200 - r2 * Math.cos(angle),
    major,
  };
});

/**
 * Large decorative gem: the original hero gem geometry set inside a
 * precision dial. Lines draw in once on load (disabled for reduced motion).
 * Purely decorative — hidden from assistive technology.
 */
export default function GemMark({ className = '', animated = true }) {
  return (
    <svg
      className={`${styles.mark} ${animated ? styles.animated : ''} ${className}`.trim()}
      viewBox="0 0 400 400"
      aria-hidden="true"
      focusable="false"
    >
      <g className={styles.dial}>
        {TICKS.map((t, i) => (
          <line
            key={i}
            x1={t.x1.toFixed(2)}
            y1={t.y1.toFixed(2)}
            x2={t.x2.toFixed(2)}
            y2={t.y2.toFixed(2)}
            className={t.major ? styles.tickMajor : styles.tick}
          />
        ))}
      </g>

      <g className={styles.rings}>
        <circle cx="200" cy="200" r="168" />
        <circle cx="200" cy="200" r="132" className={styles.ringDashed} />
      </g>

      {/* Facet tints: crown lighter, pavilion halves in two navy shades */}
      <g className={styles.facets}>
        <polygon points="150,140 250,140 300,185 100,185" className={styles.crown} />
        <polygon points="100,185 200,185 200,300" className={styles.pavilionL} />
        <polygon points="200,185 300,185 200,300" className={styles.pavilionR} />
      </g>

      <g className={styles.gem}>
        <polygon
          pathLength="1"
          className={styles.draw}
          points="150,140 250,140 300,185 200,300 100,185"
        />
        <line pathLength="1" className={`${styles.draw} ${styles.d2}`} x1="100" y1="185" x2="300" y2="185" />
        <path
          pathLength="1"
          className={`${styles.draw} ${styles.d2}`}
          d="M150,140 L125,185 M250,140 L275,185 M200,140 L175,185 M200,140 L225,185 M150,140 L175,185 M250,140 L225,185"
        />
        <path
          pathLength="1"
          className={`${styles.draw} ${styles.d3}`}
          d="M125,185 L200,300 M175,185 L200,300 M225,185 L200,300 M275,185 L200,300"
        />
      </g>

      <g className={styles.nodes}>
        {[
          [150, 140],
          [250, 140],
          [300, 185],
          [100, 185],
          [200, 300],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.4" />
        ))}
      </g>
    </svg>
  );
}

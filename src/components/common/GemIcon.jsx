/**
 * The compact Sapphire gem mark (circle + faceted gem) used in the logo
 * and as a small brand accent. Strokes use currentColor.
 */
export default function GemIcon({ className, title }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      aria-label={title}
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeLinejoin="round">
        <circle cx="20" cy="20" r="18.5" strokeWidth="1" />
        <polygon points="13,15 27,15 31,19 20,31 9,19" strokeWidth="1.2" />
        <line x1="9" y1="19" x2="31" y2="19" strokeWidth="1" />
        <line x1="16" y1="15" x2="14" y2="19" strokeWidth="1" />
        <line x1="24" y1="15" x2="26" y2="19" strokeWidth="1" />
        <line x1="14" y1="19" x2="20" y2="31" strokeWidth="1" />
        <line x1="26" y1="19" x2="20" y2="31" strokeWidth="1" />
      </g>
    </svg>
  );
}

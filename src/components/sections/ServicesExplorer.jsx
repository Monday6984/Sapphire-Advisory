import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import ServicePanel from './ServicePanel';
import styles from './ServicesExplorer.module.css';

const STACKED_QUERY = '(max-width: 820px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Services explorer — an editorial index of situations beside the active
 * service. Implements the WAI-ARIA tabs pattern, as the original site did:
 * vertical tablist, arrow/Home/End keys, roving tabindex, and panels
 * labelled by their tabs. Deep links such as /services#incident open the
 * matching situation and scroll the explorer into view.
 */
export default function ServicesExplorer({ services, images = {}, tablistLabel, outcomeLabel }) {
  const ids = services.map((service) => service.id);
  const { hash } = useLocation();
  const hashId = decodeURIComponent(hash.slice(1));

  const [activeId, setActiveId] = useState(ids.includes(hashId) ? hashId : ids[0]);
  const explorerRef = useRef(null);
  const panelsRef = useRef(null);
  const tabRefs = useRef({});

  // Follow deep links (including later hash changes from in-page links).
  useEffect(() => {
    if (!ids.includes(hashId)) return;
    setActiveId(hashId);
    explorerRef.current?.scrollIntoView({ block: 'start' });
  }, [hashId]);

  const select = (id, { focus = false } = {}) => {
    setActiveId(id);
    if (focus) tabRefs.current[id]?.focus();
  };

  // On small screens the panel sits below the list, so bring it into view.
  const handleClick = (id) => {
    select(id);
    if (window.matchMedia(STACKED_QUERY).matches) {
      const smooth = !window.matchMedia(REDUCED_MOTION_QUERY).matches;
      requestAnimationFrame(() =>
        panelsRef.current?.scrollIntoView({ block: 'start', behavior: smooth ? 'smooth' : 'auto' }),
      );
    }
  };

  const handleKeyDown = (event, index) => {
    const last = ids.length - 1;
    let next = null;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = index === last ? 0 : index + 1;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = index === 0 ? last : index - 1;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = last;

    if (next !== null) {
      event.preventDefault();
      select(ids[next], { focus: true });
    }
  };

  return (
    <div className={styles.explorer} ref={explorerRef}>
      <div
        className={styles.tablist}
        role="tablist"
        aria-label={tablistLabel}
        aria-orientation="vertical"
      >
        {services.map((service, index) => {
          const selected = service.id === activeId;
          return (
            <button
              key={service.id}
              ref={(el) => {
                tabRefs.current[service.id] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${service.id}`}
              aria-controls={`panel-${service.id}`}
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              className={styles.tab}
              onClick={() => handleClick(service.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{service.title}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.panels} ref={panelsRef}>
        {services.map((service) => (
          <div
            key={service.id}
            role="tabpanel"
            id={`panel-${service.id}`}
            aria-labelledby={`tab-${service.id}`}
            tabIndex={0}
            hidden={service.id !== activeId}
            className={styles.panel}
          >
            <ServicePanel service={service} image={images[service.id]} outcomeLabel={outcomeLabel} />
          </div>
        ))}
      </div>
    </div>
  );
}

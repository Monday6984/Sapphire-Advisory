import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Start each new page at the top, as the original site did. Links with a
// hash (e.g. /who-we-help#fintech) scroll to that element if it exists.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

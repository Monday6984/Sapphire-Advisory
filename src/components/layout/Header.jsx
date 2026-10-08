import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import Logo from '../common/Logo';
import { primaryNav } from '../../data/navigation';
import styles from './Header.module.css';

const MOBILE_QUERY = '(max-width: 820px)';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const { pathname } = useLocation();

  const closeMenu = () => setMenuOpen(false);

  // Close whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close on Escape and return focus to the toggle.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  // Close if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const onChange = (event) => {
      if (!event.matches) setMenuOpen(false);
    };

    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Logo />

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={22} strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
          )}
          <span className="visually-hidden">Menu</span>
        </button>

        <nav aria-label="Primary navigation" className={styles.nav}>
          <ul
            id="primary-menu"
            className={`${styles.menu} ${menuOpen ? styles.open : ''}`}
          >
            {primaryNav.map(({ to, label, cta }) => (
              <li key={to} className={cta ? styles.ctaItem : undefined}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      cta ? styles.cta : styles.link,
                      isActive && !cta ? styles.active : '',
                    ]
                      .filter(Boolean)
                      .join(' ')
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

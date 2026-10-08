import { Link } from 'react-router';
import Logo from '../common/Logo';
import { footerExplore } from '../../data/navigation';
import styles from './Footer.module.css';

// Bracketed values are client placeholders — keep until confirmed.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.tagline}>
              Data protection and information governance made easy.
            </p>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore" className={styles.heading}>
              Explore
            </h2>
            <ul className={styles.list}>
              {footerExplore.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={styles.heading}>Get in touch</h2>
            <ul className={styles.list}>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>[hello@sapphireadvisorygroup.co.uk]</li>
              {/* Pages not yet supplied by the client */}
              <li>[Privacy Notice]</li>
              <li>[Cookie Policy]</li>
            </ul>
          </div>
        </div>

        <div className={styles.legal}>
          <span>&copy; {year} Sapphire Advisory. All rights reserved.</span>
          <span>Company no. [00000000] | ICO registration no. [ZA000000]</span>
        </div>
      </div>
    </footer>
  );
}

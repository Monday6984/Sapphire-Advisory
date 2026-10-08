import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import Section from '../layout/Section';
import SectionHeading from '../common/SectionHeading';
import styles from './SituationList.module.css';

/**
 * "How can we help?" — a sticky heading beside an index of situations,
 * each linking to the matching service on /services.
 */
export default function SituationList({ heading, intro, linkLabel, services }) {
  return (
    <Section tone="navy" labelledBy="situations-heading">
      <div className={styles.layout}>
        <div className={styles.aside}>
          <SectionHeading id="situations-heading" intro={intro}>
            {heading}
          </SectionHeading>
        </div>

        <ul className={styles.list}>
          {services.map((service, index) => (
            <li key={service.id}>
              <Link to={`/services#${service.id}`} className={styles.row}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={styles.text}>
                  <span className={styles.title}>{service.title}</span>
                  <span className={styles.desc}>{service.summary}</span>
                </span>
                <span className={styles.go}>
                  <span className={styles.goLabel}>{linkLabel}</span>
                  <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

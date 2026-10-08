import styles from './DraftNote.module.css';

/**
 * Visible review note carried over from the original draft, for content
 * awaiting client sign-off. Remove each one once the client approves.
 */
export default function DraftNote({ children }) {
  return <p className={styles.note}>{children}</p>;
}

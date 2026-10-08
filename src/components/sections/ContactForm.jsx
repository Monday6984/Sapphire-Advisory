import { useRef, useState } from 'react';
import Button from '../common/Button';
import { sendEnquiry, EnquiryNotConnectedError } from '../../lib/sendEnquiry';
import styles from './ContactForm.module.css';

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const REQUIRED = ['name', 'email', 'message'];
const STATUS_ID = 'form-status';

function Field({ id, label, hint, wide = false, children }) {
  return (
    <div className={`${styles.field} ${wide ? styles.wide : ''}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {hint && <span className={styles.hint}> {hint}</span>}
      </label>
      {children}
    </div>
  );
}

/**
 * Enquiry form with the original site's fields and validation messages.
 * Uses custom (novalidate) validation: invalid fields are marked with
 * aria-invalid, described by the polite status region, and focused.
 * `help`/`onHelpChange`/`helpRef` are lifted so the breach callout can
 * select "Something has happened".
 */
export default function ContactForm({ content, help, onHelpChange, helpRef }) {
  const { heading, fields, submit, privacyNote, messages } = content;

  const initialValues = {
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: fields.sector.options[0],
    message: '',
  };
  const [values, setValues] = useState(initialValues);
  const [invalid, setInvalid] = useState({});
  const [status, setStatus] = useState({ text: '', tone: 'info' });
  const [sending, setSending] = useState(false);
  const refs = { name: useRef(null), email: useRef(null), message: useRef(null) };

  const update = (name) => (event) => {
    setValues((current) => ({ ...current, [name]: event.target.value }));
    if (invalid[name]) setInvalid((current) => ({ ...current, [name]: false }));
  };

  const fail = (keys, text) => {
    setInvalid(Object.fromEntries(keys.map((key) => [key, true])));
    setStatus({ text, tone: 'error' });
    refs[keys[0]].current?.focus();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;

    const missing = REQUIRED.filter((key) => !values[key].trim());
    if (missing.length) {
      fail(missing, `${messages.missing}${missing.map((key) => fields[key].label).join(', ')}.`);
      return;
    }
    if (!EMAIL_PATTERN.test(values.email.trim())) {
      fail(['email'], messages.invalidEmail);
      return;
    }

    setInvalid({});
    setSending(true);
    try {
      await sendEnquiry({ ...values, help });
      setStatus({ text: messages.sent, tone: 'success' });
      setValues(initialValues);
    } catch (error) {
      // Keep what the visitor typed; never claim the message was sent.
      setStatus({
        text: error instanceof EnquiryNotConnectedError ? messages.notConnected : messages.failed,
        tone: 'error',
      });
    } finally {
      setSending(false);
    }
  };

  const describedBy = (key) => (invalid[key] ? STATUS_ID : undefined);

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit} aria-labelledby="contact-form-heading">
      <span className={styles.rule} aria-hidden="true" />
      <h2 id="contact-form-heading" className={styles.heading}>
        {heading}
      </h2>

      <div className={styles.grid}>
        <Field id="f-name" label={fields.name.label}>
          <input
            ref={refs.name}
            id="f-name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={invalid.name || undefined}
            aria-describedby={describedBy('name')}
            value={values.name}
            onChange={update('name')}
            className={styles.input}
          />
        </Field>

        <Field id="f-company" label={fields.company.label}>
          <input
            id="f-company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={update('company')}
            className={styles.input}
          />
        </Field>

        <Field id="f-email" label={fields.email.label}>
          <input
            ref={refs.email}
            id="f-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={invalid.email || undefined}
            aria-describedby={describedBy('email')}
            value={values.email}
            onChange={update('email')}
            className={styles.input}
          />
        </Field>

        <Field id="f-phone" label={fields.phone.label} hint={fields.phone.hint}>
          <input
            id="f-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update('phone')}
            className={styles.input}
          />
        </Field>

        <Field id="f-sector" label={fields.sector.label}>
          <select
            id="f-sector"
            name="sector"
            value={values.sector}
            onChange={update('sector')}
            className={`${styles.input} ${styles.select}`}
          >
            {fields.sector.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>

        <Field id="f-help" label={fields.help.label}>
          <select
            ref={helpRef}
            id="f-help"
            name="help"
            value={help}
            onChange={(event) => onHelpChange(event.target.value)}
            className={`${styles.input} ${styles.select}`}
          >
            {fields.help.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>

        <Field id="f-msg" label={fields.message.label} wide>
          <textarea
            ref={refs.message}
            id="f-msg"
            name="message"
            required
            aria-invalid={invalid.message || undefined}
            aria-describedby={describedBy('message')}
            value={values.message}
            onChange={update('message')}
            className={`${styles.input} ${styles.textarea}`}
          />
        </Field>
      </div>

      {/* aria-disabled (not disabled) so keyboard focus stays on the button */}
      <Button type="submit" variant="navy" className={styles.submit} aria-disabled={sending || undefined}>
        {submit}
      </Button>

      <p className={styles.note}>{privacyNote}</p>

      <div
        id={STATUS_ID}
        role="status"
        aria-live="polite"
        className={`${styles.status} ${status.text ? styles[status.tone] : ''}`}
      >
        {status.text}
      </div>
    </form>
  );
}

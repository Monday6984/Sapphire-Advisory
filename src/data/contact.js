// Contact page copy and form definition. Source: original site (Contact page).
// Keep wording as supplied. Bracketed text is a client placeholder — keep
// until the client confirms the real details.

export const contactHero = {
  title: "Let's talk about what you need",
  intro:
    "You don't need to have everything figured out before getting in touch. Tell us a little about your business and what's going on, and we'll come back to you within [one working day].",
};

export const contactForm = {
  // Visual heading for the form, added in the redesign (not in the source).
  heading: "Tell us what's going on",
  fields: {
    name: { label: 'Name' },
    company: { label: 'Company name' },
    email: { label: 'Email address' },
    phone: { label: 'Phone number', hint: '(optional)' },
    sector: { label: 'Sector', options: ['Fintech', 'Healthtech', 'Other'] },
    help: {
      label: 'How can we help?',
      options: [
        'Ongoing advice',
        'Getting compliant',
        'Something has happened',
        'Launching something new',
        'Working with another organisation',
        'Training',
        'Expanding into the UK',
        'Not sure yet',
      ],
    },
    message: { label: 'Message' },
  },
  submit: 'Send message',
  privacyNote:
    'Everything you share with us is treated in confidence. See our [Privacy Notice] for how we use your information.',
  messages: {
    missing: 'Please fill in: ', // followed by the missing field labels
    invalidEmail: 'Please enter a valid email address, for example name@company.com.',
    sent: 'Thank you. Your message has been received and we will be in touch shortly.',
    // Shown instead of `sent` until the form is connected to an email service,
    // so nobody is told their message was received when it was not.
    notConnected:
      '[Form not yet connected: enquiries cannot be sent until the client confirms how they should be delivered.]',
    // Shown if a connected service fails. Not in the source — client to supply wording.
    failed: '[Client to confirm wording for when a message could not be sent.]',
  },
};

// `href` is optional: add mailto:/tel:/https:// links once real details exist.
export const contactDetails = {
  heading: 'Other ways to reach us',
  items: [
    { id: 'email', label: 'Email', value: '[hello@sapphireadvisorygroup.co.uk]' },
    { id: 'phone', label: 'Phone', value: '[+44 (0) 000 000 0000]' },
    { id: 'linkedin', label: 'LinkedIn', value: '[LinkedIn page]' },
  ],
};

export const breachCallout = {
  heading: 'Dealing with a data breach?',
  // Rendered as: before "<option>" after — the option text links to the form.
  before: 'Mention it in your message or choose ',
  option: 'Something has happened',
  after: ' so we can prioritise your enquiry. Reportable breaches must usually reach the ICO within 72 hours.',
};

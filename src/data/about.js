// About page copy. Source: original site (About page). Keep wording as supplied.
// Bracketed text is a client placeholder — keep until the client confirms.

export const aboutHero = {
  title: 'Helping growing businesses get data protection right',
  intro: 'Clear, practical data protection support for fintech and healthtech startups and scaleups.',
};

export const story = {
  heading: 'Our story',
  lede: "Data protection obligations apply from the moment you start handling personal data, yet most young businesses can't afford a full-time DPO or the fees of a large law firm.",
  paragraphs: [
    "Many end up guessing, copying templates that don't fit, or leaving compliance until a partner or regulator asks for it. Sapphire Advisory was set up to offer another option: experienced, practical data protection support at a level that makes sense for startups and scaleups.",
    'We focus on fintech and healthtech because these sectors handle some of the most sensitive data there is, and the cost of getting it wrong is high for customers and businesses alike.',
    '[Optional: one or two lines on why the founder started the company.]',
  ],
};

export const mission = {
  heading: 'Our mission',
  statement:
    'To help fintech and healthtech organisations simplify their data protection obligations and stay compliant with the law.',
};

export const vision = {
  heading: 'Our vision',
  paragraphs: [
    'We want to see organisations use data protection as a business strategy. Good data practices build customer trust, speed up partnerships and make due diligence easier.',
    'We also want to help businesses build a strong compliance culture through training, so that every member of the team understands their part in protecting personal data.',
  ],
};

export const values = {
  heading: 'Our values',
  items: [
    { name: 'Compliance', text: 'We help you meet your legal obligations clearly and accurately.' },
    { name: 'Integrity', text: "We give honest advice, even when it isn't the easiest thing to hear." },
    { name: 'Excellence', text: 'We hold our work to a high standard, whatever the size of the project.' },
    {
      name: 'Practicality',
      text: 'Our recommendations are designed to be put into action by real teams with real constraints.',
    },
    { name: 'Confidentiality', text: 'We treat your information and your business with complete discretion.' },
    { name: 'Reliability', text: 'When you need us, especially during an incident, we respond.' },
    { name: 'Proactivity', text: 'We help you spot risks early, before they become problems.' },
  ],
};

export const founder = {
  heading: 'Meet the founder',
  nameLine: '[Founder name], [role/title]',
  paragraphs: [
    '[Founder name] has [X years] of experience in data protection and information governance across [sectors, e.g. healthcare and financial services]. [Qualifications, certifications or professional memberships.]',
    '[One or two sentences on what they enjoy about helping startups.]',
  ],
  // Placeholder until the client supplies a photograph. When it arrives, add
  // it to assets/images/index.js and pass it to <FounderSection photo={…} />.
  photoPlaceholder: '[Founder photo]',
  action: { to: '/contact', label: 'Talk to us' },
};

// Wording from the original Contact page header.
export const aboutCta = {
  heading: "Let's talk about what you need",
  text: "You don't need to have everything figured out before getting in touch.",
  action: { to: '/contact', label: 'Talk to us' },
};

// Services, organised by the situation the client is in.
// Source: original site (Home "How can we help?" list + Services explorer).
//
// - eyebrow: short category label above the panel heading on the Services page.
//            Drawn from wording elsewhere in the source (Services intro, contact
//            form options, link labels); "Ongoing support" was supplied by the client.
// - title:   label used in lists and tabs
// - heading: panel heading on the Services page (differs for "culture")
// - summary: short description used on the Home page list
// - context, items, outcome: Services page panel content

export const services = [
  {
    id: 'ongoing',
    eyebrow: 'Ongoing support',
    title: 'We need ongoing advice',
    heading: 'We need ongoing advice',
    summary:
      'A trusted data protection adviser and outsourced DPO, without a full-time hire.',
    context:
      "You can't justify a full-time DPO yet, but you need someone to turn to when data protection questions come up.",
    items: [
      'General data protection and information governance advice',
      'Ongoing advice and support by email and phone',
      'Outsourced DPO support',
      'A named Data Protection Officer, with details notified to the ICO',
    ],
    outcome:
      'A dependable adviser who knows your business and can answer questions quickly, at a fraction of the cost of a full-time hire.',
  },
  {
    id: 'compliant',
    eyebrow: 'Compliance foundations',
    title: 'We need to get compliant',
    heading: 'We need to get compliant',
    summary:
      'Policies, privacy notices, ROPA and DSP Toolkit support that keeps up with your growth.',
    context:
      "You're growing quickly and your data protection framework needs to keep up.",
    items: [
      'Review and update of data protection and information governance policies and procedures',
      'Privacy notices',
      'Records of Processing Activities (ROPA)',
      'Data Security and Protection (DSP) Toolkit completion',
      'Data protection compliance documentation',
    ],
    outcome:
      'Documentation that reflects how your business really works and is ready for partner, investor or regulator scrutiny.',
  },
  {
    id: 'incident',
    eyebrow: 'Urgent issues',
    title: 'Something has happened',
    heading: 'Something has happened',
    summary:
      'Practical support with data breaches, subject access requests and complaints.',
    context:
      "Something has gone wrong, or you've received a request or complaint, and you need clear advice on what to do next.",
    items: [
      'Data incident and breach management support',
      'Subject Access Request (SAR) support',
      'Support with data protection complaints',
    ],
    outcome:
      'Calm, practical guidance at a stressful time, so you meet your deadlines and respond properly.',
  },
  {
    id: 'new',
    eyebrow: 'Launching something new',
    title: "We're introducing something new",
    heading: "We're introducing something new",
    summary:
      'DPIAs, AI governance and legitimate interest assessments before you launch.',
    context:
      "You're launching a new product, technology, process or way of using data, and you want to understand the risks first.",
    items: [
      'Data Protection Impact Assessments (DPIAs) for new processes, products and emerging technologies',
      'AI governance',
      'Legitimate Interest Assessments (LIAs)',
    ],
    outcome:
      'The confidence to launch, with risks identified and addressed before they reach your customers.',
  },
  {
    id: 'partners',
    eyebrow: 'Agreements and transfers',
    title: "We're working with another organisation",
    heading: "We're working with another organisation",
    summary:
      'Data processing and sharing agreements, contract reviews and international transfers.',
    context:
      "You're sharing data, onboarding a new supplier or entering an agreement, and you need the data protection side covered.",
    items: [
      'Data Processing Agreements',
      'Data Sharing Agreements',
      'Contract reviews',
      'International data transfer support',
    ],
    outcome:
      'Agreements that protect your business and clearly set out who is responsible for what.',
  },
  {
    id: 'culture',
    eyebrow: 'Training',
    title: 'We want a data protection culture',
    heading: 'We want a company-wide data protection culture',
    summary: 'Tailored training and workshops for your whole team.',
    context: 'You want data protection to be part of how your team works every day.',
    items: [
      'Tailored data protection and information governance training',
      'Staff training programmes',
      'Role-specific data protection training',
      'Practical compliance workshops',
      'Support to build a data protection compliance culture',
    ],
    outcome:
      'A team that knows how to handle personal data properly and knows what to do when something looks wrong.',
  },
  {
    id: 'uk',
    eyebrow: 'UK expansion',
    title: "We're expanding into the UK",
    heading: "We're expanding into the UK",
    summary: 'Guidance on UK GDPR, documentation and UK DPO support.',
    context:
      "You're entering or scaling in the UK and need to understand which data protection requirements apply to you.",
    items: [
      'UK GDPR and data protection requirements',
      'Privacy documentation and notices',
      'Data protection policies and procedures',
      'UK DPO support',
      'Practical guidance for meeting UK data protection obligations',
    ],
    outcome:
      'A clear picture of your UK obligations and the documents and support to meet them from day one.',
  },
];

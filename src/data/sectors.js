// Sectors we help. Source: original site (Home "Who we work with" +
// Who we help page).
//
// - summary/linkLabel: Home page audience cards
// - intro/helpHeading/help: Who we help page sector blocks

export const sectors = [
  {
    id: 'fintech',
    name: 'Fintech',
    summary:
      'You handle financial and personal data every day, and your partners, banks and investors expect to see that you handle it properly. We help you build compliance that stands up to due diligence.',
    linkLabel: 'Support for fintech',
    intro:
      'Fintech businesses handle identity documents, bank details, transaction histories and other sensitive personal data from the first customer onwards. Banking partners, payment providers and investors will usually want evidence that you manage this data responsibly before they work with you.',
    helpHeading: 'We help fintech startups and scaleups',
    help: [
      'Put clear policies, privacy notices and records of processing in place',
      'Prepare for due diligence from partners and investors',
      'Assess new features, data uses and AI tools before launch',
      'Review supplier and partner contracts',
      'Respond to incidents and data subject requests quickly and correctly',
    ],
  },
  {
    id: 'healthtech',
    name: 'Healthtech',
    summary:
      'Health data is special category data under UK GDPR and carries stricter rules. We help you meet those requirements and get ready to work with the NHS and other healthcare organisations.',
    linkLabel: 'Support for healthtech',
    intro:
      "Health data is special category data under UK GDPR, which means stricter conditions apply to how you collect, use and share it. If you plan to work with the NHS, you'll usually be expected to complete the Data Security and Protection Toolkit before accessing NHS patient data or systems.",
    helpHeading: 'We help healthtech startups and scaleups',
    help: [
      'Complete the DSP Toolkit',
      'Carry out DPIAs for products that handle health data',
      'Put the right legal bases and safeguards in place for special category data',
      'Draft data sharing and data processing agreements with healthcare partners',
      'Train clinical and non-clinical staff on handling patient data',
    ],
  },
  {
    id: 'uk',
    name: 'Expanding into the UK',
    summary:
      "If you're entering or scaling in the UK, we help you understand what UK data protection law expects from you and get your documentation, policies and DPO arrangements in place.",
    linkLabel: 'Support for UK expansion',
    intro:
      "UK GDPR and the Data Protection Act 2018 set out how organisations must handle personal data in the UK. If you're entering the UK market, you'll need to understand which of these rules apply to you, what documentation you need and whether you need a DPO.",
    helpHeading: 'We help businesses expanding into the UK',
    help: [
      'Understand their UK data protection obligations',
      'Prepare UK-ready privacy notices, policies and procedures',
      'Set up UK DPO support',
      'Manage international data transfers',
      'Build compliance into their UK launch plan from the start',
    ],
  },
];

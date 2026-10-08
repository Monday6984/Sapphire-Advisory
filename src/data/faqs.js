// FAQs. Source: original site (FAQs page). The first item was open by default.
// `id` is a stable key used for the accordion's element ids; display numbers
// (01, 02…) come from array order.
// Bracketed text is a client placeholder — keep until confirmed.

export const faqs = [
  {
    id: 'dpo',
    question: 'Does my business need a Data Protection Officer?',
    answer:
      "Under UK GDPR, you must appoint a DPO if you're a public authority, if your core activities involve regular and systematic monitoring of people on a large scale, or if you process special category data such as health data on a large scale. Many healthtech businesses fall into this last group. Even where a DPO isn't legally required, having one can make it easier to manage compliance and reassure partners.",
    defaultOpen: true,
  },
  {
    id: 'outsourced-dpo',
    question: 'What is an outsourced DPO?',
    answer:
      "An outsourced DPO is an external specialist who carries out the DPO role for your organisation. You get the expertise without the cost of a full-time hire, and the DPO's contact details are notified to the ICO in the usual way.",
  },
  {
    id: 'data-breach',
    question: 'What should we do if we have a data breach?',
    answer:
      "Act quickly. If a personal data breach is likely to put people's rights and freedoms at risk, you must report it to the ICO within 72 hours of becoming aware of it. In some cases you'll also need to tell the people affected. We can help you assess the breach, decide whether it needs reporting and manage the response.",
  },
  {
    id: 'subject-access-request',
    question: 'How long do we have to respond to a subject access request?',
    answer:
      "You usually have one month from receiving the request. This can be extended by up to two further months if the request is complex or you've received several from the same person, as long as you tell them within the first month.",
  },
  {
    id: 'dpia',
    question: 'What is a DPIA and when do we need one?',
    answer:
      "A Data Protection Impact Assessment is a structured way of identifying and reducing the risks of a project that uses personal data. It's required when processing is likely to result in a high risk to individuals, which often includes new technologies, AI, large-scale use of health data and monitoring.",
  },
  {
    id: 'sectors',
    question: 'Do you only work with fintech and healthtech businesses?',
    answer:
      "These are our specialist sectors, but we're happy to speak with any growing business that needs practical data protection support.",
  },
  {
    id: 'outside-uk',
    question: "We're not based in the UK yet. Can you still help?",
    answer:
      'Yes. We regularly support businesses planning to enter the UK market and can help you prepare before you launch.',
  },
  {
    id: 'law-firm',
    question: 'Are you a law firm?',
    answer:
      "[Client to confirm wording. Suggested: We are data protection consultants. Where a matter needs formal legal advice or representation, we'll tell you and can work alongside your legal advisers.]",
  },
];

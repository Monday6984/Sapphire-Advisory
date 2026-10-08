// Delivery for contact-form enquiries.
//
// No email service or backend is configured yet, so this rejects with
// NOT_CONNECTED and the form says so honestly. To go live, replace the body
// with a real call (e.g. a fetch to a form endpoint) that resolves on success
// and throws on failure.

export class EnquiryNotConnectedError extends Error {
  constructor() {
    super('Enquiry delivery is not configured');
    this.name = 'EnquiryNotConnectedError';
  }
}

/** @param {object} enquiry  the submitted form values */
export async function sendEnquiry() {
  throw new EnquiryNotConnectedError();
}

import { useState } from 'react';
import ContentSection from '../components/ContentSection';
import Seo from '../components/Seo';
import { contactDetails, pageMeta } from '../content/siteContent';

const initialFormState = {
  name: '',
  organization: '',
  email: '',
  message: '',
};

const ContactPage = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    const errors = {};

    if (!formValues.name.trim()) {
      errors.name = 'Name is required.';
    }

    if (!formValues.email.trim()) {
      errors.email = 'Email is required.';
    }

    if (!formValues.message.trim()) {
      errors.message = 'Message is required.';
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setStatusMessage('Please complete the required fields before submitting.');
      return;
    }

    setFormErrors({});
    setStatusMessage('Thank you. Your enquiry has been recorded in this placeholder flow.');
    setFormValues(initialFormState);
  };

  return (
    <>
      <Seo {...pageMeta.contact} />
      <ContentSection
        title="Contact Us"
        intro="For founders, co-investors, and strategic partners interested in working with EVH."
      >
        <ul className="contact-list">
          <li>
            <strong>Email:</strong> {contactDetails.email}
          </li>
          <li>
            <strong>Phone:</strong> {contactDetails.phone}
          </li>
          <li>
            <strong>Location:</strong> {contactDetails.location}
          </li>
        </ul>
      </ContentSection>

      <ContentSection
        title="Initial enquiry"
        intro="Share a short overview and EVH will respond with next steps."
      >
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>
            Name
            <input type="text" name="name" value={formValues.name} onChange={handleChange} placeholder="Jane Doe" />
            {formErrors.name && <span className="field-error">{formErrors.name}</span>}
          </label>
          <label>
            Organisation
            <input
              type="text"
              name="organization"
              value={formValues.organization}
              onChange={handleChange}
              placeholder="Company Name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="name@company.com"
            />
            {formErrors.email && <span className="field-error">{formErrors.email}</span>}
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              value={formValues.message}
              onChange={handleChange}
              placeholder="Tell us about your venture or partnership interest."
            />
            {formErrors.message && <span className="field-error">{formErrors.message}</span>}
          </label>
          <button type="submit" className="button-primary">
            Send enquiry
          </button>
          {statusMessage && <p className="form-status">{statusMessage}</p>}
        </form>
      </ContentSection>
    </>
  );
};

export default ContactPage;

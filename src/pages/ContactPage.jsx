import { useState } from 'react';
import ContentSection from '@/components/ContentSection';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { contactDetails, pageMeta } from '@/content/siteContent';

const initialFormState = {
  name: '',
  organization: '',
  email: '',
  message: '',
};

const inputClasses =
  'w-full rounded-xl border border-border bg-surface-raised px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20';

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
        <ul className="flex flex-col gap-2 text-base text-ink">
          <li>
            <strong className="font-semibold">Email:</strong> {contactDetails.email}
          </li>
          <li>
            <strong className="font-semibold">Phone:</strong> {contactDetails.phone}
          </li>
          <li>
            <strong className="font-semibold">Location:</strong> {contactDetails.location}
          </li>
        </ul>
      </ContentSection>

      <ContentSection
        title="Initial enquiry"
        intro="Share a short overview and EVH will respond with next steps."
      >
        <form onSubmit={handleSubmit} noValidate className="flex max-w-xl flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <input
              id="name"
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className={cn(inputClasses, formErrors.name && 'border-error')}
            />
            {formErrors.name && <span className="text-sm text-error">{formErrors.name}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="organization">Organisation</Label>
            <input
              id="organization"
              type="text"
              name="organization"
              value={formValues.organization}
              onChange={handleChange}
              placeholder="Company Name"
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <input
              id="email"
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className={cn(inputClasses, formErrors.email && 'border-error')}
            />
            {formErrors.email && <span className="text-sm text-error">{formErrors.email}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formValues.message}
              onChange={handleChange}
              placeholder="Tell us about your venture or partnership interest."
              className={cn(inputClasses, formErrors.message && 'border-error')}
            />
            {formErrors.message && <span className="text-sm text-error">{formErrors.message}</span>}
          </div>

          <Button type="submit" size="lg" className="self-start">
            Send enquiry
          </Button>
          {statusMessage && <p className="text-sm text-muted">{statusMessage}</p>}
        </form>
      </ContentSection>
    </>
  );
};

export default ContactPage;

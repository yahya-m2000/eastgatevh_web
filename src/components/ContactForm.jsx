import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { contactDetails, designContent } from '@/content/siteContent';
import { createContactDraft, validateContact } from '@/lib/contactForm';

const copy = designContent.contact;
const initialValues = { name: '', organization: '', email: '', message: '' };
const ContactForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [ready, setReady] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const formRef = useRef(null);
  const readyRef = useRef(null);
  useEffect(() => {
    if (ready) readyRef.current?.focus({ preventScroll: true });
  }, [ready]);
  const draft = createContactDraft(values, contactDetails.email, copy.subject);
  const update = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };
  const submit = (event) => {
    event.preventDefault();
    const invalid = validateContact(values, copy);
    setErrors(invalid);
    const first = Object.keys(invalid)[0];
    if (first) {
      formRef.current?.elements.namedItem(first)?.focus();
      return;
    }
    setReady(true);
    window.location.href = draft.href;
  };
  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(draft.body);
      setCopyStatus(copy.copied);
    } catch {
      setCopyStatus(copy.copyFailed);
    }
  };
  if (ready)
    return (
      <div className="form-complete">
        <Check size={28} aria-hidden="true" />
        <h3 tabIndex={-1} ref={readyRef}>
          {copy.draftReady}
        </h3>
        <p>{copy.draftHelp}</p>
        <pre className="form-draft">{draft.body}</pre>
        <div className="form-complete-actions">
          <Button asChild>
            <a href={draft.href}>
              {copy.reopen}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </Button>
          <button className="form-text-button" type="button" onClick={copyDraft}>
            {copy.copy}
          </button>
        </div>
        <p role="status">{copyStatus}</p>
        <button
          type="button"
          className="form-text-button form-edit"
          onClick={() => setReady(false)}
        >
          {copy.edit}
        </button>
      </div>
    );
  const field = (name, extra = {}) => (
    <div className="form-field">
      <Label htmlFor={name}>{copy[name]}</Label>
      <input
        id={name}
        name={name}
        value={values[name]}
        onChange={update}
        placeholder={copy[`${name}Placeholder`]}
        aria-invalid={Boolean(errors[name])}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        {...extra}
      />
      {errors[name] && (
        <p className="form-error" id={`${name}-error`}>
          {errors[name]}
        </p>
      )}
    </div>
  );
  return (
    <form ref={formRef} className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        {field('name', { required: true, autoComplete: 'name', maxLength: 120 })}
        {field('organization', { autoComplete: 'organization', maxLength: 160 })}
      </div>
      {field('email', { type: 'email', required: true, autoComplete: 'email', maxLength: 254 })}
      <div className="form-field">
        <Label htmlFor="message">{copy.message}</Label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={update}
          placeholder={copy.messagePlaceholder}
          required
          rows={4}
          maxLength={4000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p className="form-error" id="message-error">
            {errors.message}
          </p>
        )}
      </div>
      <Button type="submit" className="form-submit">
        {copy.submit}
        <ArrowUpRight size={20} aria-hidden="true" />
      </Button>
      <p className="form-note">{copy.note}</p>
    </form>
  );
};
export default ContactForm;

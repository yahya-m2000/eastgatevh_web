// Keep validation and mailto encoding independent of the presentation.
export const validateContact = (values, messages) => {
  const errors = {};
  if (!values.name.trim()) errors.name = messages.nameError;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = messages.emailError;
  if (!values.message.trim()) errors.message = messages.messageError;
  return errors;
};
export const createContactDraft = (values, recipient, subject) => {
  const body = [
    values.message.trim(),
    '',
    values.name.trim(),
    values.organization.trim(),
    values.email.trim(),
  ]
    .filter((line, index) => line || index === 1)
    .join('\n');
  return {
    body,
    href: `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
};

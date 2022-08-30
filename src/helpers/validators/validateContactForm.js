export const validateContactForm = (formData) => {
  const { firstName, lastName, DoB, contactType, contact } = formData;

  if (!firstName || !lastName || !contactType || !contact || !DoB) return true;

  return false;
};

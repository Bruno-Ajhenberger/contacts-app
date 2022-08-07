import { useContext, useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import ContactsContext from "../../store/ContactsContext";
import UpdateContactFormView from "../UpdateContact/UpdateContactFormView";

const UpdateContactFormController = ({ updateContact, closeModal }) => {
  const contactsContext = useContext(ContactsContext);

  const { formData, onInputChange, formErrors, validateAll } =
    useForm(updateContact);
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    validateAll();
  };

  const onCancel = () => {
    closeModal();
  };

  const submit = () => {
    contactsContext.addContact({ ...formData });
    contactsContext.updateContact({ ...formData });
    closeModal();
    setIsSubmit(false);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      submit();
    }
  }, [formErrors]);

  return (
    <UpdateContactFormView
      onSubmit={onSubmit}
      formData={formData}
      onInputChange={onInputChange}
      onCancel={onCancel}
      formErrors={formErrors}
    />
  );
};

export default UpdateContactFormController;

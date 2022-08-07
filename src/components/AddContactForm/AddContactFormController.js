import { useContext, useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import ContactsContext from "../../store/ContactsContext";
import { nanoid } from "nanoid";
import AddContactFormView from "./AddContactFormView";

let INIT_STATE = {
  id: nanoid(),
  firstName: "",
  lastName: "",
  contactType: "email",
  contact: "",
  DoB: "",
};

const AddContactFormController = () => {
  const contactsContext = useContext(ContactsContext);

  const { formData, onInputChange, resetForm, formErrors, validateAll } =
    useForm(INIT_STATE);
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    validateAll();
  };

  const reset = (event) => {
    event.preventDefault();
    resetForm();
  };

  const submit = () => {
    contactsContext.addContact({ ...formData });
    INIT_STATE.id = nanoid();
    resetForm();
    setIsSubmit(false);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      submit();
    }
  }, [formErrors]);

  return (
    <AddContactFormView
      onSubmit={onSubmit}
      formData={formData}
      onInputChange={onInputChange}
      resetForm={reset}
      formErrors={formErrors}
    />
  );
};

export default AddContactFormController;

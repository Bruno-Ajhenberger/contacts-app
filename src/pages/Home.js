import { useContext } from "react";
import useForm from "../hooks/useForm";
import ContactsContext from "../store/context/ContactsContext";
import { nanoid } from "nanoid";
import AddContactForm from "../components/AddContactForm/AddContactForm";
import { validateContactForm } from "../helpers/validators/validateContactForm";

let INIT_STATE = {
  firstName: "",
  lastName: "",
  contactType: "email",
  contact: "",
  DoB: "",
};

const Home = () => {
  const contactsContext = useContext(ContactsContext);

  const { formData, onInputChange, resetForm, errors, setErrors } =
    useForm(INIT_STATE);

  const onSubmit = (event) => {
    event.preventDefault();

    const hasErrors = validateContactForm(formData);

    if (hasErrors) {
      setErrors(true);
      return;
    }
    const formDataCopy = { ...formData };
    formDataCopy.id = nanoid();
    contactsContext.addContact(formDataCopy);
    INIT_STATE.id = nanoid();
    resetForm();
  };

  const reset = (event) => {
    event.preventDefault();
    resetForm();
  };

  return (
    <div>
      <AddContactForm
        onSubmit={onSubmit}
        formData={formData}
        onInputChange={onInputChange}
        resetForm={reset}
        errors={errors}
      ></AddContactForm>
    </div>
  );
};

export default Home;

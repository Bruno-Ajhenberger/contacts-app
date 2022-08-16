import NavBar from "../components/ui/NavBar";
import { useContext, useState, useEffect } from "react";
import useForm from "../hooks/useForm";
import ContactsContext from "../store/context/ContactsContext";
import { nanoid } from "nanoid";
import AddContactForm from "../components/AddContactForm/AddContactForm";

let INIT_STATE = {
  id: nanoid(),
  firstName: "",
  lastName: "",
  contactType: "email",
  contact: "",
  DoB: "",
};

const Home = () => {
  const contactsContext = useContext(ContactsContext);

  const { formData, onInputChange, resetForm, formErrors, validateAll } =
    useForm(INIT_STATE);

  const onSubmit = (event) => {
    event.preventDefault();
    if (validateAll() === 0) {
      contactsContext.addContact({ ...formData });
      INIT_STATE.id = nanoid();
      resetForm();
    }
  };

  const reset = (event) => {
    event.preventDefault();
    resetForm();
  };

  return (
    <div>
      <NavBar />
      <AddContactForm
        onSubmit={onSubmit}
        formData={formData}
        onInputChange={onInputChange}
        resetForm={reset}
        formErrors={formErrors}
      ></AddContactForm>
    </div>
  );
};

export default Home;

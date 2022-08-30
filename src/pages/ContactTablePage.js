import styles from "./PageStyle.module.css";
import ContactsTable from "../components/ContactsTable/ContactsTable";
import { useContext, useState } from "react";
import ContactsContext from "../store/context/ContactsContext";
import useForm from "../hooks/useForm";
import { validateContactForm } from "../helpers/validators/validateContactForm";

const ContactTablePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contactsContext = useContext(ContactsContext);
  const { formData, onInputChange, errors, setErrors, preSetForm } = useForm(
    {}
  );

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const onUpdate = (id) => {
    const contact = contactsContext.contacts.filter(
      (contact) => contact.id === id
    );
    preSetForm(contact[0]);
    openModal();
  };

  const onSubmit = (event) => {
    console.log("bra");
    event.preventDefault();
    const hasErrors = validateContactForm(formData);
    if (hasErrors) {
      setErrors(true);
      return;
    }
    contactsContext.updateContact({ ...formData });
    closeModal();
  };

  return (
    <div className={styles.contactTable}>
      <ContactsTable
        formData={formData}
        contacts={contactsContext.contacts}
        isOpen={isOpen}
        onUpdate={onUpdate}
        closeModal={closeModal}
        errors={errors}
        onSubmit={onSubmit}
        onInputChange={onInputChange}
      ></ContactsTable>
    </div>
  );
};

export default ContactTablePage;

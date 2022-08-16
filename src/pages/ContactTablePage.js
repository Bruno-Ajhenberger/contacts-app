import NavBar from "../components/ui/NavBar";
import styles from "./PageStyle.module.css";
import ContactsTable from "../components/ContactsTable/ContactsTable";
import { useContext, useState } from "react";
import ContactsContext from "../store/context/ContactsContext";

const ContactTablePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactToUpdate, setContactToUpdate] = useState({});
  const contactsContext = useContext(ContactsContext);

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
    setContactToUpdate(contact[0]);
    openModal();
  };

  return (
    <div className={styles.contactTable}>
      <NavBar />
      <ContactsTable
        contacts={contactsContext.contacts}
        isOpen={isOpen}
        onUpdate={onUpdate}
        closeModal={closeModal}
        updateContact={contactToUpdate}
      ></ContactsTable>
    </div>
  );
};

export default ContactTablePage;

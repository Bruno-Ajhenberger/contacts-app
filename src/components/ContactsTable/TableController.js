import { useContext, useState } from "react";
import ContactsContext from "../../store/ContactsContext";

import TableView from "./TableView";

const TableController = () => {
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
    <TableView
      contacts={contactsContext.contacts}
      isOpen={isOpen}
      onUpdate={onUpdate}
      closeModal={closeModal}
      updateContact={contactToUpdate}
    />
  );
};

export default TableController;

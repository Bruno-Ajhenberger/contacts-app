import { createContext, useState } from "react";
import { JsonData } from "../res/JsonDummyData";

const ContactsContext = createContext({
  logInInfo: {},
  isLoggedIn: Boolean,
  contacts: [],
  addContact: (contact) => {},
  updateContact: (id) => {},
  removeContact: (id) => {},
});

export function ContactsContextProvider({ children }) {
  const [contacts, setContacts] = useState(JsonData);

  const removeContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };
  const addContact = (contact) => {
    const newArray = contacts;
    newArray.push(contact);
    setContacts(newArray);
  };
  const updateContact = (updatedContact) => {
    setContacts((prevContacts) => {
      return prevContacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      );
    });
  };

  const context = {
    contacts: contacts,
    removeContact: removeContact,
    addContact: addContact,
    updateContact: updateContact,
  };

  return (
    <ContactsContext.Provider value={context}>
      {children}
    </ContactsContext.Provider>
  );
}

export default ContactsContext;

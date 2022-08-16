import { createContext, useState } from "react";
import { JsonData } from "../../res/JsonDummyData";

const ContactsContext = createContext({
  logInInfo: {},
  isLoggedIn: Boolean,
  contacts: [],
  addContact: (contact) => {},
  updateContact: (id) => {},
  removeContact: (id) => {},
});

export function ContactsProvider({ children }) {
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

  const value = {
    contacts: contacts,
    removeContact: removeContact,
    addContact: addContact,
    updateContact: updateContact,
  };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
}

export default ContactsContext;

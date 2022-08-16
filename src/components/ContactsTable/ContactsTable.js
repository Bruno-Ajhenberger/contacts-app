import styles from "./Table.module.css";
import ReactModal from "react-modal";
import TableRow from "./TableRow";
import UpdateContactFormController from "../UpdateContact/UpdateContactFormController";

const ContactsTable = ({
  isOpen,
  contacts,
  onUpdate,
  closeModal,
  updateContact,
}) => {
  return (
    <div className={styles.main}>
      <ReactModal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={styles.modal}
      >
        <UpdateContactFormController
          updateContact={updateContact}
          closeModal={closeModal}
        />
      </ReactModal>
      <table>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Date Of Birth</td>
            <td>Contact</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map((user, index) => {
            return (
              <TableRow
                key={index}
                firstName={user.firstName}
                lastName={user.lastName}
                Dob={user.DoB}
                contactType={user.contactType}
                contact={user.contact}
                id={user.id}
                onUpdate={onUpdate}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;

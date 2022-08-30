import styles from "./Table.module.css";
import TableRow from "./TableRow";
import UpdateModal from "../UpdateContact/UpdateModal";

const ContactsTable = ({
  isOpen,
  contacts,
  onUpdate,
  closeModal,
  formData,
  errors,
  onSubmit,
  onInputChange,
}) => {
  return (
    <div className={styles.main}>
      <UpdateModal
        isOpen={isOpen}
        closeModal={closeModal}
        errors={errors}
        formData={formData}
        onSubmit={onSubmit}
        onInputChange={onInputChange}
      ></UpdateModal>
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

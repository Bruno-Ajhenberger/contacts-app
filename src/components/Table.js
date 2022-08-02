import { useContext, useEffect, useState } from "react";
import styles from "./Table.module.css";
import TableRow from "./TableRow";
import UsersContext from "../store/users-context";
import ReactModal from "react-modal";
import Form2 from "./Form2";

const Table = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState();
  const usersContext = useContext(UsersContext);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const onUpdate = (id) => {
    const user = usersContext.users.filter((user) => user.id === id);
    setSelectedUser(user[0]);
    openModal();
  };

  return (
    <div className={styles.main}>
      <ReactModal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={styles.modal}
      >
        <Form2 selectedUser={selectedUser} closeModal={closeModal} />
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
          {usersContext.users.map((user, index) => {
            return (
              <TableRow
                key={index}
                firstName={user.firstName}
                lastName={user.lastName}
                Dob={user.DoB}
                contactType={user.contactType}
                contact={user.contact}
                id={user.id}
                updateHandler={onUpdate}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

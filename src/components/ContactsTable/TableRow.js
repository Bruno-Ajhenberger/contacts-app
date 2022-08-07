import { useContext } from "react";
import styles from "./TableRow.module.css";
import ContactsContext from "../../store/ContactsContext";

const TableRow = ({
  firstName,
  lastName,
  Dob,
  contact,
  id,
  onUpdate,
  contactType,
}) => {
  const userContext = useContext(ContactsContext);

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{Dob}</td>
      <td>{contactType + ": " + contact}</td>
      <td className={styles.update_delete}>
        <button
          onClick={(e) => {
            onUpdate(id);
          }}
        >
          Update
        </button>
        <button
          onClick={(e) => {
            userContext.removeContact(id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;

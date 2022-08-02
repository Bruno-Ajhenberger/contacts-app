import { useContext } from "react";
import styles from "./TableRow.module.css";
import UsersContext from "../store/users-context";

const TableRow = ({
  firstName,
  lastName,
  Dob,
  contact,
  id,
  updateHandler,
  contactType,
}) => {
  const userContext = useContext(UsersContext);

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{Dob}</td>
      <td>{contactType + ": " + contact}</td>
      <td className={styles.update_delete}>
        <button
          onClick={(e) => {
            updateHandler(id);
          }}
        >
          Update
        </button>
        <button
          onClick={(e) => {
            userContext.removeUser(id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;

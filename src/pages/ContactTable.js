import NavBar from "../components/ui/NavBar";
import styles from "./PageStyle.module.css";
import TableController from "../components/ContactsTable/TableController";

const ContactTable = () => {
  return (
    <div className={styles.contactTable}>
      <NavBar />
      <TableController />
    </div>
  );
};

export default ContactTable;

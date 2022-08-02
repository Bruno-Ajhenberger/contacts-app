import Table from "../components/Table";
import NavBar from "../components/ui/NavBar";
import styles from "./PageStyle.module.css";
import { useNavigate } from "react-router-dom";
import UsersContext from "../store/users-context";
import { useContext, useEffect } from "react";

const ContactTable = () => {
  const userCntx = useContext(UsersContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userCntx.isLoggedIn) {
      navigate("/login");
    }
  }, []);
  return (
    <div className={styles.contactTable}>
      <NavBar />
      <Table />
    </div>
  );
};

export default ContactTable;

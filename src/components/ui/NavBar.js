import { useContext } from "react";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import UsersContext from "../../store/users-context";

const NavBar = () => {
  let navigate = useNavigate();
  const userCntx = useContext(UsersContext);

  return (
    <div className={styles.main}>
      <ul>
        <li
          onClick={(e) => {
            navigate("/home");
          }}
        >
          Home
        </li>
        <li
          onClick={(e) => {
            navigate("/contact-table");
          }}
        >
          Contacts
        </li>
      </ul>
      <button
        className={styles.logout}
        onClick={(e) => {
          userCntx.logOut();
          navigate("/login");
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default NavBar;

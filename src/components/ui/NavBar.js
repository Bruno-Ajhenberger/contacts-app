import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";

const NavBar = () => {
  let navigate = useNavigate();
  const auth = useAuth();

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
          auth.signout();
          navigate("/login");
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default NavBar;

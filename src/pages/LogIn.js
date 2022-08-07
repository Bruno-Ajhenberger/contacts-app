import { useContext } from "react";
import LoginFormController from "../components/LoginForm/LoginFormController";
import UsersContext from "../store/ContactsContext";
const LogIn = () => {
  const userCntx = useContext(UsersContext);

  return <LoginFormController />;
};

export default LogIn;

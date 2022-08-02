import { useEffect, useContext } from "react";
import Form from "../components/Form";
import { Navigate, useNavigate } from "react-router-dom";
import UsersContext from "../store/users-context";

const LogIn = () => {
  const userCntx = useContext(UsersContext);
  const navigate = useNavigate();
  console.log(userCntx.isLoggedIn);

  useEffect(() => {
    if (userCntx.isLoggedIn === true) {
      navigate("/home");
    }
  }, []);
  return <Form />;
};

export default LogIn;

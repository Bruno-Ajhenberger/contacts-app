import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UsersContext from "../store/users-context";

const App = () => {
  const userCntx = useContext(UsersContext);
  const navigate = useNavigate();
  console.log(userCntx.isLoggedIn);

  useEffect(() => {
    if (userCntx.isLoggedIn === true) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);
  return <div>App</div>;
};

export default App;

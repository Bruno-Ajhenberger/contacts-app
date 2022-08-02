import Form2 from "../components/Form2";
import NavBar from "../components/ui/NavBar";
import { useNavigate } from "react-router-dom";
import UsersContext from "../store/users-context";
import { useContext, useEffect } from "react";

const Home = () => {
  const userCntx = useContext(UsersContext);
  console.log(userCntx.isLoggedIn);

  const navigate = useNavigate();
  useEffect(() => {
    if (userCntx.isLoggedIn === false) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <NavBar />
      <Form2 />
    </div>
  );
};

export default Home;

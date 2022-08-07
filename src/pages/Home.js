import AddContactFormController from "../components/AddContactForm/AddContactFormController";
import NavBar from "../components/ui/NavBar";
import UsersContext from "../store/ContactsContext";
import { useContext, useEffect } from "react";

const Home = () => {
  const userCntx = useContext(UsersContext);

  return (
    <div>
      <NavBar />
      <AddContactFormController />
    </div>
  );
};

export default Home;

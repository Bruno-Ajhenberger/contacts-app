import { createContext, useState } from "react";
import { JsonData } from "../res/JsonDummyData";

const UsersContext = createContext({
  logInInfo: {},
  isLoggedIn: Boolean,
  users: [],
  removeUser: (id) => {},
  addUser: (user) => {},
  updateUser: (updateUser) => {},
  setIsLoggedIn: () => {},
  logOut: () => {},
});

export function UsersContextProvider({ children }) {
  const [users, setUsers] = useState(JsonData);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === null
      ? false
      : JSON.parse(localStorage.getItem("isLoggedIn"))
  );

  const removeUserHandler = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  };
  const addUserHandler = (user) => {
    const newArray = users;
    newArray.push(user);
    setUsers(newArray);
  };
  const updateUserHandler = (updatedUser) => {
    //console.log(updatedUser);
    setUsers((prevUsers) => {
      return prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
    });
  };
  const setIsLoggedInHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const logOutHandler = () => {
    console.log("logout");
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", false);
  };

  const context = {
    logInInfo: {
      userName: "kreki",
      password: "krekut",
    },
    isLoggedIn: isLoggedIn,
    users: users,
    removeUser: removeUserHandler,
    addUser: addUserHandler,
    updateUser: updateUserHandler,
    setIsLoggedIn: setIsLoggedInHandler,
    logOut: logOutHandler,
  };

  return (
    <UsersContext.Provider value={context}>{children}</UsersContext.Provider>
  );
}

export default UsersContext;

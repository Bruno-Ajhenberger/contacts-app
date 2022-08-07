import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  isAuthenticated: false,
  user: "",
  signin: () => {},
  signout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "kreki", password: "krekut" });
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === null
      ? false
      : JSON.parse(localStorage.getItem("isAuthenticated"))
  );

  const signin = (userInfo) => {
    console.log(userInfo);
    if (
      userInfo.userName === user.username &&
      userInfo.password === user.password
    ) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", true);
      navigate("/home", { replace: true });
    } else {
      alert("wrong username/password");
    }
  };

  const signout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", false);
  };

  const context = {
    user,
    isAuthenticated,
    signin,
    signout,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;

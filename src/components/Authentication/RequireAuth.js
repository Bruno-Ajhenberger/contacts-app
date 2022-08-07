import { Navigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";

const RequireAuth = ({ children }) => {
  const auth = useAuth();

  if (auth.isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RequireAuth;

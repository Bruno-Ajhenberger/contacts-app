import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import PageLayout from "../Layouts/PageLayout";

const RequireAuth = ({ children }) => {
  const auth = useAuth();

  if (auth.isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }

  return <PageLayout>{children}</PageLayout>;
};

export default RequireAuth;

import { useEffect, useState } from "react";
import LoginFormView from "./LoginFormView";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";
import useForm from "../../hooks/useForm";

const INIT_STATE = { userName: "", password: "" };

const LoginFormController = () => {
  const { formData, onInputChange, formErrors, validateAll } =
    useForm(INIT_STATE);
  const [isSubmit, setIsSubmit] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    validateAll();
  };

  const submit = () => {
    auth.signin(formData);
    setIsSubmit(false);
  };

  useEffect(() => {
    if (auth.isAuthenticated === true) {
      navigate("/home", { replace: true });
    }
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      submit();
    }
  }, [formErrors]);

  return (
    <LoginFormView
      onSubmit={onSubmit}
      onInputChange={onInputChange}
      formErrors={formErrors}
    />
  );
};

export default LoginFormController;

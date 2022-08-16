import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";
import useForm from "../hooks/useForm";

const INIT_STATE = { userName: "", password: "" };

const LogIn = () => {
  const { formData, onInputChange, formErrors, validateAll } =
    useForm(INIT_STATE);
  const auth = useAuth();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateAll() === 0) {
      auth.signin(formData);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated === true) {
      navigate("/home", { replace: true });
    }
  }, []);

  return (
    <LoginForm
      onSubmit={onSubmit}
      onInputChange={onInputChange}
      formErrors={formErrors}
    ></LoginForm>
  );
};

export default LogIn;

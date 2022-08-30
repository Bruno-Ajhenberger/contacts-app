import { useEffect } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";
import useForm from "../hooks/useForm";
import { validateLoginForm } from "../helpers/validators/validateLoginForm";

const INIT_STATE = { userName: "", password: "" };

const LogIn = () => {
  const { formData, onInputChange, errors, setErrors } = useForm(INIT_STATE);
  const auth = useAuth();
  const navigate = useNavigate();
  // console.log(errors);

  const onSubmit = (e) => {
    e.preventDefault();
    const hasErrors = validateLoginForm(formData);
    console.log(hasErrors);

    if (hasErrors) {
      setErrors(true);
      return;
    }
    setErrors(false);
    auth.signin(formData);
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
      errors={errors}
      formData={formData}
    ></LoginForm>
  );
};

export default LogIn;

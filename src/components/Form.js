import { useContext } from "react";
import styles from "./Form.module.css";
import useForm from "../hooks/useForm";
import UsersContext from "../store/users-context";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const userCntx = useContext(UsersContext);
  const navigate = useNavigate();
  const [formData, updateFormData] = useForm({ userName: "", password: "" });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      formData.userName === userCntx.logInInfo.userName &&
      formData.password === userCntx.logInInfo.password
    ) {
      userCntx.setIsLoggedIn(true);
      navigate("/home");
    } else {
      alert("Wrong username/password");
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <h2>LOGIN</h2>
        <input
          name="userName"
          type="text"
          id="userName"
          required
          placeholder="UserName"
          onChange={(e) => {
            updateFormData(e.target.name, e.target.value);
          }}
        ></input>
        <input
          name="password"
          type="password"
          id="password"
          required
          placeholder="Password"
          onChange={(e) => {
            updateFormData(e.target.name, e.target.value);
          }}
        ></input>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;

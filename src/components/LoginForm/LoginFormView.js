import styles from "./Form.module.css";
const LoginFormView = ({ onSubmit, onInputChange, formErrors }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>LOGIN</h2>
        <input
          name="userName"
          type="text"
          id="userName"
          placeholder="UserName"
          onChange={onInputChange}
        ></input>
        <div className={styles.invalid_input}>{formErrors.userName}</div>
        <input
          name="password"
          type="password"
          id="password"
          placeholder="Password"
          onChange={onInputChange}
        ></input>
        <div className={styles.invalid_input}>{formErrors.password}</div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default LoginFormView;

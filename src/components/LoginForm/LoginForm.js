import styles from "./Form.module.css";
const LoginForm = ({ onSubmit, onInputChange, errors, formData }) => {
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
        <div className={styles.invalid_input}>
          {errors && (!formData.userName || formData.userName.length < 4) && (
            <div>UserName should be at least 4 characters</div>
          )}
        </div>
        <input
          name="password"
          type="password"
          id="password"
          placeholder="Password"
          onChange={onInputChange}
        ></input>
        <div className={styles.invalid_input}>
          {errors && (!formData.password || formData.password.length < 6) && (
            <div>Password should be at least 6 characters</div>
          )}
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default LoginForm;

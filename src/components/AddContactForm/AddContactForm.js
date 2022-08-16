import styles from "../LoginForm/Form.module.css";

const AddContactForm = ({
  onInputChange,
  formData,
  onSubmit,
  resetForm,
  formErrors,
}) => {
  return (
    <div>
      <form>
        <h2>INFORMATION</h2>
        <input
          name="firstName"
          type="text"
          value={formData.firstName}
          placeholder="First Name"
          onChange={onInputChange}
        ></input>
        <div className={styles.invalid_input}>{formErrors.firstName}</div>
        <input
          name="lastName"
          type="text"
          value={formData.lastName}
          placeholder="Last Name"
          onChange={onInputChange}
        ></input>
        <div className={styles.invalid_input}>{formErrors.lastName}</div>
        <input
          name="DoB"
          type="date"
          value={formData.DoB}
          placeholder="Date Of Birth"
          onChange={onInputChange}
        ></input>
        <div className={styles.invalid_input}>{formErrors.DoB}</div>
        <h6>SELECT CONTACT TYPE</h6>
        <select
          name="contactType"
          value={formData.contactType}
          onChange={onInputChange}
        >
          <option value="email">E-mail</option>
          <option value="Phone">Phone</option>
        </select>
        <input
          name="contact"
          type={formData.contactType === "Phone" ? "number" : "email"}
          value={formData.contact}
          placeholder="Contact"
          onChange={onInputChange}
        ></input>
        <div className={styles.invalid_input}>{formErrors.contact}</div>
        <div className={styles.formSubmit}>
          <button onClick={resetForm}>CLEAR</button>
          <button onClick={onSubmit}>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default AddContactForm;

import styles from "../LoginForm/Form.module.css";

const AddContactForm = ({
  onInputChange,
  formData,
  onSubmit,
  resetForm,
  errors,
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
        <div className={styles.invalid_input}>
          {errors && !formData.firstName && <div>First Name is required</div>}
        </div>
        <input
          name="lastName"
          type="text"
          value={formData.lastName}
          placeholder="Last Name"
          onChange={onInputChange}
        ></input>
        <div className={styles.invalid_input}>
          {errors && !formData.lastName && <div>Last Name is required</div>}
        </div>
        <input
          name="DoB"
          type="date"
          value={formData.DoB}
          placeholder="Date Of Birth"
          onChange={onInputChange}
        ></input>
        <div className={styles.invalid_input}>
          {errors && !formData.DoB && <div>Date of Birth is required</div>}
        </div>
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
        <div className={styles.invalid_input}>
          {errors && !formData.contact && <div>Contact is required</div>}
        </div>
        <div className={styles.formSubmit}>
          <button onClick={resetForm}>CLEAR</button>
          <button onClick={onSubmit}>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default AddContactForm;

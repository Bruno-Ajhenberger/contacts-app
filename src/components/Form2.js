import { useContext, useEffect, useState } from "react";
import styles from "./Form.module.css";
import useForm from "../hooks/useForm";
import UsersContext from "../store/users-context";
import { nanoid } from "nanoid";

const Form2 = ({ selectedUser, closeModal }) => {
  const userContext = useContext(UsersContext);

  const [formData, updateFormData, resetFormData, setFormData] = useForm({
    id: nanoid(),
    firstName: "",
    lastName: "",
    contactType: "email",
    contact: "",
    DoB: "",
  });

  console.log(formData);

  const [update, setUpdate] = useState(false);

  const onSubmitHandler = (event) => {
    if (!update) {
      event.preventDefault();
      userContext.addUser({ ...formData });
      resetFormData();
      updateFormData("id", nanoid());
    } else {
      event.preventDefault();
      userContext.updateUser({ ...formData });
      closeModal();
    }
  };

  useEffect(() => {
    if (selectedUser !== undefined) {
      setFormData(selectedUser);
      setUpdate(true);
    }
  }, []);

  return (
    <div>
      <form>
        <h2>INFORMATION</h2>
        <input
          name="firstName"
          type="text"
          id="firstName"
          value={formData.firstName}
          required
          placeholder="First Name"
          onChange={(e) => {
            updateFormData(e.target.name, e.target.value);
          }}
        ></input>
        <input
          name="lastName"
          type="text"
          id="lastName"
          value={formData.lastName}
          required
          placeholder="Last Name"
          onChange={(e) => {
            updateFormData(e.target.name, e.target.value);
          }}
        ></input>
        <input
          name="DoB"
          type="date"
          id="dateOfBirth"
          value={formData.DoB}
          required
          placeholder="Date Of Birth"
          onChange={(e) => {
            updateFormData(e.target.name, e.target.value);
          }}
        ></input>
        <h6>SELECT CONTACT TYPE</h6>
        <select
          name="contactType"
          id="contactType"
          value={formData.contactType}
          onChange={(e) => {
            updateFormData(e.target.name, e.target.value);
          }}
        >
          <option value="email">E-mail</option>
          <option value="Phone">Phone</option>
        </select>
        <input
          name="contact"
          type={formData.contactType === "Phone" ? "number" : "email"}
          id="contact"
          value={formData.contact}
          required
          placeholder="Contact"
          onChange={(e) => {
            updateFormData(e.target.name, e.target.value);
          }}
        ></input>
        <div className={styles.formSubmit}>
          <button
            onClick={(e) => {
              e.preventDefault();
              resetFormData(e);
              updateFormData("id", nanoid());
            }}
          >
            CLEAR
          </button>
          <button
            onClick={(e) => {
              onSubmitHandler(e);
            }}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;

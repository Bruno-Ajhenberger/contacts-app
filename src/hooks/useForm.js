import { useState } from "react";

export default function useForm(INIT_STATE) {
  const [formData, setFormData] = useState(INIT_STATE);
  const [formErrors, setFormErrors] = useState({});

  const onInputChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };
  const resetForm = () => {
    setFormData(INIT_STATE);
    setFormErrors({});
  };
  console.log(formErrors);

  const validateAll = () => {
    const errors = {};
    for (const formEntry in formData) {
      if (!formData[formEntry]) {
        errors[formEntry] = formEntry + " is Required";
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length;
  };

  return { formData, onInputChange, resetForm, formErrors, validateAll };
}

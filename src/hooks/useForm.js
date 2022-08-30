import { useState } from "react";

export default function useForm(INIT_STATE) {
  const [formData, setFormData] = useState(INIT_STATE);
  const [errors, setErrors] = useState(false);

  const onInputChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };
  const resetForm = () => {
    setFormData(INIT_STATE);
    setErrors(false);
  };
  //console.log(formErrors);
  const preSetForm = (data) => {
    setFormData(data);
  };

  return {
    formData,
    onInputChange,
    resetForm,
    errors,
    setErrors,
    preSetForm,
  };
}

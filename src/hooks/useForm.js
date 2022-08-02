import { useState } from "react";

export default function useForm(defaultNames) {
  const [formData, setFormDataLocal] = useState(defaultNames);

  const updateFormData = (name, value) => {
    setFormDataLocal({ ...formData, [name]: value });
  };
  const resetFormData = () => {
    const temp = formData;
    for (let prop in temp) {
      temp[prop] = "";
    }
    setFormDataLocal(temp);
    //console.log(temp);
  };

  const setFormData = (data) => {
    setFormDataLocal(data);
    console.log(data);
  };

  return [formData, updateFormData, resetFormData, setFormData];
}

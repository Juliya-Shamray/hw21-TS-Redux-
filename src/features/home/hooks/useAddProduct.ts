import { useState } from "react";

interface fields {
  title: string;
  description: string;
}

const initialErrors = {
  title: false,
  description: false,
};

export const useAddProduct = (handleClose: () => void) => {
  const [errors, setErrors] = useState(initialErrors);

  const resetErrors = () => setErrors(initialErrors);

  const newErrors = { ...initialErrors };

  const validate = (fields: fields) => {
    let isValid = true;

    resetErrors();
    if (!/^[a-zA-Z ]{6,19}$/.test(fields.title)) {
      newErrors.title = true;
      isValid = false;
    }
    if (!/^[\w].{10,100}$/.test(fields.description)) {
      newErrors.description = true;
      isValid = false;
    }
    setErrors(newErrors);

    return isValid;
  };

  const clearForm = (target: any) => {
    target.title.value = "";
    target.description.value = "";
  };

  const onSubmitAddProduct = (event: any) => {
    event.preventDefault();

    const dataSend = {
      title: event.target.title.value,
      description: event.target.description.value,
    };
    if (!validate(dataSend)) return;

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataSend),
    })
      .then((res) => res.json())
      .then((data) => {
        handleClose();

        clearForm(event.target);
      });
  };

  return {
    onSubmitAddProduct,
    errors,
  };
};

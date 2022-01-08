import React, { useEffect, useState } from 'react';

export const useForm = (initial = {}) => {
  const [formValues, setInputs] = useState(initial);
  const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
    const { value: userValue, name, type, files, defaultValue } = e.currentTarget;

    const value = userValue || defaultValue;

    let outVal : string | number | null;

    switch (type) {
    case 'number' :
      outVal = !!value ? parseInt(value, 10) : 0;
      break;
    case 'file' :
      /*
       * console.log(value);
       * @ts-ignore
       */
      [outVal] = files  || [];
      break;
    default:
      outVal = value;
    }

    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: outVal,
      };
    });
  };
  const resetForm = (e: Event) => {
    e.preventDefault();
    setInputs(initial);
  };
  const clearForm = (e: Event) => {
    e.preventDefault();
    const blankArr = Object.entries(initial).map(([key, _]) => {
      return [key, ''];
    });
    const blankObj = Object.fromEntries(blankArr);
    setInputs(blankObj);
  };

  return { formValues, handleChange, resetForm, clearForm };
};

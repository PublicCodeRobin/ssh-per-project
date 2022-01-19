import React, { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useForm = (initial = {}, localKey: string) => {
  const [_, setSaved] = useLocalStorage(localKey);
  const [formValues, setInputs] = useState(initial);
  const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
    const { value, name, type, files } = e.currentTarget;

    let outVal : string | number = value;

    switch (type) {
    case 'number' :
      outVal = !!value ? parseInt(value, 10) : 0;
      break;
    case 'file' :
      /*
       * console.log(value);
       * @ts-ignore
       */
      // @ts-ignore
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

    setSaved((prevSaved: any) => {
      return {
        ...prevSaved,
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

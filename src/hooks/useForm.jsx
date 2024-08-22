import { useState } from 'react';

const useForm = (initialValues) => {
  //VARIABLE, LA FUNCION QUE MODIFICA LAS VARIABLES
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  return [values, handleChange];
};

export default useForm;

//en este caso ya no retornamos un html, aunque si hay casos que si

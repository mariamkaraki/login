import { useState, useEffect } from 'react';

const useForm = (callback : any, validate: () => {}) => {

  // const [values, setValues] = useState({});
  // const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     callback();
  //   }
  // }, [errors]);

  // const handleSubmit = (event : any) => {
  //   if (event) event.preventDefault();
  //   setErrors(validate(values));
  //   setIsSubmitting(true);
  // };

  // const handleChange = (event: any) => {
  //   event.persist();
  //   setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  // };

  // return {
  //   handleChange,
  //   handleSubmit,
  //   values,
  //   errors,
  // }
};

export default useForm;
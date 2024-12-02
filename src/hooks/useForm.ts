import { useState } from "react";

import emailjs from "@emailjs/browser";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [messageResponse, setMessageResponse] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const sendEmail = (sendForm, target) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_TEMPLATE_ID,
        sendForm.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          setResponse(true);
          target.reset();
          form.message = "";

          setMessageResponse({
            message: "Message sent successfully",
            color: "#91CB00",
          });

          setTimeout(() => {
            setResponse(false);
          }, 3000);
        },
        (error) => {
          console.log(error);
          setLoading(false);
          setResponse(true);
          setMessageResponse({
            message: "An error has occurred",
            color: "#DC3545",
          });

          target.reset();
          form.message = "";

          setTimeout(() => {
            setResponse(false);
          }, 3000);
        }
      )
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleSubmit = (e, sendForm) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      sendEmail(sendForm, e.target);
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    messageResponse,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

import { useState } from "react";

import emailjs from "@emailjs/browser";
import { FormState } from "../interfaces/form-state";
import { Errors } from "./useValidationsForm";

export interface Form {
  name: string;
  email: string;
  message: string;
}

export interface MessageResponse {
  message?: string | null | undefined;
  color?: string | null | undefined;
}

export const useForm = (
  initialForm: Form,
  validateForm: (form: Form) => Errors
) => {
  const [form, setForm] = useState<Form>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<boolean | null>(null);
  const [messageResponse, setMessageResponse] = useState<MessageResponse>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e: any) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const sendEmail = (sendForm: any, target: any) => {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE!,
        import.meta.env.VITE_TEMPLATE_ID!,
        sendForm.current,
        import.meta.env.VITE_PUBLIC_KEY!
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, sendForm: any) => {
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

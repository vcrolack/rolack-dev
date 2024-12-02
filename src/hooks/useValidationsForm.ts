import { FormState } from "../interfaces/form-state";
import { Form } from "./useForm";

export interface Errors {
  name?: string | null | undefined;
  email?: string | null | undefined;
  message?: string | null | undefined;
}

export const useValidationsForm = (form: Form) => {
  let errors: Errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexMessage = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "Name is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Name only accpets letters and blanks";
  } else if (form.name.length > 50) {
    errors.name = "The name can not have more of 50 characters";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Write a valid email";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = "The message can not have more of 255 characters";
  } else if (form.message.length > 140) {
    errors.message = "The message can not have more of 140 characters";
  }

  return errors;
};

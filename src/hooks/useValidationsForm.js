export const useValidationsForm = (form) => {
  let errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexMessage = /^.{1,255}$/;

  if (!form.to_name.trim()) {
    errors.to_name = "Name is required";
  } else if (!regexName.test(form.to_name.trim())) {
    errors.to_name = "Name only accpets letters and blanks";
  } else if(form.to_name.length > 50) {
    errors.to_name = "The name can not have more of 50 characters";
  }

  if (!form.to_email.trim()) {
    errors.to_email = "Email is required";
  } else if (!regexEmail.test(form.to_email.trim())) {
    errors.to_email = "Write a valid email";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = "The message can not have more of 255 characters";
  } else if (form.message.length > 140) {
    errors.message = "The message can not have more of 140 characters";
  }

  return errors;
}

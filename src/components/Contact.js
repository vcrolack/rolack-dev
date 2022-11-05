import React from "react";
import { useRef } from "react";

import { useForm } from "../hooks/useForm";
import { Banner } from "./layout/Banner";
import { Input } from "./layout/Input";
import { Textarea } from "./layout/Textarea";
import { Loader } from "./layout/Loader";
import { Message } from "./layout/Message";

import { useScreenSize } from "../hooks/useScreenSize";

import banner from "../assets/img/banner/banner-home.jpg";

const initialForm = {
  to_name: "",
  to_email: "",
  message: "",
};

const validationsForm = (form) => {
  let errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexMessage = /^.{1,255}$/;

  if (!form.to_name.trim()) {
    errors.to_name = "Name is required";
  } else if (!regexName.test(form.to_name.trim())) {
    errors.to_name = "Name only accpets letters and blanks";
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
  }

  return errors;
};

export const Contact = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  const sendForm = useRef();
  const { width } = useScreenSize();

  return (
    <div className="container">
      <Banner image={banner} />
      <section id="contact">
        <div className="container-title">
          <h1>
            Do you have a project in mind? <br /> <strong>Contact me</strong>
          </h1>
        </div>
        <div className="container-contact">
          <div className="card-contact">
            <form
              ref={sendForm}
              onSubmit={(e) => handleSubmit(e, sendForm)}
              name="contact-form"
              action=""
            >
              <div className="inputs">
                <div className="container-info-contact">
                  <Input
                    placeholder="Josh"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    labelText="Name"
                    name="to_name"
                    value={form.name}
                    isRequired={true}
                  />
                  <div className="error-container">
                    {errors.to_name && (
                      <p className="error">{errors.to_name}</p>
                    )}
                  </div>
                  <Input
                    placeholder="example@example.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    labelText="Email"
                    name="to_email"
                    value={form.email}
                    isRequired={true}
                  />
                  <div className="error-container">
                    {errors.to_email && (
                      <p className="error">{errors.to_email}</p>
                    )}
                  </div>
                </div>
                <div className="container-message">
                  {width > 767 && (
                    <Textarea
                      placeholder="Hi, I'm ..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      labelText="Message"
                      rows="7"
                      cols="50"
                      name="message"
                      value={form.message}
                      isRequired={true}
                    />
                  )}
                  {width < 767 && (
                    <Textarea
                      placeholder="Hi, I'm ..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      labelText="Message"
                      rows="10"
                      cols="20"
                      name="message"
                      value={form.message}
                      isRequired={true}
                    />
                  )}
                  <div className="error-container">
                    {errors.message && (
                      <p className="error">{errors.message}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="submit-container">
                <button className="btn" type="submit">
                  Send
                </button>
              </div>
            </form>
            <div className="loader-container">
              {loading && <Loader />}
              {response && (
                <Message
                  msg={"Message sent successfully"}
                  fontColor={"#91CB00"}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

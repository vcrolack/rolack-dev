import React, { useRef } from "react";

import { Form, useForm, useScreenSize, useValidationsForm } from "../../hooks";
import { Banner, Input, Textarea, Loader, Message } from "@components/";
import { bannerHome } from "@assets/img";

const initialForm: Form = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const {
    form,
    errors,
    loading,
    response,
    messageResponse,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, useValidationsForm);

  const sendForm = useRef<HTMLFormElement | null>(null);
  const { width } = useScreenSize();

  return (
    <div className="container">
      <Banner image={bannerHome} />
      <section id="contact">
        <div className="container-title">
          <h1>
            Do you have a project in mind? <br />{" "}
            <strong>C O N T A C T &nbsp; M E</strong>
          </h1>
        </div>
        <div className="container-contact">
          <div className="card-contact">
            <form
              ref={sendForm}
              onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                handleSubmit(e, sendForm)
              }
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
                    name="name"
                    value={form.name}
                    isRequired={true}
                  />
                  <div className="error-container">
                    {errors.name && <p className="error">{errors.name}</p>}
                  </div>
                  <Input
                    placeholder="example@example.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    labelText="Email"
                    name="email"
                    value={form.email}
                    isRequired={true}
                  />
                  <div className="error-container">
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                </div>
                <div className="container-message">
                  {width > 767 && (
                    <Textarea
                      placeholder="Hi, I'm ..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      labelText="Message"
                      rows={7}
                      cols={50}
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
                      labelText="Message"
                      rows={10}
                      cols={20}
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
                  msg={messageResponse?.message ?? "Unexpected error"}
                  fontColor={messageResponse?.color ?? "#DC3545"}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

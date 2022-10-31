import React from "react";
import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

import { Banner } from "./layout/Banner";
import { Input } from "./layout/Input";
import { Textarea } from "./layout/Textarea";

import banner from "../assets/img/banner/banner-home.jpg";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5p2lhx8',
        'template_q78u6b5',
        form.current,
        'iW8PfFE5ZLF0NkNz8'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact-form", name, email, message }),
  //   })
  //     .then(() => alert("Message sent!"))
  //     .catch((err) => alert(err));
  // };

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
            <form ref={form} onSubmit={sendEmail} name="contact-form" action="">
              <div className="inputs">
                <div className="container-info-contact">
                  <Input
                    onChange={(e) => setName(e.targe.value)}
                    type="text"
                    labelText="Name"
                    name="to_name"
                  />
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    labelText="Email"
                    name="to_email"
                  />
                </div>
                <div className="container-message">
                  <Textarea
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    labelText="Message"
                    rows="7"
                    cols="50"
                    name="message"
                  />
                </div>
              </div>
              <div className="submit-container">
                <button className="btn" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

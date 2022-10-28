import React from "react";

import { Banner } from "./layout/Banner";
import { Input } from "./layout/Input";
import { Textarea } from "./layout/Textarea";

import banner from "../assets/img/banner/banner-home.jpg";

export const Contact = () => {
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
            <form action="">
              <div className="inputs">
                <div className="container-info-contact">
                  <Input type="text" labelText="Name" />
                  <Input type="text" labelText="Email" />
                </div>
                <div className="container-message">
                  <Textarea
                    type="text"
                    labelText="Message"
                    rows="7"
                    cols="50"
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

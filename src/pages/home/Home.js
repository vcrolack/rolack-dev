import React from "react";
import axios from "axios";
import fileDownload from "js-file-download";

import { Banner } from "../components";
import { bannerHome, victor } from "../../assets/img";
import { Technologies } from "./technologies/Technologies";

export const Home = () => {
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  return (
    <div className="container">
      <Banner image={bannerHome} />
      <section id="who-i-am">
        <div className="container-cards">
          <div className="card">
            <div className="container-img-victor">
              <img src={victor} alt="" />
            </div>
            <div className="about-me">
              <div className="info-victor">
                <h2 className="welcome-title">W E L C O M E</h2>
                <h2 className="about-me-subtitle">
                  My name is <strong>Víctor Rolack</strong>,<br />
                  <strong>full stack developer</strong>
                </h2>
                <p>
                Hello! I'm a 24-year-old software engineering student from Chile's Duoc UC, passionate about coding since 2019. I'm focused on enhancing 
                my full stack skills and have experience with Angular, Fast API, and ReactJS. I worked at Tyne, a Chilean startup, and currently, 
                as an Associate Software Engineer at Falabella Technology. I'm also keen on learning Node.js. Feel free to check my resume for more 
                information. Thank you for reading!
                </p>
                <div className="btn-curriculum">
                  <button
                    className="btn"
                    onClick={() =>
                      handleDownload(
                        "/curriculum.pdf",
                        "resume.pdf"
                      )
                    }
                  >
                    My resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Technologies />
    </div>
  );
};

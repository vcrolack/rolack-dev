import axios from "axios";
import fileDownload from "js-file-download";

import { Banner } from "@components/";
import { bannerHome, victor } from "@assets/img";
import { Technologies } from "./technologies/Technologies";
import { Experience } from "./experience/Experience";

export const Home = () => {
  const handleDownload = (url: string, filename: string) => {
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
                <p className="p-about-me">
                  Hello! I'm a 25-year-old software engineering from Chile,
                  passionate about coding since 2019. I'm focused on enhancing
                  my full stack skills and have experience with Angular, Fast
                  API, express, NestJS and ReactJS. I worked at Tyne, a Chilean
                  startup, as an Associate Software Engineer at Falabella
                  Technology and currently as Experienced Consultant on Amaris
                  Consulting. I'm also keen on learning Node.js. Feel free to
                  check my resume for more information. Thank you for reading!
                </p>
                <div className="btn-curriculum">
                  <button
                    className="btn"
                    onClick={() =>
                      handleDownload("/curriculum.pdf", "resume.pdf")
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
      <Experience />
      <Technologies />
    </div>
  );
};

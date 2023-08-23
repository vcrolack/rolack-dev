import React from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import { Banner } from "./layout/Banner";
import { Title } from "./layout/Title";
import { StackLogo } from "./layout/StackLogo";
import bannerHome from "./../assets/img/banner/banner-home.jpg";
import victor from "./../assets/img/I.jpeg";
import TypeScript from "./../assets/stackLogos/TypeScript.svg";
import Sass from "./../assets/stackLogos/Sass.svg";
import ReactLogo from "./../assets/stackLogos/ReactLogo.svg";
import Bootstrap from "./../assets/stackLogos/Bootstrap.svg";
import Python from "./../assets/stackLogos/Python.svg";
import Django from "./../assets/stackLogos/Django.svg";
import MySQL from "./../assets/stackLogos/MySQL.svg";
import SQLServer from "./../assets/stackLogos/SQLServer.svg";
import NodeJS from "./../assets/stackLogos/NodeJS.svg";

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
      <section id="my-stack">
        <div className="container-title">
          <Title text="MY STACK" />
        </div>
        <div id="technologies" className="container-stack">
          <h2>Front-end</h2>
          <div className="container-stack-imgs">
            <div className="front-end">
              <StackLogo
                logo={TypeScript}
                page="https://www.typescriptlang.org/"
              />
              <StackLogo logo={Sass} page="https://sass-lang.com/page/" />
              <StackLogo logo={ReactLogo} page="https://reactjs.org/" />
              <StackLogo logo={Bootstrap} page="https://getbootstrap.com/" />
            </div>
          </div>
          <h2>Back-end</h2>
          <div className="container-stack-imgs">
            <div className="back-end">
              <StackLogo logo={Python} page="https://www.python.org/" />
              <StackLogo logo={Django} page="https://www.djangoproject.com/" />
              <StackLogo logo={MySQL} page="https://www.mysql.com/" />
              <StackLogo
                logo={SQLServer}
                page="microsoft.com/en-us/sql-server/sql-server-downloads"
              />
              <StackLogo logo={NodeJS} page="https://nodejs.org/en/" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

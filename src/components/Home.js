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
                <h2 className="welcome-title">Welcome!</h2>
                <h2 className="about-me-subtitle">
                  My name is <strong>Víctor Rolack</strong>,<br />
                  <strong>full stack developer</strong>
                </h2>
                <p>
                  Hello there! I’m a young man with 24 years old that is
                  finishing his studies in software engineer at the house of
                  studies Duoc UC, located in Santiago of Chile; yes, I’m from
                  Chile. I’ve been coding since 2019, that’s when I met this
                  beautiful world. In this moment I focus in keep improving my
                  full stack skills.
                </p>
                <p>
                  About my laboral experience, I had a job for three months in a
                  chilean start up called Tyne, which is focused to eliminate
                  queues of customers from restaurants. I was performing tasks
                  about development with Angular and Fast API, a framework web
                  of Python. After that, I started a new position at Falabella
                  Technology and today my position is associated software
                  engineer. At present I development support tasks with Ruby and
                  developments with ReactJS.{" "}
                </p>
                <p>
                  I have several hobbies, among them, study, the feeling of
                  acquiring more knowledge satisfies me, so my next steps will
                  learn more about Node JS and his tools, and cloud services.
                  Other passions of mine are videogames, but single players
                  games because I enjoy a good history in solitaire. And
                  finally, but the most important, I love spend time with my
                  girlfriend, everything is more beautiful with her, she is the
                  greatest blessing God gave me.
                </p>
                <p>
                  Well, thanks for reading. I invite you to download my resume
                  to learn more about my background. My best regards!
                </p>
                <div className="btn-curriculum">
                  <button
                    className="btn"
                    onClick={() =>
                      handleDownload(
                        "www.rolackdev.com/curriculum.pdf",
                        "curriculum.pdf"
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

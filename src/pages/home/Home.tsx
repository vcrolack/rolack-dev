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
                  <strong>Senior Full Stack Developer</strong>
                </h2>
                <p className="p-about-me">
                  I am a Senior Full Stack Developer with 5 years of experience
                  designing and implementing robust, scalable, and future-proof
                  software solutions. My development philosophy rests on a
                  simple premise: software shouldn't just work today; it must be
                  mature and resilient enough to scale long-term without
                  introducing technical debt.
                </p>

                <p className="p-about-me">
                  Throughout my career—navigating the fast-paced environment of
                  startups to the high-stakes demands of major retail
                  corporations—I have honed an approach focused on Clean
                  Architecture, solid design patterns, and the Single
                  Responsibility Principle. I firmly believe that high-quality
                  code is inherently testable, features flawless error handling,
                  and prioritizes long-term maintainability.
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

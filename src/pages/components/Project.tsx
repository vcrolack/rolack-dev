import React from "react";
import { Title } from "./Title";
import { Text } from "./Text";
import { StackLogo } from "./StackLogo";

export const Project = ({
  githubUrl,
  name,
  description,
  img,
  stack,
  urlDeployed,
}) => {
  return (
    <div className="project-card">
      <div id="container-detail-project-card" className="project-card-detail">
        <div className="container-img-project">
          <img src={img} alt="An  about the project" />
        </div>
        <div className="info-project">
          <div className="container-title">
            <Title text={name} />
          </div>
          <div className="description">
            <Text text={description} />
            {stack && (
              <div className="stack-project">
                {stack.map((logo, index) => (
                  <StackLogo
                    key={index}
                    logo={logo}
                    width="30px"
                    height="30px"
                  />
                ))}
              </div>
            )}
          </div>

          <section className="project-actions">
            <div className="btn-container">
              {urlDeployed && (
                <a
                  rel="noopener noreferrer"
                  className="text-button"
                  target="_blank"
                  href={urlDeployed}
                >
                  deployed site
                </a>
              )}

              <a rel="noopener noreferrer" target="_blank" href={githubUrl}>
                <button className="btn">View source code</button>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

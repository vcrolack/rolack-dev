import React from "react";
import { Banner } from "../components/Banner";
import { Project } from "../components/Project";
import { bannerHome } from "./../../assets/img";
import { projects } from "./projects";

export const Portfolio = () => {
  return (
    <div className="container">
      <Banner image={bannerHome} />
      <div className="container-section-title">
        <h2 classname="title-section">P O R T F O L I O</h2>
      </div>
      <section id="projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              githubUrl={project.githubUrl}
              name={project.name}
              description={project.description}
              img={project.img}
            />
          );
        })}
      </section>
    </div>
  );
};

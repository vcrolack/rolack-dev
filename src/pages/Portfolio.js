import React from "react";
import { Banner } from "./components/Banner";
import { Project } from "./components/Project";
import banner from "./../assets/img/banner/banner-home.jpg";
import freeMovies from "./../assets/img/projects/free_movies.png";
import cesfamBackend from "./../assets/img/projects/cesfam_backend.png";

export const Portfolio = () => {
  const projects = [
    {
      name: "Free Movies",
      description:
        "It's a simple project build in React for practice my state manegement. You can create a list of movies with his description, and all them will save on local storage.",
      img: freeMovies,
      githubUrl: "https://github.com/vcrolack/Free-movies",
    },
    {
      name: "Cesfam backend",
      description:
        "It's a project build in Fast API for a university project. Is for a simulation of a health center, so you can save information in a MySql database and consult these information.",
      img: cesfamBackend,
      githubUrl: "https://github.com/vcrolack/farmacia-cesfam-backend",
    },
  ];

  return (
    <div className="container">
      <Banner image={banner} />
      <div className="container-section-title">
        <h2 classname="title-section">Portfolio</h2>
      </div>
      <section id="projects">
        {projects.map((project, index) => {
          return (
            <Project
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

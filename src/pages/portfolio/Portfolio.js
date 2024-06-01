import React, { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { Project } from "../components/Project";
import { bannerHome } from "./../../assets/img";
import { projects, areas as filters } from "./projects";



export const Portfolio = () => {

  const [activeFilter, setActiveFilter] = useState(filters.All);
  const [projectsFiltered, setProjectsFiltered] = useState([projects]);

  useEffect(() => {
    const filtered = projects.filter((project) => project.area === activeFilter || activeFilter === filters.All);
    setProjectsFiltered(filtered);
  }, [activeFilter]);

  const handleFilter = (filter) => setActiveFilter(filter);

  return (
    <div className="container">
      <Banner image={bannerHome} />
      <div className="container-section-title">
        <h2 className="title-section">P O R T F O L I O</h2>
        <div className="projects-filter">
          <p onClick={() => handleFilter(filters.All)} className={`filter-buttons ${ activeFilter === filters.All ? 'active' : '' }`}>All</p>
          <p onClick={() => handleFilter(filters.Frontend)} className={`filter-buttons ${ activeFilter === filters.Frontend ? 'active' : '' }`}>Front-end</p>
          <p onClick={() => handleFilter(filters.Backend)} className={`filter-buttons ${ activeFilter === filters.Backend ? 'active' : '' }`}>Back-end</p>
          <p onClick={() => handleFilter(filters.Others)} className={`filter-buttons ${ activeFilter === filters.Others ? 'active' : '' }`}>Others</p>
        </div>
      </div>
      <section id="projects">
        {projectsFiltered.map((project, index) => {
          return (
            <Project
              key={index}
              githubUrl={project.githubUrl}
              name={project.name}
              description={project.description}
              img={project.img}
              stack={project.stack}
            />
          );
        })}
      </section>
    </div>
  );
};

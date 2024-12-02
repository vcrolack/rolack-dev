import React from "react";
import { StackLogo } from "@components/";

export const ExperienceCard = React.forwardRef(
  ({ experience, isActive }, ref) => {
    return (
      <div
        ref={ref}
        id={`experience-card-${experience.id}`}
        className={`card card-experience ${
          isActive ? "active-experience" : ""
        }`}
      >
        <div className="workplace-image">
          <img src={experience.logo} alt={`${experience.company} logo`} />
        </div>
        <div className="experience-content">
          <div className="experience-company">
            <p> {experience.company} </p>
          </div>
          <p className="experience-role">
            {" "}
            <strong>Position</strong> {experience.role}{" "}
          </p>
          <div className="experience-description">
            <strong>Job description</strong>
            <p> {experience.taskDescription} </p>
          </div>
          <p>
            {" "}
            <strong>Started in</strong> {experience.startDate}{" "}
          </p>
          {experience.endDate && (
            <p>
              {" "}
              <strong>Ended in</strong> {experience.endDate}{" "}
            </p>
          )}
          <div className="container-experience-technologies">
            <strong>Technologies used</strong>
            <div className="experience-technologies">
              {experience.technologies.map((tech, index) => (
                <StackLogo width="40px" height="40px" key={index} logo={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

import React, { useEffect } from "react";
import { CompanyExperience } from "../../../interfaces/company-experience";
import { CompanyCard } from "./company-card";
import { NodeMarker } from "./node-maker";

interface TimelineProps {
  companies: CompanyExperience[];
}

export const Timeline: React.FC<TimelineProps> = ({ companies }) => {
  useEffect(() => {
    console.log(companies);
  });
  return (
    <section className="xp__timeline" aria-label="Experiencia cronológica">
      <div className="xp__line" aria-hidden="true" />
      {companies.map((company, i) => {
        const side = i % 2 === 0 ? "left" : "right"; // alterna lados en desktop
        return (
          <div key={company.id} className={`xp__row xp__row--${side}`}>
            <CompanyCard company={company} />
            <NodeMarker />
          </div>
        );
      })}
    </section>
  );
};

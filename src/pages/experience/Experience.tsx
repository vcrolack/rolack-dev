import React from "react";
import { Banner, Title } from "../../components";
import { bannerHome } from "../../assets/img";
import { Timeline } from "./components/timeline";
import { EXPERIENCE } from "./data/experience.data";

export const Experience: React.FC = () => {
  return (
    <section className="container">
      <Banner image={bannerHome} />
      <div className="container-title">
        <Title text="E X P E R I E N C E" />
      </div>
      <div className="">
        <Timeline companies={EXPERIENCE} />
      </div>
    </section>
  );
};

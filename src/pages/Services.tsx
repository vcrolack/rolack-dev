import React from "react";

import { bannerHome } from "../assets/img";
import { ReactLogo, Django } from "../assets/stackLogos";
import { Banner, Service } from "@components/";

export const Services = () => {
  const frontList = [
    "High fidelity mockups",
    "Programming interfaces",
    "Creat a great experience",
  ];
  const backList = ["API rest", "Database model", "Authentication service"];
  return (
    <div className="container">
      <Banner image={bannerHome} />
      <div className="container-title">
        <h2>S E R V I C E S</h2>
      </div>
      <section id="services">
        <Service
          type={"Front-end"}
          description={
            "In the front-end area I have skills from the design of the application to its programming. To design I use Adobe XD to create high fidelity mockups. To bring the application to life, I use ReactJS library to create a user-friendly interface and an unforgettable user experience. For styling I use Bootstrap and SCSS to create eye-catching and pleasant interfaces."
          }
          icon={ReactLogo}
          list={frontList}
        />
        <Service
          type={"Back-end"}
          description={
            "In the back-end area I am skilled in the development of a rest API with database modeling for engines such as MySQL and SQL Server with different tools, such as Express, Django and Fast API."
          }
          icon={Django}
          list={backList}
        />
      </section>
    </div>
  );
};

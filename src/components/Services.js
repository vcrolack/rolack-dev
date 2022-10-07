import React from "react";
import banner from "../assets/img/banner/banner-home.jpg";
import ReactLogo from "../assets/stackLogos/ReactLogo.svg";
import Django from "../assets/stackLogos/Django.svg";
import { Banner } from "./layout/Banner";
import { Service } from "./layout/Service";

export const Services = () => {
  return (
    <div className="container">
      <Banner image={banner} />
      <div className="container-title">
        <h2>Services</h2>
      </div>
      <section id="services">
        <Service
          type={"Front-end"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet nisl tempor, semper est non, iaculis orci. Aliquam erat volutpat. Fusce efficitur dui vel diam ultrices luctus. Pellentesque iaculis vulputate augue, vitae fringilla est. Fusce et risus pharetra, euismod turpis a, volutpat est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vestibulum tellus eget finibus placerat. Pellentesque ut dignissim nisi, non interdum diam. "
          }
          icon={ReactLogo}
        />
        <Service
          type={"Back-end"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet nisl tempor, semper est non, iaculis orci. Aliquam erat volutpat. Fusce efficitur dui vel diam ultrices luctus. Pellentesque iaculis vulputate augue, vitae fringilla est. Fusce et risus pharetra, euismod turpis a, volutpat est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vestibulum tellus eget finibus placerat. Pellentesque ut dignissim nisi, non interdum diam. "
          }
          icon={Django}
        />
      </section>
    </div>
  );
};

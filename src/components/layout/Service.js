import React from "react";

export const Service = ({ type, description, icon }) => {
  return (
    <div className="service-container">
      <div className="container-left-block">
        <div className="container-title">
          <h2>{type}</h2>
        </div>
        <div className="container-logo">
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="container-right-block">
        <div className="description-service">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

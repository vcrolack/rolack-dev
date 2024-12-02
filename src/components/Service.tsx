import React from "react";

interface ServiceProps {
  type: string;
  description: string;
  icon: string;
  list: string[];
}

export const Service: React.FC<ServiceProps> = ({
  type,
  description,
  icon,
  list,
}) => {
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
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
      </div>
    </div>
  );
};

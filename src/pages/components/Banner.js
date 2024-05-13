import React from "react";

export const Banner = ({ image }) => {
  return (
    <>
      <div className="container-banner">
        <img src={image} alt="An something" />
      </div>
    </>
  );
};

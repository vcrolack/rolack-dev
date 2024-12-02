import React from "react";

interface BannerProps {
  image: string;
}

export const Banner: React.FC<BannerProps> = ({ image }) => {
  return (
    <>
      <div className="container-banner">
        <img src={image} alt="An something" />
      </div>
    </>
  );
};

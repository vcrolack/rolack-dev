import React from "react";

export const StackLogo = ({ logo, page, width='70px', height='70px' }) => {
  return (
    <div className="stack-logo" style={{width, height}}>
      { page ? (
        <a target="_blank" href={page}>
          <img src={logo} alt="It's a logo." />
        </a>
      ) : (
        <img src={logo} alt="It's a logo." />
      )}
    </div>
  );
};

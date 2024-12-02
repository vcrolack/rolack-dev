import React from "react";

interface StackLogoProps {
  logo: string;
  page?: string | null | undefined;
  width?: string;
  height?: string;
}

export const StackLogo: React.FC<StackLogoProps> = ({
  logo,
  page,
  width = "70px",
  height = "70px",
}) => {
  return (
    <div className="stack-logo" style={{ width, height }}>
      {page ? (
        <a rel="noopener noreferrer" target="_blank" href={page}>
          <img src={logo} alt="It's a logo." />
        </a>
      ) : (
        <img src={logo} alt="It's a logo." />
      )}
    </div>
  );
};

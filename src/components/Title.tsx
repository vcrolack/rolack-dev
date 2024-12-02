import React from "react";

interface TitleProps {
  text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <>
      <p className="font-size-title">{text}</p>
    </>
  );
};

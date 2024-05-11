import React from "react";
import { TypeScript } from "../../../assets/stackLogos";
import { StackLogo } from "../../components";

export const Tools = () => {
  return (
    <>
      <h2>Tools</h2>
      <div className="container-stack-imgs">
        <div className="front-end">
          <StackLogo logo={TypeScript} page="https://www.typescriptlang.org/" />
        </div>
      </div>
    </>
  );
};

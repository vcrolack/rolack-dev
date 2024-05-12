import React from "react";
import { Figma, Git, Jira, Postman, VSCode, XD } from "../../../assets/stackLogos";
import { StackLogo } from "../../components";

export const Tools = () => {

  const stack = [
    {logo: VSCode, page: "https://code.visualstudio.com/"},
    {logo: Postman, page: "https://www.postman.com/"},
    {logo: Figma, page: "https://www.figma.com/"},
    {logo: XD, page: "https://helpx.adobe.com/es/xd/get-started.html"},
    {logo: Jira, page: "https://www.atlassian.com/software/jira"},
    {logo: Git, page: "https://git-scm.com/"},
  ]

  return (
    <>
      <h2>Tools</h2>
      <div className="container-stack-imgs">
        <div className="front-end">
          { stack.map(tech => (<StackLogo logo={tech.logo} page={tech.page} />)) }
        </div>
      </div>
    </>
  );
};

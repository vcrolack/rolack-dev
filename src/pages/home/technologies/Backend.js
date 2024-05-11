import React from "react";

import { Python, Django, MySQL, SQLServer, NodeJS } from "../../../assets/stackLogos";
import { StackLogo } from "../../components";

export const Backend = () => {
  return (
    <>
      <h2>Back-end</h2>
      <div className="container-stack-imgs">
        <div className="back-end">
          <StackLogo logo={Python} page="https://www.python.org/" />
          <StackLogo logo={Django} page="https://www.djangoproject.com/" />
          <StackLogo logo={MySQL} page="https://www.mysql.com/" />
          <StackLogo
            logo={SQLServer}
            page="microsoft.com/en-us/sql-server/sql-server-downloads"
          />
          <StackLogo logo={NodeJS} page="https://nodejs.org/en/" />
        </div>
      </div>
    </>
  );
};

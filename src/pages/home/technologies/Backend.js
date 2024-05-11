import React from "react";

import { 
  Python,
  Django, 
  MySQL, 
  SQLServer, 
  NodeJS,
  NestJS,
  ExpressJS,
  FastAPI,
  SocketIO,
  PostgreSQL,
  MongoDB,
  GraphQL,
  Docker,
  Firebase,
  AWS,
  TypeScript,
} from "../../../assets/stackLogos";
import { StackLogo } from "../../components";

export const Backend = () => {

  const stack = [
    {logo: NodeJS, page: "https://nodejs.org/en/"},
    {logo: ExpressJS, page: "https://expressjs.com/"},
    {logo: NestJS, page: "https://nestjs.com/"},
    {logo: Python, page: "https://www.python.org/"},
    {logo: FastAPI, page: "https://fastapi.tiangolo.com/"},
    {logo: Django, page: "https://www.djangoproject.com/"},
    {logo: MySQL, page: "https://www.mysql.com/"},
    {logo: SQLServer, page: "microsoft.com/en-us/sql-server/sql-server-downloads"},
    {logo: PostgreSQL, page: "https://www.postgresql.org/"},
    {logo: MongoDB, page: "https://www.mongodb.com/"},
    {logo: AWS, page: "https://aws.amazon.com/es/"},
    {logo: Firebase, page: "https://firebase.google.com/?hl=es-419"},
    {logo: GraphQL, page: "https://graphql.org/"},
    {logo: Docker, page: "https://www.docker.com/"},
    {logo: SocketIO, page: "https://socket.io/"},
  ]

  return (
    <>
      <h2>Back-end</h2>
      <div className="container-stack-imgs">
        <div className="back-end">
          { stack.map(tech => (<StackLogo logo={tech.logo} page={tech.page} /> )) }
        </div>
      </div>
    </>
  );
};

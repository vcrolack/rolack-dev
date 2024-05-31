import { Tyne, FTC, Amaris } from "../../../assets/img";
import {
  Angular,
  Azure,
  FastAPI,
  JavaScript,
  MongoDB,
  PostgreSQL,
  Python,
  ReactLogo,
  SQLServer,
  Sass,
  TypeScript,
  Zod,
} from "../../../assets/stackLogos";

export const experienceData = [
  {
    id: 1,
    company: "Tyne",
    role: "Full Stack developer",
    taskDescription:
      "I had the opportunity to work at an early-stage startup, contributing to the development of a web application built with Angular, FastAPI, and PostgreSQL, currently deployed on Heroku. Agile methodology is followed to achieve tasks and objectives.\n It has been a great experience to learn technical skills and to understand how a startup with an amazing proposal operates.",
    technologies: [TypeScript, Angular, Sass, Python, FastAPI, PostgreSQL],
    startDate: "2022 Mar",
    endDate: "2022 May",
    logo: Tyne,
  },
  {
    id: 2,
    company: "Falabella Tecnología Corporativa",
    role: "Associated Software Engineer",
    taskDescription:
      "I work in a team governed by agile methodology, aiming to provide comfort to our sellers through code. I have performed support and development tasks, among which I highlight the migration of a static website built with legacy technologies, such as jQuery, to React.",
    technologies: [JavaScript, ReactLogo, Sass, SQLServer, MongoDB, Azure],
    startDate: "2022 Jan",
    endDate: "2024 May",
    logo: FTC,
  },
  {
    id: 3,
    company: "Amaris",
    role: "Consultant",
    taskDescription:
      "SOON...",
    technologies: [ ReactLogo, Sass, TypeScript, Zod ],
    startDate: "2024 may",
    endDate: "Present",
    logo: Amaris,
  },
];

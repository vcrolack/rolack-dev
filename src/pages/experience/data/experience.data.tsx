import { Amaris, FTC, Tyne } from "../../../assets/img";
import {
  Angular,
  Docker,
  FastAPI,
  Gcp,
  Git,
  JavaScript,
  Jira,
  MongoDB,
  NestJS,
  NodeJS,
  PostgreSQL,
  ReactLogo,
  Redux,
  Sass,
  TanStack,
  TypeScript,
  Ubuntu,
  Wordpress,
} from "../../../assets/stackLogos";
import { CompanyExperience } from "../../../interfaces/company-experience";

export const EXPERIENCE: CompanyExperience[] = [
  {
    id: "amaris",
    company: "Amaris Consulting",
    website: "https://amaris.com/",
    logoUrl: Amaris,
    location: "Remote / LATAM",
    roles: [
      {
        id: "amaris-consultant",
        title: "Senior Consultant",
        start: "2026-06",
        description: ["As a Senior Consultant, my focus evolved toward the consolidation, maintenance, and scalability of technical solutions, acting as a technical point of contact within the client’s ecosystem, particularly in Frontend development."],
        stack: [Angular, NestJS, TypeScript, Sass],
      },
      {
        id: "amaris-experienced",
        title: "Experienced Consultant",
        start: "2025-06",
        end: "2026-06",
        description: [
          "As an Experienced Consultant, my focus evolved toward the consolidation, maintenance, and scalability of technical solutions, acting as a technical point of contact within the client’s ecosystem, particularly in Frontend development.",
          <h3>Responsibilities & Impact:</h3>,
          <>
            <strong>Architectural Evolution & Implementation:</strong>{" "}
            Responsible for defining and establishing technical guidelines
            within the existing Microfrontends ecosystem. I designed and
            implemented software design patterns (such as the Facade Pattern and
            Strategy Pattern) to enable a Cross-Country architecture, allowing
            multiple business contexts to share code in a clean, decoupled, and
            efficient manner while ensuring these guidelines are maintained
            day-to-day.
          </>,
          <>
            <strong>Code Quality & Resilience:</strong> Ensuring application
            robustness through the rigorous application of design patterns,
            modularity, and mature error handling, guaranteeing that the
            software is highly testable and maintainable in the long run.
          </>,
          <>
            <strong>Technical Enabler & Support:</strong> Actively assisting
            other development teams in resolving complex technical issues and
            explaining the system architecture at a high level, facilitating a
            smooth and unified adoption of the tech stack.
          </>,
          <>
            <strong>Key Technologies:</strong> NestJS, TypeScript, Angular,
            Microfrontends Architecture, Design Patterns (Facade, Strategy),
            Clean Code.
          </>,
        ],
        stack: [Angular, NestJS, TypeScript, Sass],
      },
      {
        id: "amaris-consultant",
        title: "Consultant",
        start: "2024-05",
        end: "2025-06",
        description: [
          "I work as a technology consultant at Amaris Consulting, delivering innovative solutions that bring value to our clients’ businesses. I have experience in both Front-end and Back-end development, easily adapting to the required technology stack and collaborating in Agile teams.",
          "A notable achievement has been driving the implementation of a microfrontends-based approach. I conducted the spike, the proof of concept (PoC), and the initial implementation, using cutting-edge technologies like Vite and Single SPA to orchestrate multiple decoupled applications. This allowed the business to split its UI into independent applications, enabling teams to develop and deploy their own front-end solutions efficiently while promoting independence and agility.",
        ],
        stack: [
          ReactLogo,
          NestJS,
          NodeJS,
          Sass,
          Redux,
          TypeScript,
          Angular,
          TanStack,
          PostgreSQL,
          MongoDB,
          Docker,
          Git,
          Jira,
        ],
      },
    ],
  },
  {
    id: "falabella",
    company: "Falabella Tecnología Corporativa",
    logoUrl: FTC,
    website: "https://investors.grupofalabella.com/",
    location: "Remote / LATAM",
    roles: [
      {
        id: "associated-engineer",
        title: "Associated Software Engineer",
        start: "2022-08",
        end: "2024-05",
        description: [
          " work as part of a team governed by the Agile methodology, striving to enhance our sellers’ experience through code. I have undertaken both support and development tasks, highlighting the migration of a static website built with legacy technologies, such as jQuery, to React.",
        ],
        stack: [Gcp, ReactLogo, NodeJS, JavaScript, Docker, Git, Jira],
      },
      {
        id: "trainee",
        title: "Trainee IT",
        start: "2022-04",
        end: "2022-08",
        description: [],
        stack: [ReactLogo, Sass, JavaScript, NodeJS],
      },
      {
        id: "intern",
        title: "Software Developer Intern",
        start: "2022-01",
        end: "2022-03",
        description: [
          "I worked alongside a development team following the Agile methodology on the frontend of a support web application for Sodimac. I used HTML, CSS, JavaScript with its React library, and the Sass preprocessor. I developed using Visual Studio Code in a test environment where all the team’s Merge Requests were applied. Additionally, I used Postman to verify and test various endpoints from which I retrieved or sent information.",
        ],
        stack: [ReactLogo, JavaScript, Sass, Git, Jira, NodeJS],
      },
    ],
  },
  {
    id: "tyne",
    company: "Tyne",
    logoUrl: Tyne,
    website: "https://tyne.cl/",
    location: "Remote / LATAM",
    roles: [
      {
        id: "software-developer",
        title: "Software Developer",
        start: "2022-03",
        end: "2022-05",
        description: [
          "I had the opportunity to work at an early-stage startup, contributing to the development of a web application built with Angular, FastAPI, and PostgreSQL, currently deployed on Heroku. Agile methodology is followed to achieve tasks and objectives. It was a great experience to enhance my technical skills and learn how a startup operates with an amazing value proposition.",
        ],
        stack: [
          Angular,
          FastAPI,
          PostgreSQL,
          Docker,
          Git,
          Jira,
          TypeScript,
          Sass,
          NodeJS,
        ],
      },
    ],
  },
  {
    id: "freelance",
    company: "Freelance",
    logoUrl: "",
    website: "https://www.linkedin.com/in/rolack-victor/",
    location: "Remote / LATAM",
    roles: [
      {
        id: "freelance-developer",
        title: "Freelance Developer",
        start: "2020-01",
        end: "2022-03",
        description: [
          "I developed websites in WordPress for small businesses and non-profit organizations, such as Climant (a climate control SME) and Iglesia Bautista Eben Ezer (Eben Ezer Baptist Church)",
        ],
        stack: [Wordpress, Ubuntu],
      },
    ],
  },
];

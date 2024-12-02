import {
  ayudaPeluda,
  cesfamBackendHd,
  freeMoviesHd,
  hdyf,
  rolachin,
} from "../../assets/img";
import {
  FastAPI,
  MySQL,
  NodeJS,
  Python,
  ReactLogo,
  TypeScript,
  DiscordJS,
  Html5,
  Css,
  Bootstrap,
  Tailwind,
  Firebase,
  TanStack,
} from "../../assets/stackLogos";

export const areas = {
  All: "All",
  Frontend: "Front-end",
  Backend: "Back-end",
  Others: "Others",
};

export const projects = [
  {
    name: "How do you feel?",
    area: areas.Frontend,
    description:
      "It’s a project built with React and TypeScript, styled using Tailwind CSS. Its objective is to track your mood by adding details such as emotions, timestamps, and descriptions about how you’re feeling. The project is also integrated with Firebase for authentication and uses Firestore to store your entries securely.",
    img: hdyf,
    githubUrl: "https://github.com/vcrolack/hdyf",
    urlDeployed: "https://hdufeel.netlify.app",
    stack: [ReactLogo, TypeScript, Tailwind, TanStack, Firebase],
  },
  {
    name: "Rolachin",
    area: areas.Others,
    description:
      "It's a project build in TypeScript, Discord.js and Discord Player for a Discord bot. It's a music bot with features like play, skip, queue and others. I use Docker to create an production image.",
    img: rolachin,
    githubUrl: "https://github.com/vcrolack/rolachin",
    stack: [TypeScript, NodeJS, DiscordJS],
  },
  {
    name: "Free Movies",
    area: areas.Frontend,
    description:
      "It's a simple project build in React for practice my state manegement. You can create a list of movies with his description, and all them will save on local storage.",
    img: freeMoviesHd,
    githubUrl: "https://github.com/vcrolack/Free-movies",
    stack: [ReactLogo],
  },
  {
    name: "Cesfam backend",
    area: areas.Backend,
    description:
      "It's a project build in Fast API for a university project. Is for a simulation of a health center, so you can save information in a MySql database and consult these information.",
    img: cesfamBackendHd,
    githubUrl: "https://github.com/vcrolack/farmacia-cesfam-backend",
    stack: [Python, FastAPI, MySQL],
  },
  {
    name: "Adopta un peludo",
    area: areas.Frontend,
    description:
      "It's a project build in HTML, CSS and a framework called Bootstrap 5 for a practice design. It's a landing page for a pet adoption center, only for dogs and cats.",
    img: ayudaPeluda,
    githubUrl: "https://github.com/vcrolack/AyudaPeluda",
    stack: [Html5, Css, Bootstrap],
  },
];

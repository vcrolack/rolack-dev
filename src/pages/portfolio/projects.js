import { cesfamBackend, freeMovies } from "../../assets/img";

export const projects = [
  {
    name: "Free Movies",
    description:
      "It's a simple project build in React for practice my state manegement. You can create a list of movies with his description, and all them will save on local storage.",
    img: freeMovies,
    githubUrl: "https://github.com/vcrolack/Free-movies",
  },
  {
    name: "Cesfam backend",
    description:
      "It's a project build in Fast API for a university project. Is for a simulation of a health center, so you can save information in a MySql database and consult these information.",
    img: cesfamBackend,
    githubUrl: "https://github.com/vcrolack/farmacia-cesfam-backend",
  },
];

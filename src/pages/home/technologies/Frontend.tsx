import {
  TypeScript,
  Sass,
  ReactLogo,
  Bootstrap,
  Angular,
  Redux,
  Dart,
  Flutter,
  Html5,
  Css,
  JavaScript,
  Tailwind,
  Swift,
} from "../../../assets/stackLogos";
import { StackLogo } from "@components/";
import { Stack } from "../../../interfaces/stack";

export const Frontend = () => {
  const stack: Stack[] = [
    {
      logo: Html5,
      page: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    },
    { logo: Css, page: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    {
      logo: JavaScript,
      page: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { logo: TypeScript, page: "https://www.typescriptlang.org/" },
    { logo: Sass, page: "https://sass-lang.com/page/" },
    { logo: ReactLogo, page: "https://reactjs.org/" },
    { logo: Angular, page: "https://angular.io/" },
    { logo: Bootstrap, page: "https://getbootstrap.com/" },
    { logo: Tailwind, page: "https://v2.tailwindcss.com/" },
    { logo: Redux, page: "https://redux.js.org/" },
    { logo: Dart, page: "https://dart.dev/" },
    { logo: Flutter, page: "https://flutter.dev/" },
    { logo: Swift, page: "https://developer.apple.com/swift/" },
  ];

  return (
    <>
      <h2>Front-end</h2>
      <div className="container-stack-imgs">
        <div className="front-end">
          {stack.map((tech, index) => (
            <StackLogo key={index} logo={tech.logo} page={tech.page} />
          ))}
        </div>
      </div>
    </>
  );
};

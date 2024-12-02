import React from "react";

import { Title } from "@components/";
import { Frontend, Backend, Tools } from ".";

export const Technologies = () => {
  return (
    <section id="my-stack">
      <div className="container-title">
        <Title text="MY STACK" />
      </div>
      <div id="technologies" className="container-stack">
        <Frontend />

        <Backend />

        <Tools />
      </div>
    </section>
  );
};

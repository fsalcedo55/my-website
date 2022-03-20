import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

export default function LandingPage() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

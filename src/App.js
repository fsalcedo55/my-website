import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import { ArrowNarrowDownIcon } from "@heroicons/react/outline";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-gradient-to-t from-[#0D2840] to-[#0D0903]">
      <div className="text-indigo-500 2xl:opacity-75 lg:opacity-75 md:opacity-75 opacity-0 z-0">
        <div className="fixed bottom-7 left-1.5">
          <div className="flex flex-col items-center">
            <h1 className="rotate-90 font-mono text-xs mx-2 my-6">scroll</h1>
            <ArrowNarrowDownIcon className="w-5 animate-bounce " />
          </div>
        </div>
        <div className="fixed bottom-7 right-1.5">
          <div className="flex flex-col items-center">
            <h1 className="rotate-90 font-mono text-xs mx-2 my-6">scroll</h1>
            <ArrowNarrowDownIcon className="w-5 animate-bounce" />
          </div>
        </div>
      </div>
      <section id="home">
        <Navbar />
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
        <Route path="contact" element={<Contact />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

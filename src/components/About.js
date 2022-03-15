import React from "react";

export default function About() {
  return (
    <section className="text-gray-600" id="About">
      <h1 className="flex justify-center 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-16 font-mono h-20 items-center">
        About Me
      </h1>
      <div className="container px-5 py-6 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/about-banner.png"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full rounded-full"
                  src="/images/Fernando-Salcedo.jpg"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-200 text-lg">
                  Fernando Salcedo
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-gray-500">Full-Stack Developer</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-md mb-4 text-gray-200 font-extralight">
                As an architect-turned-web-developer, I’ve always sought
                innovation.
                <br /> <br /> While pursuing my degree in architecture from
                Florida International University, I discovered my passion for
                programming after studying the influence of artificial
                intelligence on architectural design. Through further
                exploration and GANs programming, I developed a program that
                utilized webcam imagery to render objects into architectural
                images.
                <br /> <br /> This experience, combined with my desire to create
                innovative digital products, pushed me to enroll in the Ironhack
                Full-Stack Development Bootcamp. Here, I deepened my knowledge
                of JavaScript and MERN and was also the 2021 recipient of the
                Ironhack Final Project Crowd Favorite Award.
                <br /> <br />
                Since 2016, I’ve led a successful architecture career in which
                my dedication, strong team skills, and design talent have earned
                me the role of Lead Project Architect on multi-million dollar
                projects. I vow to bring these same qualities to every project I
                take on as I pursue this new future in blockchain, Web3, and web
                development. <br /> <br /> I am well-versed in a multitude of
                web technologies including Javascript, React, Express, MongoDB,
                HTML, CSS, and Tailwind.
              </p>
              {/* <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

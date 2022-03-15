import React from "react";

export default function Home() {
  return (
    <section className="font-mono flex-grow">
      <div className="container mx-auto 2xl:my-48 xl:my-48 lg:my-48 md:my-16 sm:my-8 my-4 flex px-5 flex-row items-center">
        <div className="max-w-2xl mx-8">
          <div className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-xl text-lg font-thin text-gray-400 py-2">
            👋🏼 Hello, my name is
          </div>
          <div className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Fernando Salcedo.
          </div>
          <div className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl text-4xl font-semibold text-gray-400">
            I like to build things.
          </div>
          <div className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-xl text-lg font-extralight text-gray-400 py-4">
            I'm an architect turned full-stack developer who is passionate about
            building excellent products for people.
          </div>
        </div>
        <div className="relative">
          <div className="absolute 2xl:-top-48 2xl:-left-72 xl:-top-48 xl:-left-72 lg:-top-48 lg:-left-72 md:-top-24 md:-left-96 -top-16 -left-72 lg:w-96 lg:h-96 md:w-48 md:h-48 w-24 h-24 bg-purple-500 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob"></div>
          <div className="absolute 2xl:-top-32 2xl:-left-96 xl:-top-32 xl:-left-96 lg:-top-32 lg:-left-96 md:-top-32 md:-left-80 -top-11 -left-64 lg:w-96 lg:h-96 md:w-48 md:h-48 w-24 h-24 bg-indigo-500 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute 2xl:-top-48 2xl:-left-64 xl:-top-48 xl:-left-64 lg:-top-48 lg:-left-64 md:-top-24 md:-left-96 -top-14 -left-64 lg:w-96 lg:h-96 md:w-48 md:h-48 w-24 h-24 bg-pink-500 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </section>
  );
}

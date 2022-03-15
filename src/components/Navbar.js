import React from "react";
import linkData from "../data/linkData.js";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

export default function Navbar() {
  return (
    <header className="text-white font-mono bg-transparent items-center">
      <div className="container mx-auto flex flex-wrap p-5 lg:flex-row flex-col items-center">
        <span className="flex title-font font-medium items-center text-gray-100 mb-4">
          <img
            className="inline-block rounded-full ring ring-white w-12 h-12"
            src="/images/Fernando-Salcedo.jpg"
            alt="Fernando Salcedo"
          />
          <Link to="/" className="ml-3 md:ml-3 text-xl">
            Fernando Salcedo
          </Link>
        </span>
        <nav className="lg:ml-auto flex flex-wrap items-center text-base justify-center gap-4">
          {linkData.map((link) => {
            return (
              <a
                href={link.url}
                key={link.id}
                className="hover:text-indigo-500"
              >
                {link.text}
              </a>
            );
          })}
        </nav>
        <ExternalLink href="https://drive.google.com/file/d/1lxKrVTcUIO6DtyJHDidEdDJnINmbbbmi/view?usp=sharing">
          <button className="inline-flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500 rounded text-base ml-4 lg:mt-0 md:mt-4 sm:mt-4 mt-4">
            Resume
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </ExternalLink>
      </div>
    </header>
  );
}

import React from "react"
import linkData from "../data/linkData.js"
import { Link } from "react-router-dom"
import { ExternalLink } from "react-external-link"

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-center font-mono text-white h-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="tracking-widest">Open To Work</h1>
      </div>
      <header className="items-center font-mono text-white bg-transparent">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto lg:flex-row">
          <span className="flex items-center mb-4 font-medium text-gray-100 title-font">
            <img
              className="inline-block w-12 h-12 rounded-full ring ring-white"
              src="/images/Fernando-Salcedo.jpg"
              alt="Fernando Salcedo"
            />
            <Link to="/" className="ml-3 text-xl md:ml-3">
              Fernando Salcedo
            </Link>
          </span>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-base lg:ml-auto">
            {linkData.map((link) => {
              return (
                <a
                  href={link.url}
                  key={link.id}
                  className="hover:text-indigo-500"
                >
                  {link.text}
                </a>
              )
            })}
          </nav>
          <ExternalLink href="https://1drv.ms/b/s!ArI3KfOUdbmMxFRKaYd7bBumnOzm?e=rYOhOp">
            <button className="inline-flex items-center px-3 py-1 mt-4 ml-4 text-base border-0 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:outline-none hover:bg-indigo-500 lg:mt-0 md:mt-4 sm:mt-4">
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
    </div>
  )
}

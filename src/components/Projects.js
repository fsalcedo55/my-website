import { React } from "react"
import projectsData from "../data/projectsData"
import { UsersIcon, ArrowSmRightIcon } from "@heroicons/react/outline"
import { ExternalLink } from "react-external-link"
import { Routes, Route, Link } from "react-router-dom"
import ProjectDetailView from "./ProjectDetailView"

export default function Projects() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-16 font-mono h-20 items-center">
        <p>Selected Projects</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mx-5 my-6 place-self-center md:place-self-center sm:place-self-center z-50 overflow-x-auto max-w-6xl p-4">
        {projectsData.map((project) => (
          /* Card starts here */
          <Link
            key={project.id}
            to={`/project-detail/${project.id}`}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0 })
            }}
          >
            <div className="flex flex-col bg-[#e6e4e310] shadow-lg rounded-lg w-5rem lg:w-[20rem] border border-gray-600 transform transition duration-500 hover:scale-105">
              <img
                className="object-cover object-center w-full h-56 rounded-t-lg"
                src={project.photo}
                alt="avatar"
              />

              <div className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-900">
                <h1 className="text-lg font-semibold text-gray-200 font-mono">
                  {project.name}
                </h1>
              </div>

              <div className="px-2 sm:px-4 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-2">
                <p className="py-2 text-gray-200 text-xs h-26 sm:h-26 md:h-26 lg:h-28 xl:h-28 2xl:h-24 mb-2">
                  {project.description}
                </p>
                <div className="self-end h-24">
                  <div className="flex max-w-fit items-center my-2 text-gray-200">
                    {/* <CollectionIcon className="w-5 h-5" /> */}

                    <div className="text-xs gap-1 truncate flex flex-row flex-wrap">
                      {project.techStack.map((tech) => (
                        <span
                          className="bg-slate-600 text-white text-center py-1 px-2 text-xs rounded"
                          key={tech}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-gray-200">
                    {project.teamMembers.length > 0 && (
                      <UsersIcon className="w-5 h-5" />
                    )}

                    <div className="px-2 text-xs gap-1 flex flex-row flex-wrap">
                      {project.teamMembers.length > 0 &&
                        project.teamMembers
                          .map((member) => <h1 key={member}>{member}</h1>)
                          .reduce((prev, curr) => [prev, ", \u00a0", curr])}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pb-3 px-6 justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start 2xl:justify-start mt-8 mb-2"></div>
            </div>
          </Link>
          /* Card ends here */
        ))}
      </div>
    </div>
  )
}

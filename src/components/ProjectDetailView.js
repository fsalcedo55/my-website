import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projectsData";
import { UsersIcon } from "@heroicons/react/outline";
import { ExternalLink } from "react-external-link";

function ProjectDetailView() {
  const { id } = useParams();
  const currProject = projectsData.find((project) => project.id === +id);

  return (
    <div className="lg:px-8">
      {/* <div className="flex items-center py-4 overflow-y-auto whitespace-nowrap lg:px-4">
        <p className="text-gray-600 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </p>

        <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

        <p className="text-gray-600 dark:text-gray-200 hover:underline">
          Account
        </p>

        <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

        <p className="text-gray-600 dark:text-gray-200 hover:underline">
          Profile
        </p>

        <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

        <p className="text-blue-600 dark:text-blue-400 hover:underline">
          Settings
        </p>
      </div> */}
      <div className="max-h-fit flex flex-col lg:flex-row xl:flex-row 2xl:flex-row text-center">
        {/* Left side of the screen */}
        <div className="flex-1 lg:col-span-2 lg:border-r lg:border-gray-600 lg:pr-8">
          <img
            className="rounded-lg shadow-lg"
            src={currProject.photo}
            alt="avatar"
          />
        </div>
        {/* Right side of the screen */}
        <div className="flex-1 p-4 lg:ml-8 xl:ml-8 2xl:ml-8">
          <div className="font-mono 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 lg:h-14 xl:h-14 2xl:h-14">
            {currProject.name}
          </div>
          <p className="my-4 px-8 text-gray-200 text-xs lg:text-sm xl:text-sm 2xl:text-sm h-26 lg:h-48 xl:h-36 2xl:h-36">
            {currProject.longDescription}
          </p>
          <div className="text-xs gap-1 truncate flex flex-row flex-wrap justify-center">
            {currProject.techStack.map((tech) => (
              <span
                className="bg-slate-600 text-white text-center py-1 px-2 text-xs rounded"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center mt-4 text-gray-200 justify-center">
            {currProject.teamMembers.length > 0 && (
              <UsersIcon className="w-5 h-5" />
            )}

            <div className="px-2 text-xs gap-1 flex flex-row flex-wrap">
              {currProject.teamMembers.length > 0 &&
                currProject.teamMembers
                  .map((member) => <h1 key={member}>{member}</h1>)
                  .reduce((prev, curr) => [prev, ", \u00a0", curr])}
            </div>
          </div>
          <div className="flex pb-3 px-6 justify-center mt-8 mb-2">
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center bottom-0 gap-3">
              <ExternalLink href={currProject.deployedURL}>
                <button
                  type="button"
                  className="bg-indigo-100 hover:bg-indigo-300 py-2 px-4 w-48 sm:w-24 md:w-24 lg:w-24 xl:w-24 2xl:w-24 text-xs font-medium text-indigo-900 border border-transparent rounded-lg focus:outline-none"
                >
                  Live Site
                </button>
              </ExternalLink>
              <ExternalLink href={currProject.githubURL}>
                <button
                  type="button"
                  className="bg-indigo-600 hover:bg-indigo-900 py-2 px-4 w-48 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full text-xs font-medium text-white border border-gray-600 border-transparent rounded-lg focus:outline-none"
                >
                  GitHub
                </button>
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailView;

import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projectsData";
// import photo from "images/road.jpg";

function ProjectDetailView() {
  const { id } = useParams();
  const currProject = projectsData.find((project) => project.id === +id);
  console.log({ currProject });
  console.log({ projectsData });

  return (
    <div className="min-h-screen flex flex-col-reverse text-center">
      <div className="flex-1 p-4">Left Screen</div>
      <div className="flex-1 mt-4 p-4 text-white">
        <div className="font-mono 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {currProject.name}
        </div>
        <p className="mt-4 mb-4 text-gray-200 text-s h-26 sm:h-26 md:h-26 lg:h-28 xl:h-28 2xl:h-24">
          {currProject.description}
        </p>
        <img src={currProject.photo} alt="avatar" />
        {/* <img src="images/road.jpg" alt="avatar" /> */}
        {/* <img src={photo} alt="avatar" /> */}
      </div>
    </div>
  );
}

export default ProjectDetailView;

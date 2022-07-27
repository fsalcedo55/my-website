import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../../data/projectsData";

function ProjectDetailView() {
  const { id } = useParams();
  const currProject = projectsData.find((project) => project.id === +id);
  console.log({ currProject });
  console.log({ projectsData });

  return (
    <div className="text-white min-h-screen min-w-full">
      <h3>{currProject.name}</h3>
      <h1>{id}</h1>
    </div>
  );
}

export default ProjectDetailView;

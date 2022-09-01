import { React } from "react"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-16 font-mono h-20 items-center">
        <p>Selected Projects</p>
      </div>
      <ProjectCard />
    </div>
  )
}

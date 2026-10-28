import ProjectCard from "./projectCard.jsx";
import { projects } from "./data.js";

export default function Projects() {
  return (
    <>
      <div className="mt-20 md:mt-0 mb-5">
        <h1 className="text-3xl font-medium">Projects</h1>
        <p>
          These are my personal projects I&apos;ve created with different
          technologies.
        </p>
      </div>

      <div className="w-full">
        <div className="flex flex-wrap">
          {projects.map((project) => (
            <ProjectCard key={project.link} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

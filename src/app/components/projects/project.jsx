import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCard from "./projectCard.jsx";
import { projects } from "./data.js";

const Project = () => {
  return (
    <>
      <div className="mb-5">
        <h3>Projects</h3>
        <p>Some personal projects I&apos;ve created.</p>
      </div>

      <div className="mb-24">
        <ProjectCard project={projects[0]} />

        <div>
          <Link
            href="/projects"
            className="group flex w-[8rem] select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle text-xs text-[#76ABAE] transition-all hover:bg-teal-500/10 active:bg-teal-500/30"
          >
            <span>View all</span>

            <FaArrowRightLong className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Project;

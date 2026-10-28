import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center w-full mb-3 max-w-md rounded-lg bg-[#1A1A1A] p-4
    transition-all duration-300 ease-in-out
    hover:bg-[#242424] hover:scale-[1.02]"
    >
      <Image
        src={project.coverImage}
        alt={project.name}
        width={64}
        height={64}
        className="w-16 h-16 shrink-0 rounded-md object-cover"
      />

      <div className="ml-4">
        <h4 className="text-white font-semibold">{project.name}</h4>
        <p className="text-gray-400 text-sm">{project.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;

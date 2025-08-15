"use client";
import * as React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Projects() {
  const projects = [
    {
      name: "My Baul",
      link: "https://notes-frontend-five-smoky.vercel.app/",
      coverImage: "/media/7.png",
      description:
        "PWA que crea notas con autenticación por JWT, refresh token y restablecimiento de contraseña",
    },
    {
      name: "App de Clima",
      link: "https://appdeclimabyplz.netlify.app/",
      coverImage: "/media/1.jpeg",
      description:
        "Simple Aplicacion que busca el clima dado una ciudad con conexion a la API openweathermap.org",
    },
    {
      name: "Landing Page Festival de Rock",
      link: "https://festivalrockedmmusic.netlify.app/",
      coverImage: "/media/2.png",
      description: "Pagina de Inicio para mostrar los artistas de un concierto",
    },
    {
      name: "Blog de Cafe",
      link: "https://myblogdecafeparati.netlify.app/",
      coverImage: "/media/3.png",
      description: "Blog simple para mostrar los beneficios del cafe.",
    },
    {
      name: "Real State Site Web",
      link: "https://bienesraicesprimero.netlify.app/",
      coverImage: "/media/4.png",
      description: "Pagina de Bienes Raices",
    },
    {
      name: "Free Lancer Landing Page",
      link: "https://elsegundobueno.netlify.app/",
      coverImage: "/media/5.png",
      description: "Portafolio Simple Para Freelancer ",
    },
    {
      name: "Pagina de Ropa",
      link: "https://paginaderopa.netlify.app/",
      coverImage: "/media/6.png",
      description:
        "Simple Pagina de Ropa para mostrar habilidades en Flex Box y Grid CSS",
    },
  ];

  return (
    <>
      <div className=" mt-20 md:mt-0 mb-5">
        <h1 className="text-3xl font-medium">Projects</h1>
        <p>
          This are my personal projects i've created with diferents
          technologies.
        </p>
      </div>

      <div className="mt- w-full">
        <div className="flex flex-wrap ">
          {projects.map((project, index) => {
            return (
              <>
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-full mb-3 max-w-md rounded-lg bg-[#1A1A1A] p-4
    transition-all duration-300 ease-in-out 
    hover:bg-[#242424] hover:scale-[1.02]"
                >
                  <img
                    src={project.coverImage}
                    alt="image"
                    className="w-16 h-16 rounded-md object-cover"
                  />

                  <div className="ml-4">
                    <h4 className="text-white font-semibold">{project.name}</h4>
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

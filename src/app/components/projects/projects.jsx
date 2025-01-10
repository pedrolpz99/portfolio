"use client";
import * as React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Projects() {
  const projects = [
    {
      name: "My Baul",
      link: "https://notes-frontend-2n37.vercel.app/",
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
      <div className=" mt-10 mb-5">
        <h3>Proyectos</h3>
        <p>Algunos proyectos Front-End que he realizado.</p>
      </div>

      <div className="mt- w-full">
        <div className="flex flex-wrap ">
          {projects.map((project, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex mb-10  items-center justify-center"
                >
                  <div className="relative flex w-full flex-col md:flex-row rounded-xl  bg-clip-border  shadow-md">
                    <div className="relative m-0 md:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border ">
                      <img
                        src={project.coverImage}
                        alt="image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="mb-2 block font-sans  font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {project.name}
                      </h4>
                      <p className="mb-8 block font-sans text-base font-normal leading-relaxed  antialiased">
                        {project.description}
                      </p>
                      <a
                        className="inline-block"
                        target="_blank"
                        href={project.link}
                      >
                        <button
                          className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#76ABAE] transition-all hover:bg-teal-500/10 active:bg-teal-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          Ver proyecto
                          <FaArrowRightLong />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

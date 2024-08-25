"use client";
import * as React from "react";

export default function Projects() {
  const projects = [
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
        <p>Algunos proyectos Fron-End que he realizado.</p>
      </div>

      <div className="mt- w-full">
        <div className="flex flex-wrap ">
          {projects.map((project, index) => {
            return (
              <>
                <div
                  key={index}
                  class="flex mb-10  items-center justify-center"
                >
                  <div class="relative flex w-full flex-col md:flex-row rounded-xl  bg-clip-border  shadow-md">
                    <div class="relative m-0 md:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border ">
                      <img
                        src={project.coverImage}
                        alt="image"
                        class="h-full w-full object-cover"
                      />
                    </div>
                    <div class="p-6">
                      <h4 class="mb-2 block font-sans  font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {project.name}
                      </h4>
                      <p class="mb-8 block font-sans text-base font-normal leading-relaxed  antialiased">
                        {project.description}
                      </p>
                      <a
                        class="inline-block"
                        target="_blank"
                        href={project.link}
                      >
                        <button
                          class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#76ABAE] transition-all hover:bg-teal-500/10 active:bg-teal-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          Ver proyecto
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="h-4 w-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                          </svg>
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

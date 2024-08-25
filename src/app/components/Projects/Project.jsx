import React from "react";
import Link from "next/link";

const Project = () => {
  return (
    <>
      <div className="mb-5">
        <Link href="/projects">
          <h3 className="w-2">Proyectos</h3>
        </Link>

        <p>Algunos proyectos que he realizado.</p>
      </div>

      <div className="mb-24 w-[23rem]">
        <div className="flex flex-wrap ">
          <div className="flex  items-center justify-center mb-8">
            <div className="relative flex flex-col rounded-xl bg-[#EEEEEE]  bg-clip-border text-gray-700 shadow-md">
              <div className="relative m-0 w-full shrink-0 overflow-hidden rounded-xl   bg-[#EEEEEE]  bg-clip-border text-gray-700">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                  alt="image"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="mb-2 block font-sans text-gray-700 font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Proyecto principal
                </h4>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  Like so many organizations these days, Autodesk is a company
                  in transition.
                </p>
                <a class="inline-block" href="#">
                  <button
                    class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#76ABAE] transition-all hover:bg-teal-500/10 active:bg-teal-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    ver proyecto
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
            <link
              rel="stylesheet"
              href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

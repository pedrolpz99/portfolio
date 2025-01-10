import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

const Project = () => {
  return (
    <>
      <div className="mb-5">
        <Link href="/projects">
          <div className="text-white flex aling-center gap-1 hover:underline">
            <h3>Proyectos </h3>
            <FaLink className="w-3" />
          </div>
        </Link>

        <p>Algunos proyectos que he realizado.</p>
      </div>

      <div className="mb-24 w-[23rem]">
        <div className="flex flex-wrap ">
          <div className="flex  items-center justify-center mb-8">
            <div className="relative flex flex-col rounded-xl bg-[#EEEEEE]  bg-clip-border text-gray-700 shadow-md">
              <div className="relative m-0 w-full shrink-0 overflow-hidden rounded-xl   bg-[#EEEEEE]  bg-clip-border text-gray-700">
                <img
                  src="media/7.png"
                  alt="image"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="mb-2 block font-sans text-gray-700 font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  My Baul
                </h4>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  PWA que crea notas con autenticación por JWT, refresh token y
                  restablecimiento de contraseña{" "}
                </p>
                <a className="inline-block" href="" target="_blank">
                  <button
                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#76ABAE] transition-all hover:bg-teal-500/10 active:bg-teal-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    ver proyecto
                    <FaArrowRightLong />
                  </button>
                </a>
              </div>
            </div>
            <link
              rel="stylesheet"
              href="https://notes-frontend-2n37.vercel.app/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

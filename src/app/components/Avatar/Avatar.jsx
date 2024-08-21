"use client";
import React from "react";

const Avatar = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    console.log(link);
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    link.click();
  };
  return (
    <>
      <div className="flex mt-20  flex-col gap-10">
        <div>
          <img
            className="inline-block w-20 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-2xl  font-bold  ">Pedro Andres Lopez Garcia</h1>
          <span className="font-thin	 text-white">
            Ingeniero Administrador en Sistemas
          </span>
          <p className="w-45 pt-3 ">
            Desarrollador web full stack en constante aprendizaje, apasionado
            por crear aplicaciones web robustas y eficientes, En busca de nuevas
            oportunidades para crear, aprender y crecer profesionalmente.
          </p>
        </div>
      </div>
      <div className="mt-18 mb-20">
        <button
          href="mailto:example@example.com"
          class="mt-5 rounded-md bg-[#76ABAE] px-10 py-2 text-white"
          onClick={() => {
            handleDownload();
          }}
        >
          Descargar CV
        </button>
      </div>
    </>
  );
};

export default Avatar;

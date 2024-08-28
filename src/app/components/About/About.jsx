"use client";
import React, { useState } from "react";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/media/1.jpeg", "/media/2.png", "/media/3.png"];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="mt-10 mb-24">
      <h3>Acerca de mi</h3>
      <div className="my-8">
        <div className="relative w-full  max-w-xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="whitespace-nowrap transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => {
                console.log(image);
                return (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="inline-block w-full"
                  />
                );
              })}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-0 h-full transform -translate-y-1/2 bg-transparent text-white px-[2rem] focus:outline-none hover:bg-opacity-50 hover:bg-gray-800 transition duration-300"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-0 h-full transform -translate-y-1/2 bg-transparent text-white  px-[2rem] focus:outline-none hover:bg-opacity-50 hover:bg-gray-800 transition duration-300"
            onClick={prevSlide}
          >
            &#10095;
          </button>
        </div>
      </div>
      <p className="mb-5">
        Hola, Soy Pedro López y me apasiona la idea de crear aplicaciones,
        sistemas, páginas web para que sean útiles hacia personas que la usen.
      </p>
      <p className="mb-5">
        He trabajado en diferentes sectores relacionados con la informática como
        Soporte de aplicaciones, consultor de bases de datos o Desarrollador
        Web. Siempre estoy en constante aprendizaje, aprendiendo de mis errores
        y mejorando en cada momento que puedo dentro de mi persona como en el
        ámbito laboral.
      </p>
      <p className="mb-5">
        Cuando no estoy codeando me gusta tocar la guitarra eléctrica, mejorar
        mi inglés y explorar nuevas tecnologías y mejorando como programador.
      </p>
    </div>
  );
};

export default About;

"use client";
import { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const links = [
    {
      id: 1,
      link: "/",
      name: "Inicio",
    },
    {
      id: 2,
      link: "about",
      name: "Acerca de mí",
    },
    {
      id: 3,
      link: "proyects",
      name: "Proyectos",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center w-full h-20 px-4 text-white bg-black fixed nav z-10">
        <ul className="flex ">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
            >
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;

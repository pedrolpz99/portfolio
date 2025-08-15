"use client";
import { useState } from "react";
import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { PiAppWindowBold } from "react-icons/pi";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: 1,
      link: "/",
      name: "Home",
      icon: BiHomeAlt2,
    },
    {
      id: 2,
      link: "about",
      name: "About",
      icon: FaUser,
    },
    {
      id: 3,
      link: "projects",
      name: "Projects",
      icon: PiAppWindowBold,
    },
  ];

  return (
    <>
      <nav className="bg-[#141414] dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo / Nombre */}
          <Link
            href="/"
            className="flex select-none flex-col text-white hover:opacity-90"
          >
            <span>Pedro Andres Lopez Garcia</span>
            <span className="text-low-contrast-text font-thin">
              Software Developer
            </span>
          </Link>

          {/* Botón menú móvil */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menú */}
        <div
          className={`${
            isOpen ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col items-center justify-center p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8">
            {links.map(({ id, link, name, icon: Icon }) => (
              <li key={id} className="w-full md:w-auto">
                <Link
                  href={link}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-[#2A2A2A] hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={20} />
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

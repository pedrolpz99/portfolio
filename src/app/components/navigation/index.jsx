"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links, linkClassName } from "./links.js";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[#141414] fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo / Nombre */}
        <Link
          href="/"
          className="flex select-none flex-col text-white hover:opacity-90"
        >
          <span>Pedro Andres Lopez Garcia</span>
          <span className="text-gray-400 font-thin">Software Developer</span>
        </Link>

        {/* Botón menú móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menú */}
      <div className={`${isOpen ? "" : "hidden"} w-full`} id="navbar-sticky">
        <ul className="flex flex-col items-center justify-center p-4 font-medium">
          {links.map(({ id, link, name, icon: Icon }) => (
            <li key={id} className="w-full">
              <Link
                href={link}
                className={linkClassName(pathname === link)}
                aria-current={pathname === link ? "page" : undefined}
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
  );
};

export default Navigation;

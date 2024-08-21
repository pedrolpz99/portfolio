import React from "react";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
              <Link href="/">
                <p>Inicio</p>
              </Link>
            </li>
            <li>
              <Link href="/proyects">
                <p>Proyectos</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p>Acerca de Mi</p>
              </Link>
            </li>
          </ul>
          <Button />
        </div>
      </div>
    </>
  );
};
export default Navbar;

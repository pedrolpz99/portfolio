import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

const Project = () => {
  return (
    <>
      <div className="mb-5">
        <h3>Projects</h3>
        <p>Some personal projects i've created.</p>
      </div>

      <div className="mb-24 w-[23rem]">
        <a
          href="https://notes-frontend-five-smoky.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full mb-3 max-w-md rounded-lg bg-[#1A1A1A] p-4
    transition-all duration-300 ease-in-out 
    hover:bg-[#242424] hover:scale-[1.02]"
        >
          <img
            src="media/7.png"
            alt="image"
            className="w-16 h-16 rounded-md object-cover"
          />

          <div className="ml-4">
            <h4 className="text-white font-semibold">My Vaul</h4>
            <p className="text-gray-400 text-sm">
              Page web aplication with auth by JWT, refresh token and resets
              passwords
            </p>
          </div>
        </a>

        <div>
          <Link
            href="/projects"
            type="button"
            className="group flex w-[8rem] select-none items-center gap-2   rounded-lg py-3 px-6 text-center align-middle  text-xs   text-[#76ABAE] transition-all hover:bg-teal-500/10 active:bg-teal-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <span>View all</span>

            <FaArrowRightLong className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Project;

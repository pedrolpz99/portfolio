import React from "react";
import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { PiAppWindowBold } from "react-icons/pi";

const Sidebar = () => {
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
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-[170px] py-20 md:block">
        <nav className="flex h-full w-full flex-col gap-12 overflow-visible">
          <div className="flex w-full flex-col p-3 items-start gap-4 text-left">
            <img
              className=" w-16 h-16 object-cover rounded-full"
              src="/media/profile.jpg"
              alt=""
            />
            <div>
              <span className="text-lg text-gray-300 font-medium">
                Pedro A. Lopez Garcia
              </span>
              <p className="whitespace-nowrap">Software Developer</p>
            </div>
          </div>
          <ul className="flex list-none flex-col gap-2">
            {links.map(({ id, link, name, icon: Icon }) => (
              <Link
                key={id}
                href={link}
                className="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-gray-300 hover:bg-[#2A2A2A] hover:text-white"
              >
                <Icon size="20" />
                <span>{name}</span>
              </Link>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

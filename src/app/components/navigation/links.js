import { BiHomeAlt2 } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { PiAppWindowBold } from "react-icons/pi";

export const links = [
  { id: 1, link: "/", name: "Home", icon: BiHomeAlt2 },
  { id: 2, link: "/about", name: "About", icon: FaUser },
  { id: 3, link: "/projects", name: "Projects", icon: PiAppWindowBold },
];

export const linkClassName = (isActive) =>
  `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors hover:bg-[#2A2A2A] hover:text-white ${
    isActive ? "bg-[#2A2A2A] text-white" : "text-gray-300"
  }`;

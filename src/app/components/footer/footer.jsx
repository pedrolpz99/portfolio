import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center  w-full p-8 mt-4  text-white">
      <div className="text-center">
        <div className="flex gap-2.5 items-center justify-around mb-4">
          <a
            href="https://www.linkedin.com/in/pedro-andrés-lópez-garcía-8752321a0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5 text-emerald-500" />
          </a>
          <a
            href="https://github.com/pedrolpz99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5 text-emerald-500" />
          </a>
          <a
            href="https://www.instagram.com/pedro_lpz99s/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="h-5 w-5 text-emerald-500" />
          </a>
        </div>
        <p>
          Copyright © {new Date().getFullYear()} -{" "}
          <a className="font-semibold" href="mailto:pedro_lpz99@outlook.com">
            Pedro López
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

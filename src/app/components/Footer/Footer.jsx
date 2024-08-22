import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center  w-full p-8 mt-4 bg-[#141414] text-white">
      <div className="text-center">
        <div className="flex gap-2.5 items-center justify-around mb-4">
          <a
            href="https://www.linkedin.com/in/pedro-andrés-lópez-garcía-8752321a0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-5 w-5 text-emerald-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
              <rect x="2" y="9" width="4" height="12" />{" "}
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://github.com/pedrolpz99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-5 w-5 text-emerald-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/pedro_lpz99s/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-5 w-5 text-emerald-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
        <p>
          Copyright © 2024 -
          <a className="font-semibold" href="mailto:m.sohanemon@gmail.com">
            Pedro Lopez
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

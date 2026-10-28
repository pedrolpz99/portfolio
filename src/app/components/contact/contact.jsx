"use client";
import { LuClipboardCopy } from "react-icons/lu";
import { useState } from "react";

const email = "pedro_lpz99@outlook.com";

const ContactForm = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyClipboard = async () => {
    await navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <>
      <div className="mb-24">
        <h3 className="">Contact</h3>
        <div className=" w-full max-w-lg">
          <div className="w-full mt-5">
            <div className="relative">
              <input
                type="text"
                className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={email}
                disabled
                readOnly
              />
              <button
                type="button"
                onClick={copyClipboard}
                aria-label="Copy email"
                className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
              >
                <LuClipboardCopy />
              </button>
              <div
                className={`absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity  bg-gray-900 rounded-lg shadow-sm ${
                  isCopied ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                <span>Copied!</span>
              </div>
            </div>

            <div className="mt-5">
              <a
                href={`mailto:${email}`}
                className="mt-5 rounded-md bg-black px-10 py-2 text-white"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

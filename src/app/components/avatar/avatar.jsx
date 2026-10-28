import Image from "next/image";
import { FiDownload } from "react-icons/fi";

const Avatar = () => {
  return (
    <>
      <div className="flex mt-20 md:mt-0 flex-col gap-5">
        <div>
          <Image
            className="w-16 h-16 object-cover rounded-full md:hidden"
            src="/media/profile.jpg"
            alt="Pedro López"
            width={64}
            height={64}
          />
        </div>
        <div>
          <span className="text-lg text-gray-300 font-medium">About</span>
          <p className="pt-3">
            Full-stack web developer, passionate about building robust and
            efficient web applications. Seeking new opportunities to create,
            learn, and grow professionally.
          </p>
        </div>
      </div>
      <div className="mt-5 mb-20">
        <a
          href="/cv.pdf"
          download="cv.pdf"
          className="mt-5 w-fit rounded-md bg-[#76ABAE] px-10 py-2 text-white flex items-center gap-2
               transition-all duration-300 ease-in-out
               hover:bg-[#5f8f92] hover:scale-105 hover:shadow-lg"
        >
          <span>Download CV</span>
          <FiDownload className="text-lg" />
        </a>
      </div>
    </>
  );
};

export default Avatar;

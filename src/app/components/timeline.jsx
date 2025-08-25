import React from "react";

const Timeline = () => {
  return (
    <>
      <div className=" mt-20 md:mt-0 mb-5">
        <span className="text-lg text-gray-300 font-medium">Jobs</span>
        {/* <p className="w-45 pt-3 ">
   
        </p> */}
      </div>
      <div className="mb-24">
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2020 - 2022
            </time>
            <p className="text-lg font-semibold text-gray-300 ">
              Corporativo Farmacias Benavides (Intern)
            </p>

            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Data Analyst, Optimized database queries and improved reporting
              efficiency using stored procedures and backups.
            </p>
          </li>

          <li class="ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2022 - Current
            </time>
            <p className="text-lg font-semibold text-gray-300 ">
              Corporativo Realty World (Web Full Stack)
            </p>

            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Led the development of scalable web solutions, enhancing usability
              and business performance.
            </p>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Timeline;

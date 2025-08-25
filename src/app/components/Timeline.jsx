import React from "react";

const Timeline = () => {
  return (
    <div>
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            User Comment
          </h3>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            This is the first comment in the Timeline. It provides context or
            feedback
          </p>
        </li>

        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2022
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Another User Comment
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            This comment adds more details or responds to the previous one
          </p>
        </li>

        <li class="ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2022
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Final Comment
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            This is the final comment in the Timeline, summarizing the
            discussion
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Timeline;

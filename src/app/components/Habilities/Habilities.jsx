import * as React from "react";

const Habilities = () => {
  const habilities = [
    "JavaScript",
    "Html",
    "Css",
    "Tailwind",
    "Bootstrap",
    "React js",
    "Next Js",
    "Rails",
    "Ruby",
    "Git",
    "Bash",
    "MySql",
  ];
  return (
    <>
      <div className="flex flex-col space-x-4 justify-center items-center mb-24">
        <h3 className="p-7">Habilidades Tecnicas</h3>
        <div className="flex flex-wrap	">
          {habilities.map((habilitie, index) => {
            return (
              <p
                key={index}
                className="bg-[#76ABAE] text-white p-3 mx-4 my-1 rounded-full text-center"
              >
                {habilitie}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Habilities;

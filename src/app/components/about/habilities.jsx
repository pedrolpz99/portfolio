import * as React from "react";
import { SiTailwindcss } from "react-icons/si";

const Habilities = () => {
  const habilities = [
    {
      name: "Html",
      icon: "devicon-html5-plain",
    },
    {
      name: "Css",
      icon: "devicon-css3-plain",
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain",
    },
    {
      name: "Tailwind",
      icon: "devicon-tailwindcss-plain-wordmark",
    },
    {
      name: "Bootstrap",
      icon: "devicon-bootstrap-plain",
    },
    {
      name: "React js",
      icon: "devicon-react-original",
    },
    {
      name: "Next Js",
      icon: "devicon-nextjs-original-wordmark",
    },
    {
      name: "Typescript",
      icon: "devicon-typescript-plain",
    },
    {
      name: "Rails",
      icon: "devicon-rails-plain",
    },
    {
      name: "Ruby",
      icon: "devicon-ruby-plain",
    },
    { name: "Nginx", icon: "devicon-nginx-original" },
    { name: "Python", icon: "devicon-python-plain" },
    { name: "Graphql", icon: "devicon-graphql-plain" },
    { name: "C#", icon: "devicon-csharp-plain" },
    { name: "ASP .NET", icon: "devicon-dotnetcore-plain" },
    {
      name: "Git",
      icon: "devicon-git-plain",
    },
    {
      name: "Bash",
      icon: "devicon-bash-plain",
    },
    {
      name: "MySql",
      icon: "devicon-mysql-plain-wordmark",
    },
    {
      name: "AWS",
      icon: "devicon-amazonwebservices-plain-wordmark",
    },
    { name: "Linux", icon: "devicon-linux-plain" },
    {
      name: "Ubuntu",
      icon: "devicon-ubuntu-plain",
    },
  ];

  return (
    <>
      <div className="mt-10 	 mb-24">
        <h3>Technical Skills</h3>
        <p className="mb-5">
          Set of technologies I have been working with throughout my learning
          journey.
        </p>

        <div className="grid grid-cols-3 gap-4">
          {habilities.map((habilitie, index) => (
            <div
              key={index}
              className="bg-[#76ABAE] text-white rounded-xl p-5 flex flex-col items-center justify-center gap-3
                 transition-all duration-300 ease-in-out
                 hover:scale-105 hover:shadow-lg"
            >
              <div className="text-6xl flex justify-center">
                {index === 3 ? (
                  <SiTailwindcss />
                ) : (
                  <i className={habilitie.icon}></i>
                )}
              </div>
              <p className="text-white">{habilitie.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Habilities;

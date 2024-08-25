import * as React from "react";

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
      name: "Rails",
      icon: "devicon-rails-plain",
    },
    {
      name: "Ruby",
      icon: "devicon-ruby-plain",
    },
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
  ];

  return (
    <>
      <div className="mt-10 	 mb-24">
        <h3>Habilidades Tecnicas</h3>
        <p className="mb-5">
          Conjunto de Tecnologias en las cuales he estado trabajando durante
          todo mi aprendizaje.
        </p>

        <div className="grid grid-cols-3 gap-4	">
          {habilities.map((habilitie, index) => {
            return (
              <div
                key={index}
                className="bg-[#76ABAE] text-white rounded-lg text-center p-3  my-1 "
              >
                <span>
                  <i className={`${habilitie.icon} text-6xl`}></i>
                </span>
                <p className="text-white">{habilitie.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Habilities;

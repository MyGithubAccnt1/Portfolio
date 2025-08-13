import { getAssetPath } from "../utils/pathUtils";

function Projects() {

  const box = {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 25px 45px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "10px",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(5px)",
  };

  const projects = [
    {
      href: "https://sbmedallion.infinityfreeapp.com",
      title:
        "Capstone Project - DEVELOPMENT OF E-COMMERCE WEBSITE FOR SAINT BENEDICT MEDALLION",
      features: [
        "E-commerce System",
        "Customization",
        "Content Management System",
        "Email Verification Security",
        "Accounting Reports",
        "Built-In Message",
        "Comment Management",
        "Real-time Notifications",
      ],
      codestack: ["HTML", "JavaScript", "JQuery", "PHP", "MySQL", "Bootstrap"],
    },
    {
      href: "https://mygithubaccnt1.github.io/Quotation/",
      src: "/flex2.png",
      title: "Self Project - QUOTE FORM GENERATOR",
      features: ["Automated Calculation", "Download to PDF", "Dynamic Content"],
      codestack: ["JSX", "React JS", "Tailwind"],
    },
    {
      href: "https://mygithubaccnt1.github.io/ID-generator/",
      src: "/flex3.jpeg",
      title: "Self Project - ID GENERATOR",
      features: [
        "Automated Design",
        "Download to PNG",
        "180 Degree Horizontal 3D View",
      ],
      codestack: ["JSX", "React JS", "Tailwind"],
    },
    {
      href: "https://mygithubaccnt1.github.io/BND/",
      src: "/flex4.png",
      title: "Client Project",
      features: [
        "Landing Page",
      ],
      codestack: ["JSX", "React JS", "Tailwind"],
    },
    {
      href: "https://mygithubaccnt1.github.io/Gcash/",
      src: "/flex5.jpeg",
      title: "Client Project",
      features: [
        "GCash Managing System",
        "Image Processing",
      ],
      codestack: ["JSX", "React JS", "Tailwind", "Cloud-Based"],
    },
  ];

  return (
    <div className='w-[100dvw] md:w-[80dvw] lg:w-[75dvw] mx-auto!'>
      <b>Projects</b>
      <div className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <a href={project.href} target="_blank" style={box} className="flex gap-5 p-[30px]!" key={index}>
            <div className="hidden lg:flex flex-col gap-3 justify-center w-[25%] relative">
              {project.src ? (
                <img
                  src={getAssetPath(project.src)}
                  alt={project.title}
                  className="h-[200px]"
                />
              ) : (
                <>
                  <img
                    src={getAssetPath("/flex.gif")}
                    alt={project.title}
                    className="h-[200px]"
                  />
                  <img
                    src={getAssetPath("/flex_thesis.png")}
                    alt={project.title}
                    className="absolute top-0 mt-[22px]! opacity-[0.6] h-[200px]"
                  />
                  <img
                    src={getAssetPath("/flex_thesis_1.png")}
                    alt={project.title}
                    className="h-[200px]"
                  />
                </>
              )}
            </div>
            <div>
              <h6 className="font-bold">{project.title}</h6>
              <br />
              <p className="italic">Main Features:</p>
              {project.features.map((feature) => (
                <>
                  <b className="italic">- {feature}</b>
                  <br />
                </>
              ))}
              <br />
              <p className="italic">Code Stack:</p>
              {project.codestack.map((code) => (
                <>
                  <b className="italic">- {code}</b>
                  <br />
                </>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;

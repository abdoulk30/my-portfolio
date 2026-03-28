export default function Projects() {

  const projects = [
    {
      title: "Project One",
      description: "A short description of the project and what problem it solves.",
      tech: ["React", "Node", "API"],
      live: "#",
      code: "#"
    },
    {
      title: "Project Two",
      description: "A short description of the project and what problem it solves.",
      tech: ["React", "SQL", "Express"],
      live: "#",
      code: "#"
    },
    {
      title: "Project Three",
      description: "A short description of the project and what problem it solves.",
      tech: ["JavaScript", "HTML", "CSS"],
      live: "#",
      code: "#"
    }
  ]


  return (
    <section
        id="projects"
        data-aos="fade-up"
        className="max-w-6xl mx-auto px-6 py-24 scroll-mt-24"
    >

      <h2 className="text-3xl font-semibold mb-12 text-center">
        Projects
      </h2>


      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >

            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>


            <div className="flex flex-wrap gap-2 mb-6">

              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-slate-700 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}

            </div>


            <div className="flex gap-4 text-sm">

              <a
                href={project.live}
                className="underline hover:text-gray-300"
              >
                Live
              </a>

              <a
                href={project.code}
                className="underline hover:text-gray-300"
              >
                Code
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}
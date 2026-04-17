import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "JobSync",
      shortDescription:
        "A secure full-stack job tracker for managing applications with authentication, filters, search, and status updates.",
      fullDescription:
        "Built a full-stack web application that helps users efficiently track and manage job applications in one centralized dashboard. Users can add, edit, update, search, and filter applications by status, job type, and date. The platform includes secure JWT-based authentication, protected API routes, PostgreSQL data persistence, and a responsive React interface with dynamic job detail pages.",
      image: "/images/jobsync.png",
      tech: [
        "React",
        "Vite",
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "JWT",
      ],
      live: "https://job-sync-eosin.vercel.app/",
      github: "https://github.com/abdoulk30/jobSync",
    },
    {
      id: 2,
      title: "HomeCards",
      shortDescription:
        "A web-based apartment tracking dashboard for saving, comparing, and organizing listings with photos, notes, and contact details.",
      fullDescription:
        "Built a web application that helps users organize and compare apartment listings in one clean dashboard. Users can add apartment details such as address, rent, broker and landlord contact information, notes, and multiple photos for each listing. The app supports editing, deleting, searching, and viewing listings in a detailed modal view, making the apartment hunting process easier and more organized.",
      image: "/images/homecards.png",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Local Storage",
        "DOM Manipulation",
      ],
      live: "",
      github: "https://github.com/abdoulk30/homeCards",
    },
    {
      id: 3,
      title: "TikTok Messaging Design",
      shortDescription:
        "A product redesign prototype focused on solving the inability to edit messages after sending.",
      fullDescription:
        "Designed a messaging experience prototype in Figma that solves a key user frustration within TikTok’s direct messaging flow: the inability to edit messages once they are sent.",
      image: "/images/tiktok-messaging-design.png",
      tech: ["Figma", "UX Design", "Prototyping"],
      live: "",
      github: "",
    },
  ];

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="max-w-6xl mx-auto px-6 py-12 scroll-mt-24"
    >
      <h2 className="mb-4 text-center text-3xl font-semibold">
        Projects
      </h2>

      <p className="mx-auto mb-10 max-w-2xl text-center text-secondary">
        A selection of projects showcasing full-stack development,
        frontend engineering, and user-focused product design.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="card card-hover group cursor-pointer overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-primary">
                {project.title}
              </h3>

              <p className="mb-4 text-secondary">
                {project.shortDescription}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="underline hover:opacity-70"
                  >
                    Live
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="underline hover:opacity-70"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
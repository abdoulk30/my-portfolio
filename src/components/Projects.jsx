import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "JobSync",
      shortDescription:
        "Full-stack job tracking platform with secure authentication, filtering, search, and real-time status management.",
      fullDescription:
        "Built a full-stack job application tracker with a centralized dashboard for managing applications. Features include JWT authentication, protected API routes, and PostgreSQL data persistence. Users can create, update, search, and filter applications by status, job type, and date through a responsive React interface.",     
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
      featured: true, // ⭐ ADDED
    },
    {
      id: 2,
      title: "HomeCards",
      shortDescription:
        "Apartment tracking dashboard for saving, organizing, and comparing listings with notes, contacts, and photos.",
      fullDescription:
        "Built a client-side apartment tracking dashboard using vanilla JavaScript and local storage. Users can add, edit, delete, and search listings, including rent, contacts, notes, and images. Features a modal-based UI for detailed views and efficient organization during the apartment search process.",
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
        "UX redesign prototype solving the inability to edit sent messages in TikTok’s messaging system.",
      fullDescription:
        "Designed a messaging UX prototype in Figma addressing a key limitation in TikTok’s direct messaging system: editing sent messages. Focused on improving usability, message control, and overall user experience through intuitive interaction design.",
      image: "/images/tiktok-messaging-design.png",
      tech: ["Figma", "UX Design", "Prototyping"],
      live: "",
      github: "https://github.com/abdoulk30/TikTok-Messaging-Design",
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
            className={`relative card card-hover group cursor-pointer overflow-hidden flex flex-col ${
              project.featured ? "ring-2 ring-yellow-400 scale-[1.02]" : ""
            }`}
          >
            {/* ⭐ FEATURED BADGE */}
            {project.featured && (
              <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
                Top Project
              </span>
            )}

            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
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

              <div className="mt-auto flex gap-4 text-sm">
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
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "VentureFlow",
      shortDescription:
        "Dual-sided platform matching startup founders with real investors using historical funding data and a transparent scoring engine — every result comes with a full breakdown, not just a number.",
      fullDescription:
        "Built VentureFlow, a full-stack dual-sided platform connecting startup founders with real investors, using Next.js, TypeScript, and Supabase (PostgreSQL, Auth, and Row-Level Security) for secure, role-gated access. Designed a relational schema and PostgreSQL functions to power real-time analytics and a transparent funding-likelihood scoring engine built on historical deal data — every result breaks down into visible sub-factors like sector alignment, city density, stage fit, and trend velocity, not just a single number.",
      image: "/images/ventureflow.png",
      tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Row-Level Security"],
      highlights: [
        "Built a full-stack dual-sided platform matching startup founders with real investors, using Next.js, TypeScript, and Supabase (PostgreSQL, Auth, and Row-Level Security) for secure, role-gated access.",
        "Designed a relational schema and wrote PostgreSQL functions to power real-time analytics and a transparent funding-likelihood scoring engine built on historical deal data — every score breaks down into visible sub-factors (Sector Alignment, City Density, Stage Fit, Trend Velocity), not just a single number.",
        "Partnered with Claude throughout the build to accelerate feature development, debug complex Supabase/RLS and Next.js Server Component issues, and iteratively refine the data model and matching logic.",
      ],
      live: "https://ventureflow.tech",
      github: "https://github.com/abdoulk30/VentureFlow",
      featured: true,
    },
    {
      id: 2,
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
      highlights: [
        "Implemented JWT-based authentication with protected API routes for secure user sessions",
        "Designed RESTful API architecture supporting full CRUD operations for job tracking",
        "Integrated PostgreSQL with Prisma ORM for structured and scalable data persistence",
        "Built advanced filtering and search system across multiple application fields",
        "Developed responsive React dashboard with modular components and optimized UX flow",
      ],
      live: "https://jobsync.dev/",
      github: "https://github.com/abdoulk30/jobSync",
    },
    {
      id: 3,
      title: "Librio",
      shortDescription:
        "A responsive React bookshelf platform with real-time search, column sorting, and custom shelf tracking — a cleaner take on Goodreads.",
      fullDescription:
        "Built a client-side React and TypeScript bookshelf platform featuring a modern, highly responsive tabular layout designed to eliminate visual clutter and fatigue. Implemented in-memory search filters and column sorting so readers can reorder or subset their library instantly with zero network latency, and integrated the Open Library REST API for dynamic book addition, shelf-status transitions, and an adaptive light/dark mode.",
      image: "/images/librio.png",
      tech: ["React", "TypeScript", "Open Library API", "Tailwind CSS"],
      highlights: [
        "Built a client-side React and TypeScript web application featuring a modern, highly responsive tabular layout designed to eliminate visual clutter and fatigue.",
        "Implemented robust in-memory search filters and column sorting algorithms to enable readers to reorder or subset library rows instantly with zero network latency.",
        "Integrated the Open Library REST API to support dynamic book addition, implementing status drop-downs for shelf transitions and an adaptive light/dark mode for improved accessibility.",
      ],
      live: "",
      github: "https://github.com/abdoulk30/librio",
    },
    {
      id: 4,
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
    {
      id: 5,
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
  ];

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="max-w-6xl mx-auto px-6 py-12 scroll-mt-24"
    >
      <div className="flex justify-center">
        <span className="section-label mb-4">Selected Work</span>
      </div>

      <h2 className="mb-4 text-center text-3xl font-semibold text-primary">
        Projects
      </h2>

      <p className="mx-auto mb-10 max-w-2xl text-center text-secondary">
        A selection of projects showcasing full-stack development,
        frontend engineering, and user-focused product design.
      </p>

      {featured && (
        <div
          onClick={() => setSelectedProject(featured)}
          className="card card-hover group mb-8 grid cursor-pointer overflow-hidden md:grid-cols-2"
        >
          <div className="overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-64 md:h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-8">
            <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent dark:text-accent-light">
              Featured Project
            </span>

            <h3 className="mb-3 text-2xl font-semibold text-primary">
              {featured.title}
            </h3>

            <p className="mb-5 text-secondary">{featured.shortDescription}</p>

            <div className="mb-6 flex flex-wrap gap-2">
              {featured.tech.map((tech, i) => (
                <span key={i} className="tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-5 text-sm font-medium">
              {featured.live && (
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-primary hover:text-accent transition-colors"
                >
                  Live <ExternalLink size={14} />
                </a>
              )}

              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-primary hover:text-accent transition-colors"
                >
                  Code <GithubIcon size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        {rest.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="card card-hover group cursor-pointer overflow-hidden flex flex-col"
          >
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

              <div className="mt-auto flex items-center gap-5 text-sm font-medium">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-primary hover:text-accent transition-colors"
                  >
                    Live <ExternalLink size={14} />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-primary hover:text-accent transition-colors"
                  >
                    Code <GithubIcon size={14} />
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

import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm px-4 py-32"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        /* Changed bg-slate-800 to bg-white dark:bg-slate-800 and added text-primary */
        className="relative w-full max-w-3xl mx-auto rounded-2xl bg-white dark:bg-slate-800 shadow-2xl overflow-hidden text-primary"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition hover:bg-black/70"
        >
          ×
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="h-72 w-full object-cover"
        />

        <div className="p-8">
          <h2 className="mb-4 text-3xl font-semibold">
            {project.title}
          </h2>

          <p className="mb-6 text-secondary leading-7">
            {project.fullDescription}
          </p>

          <div className="mb-8">
            <h3 className="mb-3 font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                /* Using your 'tag' class from index.css */
                <span
                  key={index}
                  className="tag"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                /* Made button adaptive: dark in light mode, light in dark mode */
                className="rounded-lg bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 font-medium transition hover:opacity-90"
              >
                Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                /* Replaced hardcoded slate borders with adaptive button classes */
                className="button px-4 py-2 font-medium transition"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
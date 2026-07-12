import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectModal({ project, onClose }) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!project) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (isZoomed) setIsZoomed(false);
        else onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [project, onClose, isZoomed]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-[90%] sm:w-[80%] max-w-4xl max-h-[85vh]
                   overflow-y-auto rounded-3xl bg-white dark:bg-slate-800
                   shadow-2xl text-primary animate-slide-up
                   pointer-events-auto scrollbar-hide"
      >
        {/* STICKY BUTTON */}
        <div className="sticky top-0 right-0 z-[60] flex justify-end p-4 pointer-events-none">
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 items-center justify-center
                       rounded-full bg-black/50 text-white
                       backdrop-blur-md transition hover:bg-black/70
                       hover:scale-110 active:scale-95 pointer-events-auto"
          >
            <X size={18} />
          </button>
        </div>

        {/* IMAGE */}
        <div className="-mt-20">
          <img
            src={project.image}
            alt={project.title}
            onClick={() => setIsZoomed(true)}
            className="h-64 sm:h-96 w-full object-cover rounded-t-3xl cursor-zoom-in transition-opacity hover:opacity-90"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 sm:p-10">
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold">
            {project.title}
          </h2>

          <p className="mb-6 text-secondary text-lg leading-relaxed">
            {project.fullDescription}
          </p>

          {/* TECHNICAL HIGHLIGHTS */}
          {project.highlights?.length > 0 && (
            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold">
                Technical Highlights
              </h3>
              <ul className="space-y-3 text-secondary text-sm leading-relaxed">
                {project.highlights.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* TECH STACK */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span key={index} className="tag px-4 py-2 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="flex flex-wrap gap-4 pb-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Live Demo
                <ExternalLink size={16} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button px-6 py-3 font-semibold inline-flex items-center gap-2 transition hover:scale-105 active:scale-95"
              >
                GitHub
                <GithubIcon size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* FULL SCREEN IMAGE */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 pointer-events-auto cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300"
          />
          <button className="absolute top-10 right-10 text-white text-4xl font-light hover:text-gray-300">
            ×
          </button>
        </div>
      )}
    </div>
  );
}

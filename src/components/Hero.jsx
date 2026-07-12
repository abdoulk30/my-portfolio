import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-center">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-6rem] h-72 w-72 -translate-x-[60%] rounded-full bg-accent/20 blur-3xl animate-blob" />
        <div className="absolute right-1/3 top-10 h-72 w-72 translate-x-1/2 rounded-full bg-fuchsia-400/20 blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      <div className="animate-fade-in">
        <span className="section-label mb-6">Full-Stack Developer</span>

        <h1 className="mx-auto mb-6 max-w-4xl text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-gray-700 dark:text-white">
          Full-Stack Developer building modern, scalable web applications
          with React and Node.js.
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-gray-600 dark:text-gray-400">
          I leverage AI to accelerate development and turn ideas into clean,
          production-ready systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowRight size={16} />
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
            <Mail size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

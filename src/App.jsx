import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-slate-900 text-white min-h-screen" : "bg-gray-100 text-black min-h-screen"}>

      {/* NAVBAR */}
      <nav className="sticky top-0 bg-opacity-80 backdrop-blur border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
          <h1 className="text-xl font-semibold">Abdoul Karim Ba</h1>

          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#skills" className="hover:text-gray-400">Skills</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm border px-3 py-1 rounded-lg hover:bg-white hover:text-black transition"
          >
            Toggle
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-28 px-6">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          I build products that actually solve problems.
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          I design and develop clean, practical applications with a focus on execution and real-world value.
        </p>

        <div className="flex justify-center gap-4">
          <a href="#projects" className="bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition">
            View Projects
          </a>
          <a href="#contact" className="border px-6 py-3 rounded-xl hover:scale-105 transition">
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            Hi! my name is Abdoul and I'm a builder who designs and develops practical, AI-powered 
            websites and tools. I specialize in collaborating with AI to turn ideas into clean, 
            functional products that solve real business problems. I'm highly execution-focused, 
            move fast, and care deeply about building things that are actually beneficial to 
            individuals and businesses alike.
          </p>
        </div>

        {/* PHOTO */}
        <div className="w-full h-80 bg-gray-700 rounded-2xl flex items-center justify-center">
          <span className="text-gray-400">Your Photo</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-slate-800 p-6 rounded-2xl hover:translate-y-[-5px] hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">Project {project}</h3>

              <p className="text-gray-400 mb-4">
                A clean, practical project that solves a real problem.
              </p>

              <div className="text-sm text-gray-500 mb-4">
                React • Node • API
              </div>

              <div className="flex gap-4 text-sm">
                <button className="hover:underline">Live</button>
                <button className="hover:underline">Code</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="mb-3 text-lg font-medium">Technical</h3>
            <ul className="space-y-2 text-gray-400">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>SQL</li>
              <li>API Development</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium">Other</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Problem Solving</li>
              <li>Debugging</li>
              <li>System Thinking</li>
              <li>Execution Focus</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-20 border-t border-gray-700">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>

        <div className="flex justify-center gap-6 text-gray-400">
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">Email</a>
        </div>
      </section>

    </div>
  );
}
export default function Hero() {
  return (
    <section className="text-center py-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-700 dark:text-white max-w-4xl mx-auto leading-tight">
        Full-Stack Developer building modern, scalable web applications with React and Node.js.
      </h1>

      <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8">
        I leverage AI to accelerate development and turn ideas into clean, production-ready systems.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="#projects"
          className="bg-gray-900 text-white dark:bg-white dark:text-black px-6 py-3 rounded-xl hover:scale-105 transition shadow-lg"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}
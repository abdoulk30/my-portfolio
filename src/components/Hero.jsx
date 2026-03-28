export default function Hero() {
  return (
    <section className="text-center py-32 px-6">

      <h1 className="text-5xl font-bold mb-6">
        I build products that solve real problems.
      </h1>

      <p className="text-gray-400 max-w-xl mx-auto mb-8">
        I design and develop clean, practical applications with a focus on execution and real-world value.
      </p>

      <div className="flex justify-center gap-4">

        <a
          href="#projects"
          className="bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Contact Me
        </a>

      </div>

    </section>
  )
}
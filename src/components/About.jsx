export default function About() {
  return (
    <section
        id="about"
        data-aos="fade-up"
        className="max-w-6xl mx-auto px-6 pt-4 pb-12 scroll-mt-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div>
          <span className="section-label mb-4">Who I am</span>
          <h2 className="text-3xl font-semibold mb-6 text-gray-600 dark:text-white">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Hi, I’m Abdoul — a full-stack developer focused on building practical, high-impact web applications.
            I specialize in turning ideas into clean, functional products using modern technologies like React and Node.js,
            while leveraging AI as a tool to accelerate development and improve execution.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            I hold a Bachelor’s degree in Computer Science from Western Governors University and completed
            the Hack Reactor Software Engineering program. I’ve built full-stack applications with authentication,
            databases, and real-world functionality, and I’m currently developing projects with Pursuit AI Native.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Outside of coding, I enjoy video games, sports, reading, and long walks.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-accent/30 to-fuchsia-400/20 blur-2xl" />
            <img
              src="/images/my-photo.png"
              alt="Abdoul Karim Ba"
              className="relative w-72 h-96 rounded-2xl object-cover shadow-2xl border border-gray-300 dark:border-slate-700"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

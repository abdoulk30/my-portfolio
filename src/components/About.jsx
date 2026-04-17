export default function About() {
  return (
    <section
        id="about"
        data-aos="fade-up"
        className="max-w-6xl mx-auto px-6 pt-4 pb-12 scroll-mt-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Hi! my name is Abdoul and I'm a builder who designs and develops practical,
            AI-powered websites and tools. I specialize in collaborating with AI to
            turn ideas into clean, functional products that solve real business
            problems.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            I attended the Hack Reactor Software Engineering bootcamp and obtained
            an advanced Software Engineering certificate.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            In my free time I enjoy playing video games, sports, reading books,
            and going on walks.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-72 h-96 bg-gray-200 dark:bg-slate-800 rounded-2xl flex items-center justify-center border border-gray-300 dark:border-slate-700">
            <span className="text-gray-500 dark:text-gray-400">
              Your Photo
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
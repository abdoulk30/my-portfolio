export default function About() {
  return (
    <section
        id="about"
        data-aos="fade-up"
        className="max-w-6xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SIDE */}
        <div>

          <h2 className="text-3xl font-semibold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Hi! my name is Abdoul and I'm a builder who designs and develops practical,
            AI-powered websites and tools. I specialize in collaborating with AI to
            turn ideas into clean, functional products that solve real business
            problems. I'm highly execution-focused, move fast, and care deeply about
            building things that are actually beneficial to individuals and
            businesses alike.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I attended the Hack Reactor Software Engineering bootcamp and obtained
            an advanced Software Engineering certificate. I also graduated from
            Western Governors University with a Bachelor's degree in Computer
            Science.
          </p>

          <p className="text-gray-400 leading-relaxed">
            In my free time I enjoy playing video games, sports, reading books,
            and going on walks. I also like sitting on the balcony to relax,
            reflect, and appreciate nature.
          </p>

        </div>


        {/* PHOTO SIDE */}
        <div className="flex justify-center">

          <div className="w-72 h-96 bg-slate-700 rounded-2xl flex items-center justify-center">

            <span className="text-gray-400">
              Your Photo
            </span>

          </div>

        </div>

      </div>

    </section>
  )
}
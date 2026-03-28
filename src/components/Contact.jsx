export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">

      <h2 className="text-3xl font-semibold mb-6">
        Contact
      </h2>

      <p className="text-gray-400 mb-10">
        If you'd like to connect, collaborate, or learn more about my work,
        feel free to reach out.
      </p>


      <div className="flex justify-center gap-8">

        <a
          href="https://github.com/"
          target="_blank"
          className="bg-slate-800 px-6 py-3 rounded-xl hover:-translate-y-1 hover:shadow-xl transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          className="bg-slate-800 px-6 py-3 rounded-xl hover:-translate-y-1 hover:shadow-xl transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:your@email.com"
          className="bg-slate-800 px-6 py-3 rounded-xl hover:-translate-y-1 hover:shadow-xl transition"
        >
          Email
        </a>

      </div>

    </section>
  )
}
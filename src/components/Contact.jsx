export default function Contact() {
  return (
    <section
        id="contact"
        data-aos="fade-up"
        className="max-w-4xl mx-auto px-6 py-12 text-center scroll-mt-24"
    >
      <h2 className="text-3xl font-semibold mb-6 text-primary">
        Contact
      </h2>

      <p className="text-secondary mb-10">
        If you'd like to connect, collaborate, or learn more about my work,
        feel free to reach out.
      </p>

      <div className="flex justify-center gap-8">
        {/* Swapped bg-slate-800 for the card class to allow light mode colors */}
        <a
          href="https://github.com/abdoulk30"
          target="_blank"
          className="card px-6 py-3 hover:-translate-y-1 hover:shadow-xl transition text-primary"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/abdoulk10/"
          target="_blank"
          className="card px-6 py-3 hover:-translate-y-1 hover:shadow-xl transition text-primary"
        >
          LinkedIn
        </a>

        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlQqkCHGvFGxkFZZJDSPWRwFrphNZsFFPJVRjFCzgrXZFQDFNbrGPlSpzsFHVvvkmGctQ"
          target="_blank"
          className="card px-6 py-3 hover:-translate-y-1 hover:shadow-xl transition text-primary"
        >
          Email
        </a>
      </div>
    </section>
  )
}
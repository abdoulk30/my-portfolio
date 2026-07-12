import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Contact() {
  const links = [
    {
      label: "GitHub",
      href: "https://github.com/abdoulk30",
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdoulk10/",
      icon: LinkedinIcon,
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlQqkCHGvFGxkFZZJDSPWRwFrphNZsFFPJVRjFCzgrXZFQDFNbrGPlSpzsFHVvvkmGctQ",
      icon: Mail,
    },
  ];

  return (
    <section
        id="contact"
        data-aos="fade-up"
        className="max-w-4xl mx-auto px-6 py-16 text-center scroll-mt-24"
    >
      <div className="flex justify-center">
        <span className="section-label mb-4">Get in touch</span>
      </div>

      <h2 className="text-3xl font-semibold mb-6 text-primary">
        Contact
      </h2>

      <p className="text-secondary mb-10">
        If you'd like to connect, collaborate, or learn more about my work,
        feel free to reach out.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover inline-flex items-center gap-2 px-6 py-3 text-primary font-medium"
          >
            <link.icon size={16} />
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

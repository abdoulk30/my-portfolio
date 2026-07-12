import { Braces, Code2, Server, Database, Sparkles, Layers, Users } from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      icon: Braces,
      skills: ["JavaScript", "Python", "SQL"],
    },
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "FastAPI"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "FastAPI"],
    },
    {
      title: "Tools & AI",
      icon: Sparkles,
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "REST APIs",
        "LLM APIs",
        "Claude Code",
        "Cursor",
        "VS Code",
        "Vite",
      ],
    },
    {
      title: "Concepts",
      icon: Layers,
      skills: [
        "Full-Stack Development",
        "Authentication",
        "API Design",
        "Debugging",
        "Prompt Engineering",
        "AI-Assisted Development",
      ],
    },
    {
      title: "Strengths",
      icon: Users,
      skills: [
        "Project Management",
        "Communication",
        "Adaptability",
        "Problem Solving",
        "Collaboration",
      ],
    },
  ];

  return (
    <section
        id="skills"
        data-aos="fade-up"
        className="max-w-6xl mx-auto px-6 py-12 scroll-mt-24"
    >
      <div className="flex justify-center">
        <span className="section-label mb-4">Toolkit</span>
      </div>

      <h2 className="text-3xl font-semibold mb-12 text-center text-primary">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="card card-hover p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent dark:text-accent-light">
                <group.icon size={18} />
              </span>
              <h3 className="text-lg font-semibold text-primary">
                {group.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <span key={i} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

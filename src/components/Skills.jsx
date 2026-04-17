export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["JavaScript", "React", "HTML", "CSS", "Responsive Design"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "Authentication"]
    },
    {
      title: "Database",
      skills: ["SQL", "Database Design"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Docker", "Debugging"]
    }
  ]

  return (
    <section
        id="skills"
        data-aos="fade-up"
        className="max-w-6xl mx-auto px-6 py-12 scroll-mt-24"
    >
      {/* Added text-primary to h2 */}
      <h2 className="text-3xl font-semibold mb-12 text-center text-primary">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group, index) => (
          /* Swapped bg-slate-800 for your .card class from index.css */
          <div
            key={index}
            className="card p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {group.title}
            </h3>

            {/* Swapped text-gray-400 for text-secondary */}
            <ul className="space-y-2 text-secondary">
              {group.skills.map((skill, i) => (
                <li key={i}>
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
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
        className="max-w-6xl mx-auto px-6 py-24 scroll-mt-24"
    >

      <h2 className="text-3xl font-semibold mb-12 text-center">
        Skills
      </h2>


      <div className="grid md:grid-cols-2 gap-8">

        {skillGroups.map((group, index) => (

          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl"
          >

            <h3 className="text-xl font-semibold mb-4">
              {group.title}
            </h3>


            <ul className="space-y-2 text-gray-400">

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
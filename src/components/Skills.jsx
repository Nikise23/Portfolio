function Skills() {
  const skillCategories = [
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Flask', 'REST APIs'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'Vue', 'JavaScript', 'TailwindCSS', 'HTML / CSS'],
    },
    {
      title: 'Bases de datos',
      skills: ['MongoDB', 'SQLite', 'SQL'],
    },
    {
      title: 'Herramientas',
      skills: ['Git', 'GitHub', 'Render', 'Vite'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-dark-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Stack Tecnológico
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark-bg rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-300 flex items-center before:content-['▹'] before:text-blue-400 before:mr-2 before:text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


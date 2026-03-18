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
    <section id="skills" className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-pixel text-neon-green text-2xl md:text-3xl text-center mb-12 glow-green">
          STACK TECNOLÓGICO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark-card p-6 border-2 border-neon-green rounded-none pixel-border"
            >
              <h3 className="font-pixel text-xs text-neon-cyan mb-6 glow-cyan">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-pixel text-[9px] text-neon-green tracking-[0.25em]">
                        {skill.toUpperCase()}
                      </span>
                      <span className="font-retro text-[9px] text-neon-cyan">
                        HP
                      </span>
                    </div>
                    <div className="w-full bg-black/70 border-2 border-neon-green overflow-hidden rounded-none">
                      <div className="flex gap-1 px-1 py-1">
                        {Array.from({ length: 10 }).map((_, i) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <div
                            key={i}
                            className="flex-1 h-3 bg-neon-green"
                          />
                        ))}
                      </div>
                    </div>
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



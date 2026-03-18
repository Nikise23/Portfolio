function ProjectCard({ project }) {
  return (
    <div
      className="bg-dark-card p-6 md:p-8 border-2 border-neon-cyan rounded-none transition-all duration-200 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,212,255,0.8)] group"
    >
      {/* Etiquetas de tipo de proyecto */}
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="font-retro px-2.5 py-1 border border-neon-purple text-neon-purple bg-black/40 rounded-none text-[10px] tracking-widest uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Título */}
      <h3 className="font-pixel text-xs md:text-sm text-neon-cyan mb-4 glow-cyan">
        {project.name}
      </h3>

      {/* Descripción */}
      <p className="font-retro text-neon-green/80 mb-6 leading-relaxed text-sm">
        {project.description}
      </p>

      {/* Tecnologías */}
      <div className="mb-6">
        <h4 className="font-retro text-[10px] text-neon-cyan/80 mb-3 uppercase tracking-[0.25em]">
          Stack Tecnológico
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="font-retro px-3 py-1 border border-neon-purple text-neon-purple bg-black/40 rounded-none text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Funcionalidades clave */}
      {project.features && project.features.length > 0 && (
        <div className="mb-6">
          <h4 className="font-retro text-[10px] text-neon-cyan/80 mb-3 uppercase tracking-[0.25em]">
            Funcionalidades Clave
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="font-retro text-neon-green/80 text-xs flex items-start gap-2 leading-relaxed"
              >
                <span className="text-neon-orange mt-1.5 flex-shrink-0">▹</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Arquitectura (más compacta) */}
      <div className="mb-6 p-3 bg-black/40 rounded-none border border-neon-green/40">
        <p className="font-retro text-neon-green/70 text-[11px] leading-relaxed">
          <span className="text-neon-cyan uppercase text-[9px] tracking-[0.25em]">Arquitectura: </span>
          {project.architecture}
        </p>
      </div>

      {/* Botones de acción */}
      <div className="flex flex-wrap gap-3 pt-2 border-t border-neon-green/30">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-retro text-xs px-5 py-2.5 border-2 border-neon-green text-neon-green bg-transparent rounded-none tracking-widest hover:bg-neon-green hover:text-black transition-transform duration-150 hover:translate-y-0.5 flex items-center gap-2 shadow-[0_0_12px_rgba(0,255,65,0.6)]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Ver Proyecto
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-retro text-xs px-5 py-2.5 border-2 border-neon-cyan text-neon-cyan bg-transparent rounded-none tracking-widest hover:bg-neon-cyan hover:text-black transition-transform duration-150 hover:translate-y-0.5 flex items-center gap-2 shadow-[0_0_12px_rgba(0,212,255,0.6)]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Ver Código
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard


function ProjectCard({ project }) {
  return (
    <div className="bg-dark-secondary rounded-xl p-6 md:p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-blue-500/20 group">
      {/* Etiquetas de tipo de proyecto */}
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-violet-500/20 text-violet-300 rounded-full text-xs font-semibold border border-violet-500/30 uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Título */}
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
        {project.name}
      </h3>

      {/* Descripción */}
      <p className="text-gray-300 mb-6 leading-relaxed text-base">
        {project.description}
      </p>

      {/* Tecnologías */}
      <div className="mb-6">
        <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
          Stack Tecnológico
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-md text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Funcionalidades clave */}
      {project.features && project.features.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
            Funcionalidades Clave
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="text-gray-300 text-sm flex items-start gap-2 leading-relaxed"
              >
                <span className="text-blue-400 mt-1.5 flex-shrink-0">▹</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Arquitectura (más compacta) */}
      <div className="mb-6 p-3 bg-dark-bg/50 rounded-lg border border-gray-800/50">
        <p className="text-gray-400 text-xs leading-relaxed">
          <span className="text-gray-500 font-semibold uppercase text-[10px] tracking-wider">Arquitectura: </span>
          {project.architecture}
        </p>
      </div>

      {/* Botones de acción */}
      <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-800">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm flex items-center gap-2 hover:scale-105 shadow-md hover:shadow-blue-500/50"
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
            className="px-5 py-2.5 bg-dark-bg hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 text-sm flex items-center gap-2 border border-gray-700 hover:border-gray-600 hover:scale-105"
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


function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          Nicolás Fernández
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-300">
          Full Stack Developer — Backend Focus
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Desarrollador orientado a backend con experiencia construyendo sistemas web completos para gestión médica, portales de contenido y aplicaciones administrativas.
          <br className="hidden md:block" />
          <span className="block mt-2">
            Me especializo en diseñar lógica de negocio, modelado de datos y APIs robustas que soportan aplicaciones reales.
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50"
          >
            Ver proyectos
          </button>
          <a
            href="https://github.com/Nikise23"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-dark-secondary hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-gray-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero



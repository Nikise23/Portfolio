function About() {
  return (
    <section id="about" className="py-20 px-4 bg-dark-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Sobre mí
          </span>
        </h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Soy desarrollador Full Stack con fuerte orientación al backend y a la arquitectura de sistemas.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Disfruto diseñar la lógica de negocio detrás de aplicaciones reales, modelar bases de datos y construir APIs que soporten aplicaciones escalables.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            He desarrollado múltiples sistemas completos en producción para la gestión de consultorios médicos, clínicas odontológicas y portales web, integrando autenticación, manejo de roles, persistencia de datos y lógica compleja de negocio.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Mi stack principal incluye Node.js, Python, MongoDB, SQL, React y Vue, trabajando siempre con arquitecturas claras y mantenibles.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About



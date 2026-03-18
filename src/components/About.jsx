function About() {
  return (
    <section id="about" className="py-20 px-4 bg-dark-bg">
      <div className="max-w-4xl mx-auto border-2 border-neon-green bg-dark-card/60 px-6 md:px-10 py-10 pixel-border">
        <h2 className="font-pixel text-neon-green text-2xl md:text-3xl text-center mb-10 glow-green">
          SOBRE MÍ
        </h2>
        <div className="max-w-none space-y-6">
          <p className="font-retro text-lg md:text-xl text-neon-green/80 leading-relaxed">
            Soy desarrollador Full Stack con fuerte orientación al backend y a la arquitectura de sistemas.
          </p>
          <p className="font-retro text-lg md:text-xl text-neon-green/80 leading-relaxed">
            Disfruto diseñar la lógica de negocio detrás de aplicaciones reales, modelar bases de datos y construir APIs que soporten aplicaciones escalables.
          </p>
          <p className="font-retro text-lg md:text-xl text-neon-green/80 leading-relaxed">
            He desarrollado múltiples sistemas completos en producción para la gestión de consultorios médicos, clínicas odontológicas y portales web, integrando autenticación, manejo de roles, persistencia de datos y lógica compleja de negocio.
          </p>
          <p className="font-retro text-lg md:text-xl text-neon-green/80 leading-relaxed">
            Mi stack principal incluye Node.js, Python, MongoDB, SQL, React y Vue, trabajando siempre con arquitecturas claras y mantenibles.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About



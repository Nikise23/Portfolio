import { useEffect, useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'

function Hero() {
  const [isGlitching, setIsGlitching] = useState(false)
  const subtitleText = 'Full Stack Developer — Backend Focus'
  const { text } = useTypewriter(subtitleText, 60)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      const timeout = setTimeout(() => setIsGlitching(false), 600)
      return () => clearTimeout(timeout)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-[80vh] md:min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-black via-dark-bg to-black"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1
          className={`font-pixel text-neon-green text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug glow-green ${
            isGlitching ? 'glitch-once' : ''
          }`}
          style={{ textShadow: '0 0 10px #00ff41, 0 0 30px #00ff41' }}
        >
          Nicolás Fernández
        </h1>

        <h2 className="font-retro text-neon-cyan text-xl md:text-2xl lg:text-3xl tracking-wide">
          {text}
          <span className="typewriter-cursor">_</span>
        </h2>

        <p className="font-retro text-base md:text-lg text-neon-green/80 max-w-2xl mx-auto leading-relaxed">
          Desarrollador orientado a backend con experiencia construyendo sistemas web completos para gestión médica,
          portales de contenido y aplicaciones administrativas.
          <br className="hidden md:block" />
          <span className="block mt-2">
            Me especializo en diseñar lógica de negocio, modelado de datos y APIs robustas que soportan aplicaciones
            reales.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button
            type="button"
            onClick={scrollToProjects}
            className="font-retro text-xs sm:text-sm px-8 py-3 border-2 border-neon-green text-neon-green bg-transparent rounded-none tracking-widest hover:bg-neon-green hover:text-black transition-transform duration-150 hover:translate-y-0.5 shadow-[0_0_15px_rgba(0,255,65,0.6)]"
          >
            VER PROYECTOS
          </button>
          <a
            href="https://github.com/Nikise23"
            target="_blank"
            rel="noopener noreferrer"
            className="font-retro text-xs sm:text-sm px-8 py-3 border-2 border-neon-cyan text-neon-cyan bg-transparent rounded-none tracking-widest hover:bg-neon-cyan hover:text-black transition-transform duration-150 hover:translate-y-0.5 shadow-[0_0_15px_rgba(0,212,255,0.6)]"
          >
            GITHUB
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero



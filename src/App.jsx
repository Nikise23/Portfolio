import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-dark-bg text-neon-green">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b-2 border-neon-green bg-dark-bg/95 backdrop-blur-sm">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <button
            type="button"
            onClick={() => handleNavClick('hero')}
            className="font-pixel text-xs sm:text-sm text-neon-green glow-green tracking-widest"
          >
            NF_PORTFOLIO
          </button>

          <div className="hidden md:flex items-center gap-6 font-retro text-sm uppercase">
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className="hover:text-neon-cyan transition-colors border-b-2 border-transparent hover:border-neon-cyan"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('projects')}
              className="hover:text-neon-cyan transition-colors border-b-2 border-transparent hover:border-neon-cyan"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('skills')}
              className="hover:text-neon-cyan transition-colors border-b-2 border-transparent hover:border-neon-cyan"
            >
              Skills
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="hover:text-neon-cyan transition-colors border-b-2 border-transparent hover:border-neon-cyan"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden font-retro text-xs uppercase text-neon-green flex items-center gap-2"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="text-neon-orange">▶</span>
            MENU
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-neon-green bg-dark-bg font-retro text-xs uppercase">
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className="block w-full text-left px-4 py-3 hover:bg-dark-card hover:text-neon-cyan"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('projects')}
              className="block w-full text-left px-4 py-3 hover:bg-dark-card hover:text-neon-cyan"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('skills')}
              className="block w-full text-left px-4 py-3 hover:bg-dark-card hover:text-neon-cyan"
            >
              Skills
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left px-4 py-3 hover:bg-dark-card hover:text-neon-cyan"
            >
              Contact
            </button>
          </div>
        )}
      </header>

      {/* Secciones */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App



import { useVisitCounter } from '../hooks/useVisitCounter'

function Footer() {
  const visits = useVisitCounter()

  return (
    <footer className="py-8 px-4 border-t-2 border-neon-green bg-black/60">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="text-center flex-1">
          <p className="font-pixel text-[10px] text-neon-green mb-2 tracking-[0.25em]">
            {'< INSERT COIN />'}
          </p>
          <p className="font-retro text-xs text-neon-green/80">
            © 2026 Nicolás Fernández — Full Stack Developer
          </p>
        </div>
        {typeof visits === 'number' && (
          <div
            className="font-pixel text-[10px] text-neon-green px-3 py-1 border border-neon-green/40 rounded-none tracking-[0.25em]"
            aria-label="contador global de visitas"
          >
            {visits}
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer



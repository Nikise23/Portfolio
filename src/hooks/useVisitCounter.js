import { useEffect, useState } from 'react'

const DEFAULT_API_URL = 'https://portfolio-visits-counter.onrender.com'

export function useVisitCounter() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_VISITS_API_URL || DEFAULT_API_URL

    const incrementAndFetch = async () => {
      try {
        const res = await fetch(`${baseUrl}/visits`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (!res.ok) throw new Error('Failed to fetch visits')
        const data = await res.json()
        if (typeof data.count === 'number') {
          setCount(data.count)
        }
      } catch {
        // en caso de error dejamos el contador oculto (null)
        setCount(null)
      }
    }

    incrementAndFetch()
  }, [])

  return count
}



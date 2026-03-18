import { useEffect, useState } from 'react'

export function useTypewriter(text, speed = 60) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    setDisplayed('')
    let index = 0

    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(index))
      index += 1

      if (index >= text.length) {
        clearInterval(interval)
      }
    }, speed)

    return () => {
      clearInterval(interval)
    }
  }, [text, speed])

  const isCompleted = displayed.length === text.length

  return { text: displayed, isCompleted }
}


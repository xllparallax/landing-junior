import { useState, useEffect } from 'react'

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = () => setMatches(media.matches)

    // Inicializa el estado
    setMatches(media.matches)

    // Suscripción
    media.addEventListener('change', listener)

    // Limpieza
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

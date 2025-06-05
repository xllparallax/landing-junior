import { useEffect, useState } from 'react'

export function useResponsiveHeight(
  minHeight = 310,
  maxHeight = 769,
  scaleStart = 770,
  scaleEnd = 1024 // Escala más rápida
) {
  const [height, setHeight] = useState(minHeight)

  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth

      if (width < scaleStart) return setHeight(minHeight)
      if (width >= scaleEnd) return setHeight(maxHeight)

      const percent = (width - scaleStart) / (scaleEnd - scaleStart)
      const interpolated = minHeight + (maxHeight - minHeight) * percent

      setHeight(Math.round(interpolated))
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [minHeight, maxHeight, scaleStart, scaleEnd])

  return height
}

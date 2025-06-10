import React from 'react'

import { Slider } from './slider'

export function Hero() {
  return (
    <header>
      <Slider slides={[{ image: '/arquivos/hero-image.png' }]} />
    </header>
  )
}

import React from 'react'
import styles from '../styles/hero.css'

export function Hero() {
  return (
    <header className={styles.heroBannerContainer}>
      <picture>
        <source
          media="(max-width: 480px)"
          srcSet="/arquivos/hero-banner-mobile.png"
          type="image/png"
        />

        <source
          media="(max-width: 768px)"
          srcSet="/arquivos/hero-banner-mobile.png"
          type="image/png"
        />

        <source srcSet="/arquivos/hero-image.png" type="image/webp" />
        <img
          src="/arquivos/hero-image.png"
          alt="Hero banner"
          className={styles.heroBannerImage}
        />
      </picture>
    </header>
  )
}

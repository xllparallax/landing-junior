import React from 'react'
import styles from '../styles/auto-slider.css'

export function AutoSlider() {
  const products = [
    'CAMISAS OFICIALES',
    'ACCESORIOS DEPORTIVOS',
    'ZAPATOS',
    'BOLSOS',
    'COLECCIONES PARA HOMBRE Y MUJER',
    'BANDERAS',
  ]

  return (
    <div className={styles.autosliderContainer}>
      <div className={styles.autosliderTrack}>
        <div className={styles.sliderItem}>
          {products.map((product, index) => (
            <span key={`first-${index}`}>
              {product}
              <span className={styles.starDivider}>★</span>
            </span>
          ))}
        </div>

        <div className={styles.sliderItem}>
          {products.map((product, index) => (
            <span key={`second-${index}`}>
              {product}
              <span className={styles.starDivider}>★</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

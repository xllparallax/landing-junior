import React from 'react'

import styles from '../styles/categories-produtcs.css'

export function CategoriesProducts() {
  const categories = [
    {
      id: 1,
      name: 'Camisetas',
      img: '/arquivos/camisa_junior.png',
      link: 'https://www.olimpica.com/31387?map=productClusterIds',
    },
    {
      id: 2,
      name: 'Accesorios',
      img: '/arquivos/accesorios_junior.png',
      link:
        'https://www.olimpica.com/35166?map=productClusterIds&order=OrderByTopSaleDESC',
    },
    {
      id: 3,
      name: 'Bolsos',
      img: '/arquivos/bolsos_junior.png',
      link:
        'https://www.olimpica.com/36104?map=productClusterIds&order=OrderByTopSaleDESC',
    },
    {
      id: 4,
      name: 'Morrales',
      img: '/arquivos/morrales_junior.png',
      link: 'https://www.olimpica.com/35165?map=productClusterIds',
    },
  ]

  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img
            src="/arquivos/ESCUDO_JUNIOR.png"
            alt="Escudo del Junior | Olímpica"
            loading="lazy"
          />
        </div>
      </div>
      <div className={styles.titleSection}>
        <p className={styles.categoryTitle}>
          ENCUENTRA TODO <span>FÁCILMENTE</span>
        </p>
        <span className={styles.titleDescription}>
          Obtén todo lo que necesitas en un solo lugar
        </span>
      </div>
      <div className={styles.categoriesGridOl}>
        {categories.map((category) => (
          <a
            key={category.id}
            href={category.link}
            rel="noreferrer"
            target="_blank"
            className={styles.categoryItemsJunior}
          >
            <div className={styles.categoryCircle}>
              <img
                src={category.img}
                alt={category.name}
                className={styles.imgsJunior}
              />
            </div>
            <span className={styles.categoryNameJunior}>{category.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

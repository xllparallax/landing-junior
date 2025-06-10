import React from 'react'

import styles from '../styles/category.css'

export function Category() {
  return (
    <section
      className={styles.categorySection}
      aria-label="Categoría de productos"
    >
      <img
        src="/arquivos/fondo-3.png"
        alt=""
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <div className={styles.categoryContent}>
        <p className={styles.categoryTitle}>
          VIVE LA <span>PASIÓN</span>
        </p>
        <span
          className={styles.categoryDescription}
          aria-label="Descripción de la categoría"
        >
          (Espacio para agregar descripción)
        </span>
      </div>

      <div
        className={styles.categoryGrid}
        role="list"
        aria-label="Listado de categorías"
      >
        <a
          style={{ textDecoration: 'none' }}
          href="https://www.olimpica.com.co/28056?map=productClusterIds"
          target="_blank"
          className={`${styles.categoryItem} ${styles.categoryItemRed}`}
          role="listitem"
        >
          <div className={styles.categoryBg} />
          <img
            src="/arquivos/rectangle-8985.png"
            className={styles.categoryImage}
            alt="Categoría de ropa para hombre Junior Olimpica"
            loading="lazy"
          />
          <div className={styles.categoryName}>
            <p>HOMBRES</p>
          </div>
        </a>

        <a
          style={{ textDecoration: 'none' }}
          href="https://www.olimpica.com.co/28058?map=productClusterIds"
          target="_blank"
          className={`${styles.categoryItem} ${styles.categoryItemBlue}`}
          role="listitem"
        >
          <div className={styles.categoryBg} />
          <img
            src="/arquivos/rectangle 8985-kid.png"
            className={styles.categoryImage}
            alt="Categoría de ropa para niños Junior Olimpica"
            loading="lazy"
          />
          <div className={styles.categoryName}>
            <p>NIÑOS</p>
          </div>
        </a>

        <a
          style={{ textDecoration: 'none' }}
          href="https://www.olimpica.com.co/28057?map=productClusterIds"
          className={`${styles.categoryItem} ${styles.categoryItemRed}`}
          role="listitem"
        >
          <div className={styles.categoryBg} />
          <img
            src="/arquivos/Rectangle 8985-woman.png"
            className={styles.categoryImage}
            alt="Categoría de ropa para mujer Junior Olimpica"
            loading="lazy"
          />
          <div className={styles.categoryName}>
            <p>MUJER</p>
          </div>
        </a>

        <div
          className={`${styles.categoryItem} ${styles.categoryItemBlue}`}
          role="listitem"
        >
          <div className={styles.categoryBg} />
          <img
            src="/arquivos/rectangle-8985-bottle.png"
            className={styles.categoryImage}
            alt="Categoría de accesorios Junior Olimpica"
            loading="lazy"
          />
          <div className={styles.categoryName}>
            <p>ACCESORIOS</p>
          </div>
        </div>
      </div>
    </section>
  )
}

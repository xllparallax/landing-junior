import React from 'react'
import styles from '../styles/adidas-collection.css'

export function AdidasCollection() {
  return (
    <section
      className={styles.adidasCollection}
      aria-label="Colección Adidas de uniformes deportivos Junior Olimpica"
    >
      <img
        src="/arquivos/go-junior.png"
        className={styles.goJunior}
        alt="Vamos Junior Olimpica"
        loading="lazy"
      />
      <div className={styles.collectionContent}>
        <div className={styles.playersSection} role="presentation" />
        <div className={styles.leftSide} role="presentation"></div>
        <div className={styles.infoSection}>
          <article className={styles.infoContent}>
            <h1 className={styles.collectionTitle}>
              Colección <span className={styles.adidasText}>ADIDAS</span>
            </h1>

            <p className={styles.collectionDescription}>
              Luce los colores de tu equipo con la colección de uniformes
              Adidas. Desde la camiseta oficial hasta el uniforme completo, cada
              pieza refleja la esencia del fútbol.
            </p>

            <p className={styles.collectionSubtitle}>
              ¡Equípate y apoya a tu equipo con pasión!
            </p>

            <a
              style={{ textDecoration: 'none' }}
              href="https://www.olimpica.com.co/28055?map=productClusterIds"
              className={styles.ctaButton}
              aria-label="Ver más de la colección Adidas"
            >
              VER MÁS
            </a>
          </article>
        </div>
      </div>

      <div className={styles.celebrationSection} role="presentation" />
    </section>
  )
}

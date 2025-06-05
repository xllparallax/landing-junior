import React from 'react'
import styles from '../styles/category.css'
// import menCategory from '../../public/men-category.webp'
// import kidCategory from '../../public/kid-category.webp'
// import womanCategory from '../../public/woman-category.webp'
// import accessoriesCategory from '../../public/accessories-category.webp'

export function Category() {
  return (
    <section
      className={styles.categorySection}
      aria-label="Categoría de productos"
    >
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
          <div className={styles.categoryBg}></div>
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
          <div className={styles.categoryBg}></div>
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
          <div className={styles.categoryBg}></div>
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
          <div className={styles.categoryBg}></div>
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

  // return (
  //   <section
  //     className={styles.categorySectionBg}
  //     aria-label="Categoría de productos"
  //   >
  //     <div className={styles.categoryContent}>
  //       <p className={styles.categoryTitle}>
  //         Vive la <span> Pasión</span>
  //       </p>
  //       <span
  //         className={styles.categoryDescription}
  //         aria-label="Descripción de la categoría"
  //       >
  //         (Espacio para agregar descripción)
  //       </span>
  //     </div>
  //     <div
  //       className={styles.categoryGrid}
  //       role="list"
  //       aria-label="Listado de categorías"
  //     >
  //       <img src="/arquivos/image 13.png" alt="" />

  //       <div className={styles.categoryItemRed} role="listitem">
  //         <img
  //           src="/arquivos/rectangle-8985.png"
  //           className={styles.categoryImage}
  //           alt="Categoría de ropa para hombre Junior Olimpica"
  //           loading="lazy"
  //         />
  //         <div className={styles.categoryName}>
  //           <p>Hombre</p>
  //         </div>
  //       </div>
  //       <div className={styles.categoryItemBlue} role="listitem">
  //         <img
  //           src="/arquivos/rectangle 8985-kid.png"
  //           className={styles.categoryImage}
  //           alt="Categoría de ropa para niños Junior Olimpica"
  //           loading="lazy"
  //         />
  //         <div className={styles.categoryName}>
  //           <p>Niños</p>
  //         </div>
  //       </div>
  //       <div className={styles.categoryItemRed} role="listitem">
  //         <img
  //           src="/arquivos/Rectangle 8985-woman.png"
  //           className={styles.categoryImage}
  //           alt="Categoría de ropa para mujer Junior Olimpica"
  //           loading="lazy"
  //         />
  //         <div className={styles.categoryName}>
  //           <p>Mujer</p>
  //         </div>
  //       </div>
  //       <div className={styles.categoryItemBlue} role="listitem">
  //         <img
  //           src="/arquivos/rectangle-8985-bottle.png"
  //           className={styles.categoryImage}
  //           alt="Categoría de accesorios Junior Olimpica"
  //           loading="lazy"
  //         />
  //         <div className={styles.categoryName}>
  //           <p>Accesorios</p>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // )
}

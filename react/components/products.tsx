import React, { useState } from 'react'

import styles from '../styles/products.css'

export function Products({
  accesorios,
  hombres,
  mujer,
  infantil,
}: {
  accesorios: any
  hombres: any
  mujer: any
  infantil: any
}) {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = [
    {
      label: 'Accesorios',
      content:
        'Contenido de camisetas oficiales - Aquí van todas las camisetas del equipo',
    },
    {
      label: 'Hombre',
      content: 'Contenido de accesorios - Gorras, bufandas, llaveros y más',
    },
    {
      label: 'Mujer',
      content: 'Contenido de zapatos - Zapatillas y botas oficiales del equipo',
    },
    {
      label: 'Infantil',
      content: 'Otros productos - Artículos diversos y productos especiales',
    },
  ]

  return (
    <div className={styles.containerJuju}>
      <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
        <img src="/arquivos/fondo-4.png" alt="" className={styles.juju} />
      </div>
      <div className={styles.camisetasOficialesContainer}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <picture>
            <source
              srcSet="/arquivos/fondo-camisa-mobile.png"
              media="(max-width: 768px)"
            />
            <source
              srcSet="/arquivos/fondo-camisa.png"
              media="(min-width: 769px)"
            />
            <img
              srcSet="/arquivos/fondo-camisa.png"
              alt="Camisetas oficiales"
              style={{ width: '100%', height: 'auto' }}
            />
          </picture>

          <div style={{ display: 'flex', height: '3.5rem' }}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                style={{
                  flex: '1',
                  border: 'none',
                  backgroundColor: '#ffff',
                  color: activeTab === index ? '#005CA9' : '#7E7E7E',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: 'bold',
                  borderBottom:
                    activeTab === index
                      ? '5px solid #005CA9'
                      : '5px solid transparent',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '0 0 8px 8px',
          }}
        >
          <div style={{ marginTop: '1.5rem' }}>
            {activeTab === 0 && <>{accesorios}</>}

            {activeTab === 1 && <>{hombres}</>}

            {activeTab === 2 && <>{mujer}</>}

            {activeTab === 3 && <>{infantil}</>}
          </div>
        </div>
      </div>

      {/* <div className={styles.juniorLogo}>
        <img src="/arquivos/escudo (2).png" alt="" />|
      </div> */}
    </div>
  )
}

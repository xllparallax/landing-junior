/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren, useState } from 'react'

import { Hero } from './components/hero'
import { Slider } from './components/slider'
import { Category } from './components/category'
import { Products } from './components/products'
import { AutoSlider } from './components/auto-slider'
import { PostSlider } from './components/post-slider'
import { ModalHistory } from './components/modal-history'
import { useMediaQuery } from './hooks/use-media-queyr'
import { useGetChildren } from './hooks/use-get-children'
import { AdidasCollection } from './components/adidas-collection'
import { CategoriesProducts } from './components/categories-products'
import { historyData, Slider2 } from './components/slider-2'
import styles from './styles/highlighted.css'

type Props = PropsWithChildren<{}>

function Landing({ children }: { children: Props }) {
  const [showModal, setShowModal] = useState(false)
  const [activeSection, setActiveSection] = useState('fundacion')
  const accesorios = useGetChildren({ children, position: 0 })
  const hombres = useGetChildren({ children, position: 1 })
  const mujer = useGetChildren({ children, position: 2 })
  const infantil = useGetChildren({ children, position: 3 })
  const isMobile = useMediaQuery('(max-width: 768px)')

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  // console.log({ children })

  return (
    <>
      <div style={{ padding: '1rem 0' }}>
        <Slider
          slides={[
            {
              image: '/arquivos/JUNIOR-2025-HUINCHA.jpg',
              mobileImage: '/arquivos/JUNIOR-2025-HUINCHA-MB.jpg',
              link: '/35163?map=productClusterIds',
            },
          ]}
        />
      </div>
      <Hero />
      <AutoSlider />
      <AdidasCollection />
      <Category />
      <CategoriesProducts />
      <Slider
        slides={[
          {
            image: '/arquivos/JUNIOR-2025.jpg',
            mobileImage: '/arquivos/JUNIOR-2025-B1-MB.jpg',
            link: '/35163?map=productClusterIds',
          },
          {
            image: '/arquivos/ACCESORIOS PRINC.jpg',
            mobileImage: '/arquivos/ACCESORIOS MB.jpg',
            link: '/35166?map=productClusterIds&order=OrderByTopSaleDESC',
          },
          {
            image: '/arquivos/BOLSOS-JUNIOR.jpg',
            mobileImage: '/arquivos/BOLSOS-JUNIOR-B1-MB.jpg',
            link: '/36433?map=productClusterIds&order=OrderByTopSaleDESC',
          },
          {
            image: '/arquivos/JUNIO-2023-B1.jpg',
            mobileImage: '/arquivos/JUNIOR-2023-B1-MB.jpg',
            link: '/36435?map=productClusterIds&order=OrderByTopSaleDESC',
          },
        ]}
        autoplay
      />
      {isMobile && (
        <>
          <style>
            {`@import
            url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap')`}
          </style>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '9rem',
              backgroundImage: 'url(/arquivos/bg-teamjunior-filter2.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Div original con tu contenido existente */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              height: '20rem',
            }}
          >
            <img
              src="/arquivos/bg-historiajuniot-mobile.png"
              alt=""
              style={{
                width: '100%',
                height: '100%',
              }}
            />
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                padding: '3.5rem',
                gap: '2rem',
              }}
            >
              <h2
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
                  margin: '0',
                  fontFamily: 'Bebas Neue',
                  fontWeight: '400',
                  fontStyle: 'normal',
                }}
              >
                Junior FC: Pasión, Historia y Gloria
              </h2>
              <p
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
                  fontSize: '12px',
                  margin: '0',
                }}
              >
                Fundado en 1924, Junior se ha convertido en un símbolo de la
                Costa Caribe. Con 10 títulos de liga, glorias como Viera y
                Valenciano, y una rica historia de triunfos nacionales e
                internacionales.
              </p>
              <div>
                <button
                  onClick={openModal}
                  className={styles.slideButtonJunior}
                >
                  Ver historia
                </button>
              </div>
              {/* <VuamosJunior /> */}
            </div>
          </div>

          {showModal && (
            <ModalHistory
              activeSection={activeSection}
              closeModal={closeModal}
              historyData={historyData}
              setActiveSection={setActiveSection}
            />
          )}
        </>
      )}
      {!isMobile && <Slider2 />}
      <Products
        accesorios={accesorios.component}
        hombres={hombres.component}
        infantil={infantil.component}
        mujer={mujer.component}
      />
      <PostSlider />
    </>
  )
}

export default Landing

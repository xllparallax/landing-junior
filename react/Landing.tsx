import React, { useState } from 'react'

import { Hero } from './components/hero'
import { Slider } from './components/slider'
import { Category } from './components/category'
// import { Products } from './components/products'
import { AutoSlider } from './components/auto-slider'
import { PostSlider } from './components/post-slider'
import { ModalHistory } from './components/modal-history'
import { useMediaQuery } from './hooks/use-media-queyr'
// import { useGetChildren } from './hooks/use-get-children'
import { AdidasCollection } from './components/adidas-collection'
import { historyData, Slider2 } from './components/slider-2'
import styles from './styles/highlighted.css'

// type Props = PropsWithChildren<{}>

function Landing() {
  const [showModal, setShowModal] = useState(false)
  const [activeSection, setActiveSection] = useState('fundacion')
  // const accesorios = useGetChildren({ children, position: 0 })
  // const hombres = useGetChildren({ children, position: 1 })
  // const mujer = useGetChildren({ children, position: 2 })
  // const infantil = useGetChildren({ children, position: 3 })
  const isMobile = useMediaQuery('(max-width: 768px)')

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  // console.log({ children })

  return (
    <>
      <Hero />
      <AutoSlider />
      <AdidasCollection />
      <Category />
      <Slider
        slides={[
          {
            image:
              'https://olimpica.vtexassets.com/assets/vtex.file-manager-graphql/images/1682d6e1-e842-4983-a618-8437a8c78656___6b4edb4687d18045d63e53e123d3beca.jpg',
            link:
              'https://landingjunior--olimpica.myvtex.com/moda/junior/accesorios-junior',
          },
          {
            image:
              'https://olimpica.vtexassets.com/assets/vtex.file-manager-graphql/images/4d19886c-e3d0-4d4b-8597-10786bcdd232___8066f325155bab752af61c4271424ea2.jpg',
            link:
              'https://landingjunior--olimpica.myvtex.com/31388?map=productClusterIds',
          },
        ]}
      />
      {isMobile && (
        <>
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
              src="/arquivos/bg-modal.png"
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
                padding: '2rem',
                gap: '1rem',
              }}
            >
              <h2
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
                  margin: '0',
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
                <button onClick={openModal} className={styles.slideButton}>
                  Ver historia completa
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
      {/* <Products
        accesorios={accesorios.component}
        hombres={hombres.component}
        infantil={infantil.component}
        mujer={mujer.component}
      /> */}
      <PostSlider />
    </>
  )
}

export default Landing

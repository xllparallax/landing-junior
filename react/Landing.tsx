import React, { PropsWithChildren, useState } from 'react'

import { useGetChildren } from './hooks/use-get-children'
import { Hero } from './components/hero'
import { AutoSlider } from './components/auto-slider'
import { AdidasCollection } from './components/adidas-collection'
import { Category } from './components/category'
import { Slider } from './components/slider'
import { Products } from './components/products'
import { PostSlider } from './components/post-slider'
import { useMediaQuery } from './hooks/use-media-queyr'
import styles from './styles/highlighted.css'
import { historyData, Slider2, VuamosJunior } from './components/slider-2'
import { ModalHistory } from './components/modal-history'

type Props = PropsWithChildren<{}>

function Landing({ children }: Props) {
  const [showModal, setShowModal] = useState(false)
  const [activeSection, setActiveSection] = useState('fundacion')
  const accesorios = useGetChildren({ children, position: 0 })
  const hombres = useGetChildren({ children, position: 1 })
  const mujer = useGetChildren({ children, position: 2 })
  const infantil = useGetChildren({ children, position: 3 })
  const isMobile = useMediaQuery('(max-width: 768px)')

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  console.log({ children })

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
            }}
          >
            <img
              src="/arquivos/Group 1000002335 1.png"
              alt=""
              style={{
                width: '100%',
              }}
            />
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <h2
                style={{
                  color: '#fff',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
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
              <VuamosJunior />
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

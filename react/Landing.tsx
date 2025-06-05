import React, { PropsWithChildren } from 'react'
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
import { Slider2, VuamosJunior } from './components/slider-2'

type Props = PropsWithChildren<{}>

function Landing({ children }: Props) {
  const accesorios = useGetChildren({ children, position: 0 })
  const hombres = useGetChildren({ children, position: 1 })
  const mujer = useGetChildren({ children, position: 2 })
  const infantil = useGetChildren({ children, position: 3 })
  const isMobile = useMediaQuery('(max-width: 768px)')

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
            className={styles.highlightedContent}
            style={{
              padding: '20px',
              boxSizing: 'border-box',
              width: '100%',
              maxWidth: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {' '}
            <a
              target="_blank"
              href="https://www.instagram.com/juniorclubsa/"
              style={{
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: '20px',
                textTransform: 'uppercase',
                color: '#ffff',
              }}
            >
              instagram
            </a>
            <a
              style={{ textDecoration: 'none' }}
              href="https://www.instagram.com/reel/DI2UGJhtE5X/?igsh=MTBna2hycnNsemV4MA%3D%3D"
              target="_blank"
            >
              <h2
                className={styles.tilePost}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  marginBottom: '0',
                  lineHeight: '1.1',
                  color: 'white',
                  textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
                  letterSpacing: '-0.5px',
                  maxWidth: '100%',
                  wordBreak: 'break-word',
                }}
              >
                🎥| ¡SE CALIENTA LA PREVIA! 🔥🦈 <br /> Esto dijeron nuestros
                jugadores Steven <br /> Rodríguez y Santiago Mele, previo al
                encuentro ante Deportivo Pereira.
              </h2>
              <VuamosJunior />
            </a>
          </div>
        </div>
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

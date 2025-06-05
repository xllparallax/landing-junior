import React, { useState } from 'react'
import { useResponsiveHeight } from '../hooks/use-responsive-height'
import sliderStyles from '../styles/slider-2.css'

export function Slider2() {
  const [currentSlide] = useState(0)
  const responsiveHeight = useResponsiveHeight(310, 750, 770, 1920)

  const slides = [
    {
      id: 1,
      content: (
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <img
              src="/arquivos/Group-1000002338.png"
              alt="Viera"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <div className={sliderStyles.contentPostConttainer}>
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
                className={sliderStyles.tilePost}
                style={{
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
      ),
    },
  ]

  const styles: any = {
    sliderContainer: {
      width: '100%',
      height: `${responsiveHeight}px`,
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#003DA5',
    },
    slider: {
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    slide: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0,
      transition: 'opacity 0.5s ease-in-out',
    },
    slideActive: {
      opacity: 1,
    },
  }

  return (
    <div style={styles.sliderContainer}>
      <div style={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              ...styles.slide,
              ...(index === currentSlide ? styles.slideActive : {}),
            }}
          >
            {slide.content}
          </div>
        ))}
      </div>
    </div>
  )
}

interface VuamosJuniorProps {
  className?: string
}

export function VuamosJunior({ className }: VuamosJuniorProps) {
  return (
    <div className={`${sliderStyles.container} ${className || ''}`}>
      <span className={sliderStyles.text}>#VAMOSJUNIOR</span>
    </div>
  )
}

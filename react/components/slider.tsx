/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import styles from '../styles/slider.css'

interface SlideData {
  image: string
  mobileImage?: string
  link?: string
  alt?: string
}

interface SliderProps {
  slides: SlideData[]
  autoplay?: boolean
  autoplayInterval?: number
}

export function Slider({
  slides,
  autoplay = false,
  autoplayInterval = 6000,
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [autoplay, autoplayInterval, currentIndex])

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderWrapper}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            {slide.link ? (
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.slideLink}
              >
                <img
                  src={slide.image}
                  alt={slide.alt ?? `Slide ${index + 1}`}
                  className={styles.slideImageDesktop}
                />
                {slide.mobileImage && (
                  <img
                    src={slide.mobileImage}
                    alt={slide.alt ?? `Slide ${index + 1}`}
                    className={styles.slideImageMobile}
                  />
                )}
              </a>
            ) : (
              <>
                <img
                  src={slide.image}
                  alt={slide.alt ?? `Slide ${index + 1}`}
                  className={styles.slideImageDesktop}
                />
                {slide.mobileImage && (
                  <img
                    src={slide.mobileImage}
                    alt={slide.alt ?? `Slide ${index + 1}`}
                    className={styles.slideImageMobile}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <button
        className={`${styles.navButtonSlider} ${styles.prevButtonSlider}`}
        onClick={prevSlide}
        aria-label="Anterior"
      >
        <svg className={styles.navIcon} viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <button
        className={`${styles.navButtonSlider} ${styles.nextButtonSlider}`}
        onClick={nextSlide}
        aria-label="Siguiente"
      >
        <svg className={styles.navIcon} viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </div>
  )
}

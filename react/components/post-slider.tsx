import React, { useEffect, useRef, useState } from 'react'

import styles from '../styles/post-slider.css'

export function PostSlider() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<any>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const newsItems = [
    {
      id: 1,
      link:
        'https://www.instagram.com/reel/DKa_mxnt9AI/?igsh=MXFtZjhzMmI2cXJrbw==',
      title:
        'Junior FC on Instagram: "🎥| UNA TARDE EN EL ROMELIO VOL 2.¡NOS SEGUIMOS PREPARANDO! 💪🔥 #VamosJunior"',
      date: '3/06/25',
      image:
        'https://scontent.cdninstagram.com/v/t51.71878-15/503301376_9653544508106744_9001201975109345272_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzY0NjUwNjU4OTg1OTg2MDQ4OA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkciJ9&_nc_ohc=wXYEvUm3VOkQ7kNvwFeWEsD&_nc_oc=AdnzmYortrYDanYAINf1OfVdpUeU4hPt1x2FeS4BkX_DIcpf3qwxivgPVYRXOO23HCc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=K9yVrpLlAOhv9XRVuV9ToA&oh=00_AfOLCrI4A49OfttGJNpQL9IOQSh68GUe8rwtFvEvfxqL2A&oe=6847C270',
      description: '(Espacio para agregar descripción)',
      type: 'basketball',
    },
    {
      id: 2,
      link:
        'https://www.instagram.com/p/DKaLhQyRuQz/?img_index=4&igsh=YmRkMXNhb2R6N2gw',
      title:
        'Junior FC on Instagram: "📸| PRIMER ENTRENAMIENTO DEL DÍA ✅ #VamosJunior"',
      date: '02/06/25',
      image:
        'https://scontent.cdninstagram.com/v/t51.75761-15/502756599_18517155523044049_342359563379060770_n.jpg?stp=c216.0.648.648a_dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=ZyuuxECySXEQ7kNvwEBJme-&_nc_oc=AdkLRtPDVrFm8_DZ9vdKmyPM1jcz6wCrhA_3lgpkZt_0d7RUpwxnPowNG7yz3le5ea0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=O-Gsu9fT_7rDj35E2sPACA&oh=00_AfNjnGDsEkoNr_56Wkc5z1znl2RtGjxedegqs89yTYiKQA&oe=6847D0CC',
      description: '(Espacio para agregar descripción)',
      type: 'cheerleader',
    },
    {
      id: 3,
      link: 'https://www.instagram.com/p/DKZ9aUUt_Ma/?igsh=cm5mYzBld3RwOG9x',
      title:
        'Junior FC on Instagram: "¡LA SEXTA ESTRELLA BRILLÓ! ⭐ Un día como hoy, en 2010, ¡la fiesta fue total en Barranquilla! ¿Hincha tiburón, cómo celebraste ese título? 👇 ¡Te leemos en los comentarios! #VamosJunior"',
      date: '02/06/25',
      description: '(Espacio para agregar descripción)',
      image:
        'https://scontent.cdninstagram.com/v/t51.75761-15/503287244_18517132699044049_6956728004348934425_n.jpg?stp=c269.0.808.808a_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=mh0NysEb77gQ7kNvwFYuhfC&_nc_oc=AdlKheGGO4Qn3771v-LZRRUnqAwdTjEH9xG85Kvy7ERKuoVsjZwzT6o3ft4QctSIP7w&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=DIeIfXj1-Ut2Q3yXKJIKOw&oh=00_AfOLDm-qhrPJhABao4VHT1CoQuK9K7Y-ITOu2MXfFNycZw&oe=6847D3C3',
      type: 'mascot',
    },
    {
      id: 4,
      link: 'https://www.instagram.com/reel/DKV5E-Itshy/?igsh=YXBzaWZ3Y3Z4eDNw',
      title: 'Junior FC on Instagram: "Eterno ❤ #VamosJunior"',
      date: '01/06/25',
      description: '(Espacio para agregar descripción)',
      image:
        'https://scontent.cdninstagram.com/v/t51.75761-15/502669599_18516820810044049_3048400169896460690_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=MzY0NTA3MDUwMzY3MzUxNDA5OA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyOTB4MjI5NC5zZHIifQ%3D%3D&_nc_ohc=W3wr9AatIhQQ7kNvwFsrWSv&_nc_oc=AdlN8pnZbs-f12o10N-CMqmrHHK6Q43kr5TWtWrCJJbHLFYqADX_vKY6zw-Ap3QE7vk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=8siBjsRhLbBD19nAR3G-HQ&oh=00_AfOg5aY7Hp-oKA8B9MHywphfMhUJemzia4ohB8oq7sz94Q&oe=6847BA3E',
      type: 'mascot',
    },
    {
      id: 5,
      link: 'https://www.instagram.com/reel/DKVivr5vOti/?igsh=ZnJ2enExZzM3aHI=',
      title:
        'Junior FC on Instagram: "🦈⚽¡Sobre el final del primer tiempo, Jhonier Guerrero se inventó una gran jugada, entró al área y remató con potencia para marcar el empate de Junior ante Tolima! #LALIGAxWIN"',
      date: '01/06/25',
      description: '(Espacio para agregar descripción)',
      image:
        'https://scontent.cdninstagram.com/v/t51.75761-15/501118193_18502718719017624_2475798290886278503_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=MzY0NDk3MjI4Mzk2MjY0OTQ0Mg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYwNHgxMDc0LnNkciJ9&_nc_ohc=sKwIS9E3S14Q7kNvwErXanm&_nc_oc=AdnHwz7sFkgPOUub7Bq-zpVdI6-LLDDdKb9aU0KGZWKIhiaFujSZLYcq-6RIk_7KiRg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=8siBjsRhLbBD19nAR3G-HQ&oh=00_AfN85afpY0LtRhdjj0dubgjTLPmp3d0AV-b9pGpWoFqkfA&oe=6847CB01',
      type: 'mascot',
    },
    {
      id: 6,
      link:
        'https://www.instagram.com/p/DKVVdCzRbp8/?img_index=4&igsh=MW44bGEzNGhhdDVk',
      title: 'Junior FC on Instagram: "📸| ¡EN CASA! #VamosJunior"',
      date: '01/06/25',
      description: '(Espacio para agregar descripción)',
      image:
        'https://scontent.cdninstagram.com/v/t51.75761-15/503043022_18516781288044049_1957524959463948365_n.jpg?stp=c288.0.864.864a_dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=ZQsBUROfDQQQ7kNvwE8r-Ha&_nc_oc=AdlUfrhokyTnqJYS5U-XFYvUgC5ToX3WKnLfixPrNWCsdZ75nk-7CGNWBlr58pmk3wg&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=deU0LnEIYheOc9voHSJbmA&oh=00_AfObApOoAndP3BxDlvY2-Xfn0ejDhqPw8p2nLG6nWsh-KQ&oe=6847D10C',
      type: 'mascot',
    },
  ]

  const scrollToIndex = (index: any) => {
    if (carouselRef.current) {
      const carousel = carouselRef.current
      const items = carousel.children

      if (items[index]) {
        const item = items[index] as HTMLElement
        const scrollLeft =
          item.offsetLeft - (carousel.offsetWidth - item.offsetWidth) / 2

        carousel.scrollTo({ left: scrollLeft, behavior: 'smooth' })
        setCurrentIndex(index)
      }
    }
  }

  const scrollCarousel = (direction: any) => {
    const newIndex =
      direction === 1
        ? (currentIndex + 1) % newsItems.length
        : (currentIndex - 1 + newsItems.length) % newsItems.length

    scrollToIndex(newIndex)
  }

  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      scrollCarousel(1)
    }, 4000)
  }

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
      autoScrollRef.current = null
    }
  }

  useEffect(() => {
    startAutoScroll()

    return () => stopAutoScroll()
  }, [])

  return (
    <div className={styles.newsSection}>
      <div className={styles.vamosJunior}>
        <img
          src="/arquivos/vamos-junior.png"
          alt="Vamos Junior"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className={styles.backgroundImageWrapper}>
        <picture>
          <source
            srcSet="/arquivos/red-diagonal-mobile.png"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/arquivos/red-diagonal.png"
            media="(min-width: 769px)"
          />
          <img
            src="/arquivos/red-diagonal.png"
            alt="Fondo diagonal rojo"
            className={styles.backgroundImage}
          />
        </picture>
      </div>

      <div className={styles.container}>
        <div className={styles.carouselContainer}>
          <div className={styles.juniorPapaLogo}>
            <img src="/arquivos/tu-papa.png" alt="Junior tu papá" />
          </div>

          <button
            className={`${styles.navButton} ${styles.navPrev}`}
            onClick={() => scrollCarousel(-1)}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div
            className={styles.carousel}
            ref={carouselRef}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
            onTouchStart={stopAutoScroll}
            onTouchEnd={startAutoScroll}
          >
            {newsItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.carouselItem}
              >
                <div className={styles.itemImage}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.itemContent}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <span className={styles.itemDate}>{item.date}</span>
                </div>
              </a>
            ))}
          </div>

          <button
            className={`${styles.navButton} ${styles.navNext}`}
            onClick={() => scrollCarousel(1)}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/post-slider.css'
// import junuiorTuPapa from '../public/Group 1000002303.png'
// import diagonal from '../public/Group 1000002331 (1).png'
// import diagonalMobile from '../public/Group 1000002315.png'
// import title from '../public/Title.png'

export function PostSlider() {
  const carouselRef = useRef<any>(null)
  const autoScrollRef = useRef<any>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const newsItems = [
    {
      id: 1,
      link: 'https://www.instagram.com/reel/DJF57V9tuqU/?igsh=dmN3cmNtdTJ2NWh0',
      title:
        'Junior FC on Instagram: "¡QUE EL METRO SEA UNA CALDERA!🔥 🎥| Aquí, las declaraciones de nuestro capitán Carlos Bacca y nuestro DT César Farías, previo al encuentro ante América de Cali. #VamosJunior"',
      date: '15/04/25',
      image:
        'https://scontent.cdninstagram.com/v/t51.71878-15/491421683_1075595757767862_2455604494707888759_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=zaekE5bnMdoQ7kNvwEhWIOy&_nc_oc=Adn9J1Zouu5_IcAP0EWgX8jbkjFEqpIOqskZTuNyu7oHzKZDpIhprV5DWd70q2qgRs4&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Es3Gc6EnkF8UNuM7t2ksxg&oh=00_AfKX8qYQw2qd3lTvugyjWmKIVXUQh1CdbRxG3C4eeYkURA&oe=6839F457',
      description: '(Espacio para agregar descripción)',
      type: 'basketball',
    },
    {
      id: 2,
      link:
        'https://www.instagram.com/p/DJFw9kCNn8q/?igsh=eG1wcjhpeG1kcGxx&img_index=1',
      title:
        'Junior FC on Instagram: "¿Te lo vas a perder? @jordan_barrera10 😎 #VamosJunior"',
      date: '15/04/25',
      image:
        'https://scontent.cdninstagram.com/v/t51.75761-15/491447120_18510742807044049_2044262314439208816_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=eMfCsNfaF60Q7kNvwFLHWFR&_nc_oc=Adkqk0jw1aDFf9GXLfHqFr8DvRGKB26ss2gA9okd-bDEb7oIFOBU1gvYelLcVvy0FY8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=rqH0JOH1OkO0la2zG9Lrsg&oh=00_AfIem99ypzJZFCHsbuBedeyzPiW5okwOcqLvTYSRtTSUDg&oe=683A4228',
      description: '(Espacio para agregar descripción)',
      type: 'cheerleader',
    },
    {
      id: 4,
      link:
        'https://www.instagram.com/p/DJAoSJSNbYi/?igsh=NXEybGlvZHkzbQ%3D%3D',
      title:
        'Junior FC on Instagram: "¡BENEFICIOS DE LA MEMBRESÍA! ✈️ #VamosJunior"',
      date: '15/04/25',
      description: '(Espacio para agregar descripción)',
      image:
        'https://scontent.cdninstagram.com/v/t51.75761-15/494114167_18510438466044049_8966066894016187523_n.jpg?stp=c269.0.808.808a_dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=mEqx3VDnWTAQ7kNvwE483qk&_nc_oc=Adlv686ktsR65SJsa4UlKtq_XSk3D13jG-zpwSxitO4jPhxKdHX-jntbV8l23yoNLdY&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=ZIeUFHDCeoF6gop9GtH1Gw&oh=00_AfIavY5ikxuzyVJiVERp3ZO1k0ODkxF3PE-5VfC2yOCnoA&oe=683A46A8',
      type: 'mascot',
    },
    {
      id: 5,
      link:
        'https://www.instagram.com/p/DJAQhxmxdD1/?igsh=a3Vpc3NrcnVuN3Ay&img_index=1',
      title:
        'Junior FC on Instagram: "📸| ¡INICIAMOS LA SEMANA CON TODO! 🔥💪#VamosJunior"',
      date: '15/04/25',
      description: '(Espacio para agregar descripción)',
      image:
        'https://scontent.cdninstagram.com/v/t51.75761-15/491453414_18510415246044049_7444491490968553860_n.jpg?stp=c216.0.648.648a_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=kSrzK6axYwIQ7kNvwF-u4m3&_nc_oc=AdnVmAW-So9hYNV1iNcLJS0ZTxrRwxrVdVoz38lLXyQn_DSdg-uir71RwG8EmF8MOCY&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=XyidxqfSvOYctxLVGV17Zg&oh=00_AfJ0u_uJeZkHmFxbnH4U1cXB8R7Z1cuE6w-dxLsqyWZydw&oe=683A5308',
      type: 'mascot',
    },
    {
      id: 6,
      link:
        'https://www.instagram.com/reel/DI7PIXGxp3n/?igsh=MWxwMG1paTA2ZDF0dA%3D%3D',
      title:
        'Junior FC on Instagram: "📸| ¡ENTRENAMIENTO EN IMÁGENES! #VamosJunior"',
      date: '15/04/25',
      description: '(Espacio para agregar descripción)',
      image:
        'https://scontent.cdninstagram.com/v/t51.75761-15/494496132_18510803104044049_4075241874861079796_n.jpg?stp=c216.0.648.648a_dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=-bPLh_SsLQwQ7kNvwHpP7G2&_nc_oc=AdntWB47i3alrAmDMnUMpKr7ODY_chuO8LSQOiCf7NfuTQAVxprw3gTc_-lK8jRTXAE&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=jkp9nwxKrHdYWolLJY3hBg&oh=00_AfLffOiRcunc2SdA0EyZRkvvPLIIpZwealtZbas5kzwbhQ&oe=683A3CDD',
      type: 'mascot',
    },
    {
      id: 7,
      link: 'https://www.instagram.com/p/DI7Fds-xQlF/?igsh=M2g5ODgwN3AydmJq',
      title:
        'Junior FC on Instagram: "🚨ATENCIÓN🚨 ¡Así de fácil funciona nuestro sorteo!',
      date: '15/04/25',
      description: '(Espacio para agregar descripción)',
      image:
        'https://scontent.cdninstagram.com/v/t51.75761-15/491442313_18510016531044049_2643703523601259805_n.jpg?stp=c269.0.808.808a_dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=JEs8VGlw7TwQ7kNvwGQ_75L&_nc_oc=AdkNoAUZDCBMR3XTgn2oJPHF76FHMGGnsa0w1F-VHEY-P-FJje4jBtNh2_Qh2MMwBPo&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=oBUwclTef5Lw_gtshStxkQ&oh=00_AfII05b6p6xtqAM20PbvuE2YH575zWo0wx4BcTIiTKCW5w&oe=683A37F2',
      type: 'mascot',
    },
    {
      id: 8,
      link: 'https://www.instagram.com/reel/DI6zVIDJEvM/?igsh=b2g1b3k2c2djMXo0',
      title:
        'Win Sports on Instagram: "🦈✨ Hoy juega Junior... ¿Será que habrá magia de Don Jordan Barrera ante Pereira? 😱😱 ¿A quién me recuerda ese enganche?"',
      date: '15/04/25',
      description: '(Espacio para agregar descripción)',
      image:
        'https://scontent.cdninstagram.com/v/t51.71878-15/491497092_1202042591558645_6121250705425652500_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=FQp0AmBSPBIQ7kNvwF8NxGK&_nc_oc=AdmLKpk-Ng1QC02LHKUkV6UnUOPsKIxzgJL77Bgi8jdXfU2HIlSxrGm2olTdd_7y1uk&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=DWICEFgqeMjsufBoFAP3KA&oh=00_AfLGcpx473AnKgWc1RBso8um1okUokC2z7oZR_gr4vPgeg&oe=683A44AD',
      type: 'mascot',
    },
    {
      id: 9,
      link:
        'https://www.instagram.com/p/DI6vm48xMLD/?img_index=8&igsh=a2hzemR4czY3czN4',
      title: 'Junior FC on Instagram: "📸| ¡ACTIVACIÓN! #VamosJunior"',
      date: '15/04/25',
      description: '(Espacio para agregar descripción)',
      image:
        'https://scontent.cdninstagram.com/v/t51.75761-15/491443488_18509989264044049_7101889852433084633_n.jpg?stp=c288.0.864.864a_dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=BwN6ZE-v4lsQ7kNvwGGIHfw&_nc_oc=AdlHdLp-I-QIq8hs0aqRB9zL92LHn5NspnW1JGj9ixz7h7BxXD5hNqlQ4WVmaZ-GKcc&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=5YAFlC0bwwb16PvWnKTmcA&oh=00_AfK0kmfbTA45SUH3oMBF1N3eTKq_r2pQsUi6Do3WvSxrdw&oe=683A461C',
      type: 'mascot',
    },
    {
      id: 10,
      link:
        'https://www.instagram.com/reel/DI2UGJhtE5X/?igsh=MTBna2hycnNsemV4MA%3D%3D',
      title:
        'Junior FC on Instagram: "🎥| ¡SE CALIENTA LA PREVIA! 🔥🦈 Esto dijeron nuestros jugadores Steven Rodríguez y Santiago Mele, previo al encuentro ante Deportivo Pereira. #VamosJunior"',
      date: '15/04/25',
      description: '(Espacio para agregar descripción)',
      image:
        'https://scontent.cdninstagram.com/v/t51.75761-15/491444210_18509816008044049_4924895329056090507_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=TXwXp1Bcht8Q7kNvwEbWyI7&_nc_oc=Adn0k3G0nARX0FPFbTFE6gHfd8AKfBnbPCMqYFKYooTSB0lvSVYmvVfjhk80nWfNpzE&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=zDzNBAiNRbf-JtILbAjZGw&oh=00_AfKhs3MPnudSmmjHTb7Z-AFBvDhTnIWBSSYFvqTnJS5YIg&oe=683A59FF',
      type: 'mascot',
    },
  ]

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const carousel = carouselRef.current
      // @ts-ignore
      const items = carousel.children
      if (items[index]) {
        const scrollLeft =
          items[index].offsetLeft -
          // @ts-ignore
          (carousel.offsetWidth - items[index].offsetWidth) / 2
        // @ts-ignore
        carousel.scrollTo({ left: scrollLeft, behavior: 'smooth' })
        setCurrentIndex(index)
      }
    }
  }

  const scrollCarousel = (direction: number) => {
    const newIndex =
      direction === 1
        ? (currentIndex + 1) % newsItems.length
        : (currentIndex - 1 + newsItems.length) % newsItems.length
    scrollToIndex(newIndex)
  }

  const startAutoScroll = () => {
    // @ts-ignore
    autoScrollRef.current = setInterval(() => {
      scrollCarousel(1)
    }, 4000)
  }

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
    }
  }

  useEffect(() => {
    startAutoScroll()
    return () => stopAutoScroll()
  }, [currentIndex])

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

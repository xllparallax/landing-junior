import React, { useState } from 'react'

import sliderStyles from '../styles/slider-2.css'
import styles from '../styles/slider-2.css'
import { useResponsiveHeight } from '../hooks/use-responsive-height'
import { ModalHistory } from './modal-history'

export const historyData: any = {
  fundacion: {
    title: 'Fundación y Primeros Años',
    content: `Junior nace en 1924 cuando fue constituido oficialmente el "Club Juventud Infantil", primer nombre de la escuadra que más tarde se conocería como Juventud Junior y después Junior. El 7 de agosto de 1924 quedó protocolizada la organización.

Entre 1939 y 1940, Junior realiza partidos internacionales bajo la dirección del galés Jack Greenwell, llevando la fama del club más allá de las fronteras nacionales.

El primer técnico extranjero fue el inglés Jack Greenwell, quien llegó a Barranquilla en 1939. Greenwell ex jugador del Barcelona, Athletic de Bilbao y entrenador de la selección peruana.`,
  },
  profesionalismo: {
    title: 'Ingreso al Profesionalismo',
    content: `En 1948, con el nombre de Atlético Junior, ingresó a la División Mayor del Fútbol Colombiano - DIMAYOR. Su Director Técnico fue Roberto "El Flaco" Meléndez y su Presidente fue Ernesto Álvarez Correa, logrando el Subcampeonato en su primera participación.

El primer partido oficial fue el 15 de agosto de 1948 en el estadio Municipal (hoy Romelio Martínez), donde Junior derrotó 2-0 al Deportivo Cali con goles de Lancaster De León y "Boris" Carlos Rodríguez.

Lancaster De León marcó el primer gol de Junior en el profesionalismo. El árbitro del compromiso fue Roberto Kowell.`,
  },
  titulos: {
    title: 'Títulos y Logros',
    content: `**Títulos de Liga:** 10
(1977, 1980, 1993, 1995, 2004-II, 2010-I, 2011-II, 2018-II, 2019-I, 2023-II)

**Títulos de Superliga:** 2 (2019, 2020)

**Títulos de Copa:** 2 (2015, 2017)

**Subcampeón de CONMEBOL Sudamericana:** 2018

**Semifinalista de CONMEBOL Libertadores:** 1994

**Participaciones internacionales CONMEBOL Libertadores:** 18
• 1971, 1978, 1981, 1984, 1994, 1996, 2000, 2001, 2005, 2010, 2011, 2012, 2017, 2018, 2019, 2020, 2021, 2024

**CONMEBOL Sudamericana:** 9
• 2004, 2015, 2016, 2017, 2018, 2020, 2021, 2022, 2023`,
  },
  estadisticas: {
    title: 'Estadísticas Históricas',
    content: `**Máximos Goleadores Históricos:**
• Iván René Valenciano – 166 goles
• Carlos Bacca – 119 goles
• Teófilo Gutiérrez – 94 goles
• Nelson Silva Pacheco – 84 goles
• Víctor Ephanor – 81 goles

**Más Partidos Jugados:**
• Sebastián Viera – 638 partidos
• Dulio Miranda – 440 partidos
• Hayder Palacio – 439 partidos
• José María Pazo – 418 partidos
• Alexis Mendoza – 417 partidos

**Más Títulos:**
• Sebastián Viera – 7 títulos
• José Luis Chunga – 7 títulos
• Luis Narváez – 6 títulos
• Leiner Escalante – 6 títulos`,
  },
  goleadas: {
    title: 'Goleadas Históricas',
    content: `**Mayores Goleadas en Liga:**

**Junior 8 - Bucaramanga 1** (22 de junio 1983)
• Goleadores: William Knight (3), Fernando Fiorillo (2), Tony Salja, Omar Alfredo Galván, Jesús "Kiko" Barrios

**Junior 8 - Medellín 3** (31 de octubre de 1948)
• Goleadores: Luis González Rubio (2), Octavio "Tolimita" Ruiz (2), Octavio Carrillo, Carlos "Boris" Rodríguez, Rigoberto García "Remuerde", Fulgencio Berdugo

**Junior 7 - Quindío 0** (18 de abril de 1982)
• Goleadores: Adalberto Perroud (3), Daniel Edgardo Teglia (2), Wilmar Ariza, Amín Bolívar`,
  },
  tecnicos: {
    title: 'Técnicos Campeones',
    content: `**Técnicos Campeones de Liga:**
• 1977: Juan Ramón "La Bruja" Verón
• 1980: José "Puchero" Varacka
• 1993: Julio Comesaña
• 1995: Carlos "Piscis" Restrepo
• 2004: Miguel Ángel "El Zurdo" López
• 2010: Diego Edison Umaña
• 2011: José Eugenio "Cheché" Hernández
• 2018: Julio Comesaña
• 2019: Julio Comesaña
• 2023: Arturo Reyes

**Técnicos Campeones de SuperLiga:**
• 2019: Luis Fernando Suárez
• 2020: Julio Comesaña

**Técnicos Campeones de Copa:**
• 2015: Alexis Mendoza
• 2017: Julio Comesaña`,
  },
  curiosidades: {
    title: 'Datos Curiosos',
    content: `• **El gol más rápido** en la historia de Junior lo marcó Iván René Valenciano a los 10 segundos contra Santa Fe en 1995.

• **"La Rabona de Meza"** - El 10 de agosto de 1988, Juan José Meza marcó un gol espectacular con rabona que quedó en la historia.

• **Récord de invicto local** - Junior estableció un récord de 48 partidos sin perder como local entre 1975 y 1977.

• **Gol Olímpico histórico** - El 17 de noviembre de 1976, Juan Ramón "La Bruja" Verón marcó gol olímpico a Santa Fe.

• **El Junior de más goles** - En 1968 Junior anotó 114 goles en 54 partidos, con un ataque colombo-brasileño.

• **Micaela Lavalle de Mejía** - Madre de futbolistas Juan, Gabriel, Marcos, Víctor y principal apoyo en la conformación del primer Junior.`,
  },
}

export function Slider2() {
  const [currentSlide] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [activeSection, setActiveSection] = useState('fundacion')
  const responsiveHeight = useResponsiveHeight(310, 750, 770, 1920)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  const slides = [
    {
      id: 1,
      content: (
        <div className={styles.slideContainer2}>
          <img
            src="/arquivos/Group-1000002338.png"
            alt="Viera"
            className={styles.slideImage2}
          />
          <div
            className={`${sliderStyles.contentPostConttainer} ${styles.slideContent}`}
          >
            <h2 className={styles.slideTitle}>
              Junior FC: Pasión, Historia y Gloria
            </h2>
            <p className={styles.slideDescription}>
              Fundado en 1924, Junior se ha convertido en un símbolo de la Costa
              Caribe. Con 10 títulos de liga, glorias como Viera y Valenciano, y
              una rica historia de triunfos nacionales e internacionales.
            </p>
            <button onClick={openModal} className={styles.slideButton}>
              Ver historia completa
            </button>
            <VuamosJunior />
          </div>
        </div>
      ),
    },
  ]

  return (
    <div
      className={styles.sliderWrapper2}
      style={{ height: `${responsiveHeight}px` }}
    >
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide2} ${
              index === currentSlide ? styles.slideActive : ''
            }`}
          >
            {slide.content}
          </div>
        ))}
      </div>

      {showModal && (
        <ModalHistory
          activeSection={activeSection}
          closeModal={closeModal}
          historyData={historyData}
          setActiveSection={setActiveSection}
        />
      )}
    </div>
  )
}

export function VuamosJunior({ className }: { className?: string }) {
  return (
    <div className={`${sliderStyles.container} ${className || ''}`}>
      <span className={sliderStyles.text}>#VAMOSJUNIOR</span>
    </div>
  )
}

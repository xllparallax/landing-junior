import React from 'react'

import styles from '../styles/modal-history.css'

export function ModalHistory({
  activeSection,
  closeModal,
  historyData,
  setActiveSection,
}: {
  historyData: any
  activeSection: any
  closeModal: any
  setActiveSection: any
}) {
  return (
    <div className={`${styles.modalOverlay}`} onClick={closeModal}>
      <div
        className={`${styles.modalContent}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del Modal */}
        <div className={styles.modalHeader}>
          <button onClick={closeModal} className={styles.modalCloseButton}>
            ×
          </button>
          <h2 className={styles.modalTitle}>Historia del Junior FC</h2>
          <p className={styles.modalSubtitle}>
            "Junior es más que un equipo, es un fenómeno sociológico, un sentir
            del pueblo barranquillero."
          </p>
        </div>

        <div className={styles.modalNavigation}>
          <div className={styles.tabsContainer}>
            {Object.entries(historyData).map(([key, section]: any) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`${styles.tabButton} ${
                  activeSection === key
                    ? styles.tabButtonActive
                    : styles.tabButtonInactive
                }`}
              >
                {section?.title}
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.modalBody}`}>
          <div className={styles.modalContentWrapper}>
            <h3 className={styles.modalSectionTitle}>
              {historyData[activeSection].title}
            </h3>
            <div className={styles.modalText}>
              {historyData[activeSection].content
                .split('\n\n')
                .map((paragraph: any, index: any) => {
                  if (paragraph.includes('**') && paragraph.includes(':')) {
                    // Formatear listas con títulos en negrita
                    const parts = paragraph.split('\n')
                    const title = parts[0]
                    const items = parts.slice(1)

                    return (
                      <div key={index} className={styles.listSection}>
                        <h4 className={styles.listTitle}>
                          {title.replace(/\*\*/g, '')}
                        </h4>
                        <ul className={styles.list}>
                          {items.map((item: any, itemIndex: any) => (
                            <li key={itemIndex} className={styles.listItem}>
                              <span className={styles.listBullet}>•</span>
                              <span>{item.replace('• ', '')}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  }

                  // Párrafos normales
                  return (
                    <p key={index} className={styles.modalParagraph}>
                      {paragraph.trim()}
                    </p>
                  )
                })}
            </div>
          </div>
        </div>

        {/* Footer del Modal */}
        <div className={styles.modalFooter}>
          <div className={styles.modalFooterContent}>
            <div className={styles.modalFooterInfo}>
              Fundado: 7 de agosto de 1924 | 10 títulos de liga
            </div>
            <button onClick={closeModal} className={styles.modalFooterButton}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

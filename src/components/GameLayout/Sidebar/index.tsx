'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { numToUsd } from '@/helpers'
import { useGameStore } from '@/store/useGameStore'
import MenuIcon from '@/assets/images/icons/menu.svg'
import CloseIcon from '@/assets/images/icons/close.svg'
import styles from './styles.module.scss'

export function Sidebar() {
  const { questions, currentIndex } = useGameStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const reversedQuestions = useMemo(() => [...questions].reverse(), [questions])

  return (
    <div className={styles.sidebar}>
      <button
        className={styles.sidebar__menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <Image height={24} width={24} src={CloseIcon} alt='Close' />
        ) : (
          <Image height={24} width={24} src={MenuIcon} alt='Menu' />
        )}
      </button>

      <aside
        className={`${styles.sidebar__content} ${!isMenuOpen && styles.sidebar__contentClosed}`}>
        <ul className={styles.sidebar__list}>
          {reversedQuestions.map((question) => (
            <li
              className={
                question.id === currentIndex + 1
                  ? styles.sidebar__itemActive
                  : ''
              }
              key={question.id}>
              <div className={styles.sidebar__itemBorder}>
                <div className={styles.sidebar__itemInner}>
                  {numToUsd(question.reward)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

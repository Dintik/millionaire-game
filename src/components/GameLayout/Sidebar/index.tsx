'use client'

import { useState } from 'react'
import Image from 'next/image'
import questions from '@/data/questions.json'
import { numToUsd } from '@/helpers'
import MenuIcon from '@/assets/images/icons/menu.svg'
import CloseIcon from '@/assets/images/icons/close.svg'
import styles from './styles.module.scss'
export function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = 5

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
          {[...questions].reverse().map((question) => (
            <li
              className={
                question.id === activeId ? styles.sidebar__itemActive : ''
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

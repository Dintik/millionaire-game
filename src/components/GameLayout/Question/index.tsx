'use client'

import { useEffect } from 'react'
import { useGameStore } from '@/store/useGameStore'
import { AnswerList } from '../AnswerList'
import styles from './styles.module.scss'

export function Question() {
  const { restartGame, questions, currentIndex } = useGameStore()
  const question = questions[currentIndex]?.question

  useEffect(() => {
    restartGame()
  }, [restartGame])

  return (
    <main className={styles.question}>
      <h3 className={styles.question__title}>{question}</h3>
      <AnswerList />
    </main>
  )
}

'use client'

import { useEffect } from 'react'
import { useGameStore } from '@/store/useGameStore'
import { AnswerList } from '../AnswerList'
import styles from './styles.module.scss'

export function Question() {
  const { restartGame, questions, currentIndex } = useGameStore()
  const question = questions[currentIndex]?.question

  // will reset the state manager to zero after returning from the result page
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

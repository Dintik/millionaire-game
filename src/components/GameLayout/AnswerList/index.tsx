import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { DiamondButton } from '@/components/ui/Buttons/DiamondButton'
import { useGameStore } from '@/store/useGameStore'
import styles from './styles.module.scss'

const isCorrect = (selected: number[], correct: number[]) =>
  selected.length === correct.length &&
  selected.every((index) => correct.includes(index))

export function AnswerList() {
  const router = useRouter()
  const { goToNextQuestion, currentIndex, questions, setEarnedReward } =
    useGameStore()
  const [activeAnswers, setActiveAnswers] = useState<number[]>([])
  const [status, setStatus] = useState<'correct' | 'wrong' | ''>('')

  const { correctAnswers, answers, id, reward } = questions[currentIndex]

  // clears status and activeAnswers when moving to the next question
  useEffect(() => {
    setActiveAnswers([])
    setStatus('')
  }, [id])

  // processes the answers to the question
  useEffect(() => {
    if (status === 'wrong') {
      const timeout = setTimeout(() => {
        router.push('/result')
      }, 3000)

      return () => clearTimeout(timeout)
    }

    if (status === 'correct') {
      const timeout = setTimeout(() => {
        if (currentIndex === questions.length - 1) {
          router.push('/result')
        } else {
          goToNextQuestion()
        }
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, goToNextQuestion, questions.length, router, status])

  const handleAnswerClick = (index: number) => {
    // toggles the activeAnswers
    const updatedAnswers = activeAnswers.includes(index)
      ? activeAnswers.filter((i) => i !== index)
      : [...activeAnswers, index]
    setActiveAnswers(updatedAnswers)

    // if the number of selected answers is not equal to the number of correct answers, return
    if (updatedAnswers.length !== correctAnswers.length) return

    if (!isCorrect(updatedAnswers, correctAnswers)) {
      setStatus('wrong')
      return
    }

    setEarnedReward(reward)
    setStatus('correct')
  }

  return (
    <div className={styles.answerList}>
      {answers.map((answer, index) => (
        <DiamondButton
          onClick={() => handleAnswerClick(index)}
          className={styles.answerList__button}
          isSelected={activeAnswers.includes(index) && !status}
          isWrong={activeAnswers.includes(index) && status === 'wrong'}
          isCorrect={activeAnswers.includes(index) && status === 'correct'}
          isDisabled={!!status}
          key={index}>
          <span>{String.fromCharCode(65 + index)}</span>
          {answer}
        </DiamondButton>
      ))}
    </div>
  )
}

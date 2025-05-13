import { DiamondButton } from '@/components/ui/Buttons'
import questions from '@/data/questions.json'
import { Question as QuestionType } from '@/types'
import styles from './styles.module.scss'

export function Question() {
  const activeId = 5
  const question: QuestionType = questions.find(
    (question) => question.id === activeId,
  )!

  return (
    <main className={styles.question}>
      <h3 className={styles.question__title}>{question.question}</h3>

      <div className={styles.question__options}>
        {question.answers.map((answer, index) => (
          <DiamondButton className={styles.question__button} key={index}>
            <span>{String.fromCharCode(65 + index)}</span>
            {answer}
          </DiamondButton>
        ))}
      </div>
    </main>
  )
}

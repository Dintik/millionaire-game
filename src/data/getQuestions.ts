import questionsJson from '@/data/questions.json'
import { Question } from '@/types'
import { z } from 'zod'

const QuestionSchema = z.object({
  id: z.number(),
  question: z.string(),
  answers: z.array(z.string()),
  correctAnswers: z.array(z.number()),
  reward: z.number(),
})

export function getQuestions(): Question[] {
  const result = z.array(QuestionSchema).safeParse(questionsJson)

  if (!result.success) {
    // throw new Error('Invalid questions data')
    console.error('Invalid questions data:', result.error)
    return [
      {
        id: 1,
        question: 'Sorry, something went wrong',
        answers: [],
        correctAnswers: [],
        reward: 0,
      },
    ]
  }

  return result.data
}

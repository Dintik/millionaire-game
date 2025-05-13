import { create } from 'zustand'
import { getQuestions } from '@/data/getQuestions'
import { Question } from '@/types'

interface GameState {
  currentIndex: number
  earnedReward: number
  questions: Question[]
  setEarnedReward: (reward: number) => void
  restartGame: () => void
  goToNextQuestion: () => void
}

export const useGameStore = create<GameState>((set) => ({
  currentIndex: 0,
  earnedReward: 0,
  questions: getQuestions(),

  setEarnedReward: (reward: number) => {
    set(() => ({
      earnedReward: reward,
    }))
  },

  goToNextQuestion: () => {
    set((state) => ({
      currentIndex: state.currentIndex + 1,
    }))
  },

  restartGame: () => {
    set({
      currentIndex: 0,
      earnedReward: 0,
    })
  },
}))

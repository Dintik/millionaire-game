import styles from './styles.module.scss'
import { Sidebar } from '@/components/GameLayout/Sidebar'
import { Question } from '@/components/GameLayout/Question'

export function GameLayout() {
  return (
    <div className={styles.gameLayout}>
      <Question />
      <Sidebar />
    </div>
  )
}

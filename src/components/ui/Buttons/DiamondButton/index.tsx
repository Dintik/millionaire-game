import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
  children?: ReactNode
  className?: string
  onClick?: () => void
  isSelected?: boolean
  isWrong?: boolean
  isCorrect?: boolean
  isDisabled?: boolean
}

export const DiamondButton = ({
  children,
  className,
  onClick,
  isSelected,
  isWrong,
  isCorrect,
  isDisabled,
}: ButtonProps) => (
  <div
    className={`${styles.button__wrapper} ${isSelected && styles.button__selected} ${ isWrong &&
      styles.button__wrong } ${isCorrect && styles.button__correct} ${ isDisabled &&
      styles.button__disabled } ${className}`}>
    <button className={styles.button} onClick={onClick} disabled={isDisabled}>
      <div className={styles.button__inner}>{children}</div>
    </button>
  </div>
)

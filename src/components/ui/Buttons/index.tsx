import { ReactNode } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

interface ButtonProps {
  children?: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  isSelected?: boolean
  isWrong?: boolean
  isCorrect?: boolean
  target?: string
}

export const DiamondButton = ({
  children,
  className,
  onClick,
  isSelected,
  isWrong,
  isCorrect,
}: ButtonProps) => (
  <div
    className={`${styles.button__wrapper} ${isSelected && styles.button__selected} ${ isWrong &&
      styles.button__wrong } ${isCorrect && styles.button__correct} ${className}`}>
    <button
      className={styles.button}
      onClick={onClick}
      disabled={isWrong || isCorrect}>
      <div className={styles.button__inner}>{children}</div>
    </button>
  </div>
)

export const LinkButton = ({
  children,
  className,
  href = '/',
  target = '_self',
}: ButtonProps) => (
  <Link
    className={`${styles.linkButton} ${className}`}
    href={href}
    target={target}>
    {children}
  </Link>
)

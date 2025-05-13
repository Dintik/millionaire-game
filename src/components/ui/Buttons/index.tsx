import { ReactNode } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

interface ButtonProps {
  children?: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  disabled?: boolean
  target?: string
}

export const DiamondButton = ({
  children,
  className,
  onClick,
  disabled,
}: ButtonProps) => (
  <div className={`${styles.button__wrapper} ${className}`}>
    <button className={styles.button} onClick={onClick} disabled={disabled}>
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

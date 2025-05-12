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

export const Button = ({
  children,
  className,
  onClick,
  disabled,
}: ButtonProps) => (
  <button
    className={`${styles.button} ${disabled ? styles.button__disabled : ''} ${className}`}
    onClick={onClick}
    disabled={disabled}>
    {children}
  </button>
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

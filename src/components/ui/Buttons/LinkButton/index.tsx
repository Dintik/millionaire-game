import { ReactNode } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

interface ButtonProps {
  children?: ReactNode
  className?: string
  href?: string
  target?: string
}

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

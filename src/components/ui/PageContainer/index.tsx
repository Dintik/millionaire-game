import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface PageContainerProps {
  children: ReactNode
  className?: string
}

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className={`${styles.pageContainer} ${className}`}>{children}</div>
  )
}

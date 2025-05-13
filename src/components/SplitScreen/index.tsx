import { ReactNode } from 'react'
import Image from 'next/image'
import { LinkButton } from '@/components/ui/Buttons/LinkButton'
import HandImage from '@/assets/images/hand.svg'
import styles from './styles.module.scss'

interface SplitScreenProps {
  title: string | ReactNode
  description?: string
  linkHref: string
  linkText: string
}

export function SplitScreen({
  title,
  description,
  linkHref,
  linkText,
}: SplitScreenProps) {
  return (
    <main className={styles.introScreen}>
      <Image
        className={styles.introScreen__image}
        src={HandImage}
        alt='Thumbs up emoji'
        width={272}
        height={162}
        priority
      />
      <div className={styles.introScreen__content}>
        <div className={styles.introScreen__textBlock}>
          {description && (
            <h3 className={styles.introScreen__description}>{description}</h3>
          )}
          <h1>{title}</h1>
        </div>
        <LinkButton href={linkHref}>{linkText}</LinkButton>
      </div>
    </main>
  )
}

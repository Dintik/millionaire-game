import { LinkButton } from '@/components/ui/Buttons/LinkButton'
import styles from './styles.module.scss'

export function NotFound() {
  return (
    <main className={styles.notFound}>
      <h1>Oops! Page not found</h1>
      <p className={styles.notFound__description}>
        The page you&apos;re looking for doesn&apos;t exist or may have been
        removed. No worries! You can safely return by clicking the button below.
      </p>
      <LinkButton>Go back to safety</LinkButton>
    </main>
  )
}

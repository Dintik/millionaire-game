import { SplitScreen } from '@/components/SplitScreen'
import { SplitBackground } from '@/components/ui/SplitBackground'

export default function Home() {
  return (
    <>
      <SplitScreen
        title={
          <>
            Who wants to be <br /> a millionaire?
          </>
        }
        linkHref='/game'
        linkText='Start'
      />
      <SplitBackground />
    </>
  )
}

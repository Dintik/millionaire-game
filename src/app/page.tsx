import { SplitScreen } from '@/components/SplitScreen'
import { PageContainer } from '@/components/ui/PageContainer'
import { SplitBackground } from '@/components/ui/SplitBackground'

export default function Home() {
  return (
    <PageContainer>
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
    </PageContainer>
  )
}

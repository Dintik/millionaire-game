import { SplitScreen } from '@/components/SplitScreen'
import { PageContainer } from '@/components/ui/PageContainer'

export default function ResultPage() {
  return (
    <PageContainer>
      <SplitScreen
        title='$8,000 earned'
        description='Total score:'
        linkHref='/game'
        linkText='Try again'
      />
    </PageContainer>
  )
}

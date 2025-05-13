'use client'

import { SplitScreen } from '@/components/SplitScreen'
import { PageContainer } from '@/components/ui/PageContainer'
import { useGameStore } from '@/store/useGameStore'
import { numToUsd } from '@/helpers'

export default function ResultPage() {
  const earnedReward = useGameStore((state) => state.earnedReward)

  return (
    <PageContainer>
      <SplitScreen
        title={`${numToUsd(earnedReward)} earned`}
        description='Total score:'
        linkHref='/game'
        linkText='Try again'
      />
    </PageContainer>
  )
}

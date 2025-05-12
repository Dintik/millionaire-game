import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PageContainer } from '@/components/ui/PageContainer'
import '@/assets/styles/globals.scss'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Millionaire Game',
  description: 'This app is a test job for a frontend developer position',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <PageContainer>{children}</PageContainer>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { TheHeader } from '@/components/TheHeader'
import { Noto_Sans } from 'next/font/google'
import './globals.css'

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
})

export const metadata: Metadata = {
  title: 'Simple Ui',
  description: 'Simple Ui app.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      </head>
      <body
        className={`${noto_sans.variable} ${noto_sans.variable} antialiased min-h-screen`}
      >
        <div className="flex flex-col min-h-screen">
          <TheHeader />

          <main className="px-4 xl:px-[7.5rem] flex flex-col grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

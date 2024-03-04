import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Airlines List',
  description: 'List of sortable and filterable airlines',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

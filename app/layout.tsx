import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'くしくし話',
  description: 'kushidaの個人サイト',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja' className='dark'>
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gaurav Koirala',
  description: 'Portfolio of Gaurav Koirala, a C# developer with knowledge in systems programming, embedded systems, and performance optimization.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

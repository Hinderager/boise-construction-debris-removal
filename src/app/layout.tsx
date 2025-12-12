import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boise Construction Debris Removal | Coming Soon',
  description: 'Professional construction debris removal in Boise, Idaho. Job site cleanup, renovation debris, and recycling services.',
  keywords: 'construction debris removal, Boise, Idaho, job site cleanup, renovation debris, demolition waste',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

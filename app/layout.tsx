import type { Metadata, Viewport } from 'next'
import './fonts.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Seaquip Transport Solutions - Global Logistics & Shipping',
  description: 'Premium maritime logistics partner providing international shipping, port management, and supply chain solutions for global enterprises.',
  generator: 'v0.app',
  keywords: 'logistics, shipping, maritime, transport, supply chain',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: '#0B1F3A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import './fonts.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Seaquip Transport Solutions - Global Logistics & Shipping',
  description: 'Premium maritime logistics partner providing international shipping, port management, and supply chain solutions for global enterprises.',
  generator: 'v0.app',
  keywords: 'logistics, shipping, maritime, transport, supply chain',

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

import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import "./globals.scss";

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const defaultMeta = {
  title: 'Narrativas, por Fran e Alessandro Tegner',
  description: 'Histórias do cotidiano infantil, contadas pela Fran e ilustradas pelo Alessandro.',
}

export const metadata = {
 ...defaultMeta,
  metadataBase: new URL('https://narrativas.blog.br'),
  openGraph: {
    ...defaultMeta,
    type: 'article',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <main className="container is-fluid pt-4">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-fifths-fullhd">
              {children}
            </div>
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  )
}

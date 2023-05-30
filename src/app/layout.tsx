import { Inter } from 'next/font/google'

import "./globals.scss";

export const metadata = {
  title: 'Narrativas, por Fran e Alessandro Tegner',
  description: 'Narrativas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main className="container is-fluid pt-4">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-fifths-fullhd">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}

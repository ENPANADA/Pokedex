import './styles/globals.css'
import './styles/card.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PokeInfo',
  description: 'Lista de Pokémon ordenada según el número en la Pokédex Nacional',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

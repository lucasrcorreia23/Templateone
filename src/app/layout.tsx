import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from './head'
import { Navigator } from './components/Navigator'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
          
      <Head />  
      
      
        
      <body className={inter.className}>
      <Navigator />  
        <main>
        {children}
        </main>
        </body>
    </html>
  )
}

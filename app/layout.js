import Footer from '@/components/Footer'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/toaster'
import { NextAuthProvider } from './Providers'

export const metadata = {
  title: 'Pawn Billing',
  description: 'Pawn Billing Software Built By Harshit Ostwal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <NextAuthProvider>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}

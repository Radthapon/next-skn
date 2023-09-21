
import Navbar from '@/components/Navber/Navber'
import './globals.css'
import { Noto_Sans } from 'next/font/google'

const notosans = Noto_Sans({ 
  subsets: ['latin'] ,
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Investor Relation - SKN',
  description: 'skn.co.th',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
        {children}
      </body>
    </html>
  )
}

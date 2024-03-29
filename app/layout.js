

import { Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Navbar from '@/components/navbar/navbar'


const inter = Poppins({ weight: '500', subsets: ['latin'] })

export const metadata = {
  title: 'Kenote',
  description: 'Generated by NextJs',
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <meta name="google-adsense-account" content="ca-pub-6829791406532934"></meta>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

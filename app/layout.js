

import { Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Script from 'next/script'



const inter = Poppins({ weight: '500', subsets: ['latin'] })

export const metadata = {
  title: 'Kenote',
  description: 'Generated by NextJs',
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        
        {/* ---------------------- GOOGLE ANALYTICS ----------------------- */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X996P6JQCJ" />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        
        gtag('config', 'G-X996P6JQCJ');`}
        </Script>

        {/* ---------------------- ADCASH ----------------------- */}
        <Script id="aclib" type="text/javascript" src="//acscdn.com/script/aclib.js" strategy="beforeInteractive"></Script>


        {/* ---------------------- GOOGLE ADSENSE ----------------------- */}
        {/* <meta name="google-adsense-account" content="ca-pub-6829791406532934"></meta> */}

      </head>
      <body className={inter.className}>
        {/* ---------------------- ADCASH ----------------------- */}
        <Script type="text/javascript">
            {`aclib.runAutoTag({
                zoneId: 'fg9mxlhyfr',
            });`}
        </Script>

        <Navbar />
        {children}
      </body>
    </html>
  )
}



import { Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'highlight.js/styles/monokai.css'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Script from 'next/script'



const inter = Poppins({ weight: '500', subsets: ['latin'] })

export const metadata = {
  title: 'Technote',
  description: 'Technote is the supercluster of technical knowledge created through personal experiences. The aim of keynote is to minimize development effors and deep dive into tech concepts for better understanding.',
  generator: 'Next.js',
  applicationName: 'Technote',
  keywords: ['Next.js', 'React', 'JavaScript' , 'laniak' , 'keynote' , 'nextjs'],
  authors: [{name: 'Shashank Kawle' , url : 'https://ishashankkawle.github.io/'}],
  creator: 'Shashank Kawle',
  publisher: 'Shashank Kawle',
  category: 'technology'
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css"/> */}


        {/* ---------------------- GOOGLE ANALYTICS ----------------------- */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X996P6JQCJ" />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        
        gtag('config', 'G-X996P6JQCJ');`}
        </Script>

        {/* ---------------------- ADCASH ----------------------- */}
        {/* <Script id="aclib" type="text/javascript" src="//acscdn.com/script/aclib.js" strategy="beforeInteractive"></Script> */}


        {/* ---------------------- GOOGLE ADSENSE ----------------------- */}
        {/* <meta name="google-adsense-account" content="ca-pub-6829791406532934"></meta> */}

      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

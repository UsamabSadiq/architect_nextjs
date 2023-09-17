import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Orbitron, Roboto } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import '@/styles/globals.css'

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-orbitron'
})

const roboto = Roboto({
  weight: ['100', '300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  return (
    <>
      <div className={`max-w-[1400px] mx-auto ${orbitron.variable} ${roboto.variable}`}  >

        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

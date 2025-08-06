import React from 'react'
import Navbar from '../components/Navbar'
import SULUTHero from '../components/SULUTHero'
import SULUTContent from '../components/SULUTContent'
import Footer from '../components/Footer'

export default function SULUTPage() {
  return (
    <main>
      <Navbar />
      <SULUTHero />
      <SULUTContent />
      <Footer />
    </main>
  )
}
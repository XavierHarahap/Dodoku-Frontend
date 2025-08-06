import React from 'react'
import Navbar from '../components/Navbar'
import SINODEHero from '../components/SINODEHero'
import SINODEContent from '../components/SINODEContent'
import Footer from '../components/Footer'

export default function SINODEPage() {
  return (
    <main>
      <Navbar />
      <SINODEHero />
      <SINODEContent />
      <Footer />
    </main>
  )
}
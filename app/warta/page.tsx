import React from 'react'
import Navbar from '../components/Navbar'
import WartaHero from '../components/WartaHero'
import WartaContent from '../components/WartaContent'
import Footer from '../components/Footer'

export default function WartaPage() {
  return (
    <main>
      <Navbar />
      <WartaHero />
      <WartaContent />
      <Footer />
    </main>
  )
}
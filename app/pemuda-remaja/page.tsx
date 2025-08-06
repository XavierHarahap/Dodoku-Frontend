import React from 'react'
import Navbar from '../components/Navbar'
import PemudaRemajaHero from '../components/PemudaRemajaHero'
import PemudaRemajaContent from '../components/PemudaRemajaContent'
import Footer from '../components/Footer'

export default function PemudaRemajaPage() {
  return (
    <main>
      <Navbar />
      <PemudaRemajaHero />
      <PemudaRemajaContent />
      <Footer />
    </main>
  )
}
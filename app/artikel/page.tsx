import React from 'react'
import Navbar from '../components/Navbar'
import ArtikelHero from '../components/ArtikelHero'
import ArtikelContent from '../components/ArtikelContent'
import Footer from '../components/Footer'

export default function ArtikelPage() {
  return (
    <main>
      <Navbar />
      <ArtikelHero />
      <ArtikelContent />
      <Footer />
    </main>
  )
}

import React from 'react'
import Navbar from '../components/Navbar'
import WKIHero from '../components/WKIHero'
import WKIContent from '../components/WKIContent'
import Footer from '../components/Footer'

export default function WKIPage() {
  return (
    <main>
      <Navbar />
      <WKIHero />
      <WKIContent />
      <Footer />
    </main>
  )
}
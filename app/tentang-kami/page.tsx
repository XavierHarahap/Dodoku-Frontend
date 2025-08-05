import React from 'react'
import Navbar from '../components/Navbar'
import TentangKamiHero from '../components/TentangKamiHero'
import TentangKamiContent from '../components/TentangKamiContent'
import Footer from '../components/Footer'

export default function TentangKamiPage() {
  return (
    <main>
      <Navbar />
      <TentangKamiHero />
      <TentangKamiContent />
      <Footer />
    </main>
  )
} 
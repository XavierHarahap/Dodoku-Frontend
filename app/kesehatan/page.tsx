import React from 'react'
import Navbar from '../components/Navbar'
import KesehatanHero from '../components/KesehatanHero'
import KesehatanContent from '../components/KesehatanContent'
import Footer from '../components/Footer'

export default function KesehatanPage() {
  return (
    <main>
      <Navbar />
      <KesehatanHero />
      <KesehatanContent />
      <Footer />
    </main>
  )
}
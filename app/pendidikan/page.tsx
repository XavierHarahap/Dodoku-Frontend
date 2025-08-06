import React from 'react'
import Navbar from '../components/Navbar'
import PendidikanHero from '../components/PendidikanHero'
import PendidikanContent from '../components/PendidikanContent'
import Footer from '../components/Footer'

export default function PendidikanPage() {
  return (
    <main>
      <Navbar />
      <PendidikanHero />
      <PendidikanContent />
      <Footer />
    </main>
  )
}
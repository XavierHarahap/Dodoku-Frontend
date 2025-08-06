import React from 'react'
import Navbar from '../components/Navbar'
import MANNAHero from '../components/MANNAHero'
import MANNAContent from '../components/MANNAContent'
import Footer from '../components/Footer'

export default function MANNAPage() {
  return (
    <main>
      <Navbar />
      <MANNAHero />
      <MANNAContent />
      <Footer />
    </main>
  )
}
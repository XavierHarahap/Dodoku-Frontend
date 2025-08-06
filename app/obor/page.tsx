import React from 'react'
import Navbar from '../components/Navbar'
import OBORHero from '../components/OBORHero'
import OBORContent from '../components/OBORContent'
import Footer from '../components/Footer'

export default function OBORPage() {
  return (
    <main>
      <Navbar />
      <OBORHero />
      <OBORContent />
      <Footer />
    </main>
  )
}
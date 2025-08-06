import React from 'react'
import Navbar from '../components/Navbar'
import RHKHero from '../components/RHKHero'
import RHKContent from '../components/RHKContent'
import Footer from '../components/Footer'

export default function RHKPage() {
  return (
    <main>
      <Navbar />
      <RHKHero />
      <RHKContent />
      <Footer />
    </main>
  )
}
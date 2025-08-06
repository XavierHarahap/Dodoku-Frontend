import React from 'react'
import Navbar from '../components/Navbar'
import WilayahJemaatHero from '../components/WilayahJemaatHero'
import WilayahJemaatContent from '../components/WilayahJemaatContent'
import Footer from '../components/Footer'

export default function WilayahJemaatPage() {
  return (
    <main>
      <Navbar />
      <WilayahJemaatHero />
      <WilayahJemaatContent />
      <Footer />
    </main>
  )
}
import React from 'react'
import Navbar from '../components/Navbar'
import RenunganHero from '../components/RenunganHero'
import RenunganCategories from '../components/RenunganCategories'
import Footer from '../components/Footer'

export default function RenunganPage() {
  return (
    <main>
      <Navbar />
      <RenunganHero />
      <RenunganCategories />
      <Footer />
    </main>
  )
} 
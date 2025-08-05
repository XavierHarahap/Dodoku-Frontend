import React from 'react'
import Navbar from '../components/Navbar'
import BeritaHero from '../components/BeritaHero'
import BeritaCategories from '../components/BeritaCategories'
import Footer from '../components/Footer'

export default function BeritaPage() {
  return (
    <main>
      <Navbar />
      <BeritaHero />
      <BeritaCategories />
      <Footer />
    </main>
  )
} 
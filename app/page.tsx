import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BeritaUtama from './components/BeritaUtama'
import RenunganHarian from './components/RenunganHarian'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BeritaUtama />
      <RenunganHarian />
      <Footer />
    </main>
  )
} 
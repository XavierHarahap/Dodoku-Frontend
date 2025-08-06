import React from 'react'
import Navbar from '../components/Navbar'
import JelajahiHero from '../components/JelajahiHero'
import JelajahiContent from '../components/JelajahiContent'
import Footer from '../components/Footer'

export default function JelajahiPage() {
  return (
    <main>
      <Navbar />
      <JelajahiHero />
      <JelajahiContent />
      <Footer />
    </main>
  )
}
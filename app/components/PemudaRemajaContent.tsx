import React from 'react'
import Link from 'next/link'
import PostSlip from './PostSlip'

const PemudaRemajaContent = () => {
  // Sample Pemuda Remaja data - you can replace this with real data later
  const pemudaRemajaData = [
    {
      id: 1,
      image: '/img/PEMUDA DAN REMAJA.png',
      title: 'Perempuan Pembawa Terang Dan Kehidupan',
      excerpt: '(Matius 5:13-16) Kamu adalah garam dunia. Jika garam itu menjadi tawar, dengan apakah disebutkan Tidak ada lagi gunanya selain dibuang dan dijinjak orang...',
      date: '10 Mei, 2025',
      author: 'Novita Limbay'
    }
  ]

  return (
    <section className="pt-20 px-6 md:px-12 lg:px-24 bg-secondary max-w-full mx-auto pb-96">
        <div className="max-w-7xl mx-auto">
        {/* Articles Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {pemudaRemajaData.map((pemudaRemaja) => (
            <Link key={pemudaRemaja.id} href="/pemudaremajapost1" className="hover:scale-105 transition-transform duration-300">
              <PostSlip
                image={pemudaRemaja.image}
                title={pemudaRemaja.title}
                excerpt={pemudaRemaja.excerpt}
                date={pemudaRemaja.date}
                author={pemudaRemaja.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PemudaRemajaContent
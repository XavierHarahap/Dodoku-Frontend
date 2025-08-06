import React from 'react'
import Link from 'next/link'
import PostSlip from './PostSlip'

const OBORContent = () => {
  // Sample OBOR data - you can replace this with real data later
  const oborData = [
    {
      id: 1,
      image: '/img/OBOR GMIM.jpeg',
      title: 'Peran Gereja Dalam Menjaga Lingkungan: Panggilan Untuk Bertanggung Jawab',
      excerpt: '(Kejadian 2:15) TUHAN Allah Mengambil Manusia Itu Dan Menempatkannya Dalam Taman Eden Untuk Mengusahakan Dan Memelihara Taman Itu...',
      date: '15 Mei, 2025',
      author: 'Andre Kandouw'
    }
  ]

  return (
    <section className="pt-20 px-6 md:px-12 lg:px-24 bg-secondary max-w-full mx-auto pb-96">
        <div className="max-w-7xl mx-auto">
        {/* Articles Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {oborData.map((obor) => (
            <Link key={obor.id} href="/oborpost1" className="hover:scale-105 transition-transform duration-300">
              <PostSlip
                image={obor.image}
                title={obor.title}
                excerpt={obor.excerpt}
                date={obor.date}
                author={obor.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OBORContent
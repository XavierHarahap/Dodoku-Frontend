import React from 'react'
import Link from 'next/link'
import PostSlip from './PostSlip'

const WartaContent = () => {
  // Sample Warta data - you can replace this with real data later
  const wartaData = [
    {
      id: 1,
      image: '/img/WARTA POST.jpg',
      title: 'Jemaat GMIM Sion Perak Sorong Rayakan HUT PIPK Dengan Semangat Kebersamaan',
      excerpt: 'Seluruh Anggota Persatuan Ibu-Ibu Kristen (PIPK) Jemaat GMIM Sion Perak Sorong Dengan Sukacita Merayakan Hari Ulang Tahun (HUT) PIPK Pada Pekan Lalu. Dalam Sebuah Ibadah Syukur Yang Penuh Kebersamaan...',
      date: '12 Juni 2024',
      author: 'Xavier Harahap'
    }
  ]

  return (
    <section className="pt-20 px-6 md:px-12 lg:px-24 bg-secondary max-w-full mx-auto pb-96">
        <div className="max-w-7xl mx-auto">
        {/* Articles Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {wartaData.map((warta) => (
            <Link key={warta.id} href="/wartapost1" className="hover:scale-105 transition-transform duration-300">
              <PostSlip
                image={warta.image}
                title={warta.title}
                excerpt={warta.excerpt}
                date={warta.date}
                author={warta.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WartaContent
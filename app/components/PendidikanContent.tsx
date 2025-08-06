import React from 'react'
import Link from 'next/link'
import PostSlip from './PostSlip'

const PendidikanContent = () => {
  // Sample Pendidikan data - you can replace this with real data later
  const pendidikanData = [
    {
      id: 1,
      image: '/img/PENDIDIKAN POST.jpeg',
      title: 'Kolaborasi Karantina Sulut-BNN Sulut Gelar Sosialisasi Bahaya Narkoba',
      excerpt: 'Karantina Sulawesi Utara Bersama Tim Kerja Karantina Tumbuhan Bersama Penanggungjawab Pos Pelayanan Pelabuhan Laut Manado Berpartisipasi Aktif Dalam Kegiatan Sosialisasi Bahaya Narkoba Yang...',
      date: '23 Jun, 2025',
      author: 'Xavier Harahap'
    }
  ]

  return (
    <section className="pt-20 px-6 md:px-12 lg:px-24 bg-secondary max-w-full mx-auto pb-96">
        <div className="max-w-7xl mx-auto">
        {/* Articles Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {pendidikanData.map((pendidikan) => (
            <Link key={pendidikan.id} href="/pendidikanpost1" className="hover:scale-105 transition-transform duration-300">
              <PostSlip
                image={pendidikan.image}
                title={pendidikan.title}
                excerpt={pendidikan.excerpt}
                date={pendidikan.date}
                author={pendidikan.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PendidikanContent
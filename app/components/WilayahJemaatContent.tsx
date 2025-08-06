import React from 'react'
import Link from 'next/link'
import PostSlip from './PostSlip'

const WilayahJemaatContent = () => {
  // Sample Wilayah/Jemaat data - you can replace this with real data later
  const wilayahJemaatData = [
    {
      id: 1,
      image: '/img/WILAYAH POST.jpg',
      title: 'Jemaat GMIM Bethesda Ranotana Manado Gelar Lomba Baca Mazmur BIPRA Dan Lansia',
      excerpt: 'Jemaat GMIM Bethesda Ranotana Manado Sukses Menggelar Lomba Baca Mazmur Bagi Kategori BIPRA (Bapak, Ibu, Pemuda, Remaja, Dan Anak Sekolah Minggu) Serta Lansia. Kegiatan Yang Diselenggarakan...',
      date: '1 Juni, 2025',
      author: 'Xavier Harahap'
    }
  ]

  return (
    <section className="pt-20 px-6 md:px-12 lg:px-24 bg-secondary max-w-full mx-auto pb-96">
        <div className="max-w-7xl mx-auto">
        {/* Articles Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {wilayahJemaatData.map((wilayahJemaat) => (
            <Link key={wilayahJemaat.id} href="/wilayahpost1" className="hover:scale-105 transition-transform duration-300">
              <PostSlip
                image={wilayahJemaat.image}
                title={wilayahJemaat.title}
                excerpt={wilayahJemaat.excerpt}
                date={wilayahJemaat.date}
                author={wilayahJemaat.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WilayahJemaatContent
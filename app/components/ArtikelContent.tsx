import React from 'react'
import PostSlip from './PostSlip'

const ArtikelContent = () => {
  // Sample artikel data - you can replace this with real data later
  const artikelData = [
    {
      id: 1,
      image: '/img/ARTIKEL POST.jpg',
      title: 'Figura Jemaat GMIM Sion Perak Sorong: Lebih Dari Sekadar Pertunjukan, Sebuah Refleksi Iman',
      excerpt: 'Jemaat GMIM Sion Perak Sorong kembali menunjukkan kekayaan kreativitas dan kedalaman imannya melalui pementasan Figura Jemaat yang sukses diselenggarakan baru-baru ini. Kegiatan Figura Jemaat...',
      date: '9 Januari, 2024',
      author: 'Xavier Harahap'
    }
  ]

  return (
    <section className="pt-20 px-6 md:px-12 lg:px-24 bg-secondary max-w-full mx-auto pb-96">
        <div className="max-w-7xl mx-auto">
        {/* Articles Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {artikelData.map((artikel) => (
            <PostSlip
              key={artikel.id}
              image={artikel.image}
              title={artikel.title}
              excerpt={artikel.excerpt}
              date={artikel.date}
              author={artikel.author}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArtikelContent
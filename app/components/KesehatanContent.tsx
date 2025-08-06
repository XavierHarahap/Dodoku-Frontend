import React from 'react'
import Link from 'next/link'
import PostSlip from './PostSlip'

const KesehatanContent = () => {
  // Sample Kesehatan data - you can replace this with real data later
  const kesehatanData = [
    {
      id: 1,
      image: '/img/KESEHATAN POST.jpeg',
      title: 'GMIM Sion Perak Sorong Berinovasi Dengan Ibadah Daring',
      excerpt: 'Di Tengah Tantangan Pandemi Yang Mengharuskan Pembatasan Kegiatan Publik, Jemaat GMIM Sion Perak Sorong Menunjukkan Semangat Adaptasi Dan Inovasi Luar Biasa...',
      date: '9 Maret, 2020',
      author: 'Harris Suparno'
    }
  ]

  return (
    <section className="pt-20 px-6 md:px-12 lg:px-24 bg-secondary max-w-full mx-auto pb-96">
        <div className="max-w-7xl mx-auto">
        {/* Articles Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {kesehatanData.map((kesehatan) => (
            <Link key={kesehatan.id} href="/kesehatanpost1" className="hover:scale-105 transition-transform duration-300">
              <PostSlip
                image={kesehatan.image}
                title={kesehatan.title}
                excerpt={kesehatan.excerpt}
                date={kesehatan.date}
                author={kesehatan.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KesehatanContent
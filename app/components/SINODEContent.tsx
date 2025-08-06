import React from 'react'
import Link from 'next/link'
import PostSlip from './PostSlip'

const SINODEContent = () => {
  // Sample SINODE data - you can replace this with real data later
  const sinodeData = [
    {
      id: 1,
      image: '/img/SINODE POST.jpg',
      title: 'BPMS GMIM Bantu Bahan Kebutuhan Pokok Untuk Korban Banjir Di Manado',
      excerpt: 'Manado (ANTARA) - Badan Pekerja Majelis Sinode Gereja Masehi Injili Di Minahasa (BPMS-GMIM) Memberikan Bantuan Bahan Kebutuhan Pokok Untuk Warga Kota Manado Terdampak Banjir Dan Tanah Longsor...',
      date: '24 Maret, 2025',
      author: 'Xavier Harahap'
    }
  ]

  return (
    <section className="pt-20 px-6 md:px-12 lg:px-24 bg-secondary max-w-full mx-auto pb-96">
        <div className="max-w-7xl mx-auto">
        {/* Articles Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {sinodeData.map((sinode) => (
            <Link key={sinode.id} href="/sinodepost1" className="hover:scale-105 transition-transform duration-300">
              <PostSlip
                image={sinode.image}
                title={sinode.title}
                excerpt={sinode.excerpt}
                date={sinode.date}
                author={sinode.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SINODEContent
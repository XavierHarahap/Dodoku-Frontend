import React from 'react'
import Link from 'next/link'
import PostSlip from './PostSlip'

const MTPJContent = () => {
  // Sample artikel data - you can replace this with real data later
  const artikelData = [
    {
      id: 1,
      image: '/img/MTPJ.jpg',
      title: 'Kasih yang Melampaui Batas: Kekuatan Pengampunan',
      excerpt: '(Yohanes 15:12-17)  Inilah perintah-Ku, yaitu supaya kamu saling mengasihi, seperti Aku telah mengasihi kamu. Tidak ada kasih yang lebih besar dari pada kasih seorang yang memberikan nyawanya untuk sahabat...',
      date: '12 Juni, 2025',
      author: 'Seldie Saroinsong'
    }
  ]

  return (
    <section className="pt-20 px-6 md:px-12 lg:px-24 bg-secondary max-w-full mx-auto pb-96">
        <div className="max-w-7xl mx-auto">
        {/* Articles Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {artikelData.map((artikel) => (
            <Link key={artikel.id} href="/mtpjpost1" className="hover:scale-105 transition-transform duration-300">
              <PostSlip
                image={artikel.image}
                title={artikel.title}
                excerpt={artikel.excerpt}
                date={artikel.date}
                author={artikel.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MTPJContent
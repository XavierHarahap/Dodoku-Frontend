import React from 'react'
import Link from 'next/link'
import PostSlip from './PostSlip'

const WKIContent = () => {
  // Sample WKI data - you can replace this with real data later
  const wkiData = [
    {
      id: 1,
      image: '/img/WKI.jpg',
      title: 'Perempuan Pembawa Terang Dan Kehidupan',
      excerpt: '(Titus 2:3-5) Perempuan-perempuan yang tua hendaklah demikian pula, hidup sebagai orang-orang beribadah, jangan memfitnah, jangan menjadi hamba anggur, hendaklah rajin mengajarkan hal-hal yang baik dan...',
      date: '10 Mei, 2025',
      author: 'Novia Lambey'
    }
  ]

  return (
    <section className="pt-20 px-6 md:px-12 lg:px-24 bg-secondary max-w-full mx-auto pb-96">
        <div className="max-w-7xl mx-auto">
        {/* Articles Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {wkiData.map((wki) => (
            <Link key={wki.id} href="/wkipost1" className="hover:scale-105 transition-transform duration-300">
              <PostSlip
                image={wki.image}
                title={wki.title}
                excerpt={wki.excerpt}
                date={wki.date}
                author={wki.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WKIContent
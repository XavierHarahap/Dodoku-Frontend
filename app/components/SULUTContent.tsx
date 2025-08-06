import React from 'react'
import Link from 'next/link'
import PostSlip from './PostSlip'

const SULUTContent = () => {
  // Sample SULUT data - you can replace this with real data later
  const sulutData = [
    {
      id: 1,
      image: '/img/SULUT POST.jpeg',
      title: 'Gubernur Sulawesi Utara Perkuat Komitmen Pacu Sektor Pariwisata',
      excerpt: 'Manado (ANTARA) - Gubernur Sulawesi Utara (Sulut) Yulius Selvanus terus membangun komitmen bersama para pemangku kepentingan terkait untuk memacu sektor pariwisata di provinsi ini...',
      date: '9 Juni, 2025',
      author: 'Xavier Harahap'
    }
  ]

  return (
    <section className="pt-20 px-6 md:px-12 lg:px-24 bg-secondary max-w-full mx-auto pb-96">
        <div className="max-w-7xl mx-auto">
        {/* Articles Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {sulutData.map((sulut) => (
            <Link key={sulut.id} href="/sulutpost1" className="hover:scale-105 transition-transform duration-300">
              <PostSlip
                image={sulut.image}
                title={sulut.title}
                excerpt={sulut.excerpt}
                date={sulut.date}
                author={sulut.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SULUTContent
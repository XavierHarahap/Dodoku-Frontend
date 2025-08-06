import React from 'react'
import Link from 'next/link'
import PostSlip from './PostSlip'

const MANNAContent = () => {
  // Sample MANNA data - you can replace this with real data later
  const mannaData = [
    {
      id: 1,
      image: '/img/MANNA.jpg',
      title: 'Kekuatan Dalam Kelemahan: Anugerah Yang Memampukan',
      excerpt: '(2 Korintus 12:9-10)Tetapi Jawab Tuhan Kepadaku: "Cukuplah Kasih Karunia-Ku Bagimu, Sebab Justru Dalam Kelemahlanlah Kuasa-Ku Menjadi Sempurna." Sebab Itu Terlebih Suka Aku Bermegah Atas...',
      date: '2 Juni, 2025',
      author: 'Masya Sumual'
    }
  ]

  return (
    <section className="pt-20 px-6 md:px-12 lg:px-24 bg-secondary max-w-full mx-auto pb-96">
        <div className="max-w-7xl mx-auto">
        {/* Articles Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {mannaData.map((manna) => (
            <Link key={manna.id} href="/mannapost1" className="hover:scale-105 transition-transform duration-300">
              <PostSlip
                image={manna.image}
                title={manna.title}
                excerpt={manna.excerpt}
                date={manna.date}
                author={manna.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MANNAContent
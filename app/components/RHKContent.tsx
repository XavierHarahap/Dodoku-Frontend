import React from 'react'
import Link from 'next/link'
import PostSlip from './PostSlip'

const RHKContent = () => {
  // Sample RHK data - you can replace this with real data later
  const rhkData = [
    {
      id: 1,
      image: '/img/RHK.jpg',
      title: 'Kekuatan Kesabaran Dalam Keluarga: Menanti Janji Tuhan',
      excerpt: '(Yakobus 1:2-4) Saudara-Saudaraku, Anggaplah Sebagai Suatu Kebahagiaan, Apabila Kamu Jatuh Ke Dalam Berbagai-Bagai Pencobaan, Sebab Kamu Tahu, Bahwa Ujian Terhadap Imanmu Itu Menghasilkan...',
      date: '28 Mei, 2025',
      author: 'Anna Rorimpandei'
    }
  ]

  return (
    <section className="pt-20 px-6 md:px-12 lg:px-24 bg-secondary max-w-full mx-auto pb-96">
        <div className="max-w-7xl mx-auto">
        {/* Articles Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {rhkData.map((rhk) => (
            <Link key={rhk.id} href="/rhkpost1" className="hover:scale-105 transition-transform duration-300">
              <PostSlip
                image={rhk.image}
                title={rhk.title}
                excerpt={rhk.excerpt}
                date={rhk.date}
                author={rhk.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RHKContent
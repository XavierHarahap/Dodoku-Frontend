import React from 'react'
import MainCard from './MainCard'
import PostCard from './PostCard'

const RenunganHarian = () => {
  // Main featured renungan for the large card
  const featuredRenungan = {
    id: 1,
    image: '/img/MTPJ.jpg',
    title: 'Kasih yang Melampaui Batas: Kekuatan Pengampunan',
    excerpt: '(Yohanes 15:12-17)  Inilah perintah-Ku, yaitu supaya kamu saling mengasihi, seperti Aku telah mengasihi kamu. Tidak ada kasih yang lebih besar dari pada kasih seorang yang memberikan nyawanya untuk sahabat...',
    date: '12 Juni, 2022',
    author: 'Pdt. Seldie Saroinsong',
  }

  // Additional renungan data for the side cards (only 2 to match Figma design)
  const renunganData = [
    {
      id: 2,
      image: '/img/RHK.jpg',
    title: 'Kekuatan Kesabaran dalam Keluarga: Menanti Janji Tuhan',
    excerpt: '(Yohanes 15:12-17)  Inilah perintah-Ku, yaitu supaya kamu saling mengasihi, seperti Aku telah mengasihi kamu. Tidak ada kasih yang lebih besar dari pada kasih seorang yang memberikan nyawanya untuk...',
    date: '28 Mei, 2025',
    author: 'Pdt. Anna Rorimpandei',
    },
    {
      id: 3,
      image: '/img/OBOR GMIM.jpeg',
      title: 'Peran Gereja dalam Menjaga Lingkungan: Panggilan untuk Bertanggung Jawab',
      excerpt: '(Kejadian 2:15) TUHAN Allah mengambil manusia itu dan menempatkannya dalam taman Eden untuk mengusahakan dan memelihara taman itu...',
      date: '15 Mei, 2025',
      author: 'Pdt. Adnre Kandouw',
    }
  ]

  return (
    <section 
      className="py-16 px-6"
      style={{backgroundColor: '#EAE7ED'}}
    >
      <div className="max-w-8xl mx-36">
        {/* Section Header */}
        <div className="mb-10 flex items-center">
          <div 
            className="w-1.5 h-3.5 rounded-full mr-1 mt-1"
            style={{backgroundColor: '#8F339C'}}
          ></div>
          <h2 className="text-4xl font-semibold text-[#4F335A]">
            Renungan Harian
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {/* Left side - Main Card */}
          <div className="lg:col-span-1">
            <MainCard
              image={featuredRenungan.image}
              title={featuredRenungan.title}
              excerpt={featuredRenungan.excerpt}
              date={featuredRenungan.date}
              author={featuredRenungan.author}
              href="/mtpj"
            />
          </div>

          {/* Right side - Post Cards */}
          <div className="lg:col-span-1 space-y-4">
            {renunganData.map((renungan) => {
              const getHref = (imagePath: string) => {
                if (imagePath.includes('RHK')) return '/rhk'
                if (imagePath.includes('OBOR')) return '/obor'
                return '#'
              }
              return (
                <PostCard
                  key={renungan.id}
                  image={renungan.image}
                  title={renungan.title}
                  excerpt={renungan.excerpt}
                  date={renungan.date}
                  author={renungan.author}
                  href={getHref(renungan.image)}
                />
              )
            })}
          </div>
        </div>


      </div>
    </section>
  )
}

export default RenunganHarian 
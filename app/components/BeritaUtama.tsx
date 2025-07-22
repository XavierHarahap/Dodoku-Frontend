import React from 'react'
import PostCard from './PostCard'

const BeritaUtama = () => {
  // Sample news data - you can replace this with real data later
  const newsData = [
    {
      id: 1,
      image: '/img/PENDIDIKAN POST.jpeg',
      title: 'Kolaborasi Karantina Sulut-BNN Sulut Gelar Sosialisasi Bahaya Narkoba',
      excerpt: 'Karantina Sulawesi Utara bersama Tim Kerja Karantina Tumbuhan bersama Penanggungjawab Pos Pelayanan Pelabuhan Laut Manado berpartisipasi aktif dalam kegiatan sosialisasi bahaya narkoba yang...',
      date: '23 Juni, 2025',
      author: 'Xavier Harahap',
      category: 'Kegiatan'
    },
    {
      id: 2,
      image: '/img/news-placeholder-2.jpg', 
      title: 'PPKG GMIM Rumu Blahan Ministerium Pedeis Untuk Pertama Bersil Di Manado',
      excerpt: 'Program Pemberdayaan Kaum Gerja (PPKG) GMIM cabang Rumu Blahan mengadakan kegiatan ministerium pedeis untuk pertama kalinya...',
      date: '28 Februari 2024',
      author: 'Pnt. Stephanie',
      category: 'Program'
    },
    {
      id: 3,
      image: '/img/news-placeholder-3.jpg',
      title: 'Pelaksanaan Salesman Dalam Perkitapl Konsistorium Lokal Rurukan',
      excerpt: 'Kegiatan salesman dalam rangka perkitapl konsistorium lokal Rurukan telah dilaksanakan dengan penuh khidmat dan dihadiri oleh seluruh jemaat...',
      date: '25 Februari 2024', 
      author: 'Pnt. Samuel',
      category: 'Ibadah'
    },
    {
      id: 4,
      image: '/img/news-placeholder-4.jpg',
      title: 'Jemaat GMIM Keluhenan Preatevan Wandaru Pesalah Natal Anak di Gereja',
      excerpt: 'Jemaat GMIM Keluhenan mengadakan perayaan natal anak yang meriah di gereja. Acara ini diikuti oleh anak-anak dari berbagai kelompok umur...',
      date: '22 Februari 2024',
      author: 'Pnt. Maria',
      category: 'Perayaan'
    },
    {
      id: 5,
      image: '/img/news-placeholder-5.jpg',
      title: 'Jemaat GMIM Gun Presia Seying Seadakan HPP Tingkat Rayon Sario',
      excerpt: 'Hari Persatuan Pemuda (HPP) tingkat rayon Sario telah dilaksanakan dengan sukses oleh jemaat GMIM Gun Presia Seying...',
      date: '20 Februari 2024',
      author: 'Pnt. Yohanes',
      category: 'Pemuda'
    },
    {
      id: 6,
      image: '/img/news-placeholder-6.jpg',
      title: 'GMIM Gup Presia Seying Berkunjung Orangtua Terkah Jemaat Dasilting',
      excerpt: 'Kegiatan berkunjung orangtua jemaat GMIM Gup Presia Seying ke wilayah Dasilting dalam rangka pelayanan pastoral dan persekutuan...',
      date: '18 Februari 2024',
      author: 'Pnt. Gratiana',
      category: 'Pastoral'
    }
  ]

  return (
    <section 
      className="py-16 px-6"
      style={{backgroundColor: '#EAE7ED'}}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Berita Utama
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {newsData.map((news) => (
            <PostCard
              key={news.id}
              image={news.image}
              title={news.title}
              excerpt={news.excerpt}
              date={news.date}
              author={news.author}
              category={news.category}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button 
            className="text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{backgroundColor: '#8F339C'}}
          >
            Lihat Berita Lainnya
          </button>
        </div>
      </div>
    </section>
  )
}

export default BeritaUtama 
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
      author: 'Xavier Harahap'
    },
    {
      id: 2,
      image: '/img/SINODE POST.jpg', 
      title: 'BPMS GMIM bantu bahan kebutuhan pokok untuk korban banjir di Manado',
      excerpt: 'Manado (ANTARA) - Badan Pekerja Majelis Sinode Gereja Masehi Injili di Minahasa (BPMS-GMIM) memberikan bantuan bahan kebutuhan pokok untuk warga Kota Manado terdampak banjir & tanah longsor...',
      date: '24 Maret, 2025',
      author: 'Xavier Harahap'
    },
    {
      id: 3,
      image: '/img/SULUT POST.jpeg',
      title: 'Gubernur Sulawesi Utara Perkuat Komitmen Pacu Sektor Pariwisata',
      excerpt: 'Manado (ANTARA) - Gubernur Sulawesi Utara (Sulut) Yulius Selvanus terus membangun komitmen bersama para pemangku kepentingan terkait untuk memacu sektor pariwisata di provinsi ini...',
      date: '9 Juni, 2024', 
      author: 'Xavier Harahap'
    },
    {
      id: 4,
      image: '/img/WILAYAH POST.jpg',
      title: 'Jemaat GMIM Bethesda Ranotana Manado Gelar Lomba Baca Mazmur BIPRA dan Lansia',
      excerpt: 'Jemaat GMIM Bethesda Ranotana Manado sukses menggelar Lomba Baca Mazmur bagi kategori BIPRA (Bapak, Ibu, Pemuda, Remaja, dan Anak Sekolah Minggu) serta Lansia. Kegiatan yang diselenggarakan......',
      date: '1 Juni, 2025',
      author: 'Xavier Harahap'
    },
    {
      id: 5,
      image: '/img/WARTA POST.jpg',
      title: 'Jemaat GMIM Sion Perak Sorong Rayakan HUT PIPK dengan Semangat Kebersamaan',
      excerpt: 'Seluruh anggota Persatuan Ibu-Ibu Kristen (PIPK) Jemaat GMIM Sion Perak Sorong dengan sukacita merayakan Hari Ulang Tahun (HUT) PIPK pada pekan lalu, dalam sebuah ibadah syukur yang penuh......',
      date: '12 Juni, 2024',
      author: 'Harris Suparno'
    },
    {
      id: 6,
      image: '/img/KESEHATAN POST.jpeg',
      title: 'GMIM Sion Perak Sorong Berinovasi dengan Ibadah Daring',
      excerpt: 'Di tengah tantangan pandemi yang mengharuskan pembatasan kegiatan publik, jemaat GMIM Sion Perak Sorong menunjukkan semangat adaptasi dan inovasi luar biasa....',
      date: '9 Maret, 2020',
      author: 'Xavier Harahap'
    }
  ]

  return (
    <section 
      className="py-16 px-6"
      style={{backgroundColor: '#EAE7ED'}}
    >
      <div className="max-w-8xl mx-36">
        {/* Section Header */}
        <div className="mb-6 mt-12 flex items-center">
          <div 
            className="w-1.5 h-3.5 rounded-full mr-1 mt-1"
            style={{backgroundColor: '#8F339C'}}
          ></div>
          <h2 className="text-4xl font-semibold text-[#4F335A]">
            Berita Utama
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 space-y-2">
          {newsData.map((news) => (
            <PostCard
              key={news.id}
              image={news.image}
              title={news.title}
              excerpt={news.excerpt}
              date={news.date}
              author={news.author}
            />
          ))}
        </div>


      </div>
    </section>
  )
}

export default BeritaUtama 
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { CalendarIcon, PersonIcon } from '../components/icons'

const WilayahPost1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Kembali Button Section */}
      <div className="px-6 md:px-12 lg:px-24 pt-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="mb-6">
            <Link href="/wilayah-jemaat" className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit hover:bg-purple-700 transition-colors">
              <LogOut className="w-4 h-4 scale-x-[-1]" />
              <span className="text-sm font-medium">Kembali</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="px-6 md:px-12 lg:px-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Purple Category Badge */}
          <div className="text-center mb-4">
            <span className="text-primary px-4 py-1 rounded-full text-sm font-bold">
              BERITA
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6 leading-tight">
            JEMAAT GMIM BETHESDA RANOTANA MANADO GELAR LOMBA BACA MAZMUR BIPRA DAN LANSIA
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-8">
            <span className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              1 Juni 2025
            </span>
            <span className="flex items-center">
              <PersonIcon className="w-4 h-4 mr-2" />
              Xavier Harahap
            </span>
          </div>

          {/* Article Image */}
          <div className="mb-12">
            <img 
              src="/img/WILAYAH POST.jpg" 
              alt="Lomba Baca Mazmur GMIM Bethesda Ranotana" 
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              Jemaat GMIM Bethesda Ranotana Manado sukses menggelar Lomba Baca Mazmur bagi 
              kategori BIPRA (Bapak, Ibu, Pemuda, Remaja, dan Anak Sekolah Minggu) serta Lansia. Kegiatan 
              yang diselenggarakan oleh Panitia Hari-Hari Raya Gerejawi (HHRG) GMIM Bethesda Ranotana 
              tahun 2025 ini berlangsung pada hari Sabtu, 31 Mei 2025, sebagai bagian dari upaya gereja 
              dalam memperkuat iman dan kebersamaan jemaat.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pdt. Fielke Goni S.Th dalam ibadah pembukaan menekankan bahwa lomba ini bertujuan untuk 
              mendorong jemaat agar lebih giat membaca dan mendalami Alkitab, khususnya Mazmur. Ketua 
              BPMJ GMIM Bethesda, Pdt. Novita Rende-Kaligis S.Th, menambahkan bahwa ajang ini juga 
              menjadi sarana efektif untuk mempercerat tali silaturahmi di antara sesama anggota jemaat. 
              Ketua Panitia HHRG Bethesda Ranotana 2025, Ferry Daud Liando, menjelaskan bahwa inti dari 
              lomba ini bukan sekadar mencari pemenang terbaik, melainkan agar setiap peserta dapat 
              meresapi dan menghayati makna Firman Tuhan, mengingatMazmur adalah bentuk doa dan 
              pujan yang membutuhkan kontemplasi mendalam.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Keberadaan ibadah daring ini tidak hanya menjaga kesinambungan pelayanan, tetapi juga 
              menjadi sarana penjangkauan yang lebih luas. Jemaat yang berada di luar kota atau bahkan luar 
              daerah kini memiliki kesempatan untuk tetap terhubung dengan GMIM Sion Perak Sorong. 
              Inovasi ini menegaskan pesan bahwa kasih dan Firman Tuhan tidak terbatas oleh ruang dan 
              waktu, serta menunjukkan kesiapan gereja untuk beradaptasi demi melayani umatnya dalam 
              segala kondisi.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default WilayahPost1
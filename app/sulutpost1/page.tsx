import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { CalendarIcon, PersonIcon } from '../components/icons'

const SulutPost1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Kembali Button Section */}
      <div className="px-6 md:px-12 lg:px-24 pt-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="mb-6">
            <Link href="/sulut" className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit hover:bg-purple-700 transition-colors">
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
            GUBERNUR SULAWESI UTARA PERKUAT KOMITMEN PACU SEKTOR PARIWISATA
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-8">
            <span className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              26 Juni 2025
            </span>
            <span className="flex items-center">
              <PersonIcon className="w-4 h-4 mr-2" />
              Xavier Harahap
            </span>
          </div>

          {/* Article Image */}
          <div className="mb-12">
            <img 
              src="/img/SULUT POST.jpeg" 
              alt="Gubernur Sulawesi Utara" 
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              Manado (ANTARA) - Gubernur Sulawesi Utara (Sulut) Yulius Selvanus terus membangun 
              komitmen bersama para pemangku kepentingan terkait untuk memacu sektor pariwisata di 
              provinsi ini. "Sebelumnya telah ada penerbangan Malaysia, Singapura serta beberapa daerah di 
              Cina, namun sempat terhenti saat COVID-19," kata Gubernur Yulius, di Manado, Minggu (8/6).
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Geliat pariwisata di provinsi berpenduduk lebih 2,6 juta jiwa tersebut mulai menunjukkan 
              kecenderungan bertumbuh, setelah terbuka penerbangan langsung dari sejumlah daerah di 
              China. "Dalam waktu dekat ini akan dibuka lagi penerbangan internasional dari beberapa 
              negara," kata Gubernur menambahkan. Upaya pemerintah daerah membuka penerbangan 
              langsung dari sejumlah negara, kata Gubernur, tidak lain untuk terus membangun sektor pariwisata 
              melalui promosi. "Tentunya dengan promosi pariwisata maka kita akan mengenalkan 
              Indonesia, dan mengenalkan Sulawesi Utara. Harapannya akan meningkatkan kesejahteraan 
              masyarakat," ujar Gubernur Yulius.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Langkah-langkah konkret yang telah dan akan terus dilakukan meliputi peningkatan 
              konektivitas, pengembangan fasilitas penunjang pariwisata, serta pelaksanaan event-event 
              berskala nasional maupun internasional yang dapat menarik perhatian global. Komitmen ini 
              menegaskan bahwa pariwisata adalah salah satu pilar utama pembangunan ekonomi di 
              Sulawesi Utara, dengan harapan dapat memberikan dampak positif yang berkelanjutan bagi 
              kesejahteraan masyarakat.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SulutPost1

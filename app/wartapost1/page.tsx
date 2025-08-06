import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { CalendarIcon, PersonIcon } from '../components/icons'

const WartaPost1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Kembali Button Section */}
      <div className="px-6 md:px-12 lg:px-24 pt-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="mb-6">
            <Link href="/warta" className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit hover:bg-purple-700 transition-colors">
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
            JEMAAT GMIM SION PERAK SORONG RAYAKAN HUT PIPK DENGAN SEMANGAT KEBERSAMAAN
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-8">
            <span className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              12 Juni, 2024
            </span>
            <span className="flex items-center">
              <PersonIcon className="w-4 h-4 mr-2" />
              Xavier Harahap
            </span>
          </div>

          {/* Article Image */}
          <div className="mb-12">
            <img 
              src="/img/WARTA POST.jpg" 
              alt="HUT PIPK GMIM Sion Perak Sorong" 
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              Seluruh anggota Persatuan Ibu-Ibu Kristen (PIPK) Jemaat GMIM Sion Perak Sorong dengan 
              sukses merayakan Hari Ulang Tahun (HUT) PIPK pada pekan lalu, dalam sebuah ibadah syukur 
              yang penuh kebersamaan. Perayaan ini menjadi momentum penting untuk merefleksikan peran 
              strategis kaum ibu dalam menopang pelayanan gereja dan membangun keluarga Kristen yang 
              kokoh.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ibadah syukur HUT PIPK ini diisi dengan puji-pujian, doa, dan renungan yang menguatkan peran 
              ibu sebagai penopang doa, pendidik utama dalam keluarga, serta pelayan yang tak kenal lelah di 
              jemaat. Ketua PIPK Jemaat GMIM Sion Perak Sorong menekankan peran vital ibu-ibu dalam 
              mengembangkan pelayanan gereja dan menjadi teladan dalam kehidupan sehari-hari.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Kegiatan ini diharapkan tidak hanya menjadi perayaan seremonial, tetapi juga memicu 
              semangat baru bagi para ibu untuk terus berkarya dan menjadi berkat di tengah jemaat dan 
              masyarakat. Dengan semangat kebersamaan dan pelayanan yang tak putus, PIPK GMIM Sion 
              Perak Sorong terus berkomitmen untuk mendukung setiap program pelayanan gereja serta 
              menjadi teladan bagi generasi penerus.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default WartaPost1
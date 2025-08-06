import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { CalendarIcon, PersonIcon } from '../components/icons'

const OBORPost1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Kembali Button Section */}
      <div className="px-6 md:px-12 lg:px-24 pt-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="mb-6">
            <Link href="/obor" className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit hover:bg-purple-700 transition-colors">
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
              RENUNGAN
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6 leading-tight">
            PERAN GEREJA DALAM MENJAGA LINGKUNGAN: PANGGILAN UNTUK BERTANGGUNG JAWAB
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-8">
            <span className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              10 Mei, 2025
            </span>
            <span className="flex items-center">
              <PersonIcon className="w-4 h-4 mr-2" />
              Arema Kandouw
            </span>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src="/img/OBOR GMIM.jpeg" 
              alt="OBOR Renungan" 
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-10">
            {/* PENGANTAR Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">PENGANTAR</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              (Kejadian 2:15) TUHAN Allah mengambil manusia itu dan menempatkannya dalam taman Eden 
              untuk mengusahakan dan memelihara taman itu....
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Saudara-saudari terkasih, Kita hidup di dunia yang indah, ciptaan tangan Tuhan. Dari 
              pegunungan yang hijau hingga laut biru yang membentang di sekitar kita di Sulawesi Utara, 
              semuanya adalah anugerah dari Sang Pencipta. Namun, apakah kita sebagai gereja sudah 
              tanggung jawab kita sebagai pengelola ciptaan ini. Obor Pembangun hari ini mengajak kita 
              untuk merenungkan kembali panggilan luhur kita untuk mengusahakan dan memelihara 
              lingkungan, sesuai dengan Firman Tuhan dalam Kitab Kejadian.
            </p>

            {/* Second Image */}
            <div className="mb-8">
              <img 
                src="/img/OBOR THUMBNAIL POST PHOTO.jpeg" 
                alt="OBOR Menjaga Lingkungan" 
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>

            {/* PENDALAMAN Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">PENDALAMAN</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ayat Kejadian 2:15 sangat jelas: Tuhan menempatkan manusia di Taman Eden bukan hanya 
              untuk menikmati keindahan, tetapi juga untuk mengusahakan dan memelihara' ini selalu mengandung hukum,  
              pertama yang diberikan Allah kepada manusia. Sebagai gereja, kita tidak hanya dipanggil untuk 
              mengusahakan dan memelihara jiwa manusia, tetapi juga mengusahakan tataskelola  
              kepedulian terhadap lingkungan hidup. Lingkungan yang sehat adalah cerminan dari 
              kesaksian kita terhadap kebesaran.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Di Manado dan sekitarnya, kita melihat dampak perubahan iklim, masalah sampah, dan polusi 
              yang mengancam keberulangikan Lingkungan. Sebagai jemaat, setiap keluarga, dan setiap individu dapat mengakui agar 
              perasalahan baik. Setiap tindakan kecil seperti memelihara atau memilah lingkungan, tetapi menjadi jawaban 
              integral dari iman kita. Ketika kita memelihara bumi, kita memulakan Sang Pencipta.
            </p>

            {/* REFLEKSI DAN APLIKASI Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">REFLEKSI DAN APLIKASI</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bagaimana kita bisa mewujudkan panggilan ini dalam kehidupan sehari-hari dan di tengah 
              jemaat?
            </p>

            <div className="ml-8 mb-6">
              <p className="text-gray-700 leading-relaxed mb-2">• Edukasi dan Advokasi</p>
              <p className="text-gray-700 leading-relaxed mb-2">• Menjadi Teladan Contoh Begus</p>
              <p className="text-gray-700 leading-relaxed mb-2">• Berdoa</p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Marilah, sebagai anak pembersihan apa yang pedulilingkungan. Setiap tindakan kecil kita, 
              yang didasari oleh iman dan kasih, akan membawa dampak besar bagi keberlanjutan bumi ini 
              untuk generasi mendatang.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Allah Bapa, Pencipta langit dan bumi, Kami bersyukur atas ciptaan-Mu yang Engkau berikan kepada kami. Ampuni kami jika seringkali kami lalai dalam 
              menjaga dan memelihara bumi ini. Bangkitkanlah dalam diri kami kesadaran dan semangat 
              untuk menjadi pengelola lingkungan yang setia, seturut kehendak-Mu. Berkatilah setiap upaya 
              kami agar serakan tanah gembur, jernih, nama-Mu dimuliakan dan bumi terpelihara. Dalam nama 
              Tuhan Yesus kami berdoa. Amin.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default OBORPost1
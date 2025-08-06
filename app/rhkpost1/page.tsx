import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { CalendarIcon, PersonIcon } from '../components/icons'

const RHKPost1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Kembali Button Section */}
      <div className="px-6 md:px-12 lg:px-24 pt-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="mb-6">
            <Link href="/rhk" className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit hover:bg-purple-700 transition-colors">
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
            KEKUATAN KESABARAN DALAM KELUARGA: MENANTI JANJI TUHAN
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-8">
            <span className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              28 Mei, 2025
            </span>
            <span className="flex items-center">
              <PersonIcon className="w-4 h-4 mr-2" />
              Anmy Rorimpandey
            </span>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src="/img/RHK.jpg" 
              alt="RHK Renungan" 
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-10">
            {/* PENGANTAR Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">PENGANTAR</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              (Yakobus 1:2-4) "Saudara-saudaraku, anggaplah sebagai suatu kebahagiaan, apabila kamu jatuh 
              ke dalam berbagai-bagai percobaan, sebab kamu tahu, bahwa ujian terhadap imanmu itu 
              menghasilkan ketekunan. Dan biarkanlah ketekunan itu memperoleh buah yang matang, supaya 
              kamu menjadi sempurna dan utuh dan tak kekurangan suatu apa pun."
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Keluarga adalah anugerah terbesar dalam Tuhan. Dalam dinamika hidup berkeluarga kita sering 
              hari, sesekali direnggali dujil. Mulai dari menunggu anak-anak selesai bercakap, menghindagi 
              penelitian kecil, hingga menantu jawaban doa atas pergumulan besar. Ada kalanya kita merasa 
              lelah, ingin menyerah, atau kehilangan harapan ketika masalah tak kunjung usai. Namun, Firman 
              Tuhan dari Yakobus mengingatkan kita tentang nilai dan hasil dari kesabaran yang lahir dari 
              iman.
            </p>

            {/* Second Image */}
            <div className="mb-8">
              <img 
                src="/img/RHK THUMBNAIL POST PHOTO.jpg" 
                alt="RHK Kesabaran dalam Keluarga" 
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>

            {/* PENDALAMAN Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">PENDALAMAN</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Yakobus menjelaskan kita untuk melihat percobaan dan tantangan bukan sebagai musibah 
              yang merampas kebahagiaan, melainkan sebagai "kebahagiaan" yang akan menghasilkan ketekunan. Ini adalah 
              perspektif ilahi yang mengajak kita untuk percaya bahwa setiap ujian memiliki tujuan. Dalam 
              konteks keluarga, ujian bisa berupa masalah keuangan, kesehatan, kesalahpahaman, atau bahkan 
              hanya perbedaan pendapat. Melalui semuanya itu, Tuhan sedang memurnikan dan 
              mendewasakan kita.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ketekunan ini, yang terus kita pupuk dengan berserah pada kehendak Tuhan, akan membawa 
              kita pada kedewasaan rohani. Kita menjadi lebih "sempurna dan utuh," tidak kekurangan apa 
              pun yang esensial di mata Tuhan. Artinya, kita menjadi pribadi dan keluarga yang lebih kuat, 
              lebih bijaksana, dan lebih bergantung penuh pada Tuhan. Kesabaran bukan berarti pasif, 
              melainkan aktif menanti dan percaya bahwa Tuhan bekerja di tengah setiap situasi.
            </p>

            {/* REFLEKSI DAN APLIKASI Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">REFLEKSI DAN APLIKASI</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bagaimana kita bisa mempraktikkan kesabaran ini dalam keluarga kita hari ini?
            </p>

            <div className="ml-8 mb-6">
              <p className="text-gray-700 leading-relaxed mb-2">• Berdoa Bersama</p>
              <p className="text-gray-700 leading-relaxed mb-2">• Berkomunikasi dengan Sabar</p>
              <p className="text-gray-700 leading-relaxed mb-2">• Belajar dari Kesalahan</p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Semoga renungan ini menguatkan kita setiap keluarga Kristen di Minahasa, bahwa di dalam Tuhan 
              Yesus Kristus, kesabaran kita tidak akan sia-sia. Ia adalah Gembala yang setia yang menyertai 
              kita melalui setiap lemralu kehidupan.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Tuhan Yesus, terima kasih untuk Firman-Mu yang menguatkan kami hari ini. Ajarkan kami 
              kesabaran untuk menghadapi setiap ujian dan tantangan dalam keluarga kami. Tolong kami untuk percaya 
              bahwa setiap tantangan membentuuk kami menjadi pribadi yang lebih teguh dalam iman. 
              Berkatilah keluarga kami agar semakin hidup dalam kasih, damai sejahtera, dan pengharapan 
              yang hanya ada di dalam Engkau. Amin.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default RHKPost1
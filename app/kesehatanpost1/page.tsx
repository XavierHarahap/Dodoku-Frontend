import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { CalendarIcon, PersonIcon } from '../components/icons'

const KesehatanPost1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Kembali Button Section */}
      <div className="px-6 md:px-12 lg:px-24 pt-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="mb-6">
            <Link href="/kesehatan" className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit hover:bg-purple-700 transition-colors">
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
            GMIM SION PERAK SORONG BERINOVASI DENGAN IBADAH DARING
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-8">
            <span className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              9 Maret, 2020
            </span>
            <span className="flex items-center">
              <PersonIcon className="w-4 h-4 mr-2" />
              Harris Suparno
            </span>
          </div>

          {/* Article Image */}
          <div className="mb-12">
            <img 
              src="/img/KESEHATAN POST.jpeg" 
              alt="GMIM Sion Perak Sorong Ibadah Daring" 
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              Di tengah tantangan pandemi yang mengharuskan pembatasan kegiatan publik, jemaat GMIM 
              Sion Perak Sorong menunjukkan semangat adaptasi dan inovasi luar biasa. Gereja tersebut 
              dengan sigap mengadaptasi teknologi digital, mereka untuk memulai saluran langsung 
              (livestreaming) ibadah Minggu. Langkah proaktif ini memastikan bahwa pelayanan khotbah 
              mingguan tetap dapat diakses oleh seluruh jemaat, termasuk mereka yang sedang menjalani 
              karantina mandiri atau memilih berdiam dari rumah.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Inisiatif ini lahir dari komitmen GMIM Sion Perak Sorong untuk terus melayani dan menjangkau 
              jemaatnya di tengah masa yang berubah. Dengan memanfaatkan teknologi digital, tim 
              multimedia gereja berhasil menyiapkan perangkat dan platform yang dibutuhkan dalam waktu 
              singkat. Setiap Minggu, ibadah disiarkan secara langsung melalui kanal resmi gereja, 
              memungkinkan jemaat untuk tetap merasakan persekutuan dan menerima santapan rohani, 
              tanpa harus berkumpul secara fisik. Ini menjadi bukti nyata bagaimana teknologi dapat menjadi 
              jembatan bagi iman dan komunitas di masa sulit.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Keberadaan ibadah daring ini tidak hanya menjaga kesinambungan pelayanan, tetapi juga 
              menjadi sarana penjangkauan yang lebih luas. Jemaat yang berada di luar kota atau bahkan luar 
              daerah kini memiliki kesempatan untuk tetap terhubung dengan GMIM Sion Perak Sorong. 
              Inovasi ini menegaskan pesan bahwa kasih dan Firman Tuhan tidak terbatas oleh ruang dan 
              waktu, serta menunjukkan kesiapan gereja untuk beradaptasi demi melayani umatnya dalam 
              segala kondisi.
            </p>

            <div className="bg-gray-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
              <p className="text-gray-800 italic text-lg leading-relaxed">
                "Pandemi boleh membatasi gerak fisik, tapi tak akan pernah 
                membatasi Firman Tuhan untuk menjangkau setiap hati. Mimbar 
                kami sekarang ada di setiap rumah."
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default KesehatanPost1
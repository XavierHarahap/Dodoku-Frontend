import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { CalendarIcon, PersonIcon } from '../components/icons'

const PendidikanPost1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Kembali Button Section */}
      <div className="px-6 md:px-12 lg:px-24 pt-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="mb-6">
            <Link href="/pendidikan" className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit hover:bg-purple-700 transition-colors">
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
            KOLABORASI KARANTINA SULUT-BNN SULUT GELAR SOSIALISASI BAHAYA NARKOBA
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
              src="/img/PENDIDIKAN POST.jpeg" 
              alt="Sosialisasi Bahaya Narkoba Karantina SULUT-BNN" 
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              Karantina Sulawesi Utara bersama Tim Kerja Karantina Tumbuhan bersama Penanggungawab 
              Pos Pelayanan Pelabuhan Laut Manado berpartisipasi aktif dalam kegiatan sosialisasi bahaya 
              narkoba yang diselenggarakan di Pelabuhan Manado. Kegiatan ini merupakan rangkaian 
              kegiatan memperingati Hari Anti Narkotika Internasional atau International Day Against Drug 
              Abuse and Illicit Trafficking) yang jatuh setiap tanggal 26 Juni.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Kegiatan sosialisasi bahaya penyalahgunaan narkoba ini langsung disampaikan oleh Kepala 
              BNNP Sulawesi Utara, Brigjen Pol. Pitra A. Ratulangi, S.I.K., M.M. Pemberantasan Narkoba ini 
              merupakan pesan langsung dari Bapak Presiden sebagai salah satu misi dari Bapak Gubernur 
              dan Wakil Gubernur Sulut yaitu mencegah dan memberantas KKN serta Narkoba.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Sebagai garda terdepan pengawasan lalu lintas hewan, ikan, dan tumbuhan, Karantina Sulawesi 
              Utara juga bertanggung jawab mendukung terciptanya lingkungan kerja yang sehat, aman, dan 
              bebas dari narkoba. Melalui partisipasi aktif ini, Karantina Sulawesi Utara menegaskan bahwa 
              perang terhadap narkoba bukan hanya tugas satu lembaga, tetapi tanggung jawab bersama 
              seluruh komponen bangsa. Seluruh civitas pelabuhan laut Manado mendeklarasikan komitmen 
              bersama untuk menolak dan melawan penyalahgunaan narkoba, mendukung pelabuhan bebas 
              narkoba dan menjaga integritas dan profesionalisme ASN lingkup Pelabuhan Laut Manado.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Sebagai garda terdepan pengawasan lalu lintas hewan, ikan, dan tumbuhan, Karantina Sulawesi 
              Utara juga bertanggung jawab mendukung terciptanya lingkungan kerja yang sehat, aman, dan 
              bebas dari narkoba. Melalui partisipasi aktif ini, Karantina Sulawesi Utara menegaskan bahwa 
              perang terhadap narkoba bukan hanya tugas satu lembaga, tetapi tanggung jawab bersama 
              seluruh komponen bangsa. Seluruh civitas pelabuhan laut Manado mendeklarasikan komitmen 
              bersama untuk menolak dan melawan penyalahgunaan narkoba, mendukung pelabuhan bebas 
              narkoba dan menjaga integritas dan profesionalisme ASN lingkup Pelabuhan Laut Manado.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Dihadiri oleh berbagai personil lintas instansi, kegiatan ini diharapkan dapat meningkatkan 
              kesadaran seluruh pemangku kepentingan di pelabuhan, termasuk petugas karantina, tenaga 
              bongkar muat, agen kapal, dan masyarakat pelabuhan lainnya terhadap ancaman 
              penyalahgunaan narkotika. Diharapkan sinergi antar instansi semakin kuat guna menciptakan 
              lingkungan yang aman dan sehat dari penyalahgunaan narkotika.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PendidikanPost1
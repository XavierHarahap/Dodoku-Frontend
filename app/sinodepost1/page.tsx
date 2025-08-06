import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { CalendarIcon, PersonIcon } from '../components/icons'

const SinodePost1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Kembali Button Section */}
      <div className="px-6 md:px-12 lg:px-24 pt-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="mb-6">
            <Link href="/sinode" className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit hover:bg-purple-700 transition-colors">
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
            BPMS GMIM BANTU BAHAN KEBUTUHAN POKOK UNTUK KORBAN BANJIR DI MANADO
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-8">
            <span className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              24 Maret, 2025
            </span>
            <span className="flex items-center">
              <PersonIcon className="w-4 h-4 mr-2" />
              Xavier Harahap
            </span>
          </div>

          {/* Article Image */}
          <div className="mb-12">
            <img 
              src="/img/SINODE POST.jpg" 
              alt="BPMS GMIM Bantuan Banjir Manado" 
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              Manado (ANTARA) - Badan Pekerja Majelis Sinode Gereja Masehi Injili Di Minahasa 
              (BPMS-GMIM) Memberikan Bantuan Bahan Kebutuhan Pokok Untuk Warga Kota Manado 
              Terdampak Banjir Dan Tanah Longsor. Bantuan ini diberikan sebagai bentuk kepedulian 
              dan solidaritas GMIM terhadap saudara-saudara yang terdampak bencana alam.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ketua BPMS GMIM, Pdt. Dr. Hein Arina, S.Th., M.Th menyatakan bahwa bantuan ini 
              merupakan wujud nyata dari kasih Kristus kepada sesama. "Dalam situasi sulit seperti 
              ini, gereja harus hadir dan memberikan bantuan kepada mereka yang membutuhkan," 
              ujarnya. Bantuan yang diberikan berupa beras, mie instan, air mineral, selimut, dan 
              keperluan dasar lainnya yang sangat dibutuhkan para korban.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Tim relawan GMIM juga membantu dalam pendistribusian bantuan langsung ke lokasi 
              pengungsian dan rumah-rumah warga yang terdampak. Kegiatan ini diharapkan dapat 
              meringankan beban para korban banjir dan tanah longsor, serta menjadi semangat bagi 
              mereka untuk bangkit kembali. BPMS GMIM berkomitmen untuk terus memantau kondisi 
              korban dan memberikan bantuan berkelanjutan sesuai dengan kebutuhan yang ada.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SinodePost1
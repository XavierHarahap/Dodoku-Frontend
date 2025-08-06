import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { CalendarIcon, PersonIcon } from '../components/icons'

const MTPJPost1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Kembali Button Section */}
      <div className="px-6 md:px-12 lg:px-24 pt-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="mb-6">
            <Link href="/mtpj" className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit hover:bg-purple-700 transition-colors">
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
            KASIH YANG MELAMPAUI BATAS: KEKUATAN PENGAMPUNAN
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-8">
            <span className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              17 Juni, 2025
            </span>
            <span className="flex items-center">
              <PersonIcon className="w-4 h-4 mr-2" />
              Stella Sarontoag
            </span>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src="/img/MTPJ.jpg" 
              alt="MTPJ Renungan" 
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-10">
            {/* PENGANTAR Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">PENGANTAR</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              (Yohanes 15:12-17) "Inilah perintah-Ku, yaitu supaya kamu saling mengasihi, seperti Aku telah 
              mengasihi kamu. Tidak ada kasih yang lebih besar dari pada kasih seorang yang memberikan 
              nyawanya untuk sahabat-sahabatnya. Kamu adalah sahabat-Ku, jikalau kamu berbuat apa yang 
              Kuperintahkan kepadamu. Aku tidak menyebut kamu lagi hamba, sebab hamba tidak tahu apa yang 
              diperbuat oleh tuannya, tetapi Aku menyebut kamu sahabat, karena Aku telah memberitahukan 
              segala sesuatu yang telah Kudengar dari Bapa-Ku, telah Kuberitahukan kepadamu. Bukan kamu yang memilih Aku, 
              tetapi Akulah yang memilih kamu. Dan Aku telah menetapkan kamu, supaya kamu pergi dan 
              menghasilkan buah dan buahmu itu tetap, supaya apa yang kamu minta kepada Bapa dalam 
              nama-Ku, diberikan-Nya kepadamu; inilah perintah-Ku kepadamu: Kasihilah seorang akan yang 
              lain."
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Saudara-saudari yang terkasih dalam Kristus, Dalam kehidupan ini, kita seringkali dihadapkan 
              pada berbagai tantangan yang menguji kedalaman kasih kita. Kita mungkin merasa sulit untuk 
              mengasihi mereka yang telah menyakiti kita, atau bahkan sekadar berjuang untuk menunjukkan 
              kasih kepada sesama dalam kehidupan sehari-hari. Namun, Firman Tuhan hari ini, dari Yohanes 
              15, menunjukkan kita kembali pada inti dari Kristus: kasih yang sejati, kasih yang melampauai 
              segala batas dan perkiraan dunia.
            </p>

            {/* Second Image */}
            <div className="mb-8">
              <img 
                src="/img/MTPJ THUMBNAIL POST PHOTO.jpg" 
                alt="MTPJ Kasih dan Pengampunan" 
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>

            {/* PENDALAMAN Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">PENDALAMAN</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ayat bacaan kita hari ini adalah perintah langsung dari Tuhan Yesus Kristus. Ia tidak hanya 
              memberikan kita untuk mengasihi, tetapi Ia memberikan standar kasih itu sendiri: "seperti Aku 
              telah mengasihi kamu." Kasih Kristus adalah kasih yang rela berkorban, kasih yang rela 
              memberikan nyawa. Nya bagi sahabat-Nya, bahkan bagi musuh-Nya. Ini adalah kasih 
              tertinggi yang pernah ada di dunia ini.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Namun itu, Yesus mengatakan kita dari status "hamba" menjadi "sahabat." Sebuah hubungan 
              yang didasari bukan oleh hierarki, melainkan oleh kepercayaan, pengungkapan hati, dan pilihan 
              batin. Kita dipilih bukan karena kita layak, tetapi karena kasih-Nya yang mengundang. Pilihan ini 
              memerlukan tanggung jawab untuk 'pergi dan menghasilkan buah,' yaitu hidup kasih, karena 
              sejatinya, keabadian, kemurnian kebenaran, kesetaraan, kemerdekaan yang Tuhan berikan.
            </p>

            {/* REFLEKSI DAN APLIKASI Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">REFLEKSI DAN APLIKASI</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pertanyaannya bagi kita hari ini: Sudahkah kita menghidupi "seperti Kristus telah mengasihi 
              kita?" Kasih yang melampaui batas adalah kasih yang tidak hanya menolerir, tetapi juga 
              member; kasih yang tidak hanya menghargai kebaikan, tetapi juga rela berkorban. Dalam 
              konteks hidup kita sehari-hari di Minahasa, di tengah keluarga, gereja, dan lingkungan kerja, 
              kasihitu menuut kita untuk:
            </p>

            <div className="ml-8 mb-6">
              <p className="text-gray-700 leading-relaxed mb-2">• Memaafkan: Melepaskan dendam dan kepahitan.</p>
              <p className="text-gray-700 leading-relaxed mb-2">• Melayani: Memberikan waktu, tenaga, dan talenta kita tanpa pamrih.</p>
              <p className="text-gray-700 leading-relaxed mb-2">• Mendengar: Merengkul perbedaan dan mendengarkan perspekuansi.</p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Marilah kita merenungkan bagaimana kasih Kristus telah mengubah hidup kita, dan bagikan 
              kasih itu mengalir melalui kita, menjadi kekuatan pengampunan dan berkat bagi dunia di sekitar 
              kita.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Ya Bapa yang Maha Kasih, Kami bersyukur atas Firman-Mu yang mengingatkan kami akan 
              pandjilan agung untuk saling mengasihi. Ampuni kami jika seringkali kami gagal menunjukkan 
              kehadiran kasih Kristus. Mamupkan kami, ya Tuhan, melalui Roh Kudus-Mu, untuk mengasihi 
              dengan kasih yang melampaui batas, menjampuni tanpa syarat, dan menjadi alat berkat-Mu di 
              mana pun kami berada. Biarlah hidup kami mencerminkan kasih Kristus bagi kemuliaan nama-
              Mu. Amin.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MTPJPost1
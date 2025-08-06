import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { CalendarIcon, PersonIcon } from '../components/icons'

const MANNAPost1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Kembali Button Section */}
      <div className="px-6 md:px-12 lg:px-24 pt-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="mb-6">
            <Link href="/manna" className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit hover:bg-purple-700 transition-colors">
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
            KEKUATAN DALAM KELEMAHAN: ANUGERAH YANG MEMAMPUKAN
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-8">
            <span className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              7 Juni 2025
            </span>
            <span className="flex items-center">
              <PersonIcon className="w-4 h-4 mr-2" />
              Margie Samuel
            </span>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src="/img/MANNA.jpg" 
              alt="MANNA Renungan" 
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-10">
            {/* PENGANTAR Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">PENGANTAR</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              (Mazmur 32:1) "Berbahagialah orang yang diampuni pelanggarannya, yang dosanya ditutup!
              justru dalam kemerdahaan kuasa-Ku menjadi sempurna." Sebab itu terlebih suka aku bermegah 
              dalam kelemahanku, supaya kuasa Kristus menjumpai aku. Karena itu aku senang dan rida di dalam 
              kelemahan, di dalam cela, di dalam kesukaran, di dalam penganiayaan dan kesesakan oleh 
              karena Kristus, sebab jika aku lemah, maka aku kuat.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Saudara-saudari yang dikasihi Tuhan. Seringkali, kita cenderung menyembunyikan kelemahan 
              kita. Kita ingin tampil kuat, sempurna, dan mampu mengatasi seseatan. Budaya di sekitar kita 
              seringkali menuntut kita untuk selalu berhasil, selalu tangguh. Namun, Firman Tuhan hari ini 
              dari Rasul Paulus justru menunjukkan kepada kita sebuah paradoks ilahi yang membebaskan: 
              Kekuatan Allah menjadi sempurna justru di dalam kelemahan kita.
            </p>

            {/* Second Image */}
            <div className="mb-8">
              <img 
                src="/img/MANNA THUMBNAIL POST PHOTO.jpg" 
                alt="MANNA Kekuatan dalam Kelemahan" 
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>

            {/* PENDALAMAN Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">PENDALAMAN</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Rasul Paulus sendiri bergumul dengan apa yang disebutnya "duri dalam daging" sebuah 
              keterbatasan atau penderitaan yang ia minta berkali-kali untuk diangkat oleh Tuhan. Namun, 
              jawaban Tuhan sangatlah mengejutkan: "Cukuplah kasih karunia-Ku bagi-mu, sebab justru 
              dalam keterdahaan kuasa-Ku menjadi sempurna." Ini bukan berarti Tuhan senang melihat kita 
              lemah, tetapi Dia memadal setiap celah dalam diri kita untuk menyalurkan kuasa yang tak 
              terbatas.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ketika kita lemah, kita dipaksa untuk tidak mengandalkan diri sendiri. Kita dipaksa untuk 
              mencari sumber kekuatan yang lebih dipesat, yaitu Allah. Di sinilah anugrah-Nya menjadi cueku, 
              menjadi penopang, memadu pemampu. Kelemahan kita bukan lagi menjadi penghalalang, 
              melainkan menjadi pintu gerbang bagi kuasa Kristus untuk memungut, melindungi, dan bekerja 
              melalui kita.
            </p>

            {/* REFLEKSI DAN APLIKASI Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">REFLEKSI DAN APLIKASI</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bagi kita yang hidup di Manado, dengan segala kesibukan, tantangan pekerjaan, keluarga, dan 
              pelayanan, bagaimana kita sering merasa lemah, tidak berdaya, atau bahkan gagal. Mungkin kita 
              merasa lemah dalam iman, dalam menghafapi godaan, atau dalam menanggapi panggiian hidup. 
              Ingatlah bahwa di titik-titik itulah Tuhan berkarja. Ketika kita mengakui kelemahan dan meneliinkan 
              diri kepada-Nya, kuasa dunia merasari kemamuuan kita untuk membeginggi segala aral.
            </p>

            <div className="ml-8 mb-6">
              <p className="text-gray-700 leading-relaxed mb-2">• Akui Kelemahan Anda</p>
              <p className="text-gray-700 leading-relaxed mb-2">• Andraikan Anugerah-Nya</p>
              <p className="text-gray-700 leading-relaxed mb-2">• Bermegah dalam Kelemahan</p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Biarlah setiap kelemahan kita menjadi kesempatan bagi kuasa Kristus untuk bersinar lebih 
              terang dalam hidup kita, bagi kemuliaan nama-Nya.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Ya Tuhan, kami datang di hadapan-Mu dengan segala kelemahan dan keterbatasan kami. 
              Terima kasih bahwa, karena kasih karunia-Mu, Mu selalu cukup bagi kami. Ajarlah kami untuk tidak 
              malu atas kelemahan kami, melainkan justru bermegah di dalamnya, agar kuasa Kristus dapat 
              beristirahat sempurna dalam hidup kami. Pergunakanlah kelemahan kami sebagai cermin dan motivasi. 
              Mari kita terus belajar, bertumbuh, dan saling menguatkan satu sama lain. Dalam nama Tuhan Yesus kami berdoa. Amin.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MANNAPost1
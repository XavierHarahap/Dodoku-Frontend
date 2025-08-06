import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { CalendarIcon, PersonIcon } from '../components/icons'

const WKIPost1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Kembali Button Section */}
      <div className="px-6 md:px-12 lg:px-24 pt-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="mb-6">
            <Link href="/wki" className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit hover:bg-purple-700 transition-colors">
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
            PEREMPUAN PEMBAWA TERANG DAN KEHIDUPAN
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-8">
            <span className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              10 Mei, 2025
            </span>
            <span className="flex items-center">
              <PersonIcon className="w-4 h-4 mr-2" />
              Novita Limbay
            </span>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src="/img/WKI.jpg" 
              alt="WKI Renungan" 
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-10">
            {/* PENGANTAR Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">PENGANTAR</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              (Titus 2:3-5) Perempuan-perempuan yang tua hendaklah demikian pula, hidup sebagai orang-
              orang beribadah, jangan memfitnah, jangan menjadi hambia anggur; hendaklah rajin 
              mengajarkan hal-hal yang baik dan dengan demikian mendidik perempuan-perempuan muda 
              supaya mencintai suami dan anak-anaknya, hidup bijaksana, suci rajin mengatur rumah 
              tangganyya, baik hati dan taat kepada suaminya, agar Firman Allah jangan dibhuai orang 
              sinyinya
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Syalom ibu-ibu WKI yang terkasih dalam Tuhan Yesus Kristus! Puji syukur kita panjatkan ke 
              hadirat Tuhan, yang senantiasa memberikan kasih dan berkat. Nya bagi kita semua. Hari ini, 
              kita berkunat sebagai perempuan-perempuan pilihan Tuhan, sebagai bagian dari Wanita 
              Kaum Ibu GMIM, untuk saling menguatkan dan merenungkan Firman-Nya.
            </p>

            {/* Second Image */}
            <div className="mb-8">
              <img 
                src="/img/WKI THUMBNAIL POST PHOTO.jpg" 
                alt="WKI Perempuan Pembawa Terang" 
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>

            {/* PENDALAMAN Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">PENDALAMAN</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ayat ini dimulai dengan nasihat bagi perempuan yang lebih tua untuk hidup berbatah, tidak 
              memfitrah, dan tidak menjadi hamba anggur. Ini bicara tentang integritas dan kekudusan, 
              yang laintasifaitu bahukan kata-kata yang membangun, bukan yang mendesrtrusasi. Dan karenaa 
              hidup bijaksana, itu bukan hanya tentang pengetahuan, tapi bagaimana seluruh hidup kita 
              mencerminkan karakter Allah kepada Tuhan. Dan ini menurul Fondasi bagi peran kita sebagai 
              nasihat dan model rohani.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Kemudian, Paulus menegaskan, "mendidik perempuan muda." (merangsang kata Ini dalam bahasa 
              Yunani yang digunakan adalah 'disini diajarkan,' yang berarti mendidik dalam memecol 
              hidup hiaksana, suci rajin mengatur rumah tangganya, baik hati dan taat kepada suaminya." 
              Bau ini, ini adalah pangan untuk memosai mentor dan pembawa keledahan dari kasih keluarga 
              bertanggung jawab atas keluarga kita sendiri, tetapi kita juga punya peran untuk membentul 
              generasi perempuan. Kita memudidkan anak-anak, kita menguatkan satu dan lain, dan kita adalah garda 
              terdepan dari merawat keutuhan rumah tangga.
            </p>

            {/* REFLEKSI DAN APLIKASI Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">REFLEKSI DAN APLIKASI</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bagaimana kita bisa mengapkllasifikasikan hal yang baik? Bukan hanya lewat kata-kata. Lagi lewat 
              teladan hidup kita. Lewat kesabaran kita, lewat pengorbanan kita, lewat cara kita membakar 
              rumah tangga dengan bijaksana, dan lewat kelebihan hati yang terpancar dari setiap tindakan 
              yang kita buat. Namun kita hidup dalam zaman yang ada.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Tentangan di masa kini terutama mudah. Kita hidup di era yang serba cepat, penuh tuntutan, dan 
              kadang menggeser nilai-nilai rohani yang lebih. Namun, justru di sinilah peran kita menjadi semakin 
              krusial. Kita dipanggil untuk menjadi pribadi yang bijaksana, yang bisa membesarkan masa yang sedar 
              tapi serewat. Kita dipanggil untuk tetap suci, menjaga hati dan pikiran kita dari hal-hal yang merusak, 
              serta setia menjalankan kepatuhan Tuhan. Kita dipanggil untuk tetap suci dalam tugs kita sebagai cermin dan motivasi.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Firman Tuhan ini mengajar dengan tujuan yang sangat penting: "agar Firman Allah jangan 
              dihujat orang." Artinya, cara hidup kita sebagai perempuan Kristen, sehagiap ibu-ibu WKI, sedealinya 
              menjadi kesaksian yang hidup dari kebenaran dan kuasa Firman Tuhan. Setiap hal yang kita 
              buat dilihat dan dinilai orang lain oleh orang di sekitar kita, merek akan melihat 
              perbuatan kita dan memuliakan Bapanya yang di sorga.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ibu-ibu, WKI yang disasihi Tuhan, marilah kita periksa Firman ini sebagai cermin dan motivasi. 
              Mari kita menjadu perempuan pembawa terang dan kehidupan di keluarga kita, di komunitasnya, bahkan di tengah-tengah luas. 
              Kita termasuk kita memilih ke mana para generasi memerat kita pada hal-hal yang negarif, ini tentang membangun Yesus berckayya melalui 
              hidup kita.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Di hadapan bendadahami Kesungguhan kerahulu di deapan bering, Kita semuah punya kekurangan. Tapi ini 
              bukanlah tentang kesempurnaan; kami kemudian ini untuk hidup ber-bebek, memilih untuk belajar mellantai yang terbuka 
              cemdering menergetik kita pada hal-hal yang negarif. Ini tentang membangu Yesus Kristus.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default WKIPost1
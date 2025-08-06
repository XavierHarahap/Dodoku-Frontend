import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { CalendarIcon, PersonIcon } from '../components/icons'

const PemudaRemajaPost1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Kembali Button Section */}
      <div className="px-6 md:px-12 lg:px-24 pt-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="mb-6">
            <Link href="/pemuda-remaja" className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit hover:bg-purple-700 transition-colors">
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
              src="/img/PEMUDA DAN REMAJA.png" 
              alt="Pemuda Remaja Renungan" 
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-10">
            {/* PENGANTAR Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">PENGANTAR</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              (Matius 5:13-16) Kamu adalah garam dunia. Jika garam itu menjadi tawar, dengan apakah 
              disebutkan Tidak ada lagi gunanya selain dibuang dan dijinjak orang. Kamu adalah terang dunia. 
              Kota yang terletak di atas bukit tidak dapat disembunyikan. Lagipula orang tidak 
              menyalakan pelita lalu meletakkannya di bawah gantang, melainkan di atas kaki pelita agar 
              senua orang di dalam rumah itu kelihatan. Demikian juga terangmu bercahaya di depan orang-
              orang supaya mereka melihat perbuatanmu yang baik dan memuliakan Bapamu yang di sorga.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Puji syukur kita panjatkanbagi Tuhan Yesus, atas saidahnya kenyah laku dia semua. Nya bagi kita semua, 
              tempat ini, hatinya, meminta, dan mensdeikan Firman. Nya. Hari ini kita memungankan 
              salah satu pesan Yesus yang paling kuat dan relevan bagi kita semua, yakni panggilan untuk 
              menjadi garam dan terang dunia. Nah kami adalah solonya, supaya mereka melihat 
              perbuatan kita yang baik dan memuliakan Bagunya yang di sorga.
            </p>

            {/* Second Image */}
            <div className="mb-8">
              <img 
                src="/img/PEMUDA THUMBNAIL POST PHOTO.jpg" 
                alt="Pemuda Remaja Pembawa Terang" 
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>

            {/* PENDALAMAN Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">PENDALAMAN</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Anak-anak setakala, kita hidup di era yang lemah besar, tapi digital. Segala sesuatu serba cepat, 
              informasi mudah diperoleh, dan dunia terasa dalam genggaman tangan kita. Media sosial, game 
              online, streaming film, semua ada. Ini adalah dunia yang pantaksian, lagi juga penuh 
              tantanganya. Pertanyaannya, bagaimana kita sebagai remaja dan pemuda Kristen hadir dan hati 
              relevan dan bertempak di tengah kemajuan ini?
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Yesus melakukan, "Kamu adalah terang dunia." Terang ini untuk menerangi kegelapan. 
              Kita lalu surang menyala, tidak mungkin disembunyikan dibawah genap atau diletkan, pasti 
              Grestalatikan termujud seberan Engbal sepper menolong orang.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Lalu, Yesus melatakan, "Kamu adalah garam dunia." Terang ini untuk mencegah kerusakan. 
              Kita lah suputr tenanya, tidak mungkin untuk memresap keseruakan. 
              Grestahatikan adalah tempat bergiaran kasal atau Hilman, bukan mempelemahkannya dita di  
              Nah, sastra dokorin ini, kalau kami adalah penganan moral di tengah kehankamana. Kegangan sapi Kegdoham kehongohatan, kegadahan keperkuritasaan, kegadahan keberobatan. Di 
              media sosial, katakng baryak toxic content, banyak drama, banyak hal yang menggeakkan. Dan 
              sudah lah kehadiran garing terlehar, bukan yang ada sebagai garam, bagaimana caranya?
            </p>

            {/* REFLEKSI DAN APLIKASI Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">REFLEKSI DAN APLIKASI</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lalu, Yesus melakukan, "Kamu adalah terang dunia." Terang ini untuk menerashi kegelapan. 
              Kita lah surat ternya, tidak mungkin untuk mencirkan kegelapan.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Kita sebagai remaja dan pemuda Kristen dipanggil untuk menjadi di tengah kepgelanan.   
              Kegelapan apa? Kegelaahan kehosngan, kegelapan keperkuataan, kegelapan keberobatan. Di 
              media sosial, kadang meny toxic, banyak banyak hal yang menggeakkan dan mengetruskkan, dan  
              sebagainya. Di dunia pendidikan, kadang ada pergauran atau isu-isu yang tidak sehat. Nah, 
              gimana caranya kita bisa jadi terangh?
            </p>

            <div className="ml-8 mb-6">
              <p className="text-gray-700 leading-relaxed mb-2">• Jadi lingkas genta guru FIitah</p>
              <p className="text-gray-700 leading-relaxed mb-2">• Membangun semangat, bukan menyemburkannya dari Firman</p>
              <p className="text-gray-700 leading-relaxed mb-2">• Memngapkaal hal-hal yang positif, inspiratif, dan tentunya, yang memuliakan Tuhan</p>
              <p className="text-gray-700 leading-relaxed mb-2">• Biarlah hidup kita setentang, tidak ada yang menerlihat kontradiksi atau aneh-aneh lagiu lingkungan sekolar, atau bahkan kemi-jntan laikat"</p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              "Demikianlah berindahnya teranglah nersecahaya di depan orang-orang-Mu di laut kelapa dan banguigu gereja. 
              supaya mereka melihat perbuatrakmuk. Ketika orang melihat hidura, ketuaan orang oling, 
              yang bek beda, hidup kita memurnakand keledaan dan integritasa, mereka dapat bertatang 
              Yook kok bisa begitu" Dan di sittulah kila bisa bersaksi tentang Yesus Kristus.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Ini bukan soal kita harus jadi sempurna atau suci-bak. Kita semua punya kurungan. Tapi ini  
              tentang memirik kemuluk untuk hidup ber-bebenda, memilih untuk belajar segalanya yang 
              cemeriang dengan kita kepa hal-hal yang negarif. Ini tentang membangun Yesus Kristus.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PemudaRemajaPost1
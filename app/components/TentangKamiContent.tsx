import React from 'react'

const TentangKamiContent = () => {
  return (
    <section className="py-16 px-6" style={{backgroundColor: '#EAE7ED'}}>
      <div className="max-w-7xl mx-auto">
        {/* Church Introduction Section */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 mb-4">TENTANG KAMI</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
            MENGENAL GEREJA MASEHI INJILI MINAHASA
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Gereja Masehi Injili di Minahasa (GMIM) adalah persekutuan gereja-gereja Protestan terbesar di Sulawesi 
            Utara, berakar kuat dalam sejarah dan budaya Minahasa sejak awal Injil diberitakan. Kami berkomitmen 
            untuk mewujudkan kasih Kristus melalui pelayanan, kesaksian, dan persekutuan bagi seluruh jemaat dan 
            masyarakat.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex justify-center mb-16 px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl">
            {/* Left Image */}
            <div className="flex justify-center">
              <img 
                src="/img/OBOR GMIM.jpeg" 
                alt="GMIM Community" 
                className="w-full max-w-sm h-[28rem] object-cover rounded-3xl shadow-lg"
              />
            </div>
            
            {/* Center Image (Larger) */}
            <div className="flex justify-center">
              <img 
                src="/img/KANTOR PUSAT GMIM.jpg" 
                alt="GMIM Church Building" 
                className="w-full max-w-md h-[36rem] object-cover rounded-3xl shadow-lg"
              />
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center">
              <img 
                src="/img/PENDIDIKAN POST.jpeg" 
                alt="GMIM Activities" 
                className="w-full max-w-sm h-[28rem] object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="flex justify-center mb-16 max-w-4xl mx-auto">
          {/* Mission & Vision */}
          <div className="flex-1 max-w-md mx-6">
            <div className="text-left mb-6">
              <p className="text-sm text-gray-500 mb-2">OUR MISSION & VISION</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                MELANGKAH MAJU<br />
                MENUJU PERUBAHAN<br />
                YANG BERMAKNA
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              GMIM memiliki Visi untuk menjadi gereja yang bertumbuh secara holistik, melayani dengan kasih Kristus, dan 
              menjadi berkat nyata bagi sesama serta lingkungan, baik dalam skala lokal maupun global. Misi kami meliputi 
              penguatan iman jemaat melalui pengajaran Firman Tuhan yang kontekstual, pemberdayaan di bidang sosial dan 
              ekonomi, serta partisipasi aktif dalam menjaga keutuhan ciptaan dan mewujudkan keadilan di tengah masyarakat.
            </p>
          </div>

          {/* History */}
          <div className="flex-1 max-w-md mx-6">
            <div className="text-left mb-6">
              <p className="text-sm text-gray-500 mb-2">SEJARAH SINGKAT</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                PERJALANAN IMAN YANG<br />
                MEMBENTUK SEBUAH<br />
                WARISAN
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              Gereja Masehi Injili di Minahasa (GMIM) berakar dari pelayanan misi Protestan di Minahasa yang dimulai sejak 
              tahun ke-19, khususnya oleh para misionaris Belanda. Setelah lahir dan seksaad berada di bawah naungan 
              Indische Kerk, GMIM secara resmi berdiri sebagai gereja yang mandiri dan berdaulat pada tanggal 30 September 
              1934. Sejak saat itu, GMIM terus bertumbuh menjadi persekutuan gereja terbesar di Sulawesi Utara, melayani 
              jutaan jemaat melalui ribuan jemaat lokal dan ratusan wilayah pelayanan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TentangKamiContent 
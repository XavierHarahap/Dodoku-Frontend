import React from 'react'
import Link from 'next/link'

const RenunganCategories = () => {
  const renunganCategories = [
    {
      id: 1,
      title: "MTPJ",
      subtitle: "MAJELIS TEOLOGI DAN PEMBANGUNAN JEMAAT",
      image: "/img/MTPJ.jpg",
      bgColor: "bg-purple-800"
    },
    {
      id: 2,
      title: "RHK", 
      subtitle: "RENUNGAN HARIAN KELUARGA",
      image: "/img/RHK.jpg",
      bgColor: "bg-red-800"
    },
    {
      id: 3,
      title: "MANNA",
      subtitle: "Makanan hati Damainya Pelayanan Seorang Dimupi",
      image: "/img/MANNA.jpg",
      bgColor: "bg-orange-600"
    },
    {
      id: 4,
      title: "OBOR",
      subtitle: "Pemuda GMIM",
      image: "/img/OBOR GMIM.jpeg",
      bgColor: "bg-pink-600"
    },
    {
      id: 5,
      title: "WKI",
      subtitle: "",
      image: "/img/WKI.jpg",
      bgColor: "bg-green-600"
    },
    {
      id: 6,
      title: "PEMUDA REMAJA",
      subtitle: "",
      image: "/img/PEMUDA DAN REMAJA.png",
      bgColor: "bg-purple-600"
    }
  ]

  return (
    <section className="py-16 px-6" style={{backgroundColor: '#EAE7ED'}}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 mb-4">RENUNGAN</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            TEMUKAN FIRMAN DAN REFLEKSI UNTUK<br />
            SETIAP HARI ANDA.
          </h2>
        </div>

        {/* Renungan Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center max-w-5xl mx-auto gap-10">
          {renunganCategories.map((card) => {
            // Check if this is the MTPJ or RHK card to make them clickable
            if (card.title === "MTPJ") {
              return (
                <Link 
                  key={card.id}
                  href="/mtpj"
                  className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-72 aspect-[3/2] cursor-pointer"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${card.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {card.title}
                    </h3>
                  </div>
                </Link>
              )
            }

            if (card.title === "RHK") {
              return (
                <Link 
                  key={card.id}
                  href="/rhk"
                  className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-72 aspect-[3/2] cursor-pointer"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${card.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {card.title}
                    </h3>
                  </div>
                </Link>
              )
            }

            if (card.title === "MANNA") {
              return (
                <Link 
                  key={card.id}
                  href="/manna"
                  className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-72 aspect-[3/2] cursor-pointer"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${card.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {card.title}
                    </h3>
                  </div>
                </Link>
              )
            }

            if (card.title === "OBOR") {
              return (
                <Link 
                  key={card.id}
                  href="/obor"
                  className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-72 aspect-[3/2] cursor-pointer"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${card.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {card.title}
                    </h3>
                  </div>
                </Link>
              )
            }

            if (card.title === "WKI") {
              return (
                <Link 
                  key={card.id}
                  href="/wki"
                  className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-72 aspect-[3/2] cursor-pointer"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${card.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {card.title}
                    </h3>
                  </div>
                </Link>
              )
            }

            if (card.title === "PEMUDA REMAJA") {
              return (
                <Link 
                  key={card.id}
                  href="/pemuda-remaja"
                  className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-72 aspect-[3/2] cursor-pointer"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${card.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {card.title}
                    </h3>
                  </div>
                </Link>
              )
            }
            
            // For other categories (if any), keep them as non-clickable divs
            return (
              <div 
                key={card.id}
                className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-72 aspect-[3/2]"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${card.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {card.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RenunganCategories 
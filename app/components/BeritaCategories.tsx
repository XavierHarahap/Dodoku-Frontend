import React from 'react'

const BeritaCategories = () => {
  const beritaCategories = [
    {
      id: 1,
      title: "SULUT",
      subtitle: "",
      image: "/img/SULUT POST.jpeg",
      bgColor: "bg-blue-800"
    },
    {
      id: 2,
      title: "SINODE", 
      subtitle: "",
      image: "/img/SINODE POST.jpg",
      bgColor: "bg-gray-700"
    },
    {
      id: 3,
      title: "WILAYAH/JEMAAT",
      subtitle: "",
      image: "/img/WILAYAH POST.jpg",
      bgColor: "bg-green-700"
    },
    {
      id: 4,
      title: "KESEHATAN",
      subtitle: "",
      image: "/img/KESEHATAN POST.jpeg",
      bgColor: "bg-red-600"
    },
    {
      id: 5,
      title: "PENDIDIKAN",
      subtitle: "",
      image: "/img/PENDIDIKAN POST.jpeg",
      bgColor: "bg-purple-700"
    },
    {
      id: 6,
      title: "WARTA",
      subtitle: "",
      image: "/img/WARTA POST.jpg",
      bgColor: "bg-orange-600"
    }
  ]

  return (
    <section className="py-16 px-6" style={{backgroundColor: '#EAE7ED'}}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 mb-4">BERITA</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            TEMUKAN INFORMASI TERKINI SEPUTAR<br />
            GMIM DAN SULAWESI UTARA DI SINI.
          </h2>
        </div>

        {/* Berita Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center max-w-5xl mx-auto" style={{ gap: '32px' }}>
          {beritaCategories.map((card) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeritaCategories 
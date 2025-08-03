import React from 'react'

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(154, 61, 171, 0.8) 0%, rgba(154, 61, 171, 0.7) 20%, rgba(79, 28, 86, 0.6) 50%, rgba(40, 20, 43, 0.4) 83%, rgba(40, 20, 43, 0.2) 100%), url('/img/KANTOR PUSAT GMIM.jpg')`
      }}
    >

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center text-white max-w-6xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl md:text-8xl font-bold mb-4 leading-tight">
            DODOKU GMIM
          </h1>
          
          {/* Subtitle */}
          <p className="mt-8 text-lg md:text-3xl mb-6 font-medium leading-relaxed">
            Menghubungkan Jemaat, Membangun Spiritualitas dan Pelayanan GMIM!
          </p>
          
          {/* CTA Button */}
                      <button 
              className="text-white font-semibold py-4 px-16 rounded-full transition-colors duration-200 text-base md:text-2xl hover:opacity-90 shadow-xl"
              style={{backgroundColor: '#8F339C'}}
            >
            Jelajahi
          </button>
        </div>
      </div>


    </section>
  )
}

export default Hero 
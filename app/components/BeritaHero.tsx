import React from 'react'
import { LogOut } from 'lucide-react'

const BeritaHero = () => {
  return (
    <section 
      className="relative h-[50vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/img/d81f514567c11cacd122f3f3302ef49689dd1176.jpg')`
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full pl-24">
        <div className="text-left text-white max-w-2xl">
          {/* Purple badge */}
          <div className="mb-4">
            <div className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit">
              <LogOut className="w-4 h-4 scale-x-[-1]" />
              <span className="text-sm font-medium">Kembali ke Beranda</span>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Berita GMIM dan Sulut
          </h1>
        </div>
      </div>
    </section>
  )
}

export default BeritaHero 
import React from 'react'
import Link from 'next/link'
import { LogOut } from 'lucide-react'

const RenunganHero = () => {
  return (
    <section 
      className="relative h-[50vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/img/ea82dda4ea2a68e2f0ff223a4e7cb8fe411c000b.jpg')`
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full pl-24">
        <div className="text-left text-white max-w-2xl">
          {/* Purple badge */}
          <div className="mb-4">
            <Link href="/" className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit hover:bg-purple-700 transition-colors">
              <LogOut className="w-4 h-4 scale-x-[-1]" />
              <span className="text-sm font-medium">Kembali ke Beranda</span>
            </Link>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Renungan dan Inspirasi Rohani
          </h1>
        </div>
      </div>
    </section>
  )
}

export default RenunganHero 
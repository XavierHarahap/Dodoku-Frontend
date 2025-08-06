import React from 'react'
import Link from 'next/link'
import { LogOut } from 'lucide-react'

const MANNAHero = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 pt-16 bg-secondary">
      <div className="max-w-8xl mx-auto">
        <div 
          className="relative bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden px-8 py-24"
          style={{
            backgroundImage: `url('/img/MANNA.jpg')`
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Content */}
          <div className="relative z-10 ml-16">
            <div className="text-left text-white max-w-3xl">
              {/* Orange badge to match MANNA branding */}
              <div className="mb-4">
                <Link href="/renungan" className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 w-fit hover:bg-purple-700 transition-colors">
                  <LogOut className="w-4 h-4 scale-x-[-1]" />
                  <span className="text-sm font-medium">Kembali</span>
                </Link>
              </div>
              
              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Renungan MANNA
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MANNAHero
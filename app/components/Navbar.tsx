import React from 'react'

const Navbar = () => {
  return (
    <nav className="px-4 py-4 relative z-50" style={{backgroundColor: '#8F339C', boxShadow: '0 6px 30px rgba(0, 0, 0, 0.4)'}}>
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ml-8">
          <img 
            src="/img/LOGO DODOKU.png" 
            alt="DODOKU GMIM Logo" 
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-32 mr-24">
          <a 
            href="#" 
            className="text-white hover:text-purple-200 font-semibold transition-colors duration-200 text-sm"
          >
            TENTANG GMIM
          </a>
          <a 
            href="#" 
            className="text-white hover:text-purple-200 font-semibold transition-colors duration-200 text-sm"
          >
            RENUNGAN
          </a>
          <a 
            href="#" 
            className="text-white hover:text-purple-200 font-semibold transition-colors duration-200 text-sm"
          >
            BERITA
          </a>
          <a 
            href="#" 
            className="text-white hover:text-purple-200 font-semibold transition-colors duration-200 text-sm"
          >
            ARTIKEL
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white hover:text-purple-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 
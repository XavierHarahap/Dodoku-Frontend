import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-tertiary text-white py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Media Icons Section - Centered at top with vertical separators */}
        <div className="flex justify-center items-center mb-20 mt-12 space-x-40">
          {/* Facebook */}
          <a 
            href="#" 
            className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Facebook"
          >
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </a>

          {/* Vertical separator */}
          <div className="h-16 w-px bg-white flex-shrink-0"></div>

          {/* X (Twitter) */}
          <a 
            href="#" 
            className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Twitter"
          >
            <Image
              src="/icons/twitterx.svg"
              alt="Twitter X"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </a>

          {/* Vertical separator */}
          <div className="h-16 w-px bg-white flex-shrink-0"></div>

          {/* WhatsApp */}
          <a 
            href="#" 
            className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="WhatsApp"
          >
            <Image
              src="/icons/whatsapp.svg"
              alt="WhatsApp"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </a>

          {/* Vertical separator */}
          <div className="h-16 w-px bg-white flex-shrink-0"></div>

          {/* Instagram */}
          <a 
            href="#" 
            className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Instagram"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </a>

          {/* Vertical separator */}
          <div className="h-16 w-px bg-white flex-shrink-0"></div>

          {/* YouTube */}
          <a 
            href="#" 
            className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="YouTube"
          >
            <Image
              src="/icons/youtube.svg"
              alt="YouTube"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </a>
        </div>

        {/* Bottom Row - Navigation Links (left) and Contact Info (right) positioned at bottom */}
        <div className="flex justify-between items-end">
          {/* Navigation Links Section - Bottom Left */}
          <div className="flex items-center space-x-12
          text-white transition-colors text-lg font-base">
            <a href="#" className=" hover:text-gray-200 transition-colors">
              Tentang GMIM
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Berita
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Renungan
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Artikel
            </a>
          </div>

          {/* Contact Information Section - Bottom Right */}
          <div className="flex items-center space-x-8 text-white">
            {/* Location */}
            <div className="flex items-center space-x-3">
              <Image
                src="/icons/location.svg"
                alt="Location"
                width={27}
                height={27}
                className="w-6 h-6"
              />
              <span className="text-sm">
                Jl. Raya Tomohon, Talete<br />
                Dua, Tomohon, Yogyakarta
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <Image
                src="/icons/email.svg"
                alt="Email"
                width={27}
                height={27}
                className="w-6 h-6"
              />
              <span className="text-sm">sinode@gmim.or.id</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
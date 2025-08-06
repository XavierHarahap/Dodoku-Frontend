import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-tertiary text-white">
      {/* Social Media Icons Section - constrained to content width */}
      <div className="max-w-screen-2xl mx-auto flex justify-center items-center mb-24 pt-28 space-x-40 px-4 sm:px-6 lg:px-8">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/gmim" target="_blank" rel="noopener noreferrer"
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
        <div className="h-16 w-px bg-white flex-shrink-0" />

        {/* X (Twitter) */}
        <a
          href="https://twitter.com/gmim" target="_blank" rel="noopener noreferrer"
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
        <div className="h-16 w-px bg-white flex-shrink-0" />

        {/* WhatsApp */}
        <a
          href="https://wa.me" target="_blank" rel="noopener noreferrer"
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
        <div className="h-16 w-px bg-white flex-shrink-0" />

        {/* Instagram */}
        <a
          href="https://www.instagram.com/gmim" target="_blank" rel="noopener noreferrer"
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
        <div className="h-16 w-px bg-white flex-shrink-0" />

        {/* YouTube */}
        <a
          href="https://www.youtube.com/channel/UCgmim" target="_blank" rel="noopener noreferrer"
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

      {/* Bottom Row */}
      <div className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-6">
        {/* Navigation Links - left */}
        <div className="absolute left-0 ml-12 flex items-center space-x-12 text-white text-2xl font-normal">
          <Link href="/tentang-kami" className="hover:text-gray-200 transition-colors">
            Tentang GMIM
          </Link>
          <Link href="/berita" className="hover:text-gray-200 transition-colors">
            Berita
          </Link>
          <Link href="/renungan" className="hover:text-gray-200 transition-colors">
            Renungan
          </Link>
          <Link href="/artikel" className="hover:text-gray-200 transition-colors">
            Artikel
          </Link>
        </div>

        {/* Center Logo */}
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/img/LOGO%20DODOKU.png"
            alt="Dodoku GMIM Logo"
            width={64}
            height={64}
            className="w-12 h-12"
          />
        </Link>

        {/* Contact Information - right */}
        <div className="absolute right-0 mr-12 flex items-center space-x-8 text-white">
          {/* Location */}
          <a
            href="https://www.google.com/maps/place/Kantor+Sinode+GMIM" target="_blank" rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/icons/location.svg"
              alt="Location"
              width={27}
              height={27}
              className="w-6 h-6"
            />
            <span className="text-sm text-left">
              Jl. Raya Tomohon, Talete Dua,
              <br />
              Tomohon, Sulawesi Utara
            </span>
          </a>

          {/* Email */}
          <a href="mailto:sinode@gmim.or.id" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/icons/email.svg"
              alt="Email"
              width={27}
              height={27}
              className="w-6 h-6"
            />
            <span className="text-sm">sinode@gmim.or.id</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

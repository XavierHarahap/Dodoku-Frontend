import React from 'react'
import Link from 'next/link'
import PostSlip from './PostSlip'

const JelajahiContent = () => {
  // Data for the 4 PostSlips: MTPJ, RHK, Sulut, and Kesehatan
  const jelajahiData = [
    {
      id: 1,
      image: '/img/MTPJ.jpg',
      title: 'Kasih yang Melampaui Batas: Kekuatan Pengampunan',
      excerpt: '(Yohanes 15:12-17)  Inilah perintah-Ku, yaitu supaya kamu saling mengasihi, seperti Aku telah mengasihi kamu. Tidak ada kasih yang lebih besar dari pada kasih seorang yang memberikan nyawanya untuk sahabat...',
      date: '12 Juni, 2025',
      author: 'Seldie Saroinsong',
      link: '/mtpjpost1'
    },
    {
      id: 2,
      image: '/img/RHK.jpg',
      title: 'Kekuatan Kesabaran Dalam Keluarga: Menanti Janji Tuhan',
      excerpt: '(Yakobus 1:2-4) Saudara-Saudaraku, Anggaplah Sebagai Suatu Kebahagiaan, Apabila Kamu Jatuh Ke Dalam Berbagai-Bagai Pencobaan, Sebab Kamu Tahu, Bahwa Ujian Terhadap Imanmu Itu Menghasilkan...',
      date: '28 Mei, 2025',
      author: 'Anna Rorimpandei',
      link: '/rhkpost1'
    },
    {
      id: 3,
      image: '/img/SULUT POST.jpeg',
      title: 'Gubernur Sulawesi Utara Perkuat Komitmen Pacu Sektor Pariwisata',
      excerpt: 'Manado (ANTARA) - Gubernur Sulawesi Utara (Sulut) Yulius Selvanus terus membangun komitmen bersama para pemangku kepentingan terkait untuk memacu sektor pariwisata di provinsi ini...',
      date: '9 Juni, 2025',
      author: 'Xavier Harahap',
      link: '/sulutpost1'
    },
    {
      id: 4,
      image: '/img/KESEHATAN POST.jpeg',
      title: 'GMIM Sion Perak Sorong Berinovasi Dengan Ibadah Daring',
      excerpt: 'Di Tengah Tantangan Pandemi Yang Mengharuskan Pembatasan Kegiatan Publik, Jemaat GMIM Sion Perak Sorong Menunjukkan Semangat Adaptasi Dan Inovasi Luar Biasa...',
      date: '9 Maret, 2020',
      author: 'Harris Suparno',
      link: '/kesehatanpost1'
    }
  ]

  return (
    <section className="pt-20 px-6 md:px-12 lg:px-24 bg-secondary max-w-full mx-auto pb-96">
      <div className="max-w-7xl mx-auto">
        {/* Articles Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {jelajahiData.map((item) => (
            <Link key={item.id} href={item.link} className="hover:scale-105 transition-transform duration-300">
              <PostSlip
                image={item.image}
                title={item.title}
                excerpt={item.excerpt}
                date={item.date}
                author={item.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JelajahiContent
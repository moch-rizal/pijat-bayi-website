'use client';

import Link from 'next/link';
import {
  HomeIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const whatsappNumber = '6281235033149';
  const message = 'Halo PijatBayi Sehat, saya tertarik untuk memesan sesi pijat bayi. Bisakah saya mendapatkan info jadwal yang tersedia?';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* ===== NAVBAR ATAS UNTUK DESKTOP ===== */}
      <nav className="hidden md:flex bg-white bg-opacity-80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <svg className="h-8 w-8 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.59V15c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2v1.59a3 3 0 01-4 0zm-3.5-3.08a3 3 0 014-2.51V9a3 3 0 01-4 2.51z" />
            </svg>
            <span className="font-bold text-xl text-gray-700">PijatBayi Sehat</span>
          </Link>
          <div className="flex space-x-6 text-gray-600 font-medium">
            <Link href="/#layanan" className="hover:text-teal-500 transition-colors">Layanan</Link>
            <Link href="/#keunggulan" className="hover:text-teal-500 transition-colors">Keunggulan</Link>
            <Link href="/#testimoni" className="hover:text-teal-500 transition-colors">Testimoni</Link>
            <Link href="/#kontak" className="hover:text-teal-500 transition-colors">Kontak</Link>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-teal-600 transition-all"
          >
            Pesan Sesi
          </a>
        </div>
      </nav>

      {/* ===== NAVBAR BAWAH UNTUK MOBILE ===== */}
      <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          <Link href="/" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <HomeIcon className="w-6 h-6 mb-1 text-gray-500 group-hover:text-teal-600" />
            <span className="text-sm text-gray-500 group-hover:text-teal-600">Home</span>
          </Link>
          <Link href="/#layanan" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <SparklesIcon className="w-6 h-6 mb-1 text-gray-500 group-hover:text-teal-600" />
            <span className="text-sm text-gray-500 group-hover:text-teal-600">Layanan</span>
          </Link>
          <Link href="/#keunggulan" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <ShieldCheckIcon className="w-6 h-6 mb-1 text-gray-500 group-hover:text-teal-600" />
            <span className="text-sm text-gray-500 group-hover:text-teal-600">Info</span>
          </Link>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
          >
            <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 mb-1 text-gray-500 group-hover:text-teal-600" />
            <span className="text-sm text-gray-500 group-hover:text-teal-600">Kontak</span>
          </a>
        </div>
      </div>
      
      <div className="md:hidden flex items-center justify-center py-4 bg-white shadow-sm">
        <Link href="/" className="flex items-center">
            <svg className="h-8 w-8 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.59V15c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2v1.59a3 3 0 01-4 0zm-3.5-3.08a3 3 0 014-2.51V9a3 3 0 01-4 2.51z" />
            </svg>
            <span className="font-bold text-xl text-gray-700">PijatBayi Sehat</span>
        </Link>
      </div>
    </>
  );
}
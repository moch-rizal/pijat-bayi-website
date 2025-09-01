// src/app/layanan/pijat-kolik/page.js

import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function PijatKolikPage() {
  const whatsappNumber = '6281234567890'; // <-- GANTI DENGAN NOMOR ANDA
  const message = 'Halo, saya tertarik untuk memesan sesi Pijat Atasi Kolik & Konstipasi untuk anak saya. Kapan jadwal yang tersedia?';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white">
      {/* Hero Section Spesifik */}
      <section className="relative bg-cover bg-center text-white py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604344439066-51a44e2bca1c?auto=format&fit=crop&q=80&w=1200')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Pijat Atasi Kolik & Konstipasi</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">Solusi lembut dan alami untuk meredakan ketidaknyamanan perut si kecil.</p>
        </div>
      </section>

      {/* Konten Detail Layanan */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Deskripsi */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meredakan Tangis, Mengembalikan Senyum</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Kami paham betapa khawatirnya orang tua saat melihat buah hati rewel dan tidak nyaman karena masalah pencernaan seperti kolik, gas berlebih, atau sulit buang air besar. Layanan pijat ini dirancang khusus dengan teknik-teknik yang teruji aman untuk membantu melancarkan sistem pencernaan bayi, mengurangi gas, dan memberikan relaksasi mendalam.
            </p>
          </div>

          {/* Manfaat Utama */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Manfaat Utama yang Akan Diperoleh:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Membantu mengeluarkan gas yang terperangkap di perut.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Merangsang pergerakan usus untuk mengatasi sembelit (konstipasi).</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Meningkatkan kualitas tidur bayi dengan mengurangi rasa tidak nyaman.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Memberikan efek relaksasi yang menenangkan bagi bayi yang rewel.</span>
              </li>
            </ul>
          </div>

          {/* Detail Sesi & Harga */}
          <div className="bg-stone-50 border border-gray-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800">Detail Sesi & Investasi</h3>
            <p className="text-gray-600 mt-2 mb-6">Satu sesi penuh untuk kenyamanan maksimal buah hati Anda.</p>
            <div className="text-5xl font-bold text-teal-600 mb-2">
              Rp 100.000
            </div>
            <div className="text-gray-500 mb-8">
              Durasi Sesi: <strong>30 enit</strong>
            </div>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-500 text-white font-bold py-3 px-10 rounded-full hover:bg-teal-600 transition-all transform hover:scale-105 text-lg"
            >
              Pesan Sesi Pijat Kolik
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
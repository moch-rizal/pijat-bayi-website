// src/components/CTA.js

export default function CTA() {
  const whatsappNumber = '6281234567890'; // <-- GANTI DENGAN NOMOR ANDA
  const message = 'Halo PijatBayi Sehat, saya tertarik untuk memesan sesi pijat bayi. Bisakah saya mendapatkan info jadwal yang tersedia?';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="kontak" className="bg-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Siap Memberikan yang Terbaik untuk si Kecil?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Jadwalkan sesi konsultasi gratis atau langsung pesan sesi pijat pertama Anda. Biarkan kami membantu Anda memberikan kenyamanan dan stimulasi terbaik.
        </p>
        <a 
          href={whatsappUrl}
          target="_blank" // Membuka di tab baru
          rel="noopener noreferrer" // Praktik keamanan
          className="inline-block bg-teal-500 text-white font-bold py-4 px-10 rounded-full hover:bg-teal-600 transition-all transform hover:scale-105 text-xl"
        >
          Hubungi Kami Sekarang
        </a>
      </div>
    </section>
  );
}
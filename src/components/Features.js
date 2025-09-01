import { ShieldCheckIcon, HeartIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Terapis Profesional & Bersertifikat',
    description: 'Semua sesi ditangani oleh terapis yang telah memiliki sertifikasi khusus dalam pijat bayi, memastikan teknik yang aman dan efektif.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Lingkungan Homey & Higienis',
    description: 'Kami menciptakan suasana yang hangat seperti di rumah, dengan standar kebersihan tertinggi untuk kenyamanan dan kesehatan si kecil.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Pendekatan Penuh Kasih',
    description: 'Kami percaya setiap sentuhan adalah komunikasi. Layanan kami berfokus pada bonding antara bayi dan orang tua dengan pendekatan yang lembut.',
    icon: HeartIcon,
  },
];

export default function Features() {
  return (
    <section id="keunggulan" className="bg-stone-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Investasi Terbaik untuk Masa Depan si Kecil</h2>
          <p className="mt-4 text-lg text-gray-600">Alasan mengapa ratusan orang tua telah memercayakan buah hatinya kepada kami.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-600 mb-4">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
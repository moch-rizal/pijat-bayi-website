import Link from 'next/link';
import { FaceSmileIcon, HeartIcon } from '@heroicons/react/24/outline';

const servicesData = {
  baby: [
    { name: 'Pijat Atasi Kolik & Konstipasi', desc: 'Solusi lembut untuk meredakan masalah pencernaan si kecil.', link: '/layanan/pijat-kolik' },
    { name: 'Pijat Stimulasi Tumbuh Kembang', desc: 'Merangsang perkembangan motorik dan sensorik bayi.', link: '#' },
    { name: 'Pijat Relaksasi & Tidur Nyenyak', desc: 'Membantu bayi tidur lebih lelap dan berkualitas.', link: '#' },
    { name: 'Baby Gym & Spa', desc: 'Kombinasi olahraga dan relaksasi menyenangkan untuk bayi.', link: '#' },
    // Tambahkan layanan bayi lainnya di sini
  ],
  mom: [
    { name: 'Mom Spa (Massage + Totok Wajah)', desc: 'Relaksasi total untuk mengembalikan kesegaran tubuh dan pikiran.', link: '#' },
    { name: 'Pijat Laktasi & Oksitosin', desc: 'Membantu melancarkan ASI dan meningkatkan bonding.', link: '#' },
    // Tambahkan layanan ibu lainnya di sini
  ]
};

export default function Services() {
  return (
    <section id="layanan" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Layanan Unggulan Kami</h2>
          <p className="mt-4 text-lg text-gray-600">Perawatan penuh cinta untuk si kecil dan Bunda.</p>
        </div>

        {/* Layanan Bayi */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <FaceSmileIcon className="h-8 w-8 text-teal-500 mr-3"/>
            <h3 className="text-2xl font-bold text-gray-800">Untuk Buah Hati</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.baby.map((service) => (
              <Link href={service.link} key={service.name} className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                <h4 className="font-bold text-lg text-gray-800 mb-2">{service.name}</h4>
                <p className="text-gray-600 mb-4 text-sm">{service.desc}</p>
                <span className="font-semibold text-teal-500 group-hover:text-teal-600">
                  {service.link === '#' ? 'Segera Hadir' : 'Lihat Detail →'}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Layanan Ibu */}
        <div>
          <div className="flex items-center mb-8">
            <HeartIcon className="h-8 w-8 text-pink-500 mr-3"/>
            <h3 className="text-2xl font-bold text-gray-800">Untuk Bunda Hebat</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.mom.map((service) => (
              <Link href={service.link} key={service.name} className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                <h4 className="font-bold text-lg text-gray-800 mb-2">{service.name}</h4>
                <p className="text-gray-600 mb-4 text-sm">{service.desc}</p>
                <span className="font-semibold text-pink-500 group-hover:text-pink-600">
                  {service.link === '#' ? 'Segera Hadir' : 'Lihat Detail →'}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
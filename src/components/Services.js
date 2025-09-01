// Impor ikon untuk setiap kategori
import { FaceSmileIcon, HeartIcon } from '@heroicons/react/24/outline';

// Daftar layanan 
const babyServices = [
  'Baby & Kids Massage Therapist (Bapil, Colic, Sulit BAB)',
  'Tuina Massage (Menambah Nafsu Makan)',
  'Speech Delay Massage',
  'Stimulasi Massage',
  'Massage Therapist Moksa / Nebule',
  'Baby Gym (Gym Ball)',
  'Perawatan New Born (7 Hari)',
  'Manicure & Pedicure Baby',
  'Baby Hair Cut (Cukur Rambut)',
];

const momServices = [
  'Mom Spa (Massage + Totok Wajah)',
  'Mom Relaxation Massage',
  'Lactation Massage (Pijat Laktasi)',
  'Oxytocin Massage (Pijat Oksitosin)',
  'Perawatan Payudara',
  'Konsultasi Psikologi',
];

export default function Services() {
  return (
    <section id="layanan" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Layanan Komprehensif Kami</h2>
          <p className="mt-4 text-lg text-gray-600">Perawatan penuh cinta dari ujung rambut hingga ujung kaki, untuk si kecil dan Bunda.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Kolom Layanan Bayi & Anak */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaceSmileIcon className="h-8 w-8 text-teal-500 mr-3"/>
              <h3 className="text-2xl font-bold text-gray-800">Untuk Buah Hati</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              {babyServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Layanan Ibu */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
               <HeartIcon className="h-8 w-8 text-pink-500 mr-3"/>
               <h3 className="text-2xl font-bold text-gray-800">Untuk Bunda Hebat</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              {momServices.map((service, index) => (
                <li key={index} className="flex items-start">
                   <svg className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
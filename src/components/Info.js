// src/components/Info.js
import { ClockIcon, CalendarDaysIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Info() {
  return (
    <section id="info" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-teal-50 border-2 border-teal-200 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">

            {/* Jam Pelayanan */}
            <div className="flex flex-col items-center">
              <ClockIcon className="h-10 w-10 text-teal-600 mb-3"/>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Jam Pelayanan</h3>
              <p className="text-gray-600">Pagi: 08.00 - 14.00</p>
              <p className="text-gray-600">Sore: 15.00 - 17.00</p>
            </div>

            {/* Hari Buka */}
            <div className="flex flex-col items-center">
              <CalendarDaysIcon className="h-10 w-10 text-teal-600 mb-3"/>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Hari Buka</h3>
              <p className="text-gray-600">Buka Setiap Hari</p>
              <p className="text-gray-600 text-sm">(Hari libur sesuai permintaan)</p>
            </div>

            {/* Konsultasi */}
            <div className="flex flex-col items-center">
              <SparklesIcon className="h-10 w-10 text-teal-600 mb-3"/>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Layanan Tambahan</h3>
              <p className="text-gray-600">Konsultasi Psikologi</p>
              <p className="text-gray-600 text-sm">(Silakan hubungi untuk jadwal)</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
// src/components/Gallery.js

import Image from 'next/image';

// KUMPULAN LINK GAMBAR BARU YANG AKTIF
const images = [
  // Foto utama (lebih besar)
  { src: 'https://images.unsplash.com/photo-1537673156864-5d2c72de7824?auto=format&fit=crop&q=80&w=800', alt: 'Bayi sedang dipijat punggungnya dengan lembut', span: 'col-span-2 row-span-2' },
  // Foto pendukung
  { src: 'https://images.unsplash.com/photo-1533483595632-c5f0e57a1936?auto=format&fit=crop&q=80&w=400', alt: 'Kaki mungil bayi di tangan orang dewasa' },
  { src: 'https://images.unsplash.com/photo-1470843810958-2da815d0e041?w=600&auto=format&fit=crop&q=60', alt: 'Bayi tersenyum dengan nyaman' },
  { src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1170&auto=format&fit=crop', alt: 'Tangan terapis menggunakan minyak pijat alami' },
  { src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=400', alt: 'Bayi tertidur pulas dan tenang' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Momen Penuh Kehangatan</h2>
          <p className="mt-4 text-lg text-gray-600">Intip suasana sesi pijat kami yang menenangkan dan penuh cinta.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((image, index) => (
            <div key={index} className={`relative overflow-hidden rounded-xl shadow-lg ${image.span || 'col-span-1 row-span-1'}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                className="object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
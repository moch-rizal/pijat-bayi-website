const testimonials = [
  {
    quote: 'Anakku jadi tidur lebih nyenyak dan jarang rewel sejak rutin pijat di sini. Terapisnya sabar dan telaten banget. Recommended!',
    author: 'Bunda Rina',
    location: 'Ibu dari Arka, 6 bulan',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    quote: 'Awalnya ragu, tapi ternyata manfaatnya luar biasa. Masalah kolik anak saya teratasi. Tempatnya juga bersih dan nyaman. Terima kasih!',
    author: 'Ayah Budi',
    location: 'Ayah dari Aira, 3 bulan',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-teal-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Cerita Hangat dari Para Orang Tua</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
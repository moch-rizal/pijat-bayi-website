export default function Hero() {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-32 px-6" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537673156864-5d2c72de7824?auto=format&fit=crop&q=80&w=2070')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">
          Sentuhan Lembut, Tumbuh Kembang Optimal
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Hadirkan relaksasi dan stimulasi terbaik untuk buah hati Anda melalui layanan pijat bayi profesional dan penuh kasih sayang.
        </p>
        <button className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition-all transform hover:scale-105 text-lg">
          Jadwalkan Sesi Pertama Anda
        </button>
      </div>
    </section>
  );
}
// src/components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10 text-center">
        <p className="text-lg italic text-gray-300 mb-4">"Melayani dengan Cinta, Menenangkan Jiwa"</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-teal-400">Instagram</a>
          <a href="#" className="hover:text-teal-400">Facebook</a>
          <a href="#" className="hover:text-teal-400">WhatsApp</a>
        </div>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} PijatBayi Sehat. All rights reserved.</p>
      </div>
    </footer>
  );
}
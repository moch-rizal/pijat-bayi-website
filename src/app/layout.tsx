// src/app/layout.js

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

// metadata untuk SEO, pengganti <Head>
export const metadata = {
  title: 'PijatBayi Sehat - Layanan Pijat Bayi Profesional',
  description: 'Layanan pijat bayi profesional untuk relaksasi, stimulasi, dan tumbuh kembang optimal buah hati Anda.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
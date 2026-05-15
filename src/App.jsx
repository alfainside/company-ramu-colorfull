import { useEffect } from 'react';
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';
import Hero from './components/sections/Hero';
import Layanan from './components/sections/Layanan';
import TentangKami from './components/sections/TentangKami';
import VisiMisi from './components/sections/VisiMisi';
import Kontak from './components/sections/Kontak';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-brand-light">
      <Navbar />
      <main>
        <Hero />
        <Layanan />
        <TentangKami />
        <VisiMisi />
        <Kontak />
      </main>
      <Footer />

      {/* Floating WA button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-xl shadow-green-500/40 hover:shadow-green-500/60 flex items-center justify-center text-2xl hover:scale-110 transition-all duration-200"
        title="Chat via WhatsApp"
      >
        💬
      </a>
    </div>
  );
}

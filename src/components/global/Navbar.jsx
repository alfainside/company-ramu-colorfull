import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.4 }
    );
    sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-brand-orange/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNav('#hero')} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-yellow flex items-center justify-center shadow-lg shadow-brand-orange/30 group-hover:scale-105 transition-transform">
              <span className="font-display font-black text-white text-sm md:text-base leading-none">R</span>
            </div>
            <div className="leading-none">
              <span className="font-display font-black text-brand-dark text-lg md:text-xl tracking-tight">Ramu</span>
              <span className="font-display font-black text-brand-orange text-lg md:text-xl tracking-tight">Digital</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-2 font-body font-medium text-sm rounded-lg transition-all duration-200 ${
                  active === link.href.replace('#', '')
                    ? 'text-brand-orange bg-brand-orange/8'
                    : 'text-brand-dark/70 hover:text-brand-dark hover:bg-gray-100'
                }`}
              >
                {link.label}
                {active === link.href.replace('#', '') && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-orange" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('#kontak')}
              className="hidden md:flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-display font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>💬</span> Konsultasi Gratis
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex flex-col items-center justify-center gap-1.5 transition-colors"
            >
              <span className={`block w-5 h-0.5 bg-brand-dark rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-brand-dark rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-brand-dark rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-brand-dark/50 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(false)} />
        <div className={`absolute top-0 right-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-orange to-brand-yellow flex items-center justify-center shadow-lg shadow-brand-orange/30">
                <span className="font-display font-black text-white text-sm">R</span>
              </div>
              <div className="leading-none">
                <span className="font-display font-black text-brand-dark text-lg">Ramu</span>
                <span className="font-display font-black text-brand-orange text-lg">Digital</span>
              </div>
            </div>
          </div>
          <nav className="flex-1 p-6 flex flex-col gap-2">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-left px-4 py-3.5 rounded-xl font-body font-medium text-base transition-all duration-200 ${
                  active === link.href.replace('#', '')
                    ? 'bg-brand-orange/10 text-brand-orange font-bold'
                    : 'text-brand-dark/70 hover:bg-gray-50 hover:text-brand-dark'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="p-6 border-t border-gray-100">
            <button
              onClick={() => handleNav('#kontak')}
              className="w-full bg-brand-orange hover:bg-orange-600 text-white font-display font-bold text-base py-3.5 rounded-xl shadow-lg shadow-brand-orange/25 transition-all duration-200"
            >
              💬 Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

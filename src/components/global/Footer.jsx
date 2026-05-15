import { NAV_LINKS } from '../../data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-yellow flex items-center justify-center shadow-lg shadow-brand-orange/30">
                <span className="font-display font-black text-white">R</span>
              </div>
              <div className="leading-none">
                <span className="font-display font-black text-white text-xl">Ramu</span>
                <span className="font-display font-black text-brand-orange text-xl">Digital</span>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              Mitra digital terpercaya untuk UMKM dan perusahaan Indonesia. Tim kecil, dampak besar.
            </p>
            <div className="flex gap-3">
              {['💬', '📸', '💼', '🐦'].map((icon, i) => (
                <button key={i} className="w-9 h-9 rounded-lg bg-white/8 hover:bg-brand-orange hover:scale-110 flex items-center justify-center text-sm transition-all duration-200">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm tracking-wide uppercase">Menu</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/55 hover:text-brand-orange text-sm transition-colors duration-200 font-body">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm tracking-wide uppercase">Hubungi Kami</h4>
            <ul className="space-y-3">
              {[
                { icon: '📱', text: '+62 812 3456 7890' },
                { icon: '📧', text: 'halo@ramudigital.id' },
                { icon: '📍', text: 'Jakarta, Indonesia' },
                { icon: '⏰', text: 'Senin–Jumat, 09.00–18.00' },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-2.5">
                  <span className="text-base">{icon}</span>
                  <span className="text-white/55 text-sm font-body">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-white/35 text-xs font-body">© {year} Ramu Digital. All rights reserved.</p>
          <p className="text-white/35 text-xs font-body">Dibuat dengan ❤️ di Jakarta</p>
        </div>
      </div>
    </footer>
  );
}

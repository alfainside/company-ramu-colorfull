import { SERVICES } from '../../data';
import SectionHeader from '../global/SectionHeader';

export default function Layanan() {
  return (
    <section id="layanan" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="reveal">
          <SectionHeader
            badge="Layanan Utama"
            title="Semua yang Anda"
            highlight="Butuhkan"
            subtitle="Dari website sederhana hingga sistem bisnis kompleks — kami kerjakan dengan standar profesional dan harga yang manusiawi."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.id}
              className="reveal group relative bg-white rounded-2xl border-2 border-gray-100 p-7 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Hover bg fill */}
              <div className={`absolute inset-0 ${svc.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Number watermark */}
              <span className="absolute top-4 right-5 font-display font-black text-6xl text-gray-50 group-hover:text-gray-100 transition-colors leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-2xl ${svc.color} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span>{svc.icon}</span>
                <div className="absolute inset-0 rounded-2xl bg-white/20" />
              </div>

              {/* Content */}
              <div className="relative">
                <p className={`font-mono text-xs font-bold tracking-widest uppercase mb-1.5 ${svc.textColor}`}>{svc.short}</p>
                <h3 className="font-display font-black text-xl text-brand-dark mb-3">{svc.title}</h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed mb-5">{svc.desc}</p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {svc.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-brand-dark/70">
                      <span className={`w-5 h-5 rounded-full ${svc.color} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA */}
              <div className={`mt-6 pt-5 border-t border-gray-100 flex items-center justify-between`}>
                <button
                  onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`font-display font-bold text-sm ${svc.textColor} hover:underline flex items-center gap-1 group/btn`}
                >
                  Tanya Lebih Lanjut
                  <span className="group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

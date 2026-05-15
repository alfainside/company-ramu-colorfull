import { VISI, MISI } from '../../data';
import SectionHeader from '../global/SectionHeader';

export default function VisiMisi() {
  return (
    <section id="visi-misi" className="section-pad bg-brand-dark overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-orange/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-indigo/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-teal/5 blur-3xl" />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="reveal">
          <SectionHeader
            badge="Visi & Misi"
            title="Kenapa Kami"
            highlight="Ada"
            subtitle="Setiap langkah yang kami ambil diarahkan oleh tujuan yang jelas dan nilai yang tidak pernah kami kompromikan."
            light
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Visi */}
          <div className="reveal-left">
            <div className="relative group bg-white/5 border border-white/10 hover:border-brand-orange/40 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:bg-white/8">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange flex items-center justify-center text-white font-display font-black text-xl shadow-lg shadow-brand-orange/30">
                    V
                  </div>
                  <div>
                    <div className="font-mono text-xs text-brand-orange/70 tracking-widest uppercase">Our Vision</div>
                    <h3 className="font-display font-black text-2xl text-white">Visi Kami</h3>
                  </div>
                </div>

                <div className="relative pl-5 border-l-2 border-brand-orange/40">
                  <span className="absolute -left-3 top-0 text-brand-orange text-2xl font-display font-black leading-none">"</span>
                  <p className="text-white/75 leading-relaxed text-base md:text-lg italic">{VISI}</p>
                  <span className="text-brand-orange text-2xl font-display font-black leading-none">"</span>
                </div>

                {/* Decorative pill */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-mono font-bold">2024 → ∞</span>
                </div>
              </div>
            </div>
          </div>

          {/* Misi */}
          <div className="reveal-right space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal flex items-center justify-center text-white font-display font-black text-xl shadow-lg shadow-brand-teal/30">
                M
              </div>
              <div>
                <div className="font-mono text-xs text-brand-teal/70 tracking-widest uppercase">Our Mission</div>
                <h3 className="font-display font-black text-2xl text-white">Misi Kami</h3>
              </div>
            </div>

            {MISI.map((item, i) => (
              <div
                key={i}
                className="reveal group flex items-start gap-4 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/8 hover:border-brand-teal/40 hover:bg-white/8 transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-teal/20 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-teal/30 transition-all duration-200">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-brand-teal text-xs font-bold">0{i + 1}</span>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Big quote CTA */}
        <div className="reveal mt-16 md:mt-24 text-center">
          <div className="relative inline-block">
            <p className="font-display font-black text-3xl md:text-5xl text-white/15 leading-tight select-none">
              "Kecil itu bukan hambatan.<br />Kecil itu gesit."
            </p>
            <p className="absolute inset-0 font-display font-black text-3xl md:text-5xl text-white leading-tight flex items-center justify-center"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)', clipPath: 'inset(0 50% 0 0)', animation: 'none' }}>
            </p>
          </div>
          <p className="mt-4 text-white/40 text-sm font-mono">— Ramu Digital, sejak 2022</p>
        </div>
      </div>
    </section>
  );
}

import { TEAM, STATS, VALUES, TECH_STACK } from '../../data';
import SectionHeader from '../global/SectionHeader';

function StatCard({ value, label, icon, delay }) {
  return (
    <div
      className="reveal text-center p-6 rounded-2xl bg-gradient-to-br from-white to-orange-50 border border-orange-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className="font-display font-black text-4xl md:text-5xl text-brand-orange leading-none mb-1">{value}</div>
      <div className="font-body text-sm text-brand-dark/60">{label}</div>
    </div>
  );
}

function TeamCard({ member, delay }) {
  return (
    <div
      className="reveal group bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`relative mx-auto w-20 h-20 rounded-2xl ${member.color} flex items-center justify-center text-4xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {member.emoji}
        <div className="absolute inset-0 rounded-2xl bg-white/20" />
      </div>
      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide mb-3 ${member.color} text-white`}>
        {member.role}
      </div>
      <h3 className="font-display font-black text-lg text-brand-dark mb-2">{member.name}</h3>
      <p className="text-brand-dark/55 text-sm leading-relaxed">{member.bio}</p>
    </div>
  );
}

export default function TentangKami() {
  return (
    <section id="tentang" className="section-pad bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="reveal">
          <SectionHeader
            badge="Tentang Kami"
            title="Kenali"
            highlight="Ramu Digital"
            subtitle="Kami adalah tim kecil yang bergerak cepat, berpikir besar, dan berkomitmen penuh untuk setiap proyek yang kami kerjakan."
          />
        </div>

        {/* Story block */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
          <div className="reveal-left">
            <div className="relative">
              {/* Colorful mosaic card */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { bg: 'bg-brand-orange', text: 'Lahir 2022', sub: 'di Jakarta', emoji: '🗓️' },
                  { bg: 'bg-brand-indigo text-white', text: 'Tim Solid', sub: '3 Spesialis', emoji: '👥' },
                  { bg: 'bg-brand-teal', text: 'Full Service', sub: 'Design → Dev', emoji: '🔧' },
                  { bg: 'bg-brand-yellow', text: 'UMKM & B2B', sub: 'Semua Skala', emoji: '📈' },
                ].map(card => (
                  <div key={card.text} className={`${card.bg} rounded-2xl p-5 text-white hover:scale-105 transition-transform duration-300 cursor-default`}>
                    <div className="text-3xl mb-2">{card.emoji}</div>
                    <div className="font-display font-black text-lg leading-tight">{card.text}</div>
                    <div className="text-white/70 text-xs mt-0.5">{card.sub}</div>
                  </div>
                ))}
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white shadow-2xl rounded-2xl px-4 py-3 flex items-center gap-3 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white text-sm">✓</div>
                <div>
                  <div className="font-display font-black text-sm text-brand-dark">On-time Delivery</div>
                  <div className="text-brand-dark/50 text-xs">Setiap proyek, tepat waktu</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right space-y-5">
            <h3 className="font-display font-black text-2xl md:text-3xl text-brand-dark leading-tight">
              Kami percaya setiap bisnis berhak tampil{' '}
              <span className="text-brand-orange">profesional</span> di dunia digital.
            </h3>
            <p className="text-brand-dark/65 leading-relaxed">
              Ramu Digital hadir sebagai solusi digital terjangkau tanpa mengorbankan kualitas.
              Kami memulai dengan 3 orang yang punya passion besar terhadap teknologi dan bisnis — dan
              setiap hari kami belajar, berkembang, serta memastikan klien kami ikut tumbuh bersama kami.
            </p>
            <p className="text-brand-dark/65 leading-relaxed">
              Dari UMKM yang baru go online hingga perusahaan yang ingin modernisasi sistem mereka —
              kami hadir dengan solusi yang tepat sasaran, transparan, dan tentu saja: <strong className="text-brand-dark">berdampak nyata</strong>.
            </p>

            {/* Value tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Fast Delivery', 'Clean Code', 'Responsif', 'Transparan', 'Post-launch Support'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white border border-gray-200 text-brand-dark/70 text-xs font-mono font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {STATS.map((stat, i) => <StatCard key={stat.label} {...stat} delay={i * 100} />)}
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="reveal text-center mb-12">
            <h3 className="font-display font-black text-2xl md:text-3xl text-brand-dark">
              Tim di Balik <span className="text-brand-orange">Ramu Digital</span>
            </h3>
            <p className="text-brand-dark/55 mt-2 text-sm">Sedikit orangnya, tapi dedikasinya tidak setengah-setengah.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member, i) => <TeamCard key={member.name} member={member} delay={i * 120} />)}
          </div>
        </div>

        {/* Values */}
        <div className="reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {VALUES.map((v, i) => (
              <div
                key={v.label}
                className="reveal p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className={`inline-flex w-10 h-10 rounded-xl items-center justify-center text-xl mb-3 ${v.color}`}>{v.icon}</span>
                <h4 className="font-display font-black text-base text-brand-dark mb-1">{v.label}</h4>
                <p className="text-brand-dark/55 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech marquee */}
        <div className="reveal mt-16 overflow-hidden">
          <p className="text-center text-xs font-mono text-brand-dark/40 tracking-widest uppercase mb-6">Tech Stack Kami</p>
          <div className="flex gap-4 animate-marquee w-max">
            {TECH_STACK.map((tech, i) => (
              <span key={`${tech}-${i}`} className="flex-shrink-0 px-4 py-2 rounded-full bg-white border border-gray-200 text-brand-dark/60 text-sm font-mono font-medium whitespace-nowrap">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

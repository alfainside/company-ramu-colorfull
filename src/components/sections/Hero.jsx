import { useState, useEffect, useCallback, useRef } from 'react';
import { HERO_SLIDES, TYPEWRITER_TEXTS } from '../../data';
import { useTypewriter } from '../../hooks/useTypewriter';
import Button from '../global/Button';

function FloatingShape({ color, size, top, left, delay = 0 }) {
  return (
    <div
      className={`absolute rounded-full opacity-20 animate-float`}
      style={{ background: color, width: size, height: size, top, left, animationDelay: `${delay}s` }}
    />
  );
}

function SlideShapes({ shapes }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingShape color={shapes[0]} size="320px" top="-80px"  left="60%"  delay={0} />
      <FloatingShape color={shapes[1]} size="200px" top="40%"    left="75%"  delay={1.5} />
      <FloatingShape color={shapes[2]} size="140px" top="65%"    left="55%"  delay={3} />
      <FloatingShape color={shapes[0]} size="80px"  top="20%"    left="85%"  delay={2} />
      {/* Diagonal colored strip */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[55%] opacity-10"
        style={{ background: `linear-gradient(135deg, transparent 30%, ${shapes[0]} 100%)` }}
      />
    </div>
  );
}

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const autoRef = useRef(null);
  const typed = useTypewriter(TYPEWRITER_TEXTS, 75, 2200);

  const goTo = useCallback((idx) => {
    if (transitioning || idx === slide) return;
    setTransitioning(true);
    setContentVisible(false);
    setTimeout(() => {
      setSlide(idx);
      setTransitioning(false);
      setContentVisible(true);
    }, 400);
  }, [slide, transitioning]);

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setSlide(s => {
        const next = (s + 1) % HERO_SLIDES.length;
        setTransitioning(true);
        setContentVisible(false);
        setTimeout(() => { setTransitioning(false); setContentVisible(true); }, 400);
        return next;
      });
    }, 6000);
    return () => clearInterval(autoRef.current);
  }, []);

  const cur = HERO_SLIDES[slide];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background transition */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 bg-gradient-to-br ${s.bg} transition-opacity duration-500`}
          style={{ opacity: i === slide ? 1 : 0 }}
        />
      ))}

      {/* Floating shapes per slide */}
      <SlideShapes shapes={cur.shapes} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      {/* Main content */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-widest uppercase text-white shadow-lg transition-all duration-500 ${cur.accent}`}
              style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity .5s .05s, transform .5s .05s' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {cur.tagline}
            </div>

            {/* Headline */}
            <h1
              className="font-display font-black text-brand-dark leading-[1.05] tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', opacity: contentVisible ? 1 : 0, transform: contentVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity .5s .1s, transform .5s .1s' }}
            >
              {cur.headline[0]}<br />
              <span
                className="inline-block"
                style={{ 
                  backgroundImage: `linear-gradient(135deg, ${cur.gradientFrom}, ${cur.gradientTo})`, 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent', 
                  backgroundClip: 'text' 
                }}
              >
                {cur.headline[1]}
              </span>
            </h1>

            {/* Typewriter line */}
            <div
              className="flex items-center gap-2 mb-4"
              style={{ opacity: contentVisible ? 1 : 0, transition: 'opacity .5s .18s' }}
            >
              <span className="text-brand-dark/40 font-mono text-sm">Kami membangun →</span>
              <span className={`font-display font-bold text-base md:text-lg ${cur.accentText}`}>{typed}</span>
              <span className={`inline-block w-0.5 h-5 animate-pulse ${cur.accent} rounded`} />
            </div>

            {/* Sub */}
            <p
              className="text-brand-dark/65 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity .5s .22s, transform .5s .22s' }}
            >
              {cur.sub}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3"
              style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity .5s .3s, transform .5s .3s' }}
            >
              <Button size="lg" variant="primary" onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}>
                💬 Konsultasi Gratis
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' })}>
                Lihat Layanan →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Service pills bottom bar */}
      <div className="relative z-10 w-full bg-white/80 backdrop-blur-lg border-t border-white/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto no-scrollbar gap-0 divide-x divide-gray-100">
            {[
              { icon: '⚡', label: 'Website', color: 'text-brand-orange' },
              { icon: '🛒', label: 'E-Commerce', color: 'text-brand-indigo' },
              { icon: '⚙️', label: 'Web App', color: 'text-brand-teal' },
              { icon: '📱', label: 'Landing Page', color: 'text-brand-pink' },
            ].map(item => (
              <button
                key={item.label}
                onClick={() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-1 min-w-fit flex items-center justify-center gap-2 py-4 px-6 hover:bg-brand-orange/5 transition-colors group"
              >
                <span className="text-xl">{item.icon}</span>
                <span className={`font-display font-bold text-sm whitespace-nowrap ${item.color} group-hover:underline`}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 md:bottom-24 right-4 md:right-8 z-20 flex flex-col gap-2">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => { clearInterval(autoRef.current); goTo(i); }}
            className={`rounded-full transition-all duration-300 ${i === slide ? `w-2.5 h-8 ${cur.accent}` : 'w-2.5 h-2.5 bg-brand-dark/20 hover:bg-brand-dark/40'}`}
          />
        ))}
      </div>
    </section>
  );
}

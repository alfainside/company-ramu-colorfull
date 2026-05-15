export default function SectionHeader({ badge, title, highlight, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-14 md:mb-20 ${center ? 'text-center' : ''}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest uppercase mb-4 ${
          light ? 'bg-white/20 text-white' : 'bg-brand-orange/10 text-brand-orange'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className={`font-display font-black text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight ${
        light ? 'text-white' : 'text-brand-dark'
      }`}>
        {title}{' '}
        {highlight && (
          <span className="relative">
            <span className={light ? 'text-brand-yellow' : 'text-brand-orange'}>{highlight}</span>
            <svg className={`absolute -bottom-1 left-0 w-full h-2 ${light ? 'text-brand-yellow/50' : 'text-brand-orange/30'}`} viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M0 6 Q50 0 100 5 Q150 10 200 4" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''} ${
          light ? 'text-white/75' : 'text-brand-dark/60'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

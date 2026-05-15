export default function Badge({ children, color = 'orange' }) {
  const colors = {
    orange: 'bg-brand-orange/10 text-brand-orange',
    indigo: 'bg-brand-indigo/10 text-brand-indigo',
    teal:   'bg-brand-teal/10 text-brand-teal',
    pink:   'bg-brand-pink/10 text-brand-pink',
    purple: 'bg-brand-purple/10 text-brand-purple',
    yellow: 'bg-brand-yellow/10 text-yellow-700',
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide ${colors[color]}`}>
      {children}
    </span>
  );
}

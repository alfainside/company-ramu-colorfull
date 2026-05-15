export default function Button({ children, variant = 'primary', size = 'md', className = '', onClick, href }) {
  const base = 'inline-flex items-center justify-center gap-2 font-display font-bold rounded-xl transition-all duration-200 cursor-pointer';
  const sizes = {
    sm:  'text-sm px-4 py-2',
    md:  'text-sm px-6 py-3',
    lg:  'text-base px-8 py-4',
    xl:  'text-lg px-10 py-5',
  };
  const variants = {
    primary:   'bg-brand-orange hover:bg-orange-600 text-white shadow-lg shadow-brand-orange/30 hover:shadow-brand-orange/50 hover:-translate-y-0.5',
    secondary: 'bg-brand-indigo hover:bg-indigo-700 text-white shadow-lg shadow-brand-indigo/30 hover:shadow-brand-indigo/50 hover:-translate-y-0.5',
    outline:   'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white',
    ghost:     'text-brand-dark/70 hover:text-brand-dark hover:bg-gray-100',
    white:     'bg-white text-brand-dark hover:bg-gray-50 shadow-lg hover:-translate-y-0.5',
    dark:      'bg-brand-dark hover:bg-brand-dark/90 text-white shadow-lg hover:-translate-y-0.5',
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}

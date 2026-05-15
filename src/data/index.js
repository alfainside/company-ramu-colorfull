// ─── NAVIGATION ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Beranda',    href: '#hero' },
  { label: 'Layanan',   href: '#layanan' },
  { label: 'Tentang',   href: '#tentang' },
  { label: 'Visi Misi', href: '#visi-misi' },
  { label: 'Kontak',    href: '#kontak' },
];

// ─── HERO SLIDES ──────────────────────────────────────────────
export const HERO_SLIDES = [
  {
    id: 1,
    tagline: 'Website · Aplikasi · E-Commerce',
    headline: ['Solusi Digital', 'untuk Bisnis Anda'],
    sub: 'Kami bantu UMKM dan perusahaan hadir profesional di dunia digital — cepat, terjangkau, dan berdampak nyata.',
    accent: 'bg-brand-orange',
    accentText: 'text-brand-orange',
    gradientFrom: '#F97316',
    gradientTo: '#FBBF24',
    bg: 'from-orange-50 to-yellow-50',
    blob1: 'bg-brand-orange/20',
    blob2: 'bg-brand-yellow/30',
    shapes: ['#F97316', '#FBBF24', '#14B8A6'],
    emoji: '🚀',
  },
  {
    id: 2,
    tagline: 'Company Profile · Landing Page · CMS',
    headline: ['Tampil Profesional,', 'Percayakan ke Kami'],
    sub: 'Design modern, responsive di semua perangkat, dan dioptimalkan agar bisnis Anda mudah ditemukan pelanggan.',
    accent: 'bg-brand-indigo',
    accentText: 'text-brand-indigo',
    gradientFrom: '#4F46E5',
    gradientTo: '#3B82F6',
    bg: 'from-indigo-50 to-blue-50',
    blob1: 'bg-brand-indigo/20',
    blob2: 'bg-brand-blue/30',
    shapes: ['#4F46E5', '#3B82F6', '#14B8A6'],
    emoji: '💻',
  },
  {
    id: 3,
    tagline: 'B2B · UMKM · Startup',
    headline: ['Tim Kecil,', 'Dampak Besar'],
    sub: '3 orang dengan satu misi: jadikan teknologi mudah diakses siapa pun. Dari ide sederhana hingga produk digital terbaik.',
    accent: 'bg-brand-teal',
    accentText: 'text-brand-teal',
    gradientFrom: '#14B8A6',
    gradientTo: '#84CC16',
    bg: 'from-teal-50 to-lime-50',
    blob1: 'bg-brand-teal/20',
    blob2: 'bg-brand-lime/30',
    shapes: ['#14B8A6', '#84CC16', '#F97316'],
    emoji: '✨',
  },
];

// ─── TYPEWRITER TEXTS ─────────────────────────────────────────
export const TYPEWRITER_TEXTS = [
  'Website Profesional',
  'Aplikasi Web Modern',
  'Toko Online (E-Commerce)',
  'Company Profile Keren',
  'Sistem Manajemen Bisnis',
  'Solusi Digital UMKM',
];

// ─── SERVICES ─────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 1,
    icon: '🌐',
    title: 'Company Profile',
    short: 'Kesan pertama yang tak terlupakan',
    desc: 'Website company profile yang elegan, responsif, dan mencerminkan identitas brand Anda secara profesional di dunia digital.',
    color: 'bg-brand-orange',
    textColor: 'text-brand-orange',
    borderColor: 'border-brand-orange',
    features: ['Design custom & responsif', 'Optimasi SEO dasar', 'Domain & hosting setup', 'Revisi hingga puas'],
  },
  {
    id: 2,
    icon: '🛒',
    title: 'E-Commerce',
    short: 'Toko online siap berjualan',
    desc: 'Platform toko online lengkap dengan manajemen produk, keranjang belanja, pembayaran online, dan laporan penjualan.',
    color: 'bg-brand-indigo',
    textColor: 'text-brand-indigo',
    borderColor: 'border-brand-indigo',
    features: ['Manajemen produk mudah', 'Payment gateway terintegrasi', 'Dashboard admin', 'Notifikasi otomatis'],
  },
  {
    id: 3,
    icon: '⚙️',
    title: 'Web Aplikasi',
    short: 'Otomasi & efisiensi bisnis',
    desc: 'Aplikasi web custom sesuai kebutuhan bisnis Anda — dari sistem inventory, HR, booking, hingga dashboard analitik.',
    color: 'bg-brand-teal',
    textColor: 'text-brand-teal',
    borderColor: 'border-brand-teal',
    features: ['Analisis kebutuhan bisnis', 'UI/UX intuitif', 'Integrasi API pihak ketiga', 'Maintenance & support'],
  },
  {
    id: 4,
    icon: '📱',
    title: 'Landing Page',
    short: 'Konversi pengunjung jadi pelanggan',
    desc: 'Landing page high-converting yang dirancang khusus untuk campaign, produk baru, atau event bisnis Anda.',
    color: 'bg-brand-pink',
    textColor: 'text-brand-pink',
    borderColor: 'border-brand-pink',
    features: ['Desain berorientasi konversi', 'Loading super cepat', 'Integrasi form & WhatsApp', 'A/B testing ready'],
  },
  {
    id: 5,
    icon: '🎨',
    title: 'UI/UX Design',
    short: 'Design yang disukai pengguna',
    desc: 'Desain antarmuka yang indah, intuitif, dan user-friendly. Dari wireframe hingga prototype interaktif siap handoff ke developer.',
    color: 'bg-brand-purple',
    textColor: 'text-brand-purple',
    borderColor: 'border-brand-purple',
    features: ['User research & persona', 'Wireframe & prototype', 'Design system', 'Figma handoff'],
  },
  {
    id: 6,
    icon: '🔧',
    title: 'Maintenance & Support',
    short: 'Website sehat, bisnis tenang',
    desc: 'Layanan pemeliharaan rutin, update keamanan, backup data, dan dukungan teknis agar website Anda selalu optimal.',
    color: 'bg-brand-yellow',
    textColor: 'text-brand-dark',
    borderColor: 'border-brand-yellow',
    features: ['Update & patch rutin', 'Backup otomatis', 'Monitoring uptime', 'Support via WhatsApp'],
  },
];

// ─── STATS ────────────────────────────────────────────────────
export const STATS = [
  { value: '3+',   label: 'Tahun Pengalaman',   icon: '📅' },
  { value: '50+',  label: 'Proyek Selesai',      icon: '✅' },
  { value: '30+',  label: 'Klien Puas',          icon: '😊' },
  { value: '100%', label: 'Komitmen Kualitas',   icon: '🏆' },
];

// ─── TEAM ─────────────────────────────────────────────────────
export const TEAM = [
  {
    name: 'Raka Maulana',
    role: 'Fullstack Developer',
    bio: 'Spesialis React & Node.js dengan passion membangun produk yang scalable dan cepat.',
    color: 'bg-brand-orange',
    initial: 'R',
    emoji: '👨‍💻',
  },
  {
    name: 'Amin Pratama',
    role: 'UI/UX Designer',
    bio: 'Designer kreatif yang percaya bahwa desain terbaik adalah yang terasa tidak ada namun bekerja sempurna.',
    color: 'bg-brand-indigo',
    initial: 'A',
    emoji: '🎨',
  },
  {
    name: 'Muri Handayani',
    role: 'Project Manager',
    bio: 'Memastikan setiap proyek berjalan tepat waktu, sesuai anggaran, dan melebihi ekspektasi klien.',
    color: 'bg-brand-teal',
    initial: 'M',
    emoji: '📋',
  },
];

// ─── VISI MISI ────────────────────────────────────────────────
export const VISI = 'Menjadi mitra digital terpercaya bagi UMKM dan perusahaan Indonesia — membantu mereka tumbuh dan bersaing di era digital dengan solusi teknologi yang terjangkau, berkualitas, dan berdampak nyata.';

export const MISI = [
  { icon: '🎯', text: 'Membangun produk digital berkualitas tinggi yang benar-benar memenuhi kebutuhan bisnis klien.' },
  { icon: '💡', text: 'Menghadirkan solusi teknologi yang inovatif namun tetap mudah digunakan oleh siapa pun.' },
  { icon: '🤝', text: 'Membangun hubungan jangka panjang berbasis kepercayaan, transparansi, dan komunikasi terbuka.' },
  { icon: '📈', text: 'Terus berinovasi dan mengikuti perkembangan teknologi untuk memberikan yang terbaik bagi klien.' },
  { icon: '🌱', text: 'Mendukung pertumbuhan UMKM Indonesia melalui digitalisasi yang tepat sasaran dan terjangkau.' },
];

export const VALUES = [
  { icon: '⚡', label: 'Cepat', desc: 'Estimasi waktu pengerjaan yang jelas & on-time delivery.', color: 'bg-brand-orange/10 text-brand-orange' },
  { icon: '💎', label: 'Berkualitas', desc: 'Standar kode bersih, design premium, performa optimal.', color: 'bg-brand-indigo/10 text-brand-indigo' },
  { icon: '💬', label: 'Transparan', desc: 'Progress update rutin, harga jelas, tanpa biaya tersembunyi.', color: 'bg-brand-teal/10 text-brand-teal' },
  { icon: '🔄', label: 'Fleksibel', desc: 'Revisi terbuka, scope adjustment, dan support purna jual.', color: 'bg-brand-pink/10 text-brand-pink' },
];

// ─── MARQUEE TECH STACK ───────────────────────────────────────
export const TECH_STACK = [
  'React.js', 'Next.js', 'Vue.js', 'Node.js', 'Laravel', 'Tailwind CSS',
  'PostgreSQL', 'MongoDB', 'Figma', 'TypeScript', 'REST API', 'Docker',
  'React.js', 'Next.js', 'Vue.js', 'Node.js', 'Laravel', 'Tailwind CSS',
  'PostgreSQL', 'MongoDB', 'Figma', 'TypeScript', 'REST API', 'Docker',
];

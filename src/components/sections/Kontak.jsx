import { useState } from 'react';
import SectionHeader from '../global/SectionHeader';
import Button from '../global/Button';

const SERVICES_LIST = [
  'Company Profile', 'E-Commerce', 'Web Aplikasi',
  'Landing Page', 'UI/UX Design', 'Maintenance', 'Lainnya'
];

const BUDGET_LIST = [
  'Di bawah Rp 5 juta', 'Rp 5 – 15 juta',
  'Rp 15 – 50 juta', 'Di atas Rp 50 juta', 'Belum tahu'
];

export default function Kontak() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // WhatsApp deep link
    const msg = encodeURIComponent(
      `Halo Ramu Digital! 👋\n\nNama: ${form.name}\nEmail: ${form.email}\nNo. HP: ${form.phone}\nLayanan: ${form.service}\nBudget: ${form.budget}\n\nPesan:\n${form.message}`
    );
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputCls = "w-full bg-white border-2 border-gray-100 focus:border-brand-orange rounded-xl px-4 py-3.5 text-brand-dark text-sm font-body placeholder:text-gray-400 outline-none transition-colors duration-200";

  return (
    <section id="kontak" className="section-pad bg-white relative overflow-hidden">
      {/* Deco blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-indigo/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="reveal">
          <SectionHeader
            badge="Kontak"
            title="Mulai Proyek"
            highlight="Anda"
            subtitle="Ceritakan kebutuhan Anda — konsultasi pertama gratis, tanpa komitmen. Kami balas dalam 1x24 jam."
          />
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Info panel */}
          <div className="md:col-span-2 reveal-left space-y-6">
            {/* Quick contact */}
            <div className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-3xl p-7 text-white shadow-xl shadow-brand-orange/20">
              <h3 className="font-display font-black text-xl mb-5">Hubungi Langsung</h3>
              {[
                { icon: '💬', label: 'WhatsApp', value: '+62 812 3456 7890', href: 'https://wa.me/6281234567890' },
                { icon: '📧', label: 'Email', value: 'halo@ramudigital.id', href: 'mailto:halo@ramudigital.id' },
                { icon: '📍', label: 'Lokasi', value: 'Jakarta, Indonesia', href: '#' },
                { icon: '⏰', label: 'Jam Kerja', value: 'Sen–Jum, 09.00–18.00', href: '#' },
              ].map(item => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="flex items-center gap-3.5 py-3 border-b border-white/15 last:border-0 group hover:pl-1 transition-all duration-200">
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-white/30 transition-colors">{item.icon}</div>
                  <div>
                    <div className="text-white/60 text-xs font-mono">{item.label}</div>
                    <div className="text-white font-display font-bold text-sm">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Process steps */}
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
              <h4 className="font-display font-black text-base text-brand-dark mb-5">Cara Kerja Kami</h4>
              {[
                { step: '01', label: 'Konsultasi', desc: 'Ceritakan kebutuhan Anda', color: 'bg-brand-orange' },
                { step: '02', label: 'Proposal', desc: 'Kami kirim penawaran detail', color: 'bg-brand-indigo' },
                { step: '03', label: 'Pengerjaan', desc: 'Update progres rutin', color: 'bg-brand-teal' },
                { step: '04', label: 'Launching', desc: 'Produk siap & support aktif', color: 'bg-brand-pink' },
              ].map((step, i) => (
                <div key={step.step} className="flex items-start gap-3.5 mb-4 last:mb-0">
                  <div className={`w-8 h-8 rounded-xl ${step.color} flex items-center justify-center text-white font-mono text-xs font-bold flex-shrink-0`}>{step.step}</div>
                  <div>
                    <div className="font-display font-bold text-sm text-brand-dark">{step.label}</div>
                    <div className="text-brand-dark/50 text-xs">{step.desc}</div>
                  </div>
                  {i < 3 && <div className="absolute left-10 mt-8 h-6 w-px bg-gray-200" style={{ position: 'relative', left: 'auto', marginLeft: '-36px', marginTop: '0' }} />}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 reveal-right">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-7 md:p-9">
              <h3 className="font-display font-black text-xl text-brand-dark mb-7">Isi Form Berikut</h3>

              {sent && (
                <div className="mb-6 p-4 rounded-2xl bg-brand-teal/10 border border-brand-teal/30 text-brand-teal font-display font-bold text-sm flex items-center gap-2">
                  ✅ Pesan terkirim! WhatsApp akan terbuka secara otomatis.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-brand-dark/50 uppercase tracking-wide mb-1.5">Nama Lengkap *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Budi Santoso" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-brand-dark/50 uppercase tracking-wide mb-1.5">No. HP / WA *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+62 812 ..." className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-brand-dark/50 uppercase tracking-wide mb-1.5">Email</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="budi@perusahaan.com" className={inputCls} />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-brand-dark/50 uppercase tracking-wide mb-1.5">Layanan yang Dibutuhkan *</label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_LIST.map(s => (
                      <button
                        key={s} type="button"
                        onClick={() => setForm(f => ({ ...f, service: s }))}
                        className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold border-2 transition-all duration-200 ${
                          form.service === s
                            ? 'bg-brand-orange border-brand-orange text-white'
                            : 'border-gray-100 text-brand-dark/60 hover:border-brand-orange/40 hover:text-brand-orange'
                        }`}
                      >{s}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-brand-dark/50 uppercase tracking-wide mb-1.5">Estimasi Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGET_LIST.map(b => (
                      <button
                        key={b} type="button"
                        onClick={() => setForm(f => ({ ...f, budget: b }))}
                        className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold border-2 transition-all duration-200 ${
                          form.budget === b
                            ? 'bg-brand-indigo border-brand-indigo text-white'
                            : 'border-gray-100 text-brand-dark/60 hover:border-brand-indigo/40 hover:text-brand-indigo'
                        }`}
                      >{b}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-brand-dark/50 uppercase tracking-wide mb-1.5">Ceritakan Kebutuhan Anda *</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={4}
                    placeholder="Halo, saya butuh website untuk toko saya yang bergerak di bidang..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-orange-600 text-white font-display font-black text-base py-4 rounded-xl shadow-lg shadow-brand-orange/30 hover:shadow-brand-orange/50 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  💬 Kirim via WhatsApp
                </button>
                <p className="text-center text-xs text-brand-dark/40 font-body">Dengan mengirim form ini, Anda setuju untuk dihubungi oleh tim kami.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

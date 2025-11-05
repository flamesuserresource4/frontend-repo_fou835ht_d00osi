import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Andi Pratama',
    role: 'Founder KopiKita',
    text: 'Kami minta website dan branding dalam 2 minggu, Palugada deliver lebih dari ekspektasi. Traffic naik 3x!',
  },
  {
    name: 'Sinta Lestari',
    role: 'CMO BeautyGlow',
    text: 'Tim yang responsif dan strategis. Konten dan iklannya tepat sasaran, ROAS meningkat signifikan.',
  },
  {
    name: 'Budi Santoso',
    role: 'CEO RodaTech',
    text: 'Mulai dari ide produk sampai go-to-market, semua dibantu end-to-end. Hemat waktu dan biaya.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="relative bg-gradient-to-b from-zinc-950 to-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Apa Kata Klien</h2>
          <p className="mt-3 text-white/70">Cerita singkat dari brand yang sudah kami bantu berkembang.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-3 text-white/80">“{t.text}”</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

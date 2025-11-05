import { Code, PenTool, Megaphone, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Branding & Desain',
    desc: 'Logo, identitas visual, materi promosi, dan guideline brand yang konsisten.',
  },
  {
    icon: Code,
    title: 'Website & Aplikasi',
    desc: 'Landing page, e-commerce, hingga sistem kustom sesuai kebutuhan.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    desc: 'Iklan berbayar, SEO, konten sosial, dan strategi pertumbuhan terpadu.',
  },
  {
    icon: ShoppingBag,
    title: 'Produksi Konten',
    desc: 'Foto, video, copywriting, hingga kampanye multi-platform siap pakai.',
  },
];

export default function Services() {
  return (
    <section id="layanan" className="relative bg-gradient-to-b from-black to-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Semua Bisa di Palugada</h2>
          <p className="mt-3 text-white/70">Satu tim untuk eksekusi ujung ke ujung: dari ide sampai hasil nyata.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/10"
            >
              <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-rose-500/20 p-3 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

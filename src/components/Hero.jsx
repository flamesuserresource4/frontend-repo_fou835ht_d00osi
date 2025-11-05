import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6UilJk1VYbYpQvQW/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:flex lg:min-h-[80vh] lg:items-center lg:py-32">
        <div className="max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            Palugada — Jasa Apa Saja, Beres!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg text-white/80 sm:text-xl"
          >
            Dari desain, pembuatan website, hingga urusan produksi konten dan kampanye digital. Satu pintu untuk semua kebutuhan bisnis Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#layanan"
              className="inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-black backdrop-blur transition hover:bg-white"
            >
              Lihat Layanan
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
            >
              Konsultasi Gratis
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {[
              ['500+','Proyek'],
              ['98%','Puas'],
              ['24/7','Support'],
              ['10+','Bidang']
            ].map(([stat, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-2xl font-bold">{stat}</p>
                <p className="text-xs text-white/70">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

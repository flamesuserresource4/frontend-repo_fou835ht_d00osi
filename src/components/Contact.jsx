import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontak" className="relative bg-gradient-to-b from-black to-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Mulai dari Konsultasi Gratis</h2>
          <p className="mt-3 text-white/70">Ceritakan kebutuhan Anda, tim kami akan merumuskan solusi terbaik.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
          <a
            href="mailto:halo@palugada.id"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/10"
          >
            <Mail className="mx-auto h-6 w-6 text-white" />
            <p className="mt-2 text-sm font-semibold text-white">Email</p>
            <p className="text-xs text-white/70">halo@palugada.id</p>
          </a>
          <a
            href="tel:+6281234567890"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/10"
          >
            <Phone className="mx-auto h-6 w-6 text-white" />
            <p className="mt-2 text-sm font-semibold text-white">Telepon</p>
            <p className="text-xs text-white/70">+62 812-3456-7890</p>
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/10"
          >
            <MessageSquare className="mx-auto h-6 w-6 text-white" />
            <p className="mt-2 text-sm font-semibold text-white">WhatsApp</p>
            <p className="text-xs text-white/70">Chat sekarang</p>
          </a>
        </div>

        <p className="mt-10 text-center text-xs text-white/50">© {new Date().getFullYear()} Palugada. All rights reserved.</p>
      </div>
    </section>
  );
}

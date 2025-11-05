import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="flex items-center gap-2 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-500">
                <Rocket className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-semibold">Palugada</p>
                <p className="text-xs text-white/60">Jasa apa saja, beres!</p>
              </div>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontak"
                className="rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 px-4 py-2 text-sm font-medium shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
              >
                Konsultasi Gratis
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {open && (
            <div className="border-t border-white/10 px-6 py-4 md:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#kontak"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 px-4 py-2 text-center text-sm font-medium shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

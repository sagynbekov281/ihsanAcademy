import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiMenuLine, RiCloseLine, RiCodeSSlashLine } from 'react-icons/ri';

const links = [
  { to: '/',          label: 'Главная' },
  { to: '/courses',   label: 'Курсы' },
  { to: '/about',     label: 'О нас' },
  { to: '/teachers',  label: 'Учителя' },
  { to: '/contact',   label: 'Контакты' },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08091A]/95 backdrop-blur-xl border-b border-[#7C3AED]/20 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg border border-[#7C3AED]/40 flex items-center justify-center transition-all duration-200 group-hover:border-[#A855F7]/60"
            style={{ background: 'linear-gradient(135deg, #7C3AED/25, #A855F7/15)' }}>
            <RiCodeSSlashLine className="text-[#A855F7]" size={15} />
          </div>
          <span className="font-display font-bold text-white text-[17px] tracking-tight">
            Ihsan<span style={{ background: 'linear-gradient(135deg, #A855F7, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Academy</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => {
            const isActive = to === '/'
              ? location.pathname === '/'
              : location.pathname === to;

            return (
              <Link
                key={to}
                to={to}
                onClick={() => {
                  if (to === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#A855F7] bg-[#7C3AED]/15 border border-[#7C3AED]/30'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA button */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:scale-[1.03] active:scale-[0.97]"
          style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}
        >
          Записаться
        </Link>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#94A3B8] hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-all duration-200"
          aria-label="Меню"
        >
          {open ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#08091A]/98 backdrop-blur-xl border-t border-[#7C3AED]/20 px-5 py-4 flex flex-col gap-1">
          {links.map(({ to, label }) => {
            const isActive = to === '/'
              ? location.pathname === '/'
              : location.pathname === to;

            return (
              <Link
                key={to}
                to={to}
                onClick={() => {
                  if (to === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#A855F7] bg-[#7C3AED]/15 border border-[#7C3AED]/25'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-2 py-2.5 rounded-xl text-sm font-semibold text-white text-center transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}
          >
            Записаться
          </Link>
        </div>
      </div>
    </header>
  );
}
// src/components/Navbar.tsx
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RiMenuLine, RiCloseLine, RiCodeSSlashLine, RiGlobalLine } from 'react-icons/ri';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const langDropdownRef = useRef<HTMLDivElement | null>(null);

  const activeLang = i18n.resolvedLanguage?.startsWith('ky') ? 'ky' : 'ru';
  
  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/courses', label: t('nav.courses') },
    { to: '/about', label: t('nav.about') },
    { to: '/teachers', label: t('nav.teachers') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ky', name: 'Кыргызча', flag: '🇰🇬' },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangDropdown(false);
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdown(false);
      }
    };

    if (langDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langDropdown]);

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
        <Link to="/" className="flex items-center gap-2.5 group">
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

        <div className="hidden md:flex items-center gap-3">
          {/* Language Dropdown */}
          <div className="relative group" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200"
              style={{
                background: langDropdown 
                  ? 'linear-gradient(135deg, #7C3AED, #A855F7)' 
                  : 'linear-gradient(135deg, #7C3AED/20, #A855F7/10)',
                border: langDropdown ? '1px solid #A855F7' : '1px solid #7C3AED/30'
              }}
            >
              <RiGlobalLine size={16} />
              {activeLang === 'ru' ? 'РУ' : 'КГ'}
            </button>

            {langDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-[#7C3AED]/30 bg-[#08091A] shadow-xl shadow-black/50 overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 ${
                      activeLang === lang.code
                        ? 'bg-[#7C3AED]/20 text-[#A855F7] border-l-2 border-[#A855F7]'
                        : 'text-[#94A3B8] hover:bg-[#7C3AED]/10 hover:text-white'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <div className="flex-1 text-left">
                      <p className="font-semibold">{lang.name}</p>
                    </div>
                    {activeLang === lang.code && (
                      <div className="w-2 h-2 rounded-full bg-[#A855F7]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:scale-[1.03] active:scale-[0.97]"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}
          >
            {t('cta.enroll')}
          </Link>
        </div>

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
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
                onClick={() => setOpen(false)}
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
          
          {/* Mobile Language Selection */}
          <div className="mt-3 pt-3 border-t border-[#7C3AED]/20 flex flex-col gap-2">
            <p className="text-xs text-[#94A3B8] uppercase font-semibold px-3">Язык</p>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeLang === lang.code
                    ? 'text-[#A855F7] bg-[#7C3AED]/15 border border-[#7C3AED]/25'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>

          <Link
            to="/contact"
            className="mt-3 py-2.5 rounded-xl text-sm font-semibold text-white text-center transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}
          >
            {t('cta.enroll')}
          </Link>
        </div>
      </div>
    </header>
  );
}
import { Link } from 'react-router-dom';
import { RiCodeSSlashLine, RiTelegramLine, RiInstagramLine, RiWhatsappLine, RiMapPinLine, RiPhoneLine, RiMailLine, RiTimeLine } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="border-t border-[#7C3AED]/15 bg-[#05060F]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg border border-[#7C3AED]/40 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7C3AED/20, #A855F7/10)' }}>
                <RiCodeSSlashLine className="text-[#A855F7]" size={15} />
              </div>
              <span className="font-display font-bold text-white text-[17px] tracking-tight">
                Ihsan<span style={{ background: 'linear-gradient(135deg, #A855F7, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Academy</span>
              </span>
            </div>
            <p className="text-[#475569] text-sm leading-relaxed mb-5">
              IT-академия нового поколения в Бишкеке. Учим профессиям будущего.
            </p>
            <div className="flex gap-2">
              {[
                { Icon: RiTelegramLine, href: '#' },
                { Icon: RiInstagramLine, href: '#' },
                { Icon: RiWhatsappLine, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-xl border border-[#1E1B3A] flex items-center justify-center text-[#475569] hover:text-[#A855F7] hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Навигация</p>
            <ul className="space-y-2.5">
              {[['/', 'Главная'], ['/courses', 'Курсы'], ['/about', 'О нас'], ['/contact', 'Контакты']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-[#475569] text-sm hover:text-[#A855F7] transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Курсы</p>
            <ul className="space-y-2.5">
              {['Frontend', 'Backend', 'UI/UX Дизайн', 'Data Science', 'Кибербезопасность', 'Mobile Dev'].map(c => (
                <li key={c}>
                  <Link to="/courses" className="text-[#475569] text-sm hover:text-[#A855F7] transition-colors duration-200">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Контакты</p>
            <ul className="space-y-3">
              {[
                { Icon: RiMapPinLine, text: 'Бишкек, ул. Манаса 40' },
                { Icon: RiPhoneLine, text: '+996 700 123 456' },
                { Icon: RiMailLine, text: 'info@ihsanacademy.kg' },
                { Icon: RiTimeLine, text: 'Пн–Пт: 9:00–19:00' },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5 text-[#475569] text-sm">
                  <Icon size={15} className="text-[#7C3AED] shrink-0 mt-0.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#7C3AED]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#334155] text-xs">© 2024 IhsanAcademy. Все права защищены.</p>
          <p className="text-[#334155] text-xs">Бишкек, Кыргызстан 🇰🇬</p>
        </div>
      </div>
    </footer>
  );
}
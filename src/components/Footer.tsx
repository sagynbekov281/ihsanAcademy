import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RiCodeSSlashLine, RiTelegramLine, RiInstagramLine, RiWhatsappLine, RiMapPinLine, RiPhoneLine, RiMailLine, RiTimeLine } from 'react-icons/ri';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-[#7C3AED]/15 bg-[#020A2A]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg border border-[#7C3AED]/40 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(0,87,255,.25), rgba(166,107,255,.15))' }}>
                <RiCodeSSlashLine className="text-[#A66BFF]" size={15} />
              </div>
              <span className="font-display font-bold text-white text-[17px] tracking-tight">
                Ihsan<span style={{ background: 'linear-gradient(135deg, #A66BFF, #CDB2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Academy</span>
              </span>
            </div>
            <p className="text-[#C9D2F5] text-sm leading-relaxed mb-5">
              {t('footer.description')}
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
                  className="w-9 h-9 rounded-xl border border-[#2A2F7A] flex items-center justify-center text-[#C9D2F5] hover:text-[#CDB2FF] hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">{t('footer.navigation')}</p>
            <ul className="space-y-2.5">
              {[['/', t('nav.home')], ['/courses', t('nav.courses')], ['/about', t('nav.about')], ['/contact', t('nav.contact')]].map(([to, label]) => (
                <li key={to as string}>
                  <Link to={to as string} className="text-[#C9D2F5] text-sm hover:text-[#CDB2FF] transition-colors duration-200">
                    {label as string}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">{t('footer.courses')}</p>
            <ul className="space-y-2.5">
              {([
                t('contact.courses.frontend'),
                t('contact.courses.backend'),
                t('contact.courses.uiux'),
                t('contact.courses.data'),
                t('contact.courses.cyber'),
                t('contact.courses.mobile'),
              ]).map(c => (
                <li key={c}>
                  <Link to="/courses" className="text-[#C9D2F5] text-sm hover:text-[#CDB2FF] transition-colors duration-200">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">{t('footer.contacts')}</p>
            <ul className="space-y-3">
              {[
                { Icon: RiMapPinLine, text: t('footer.address') },
                { Icon: RiPhoneLine,  text: t('contact.phone') },
                { Icon: RiMailLine,   text: t('contact.email') },
                { Icon: RiTimeLine,   text: t('footer.hours') },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5 text-[#C9D2F5] text-sm">
                  <Icon size={15} className="text-[#A66BFF] shrink-0 mt-0.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#7C3AED]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#C9D2F5] text-xs">{t('footer.rights')}</p>
          <p className="text-[#C9D2F5] text-xs">{t('footer.location')}</p>
        </div>
      </div>
    </footer>
  );
}
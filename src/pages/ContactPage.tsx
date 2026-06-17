import { useState } from 'react';
import { RiSendPlaneLine, RiTelegramLine, RiWhatsappLine, RiInstagramLine, RiMapPinLine, RiPhoneLine, RiMailLine, RiTimeLine, RiArrowDownSLine } from 'react-icons/ri';
import AnimSection from '../components/AnimSection';
import { faqs } from '../data';

const courses = [
  'Frontend разработка',
  'Backend разработка',
  'UI/UX Дизайн',
  'Data Science',
  'Кибербезопасность',
  'Мобильная разработка',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', course: '', message: '' });
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', course: '', message: '' });
  };

  const inputCls = "w-full bg-[#0B0D1A] border border-[#1E2448] rounded-xl px-4 py-3 text-white text-sm placeholder-[#7A82A8] focus:outline-none focus:border-[#5B5BD6] transition-colors";

  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        {/* Header */}
        <AnimSection className="max-w-xl mb-12">
          <p className="text-[#7B7FE8] text-xs font-semibold uppercase tracking-widest mb-2">Контакты</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">Свяжитесь с нами</h1>
          <p className="text-[#7A82A8] text-sm leading-relaxed">
            Оставь заявку и мы перезвоним в течение часа, расскажем о курсах и ответим на все вопросы.
          </p>
        </AnimSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 items-stretch">
          {/* Form */}
          <AnimSection className="lg:col-span-3 flex flex-col">
            <div className="border border-[#1E2448] rounded-2xl p-6 sm:p-8 bg-[#111428]/80 flex flex-col flex-1">
              <h2 className="font-display text-lg font-semibold text-white mb-6">Оставить заявку</h2>
              {sent && (
                <div className="mb-5 p-3.5 rounded-xl bg-[#5B5BD6]/15 border border-[#5B5BD6]/30 text-[#7B7FE8] text-sm">
                  ✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.
                </div>
              )}
              <form onSubmit={submit} className="flex flex-col flex-1 gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#7A82A8] mb-1.5 block">Ваше имя *</label>
                    <input name="name" value={form.name} onChange={handle} required placeholder="Айдана" className={inputCls} />
                  </div>
                  <div>
                    <label className="text-xs text-[#7A82A8] mb-1.5 block">Телефон *</label>
                    <input name="phone" value={form.phone} onChange={handle} required placeholder="+996 700 000 000" className={inputCls} />
                  </div>
                </div>

                {/* Custom dropdown */}
                <div className="relative">
                  <label className="text-xs text-[#7A82A8] mb-1.5 block">Интересующий курс</label>
                  <button
                    type="button"
                    onClick={() => setOpen(p => !p)}
                    className="w-full bg-[#0B0D1A] border border-[#1E2448] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5B5BD6] transition-colors flex items-center justify-between"
                  >
                    <span className={form.course ? 'text-white' : 'text-[#7A82A8]'}>
                      {form.course || 'Выберите курс'}
                    </span>
                    <RiArrowDownSLine
                      className={`text-[#7A82A8] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                      size={18}
                    />
                  </button>

                  {open && (
                    <div className="absolute z-50 mt-2 w-full bg-[#0B0D1A] border border-[#1E2448] rounded-2xl overflow-hidden shadow-xl">
                      {courses.map(course => (
                        <div
                          key={course}
                          onClick={() => { setForm(p => ({ ...p, course })); setOpen(false); }}
                          className={`px-5 py-3 text-sm cursor-pointer transition-colors hover:bg-[#5B5BD6]/20 hover:text-white
                            ${form.course === course ? 'text-[#7B7FE8] bg-[#5B5BD6]/10' : 'text-[#7A82A8]'}`}
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-1">
                  <label className="text-xs text-[#7A82A8] mb-1.5 block">Сообщение</label>
                  <textarea
                    name="message" value={form.message} onChange={handle}
                    rows={7} placeholder="Расскажите о себе или задайте вопрос..."
                    className={`${inputCls} resize-none flex-1`}
                    style={{ minHeight: '160px' }}
                  />
                </div>

                <button type="submit" className="btn-primary violet-glow w-full justify-center mt-auto">
                  <RiSendPlaneLine size={16} />
                  Отправить заявку
                </button>
              </form>
            </div>
          </AnimSection>

          {/* Info */}
          <AnimSection className="lg:col-span-2 flex flex-col gap-4">
            <div className="border border-[#1E2448] rounded-2xl p-5 bg-[#111428]/80">
              <h3 className="text-white font-semibold text-sm mb-4">Контактная информация</h3>
              <div className="space-y-3.5">
                {[
                  { icon: RiMapPinLine, label: 'Адрес',   value: 'Бишкек, ул. Манаса 40, 3 этаж' },
                  { icon: RiPhoneLine,  label: 'Телефон', value: '+996 700 123 456' },
                  { icon: RiMailLine,   label: 'Email',   value: 'info@ihsanacademy.kg' },
                  { icon: RiTimeLine,   label: 'Часы',    value: 'Пн–Пт: 9:00–19:00, Сб: 10:00–16:00' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#5B5BD6]/15 border border-[#5B5BD6]/25 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="text-[#7B7FE8]" size={14} />
                    </div>
                    <div>
                      <p className="text-[#7A82A8] text-xs mb-0.5">{label}</p>
                      <p className="text-white text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#1E2448] rounded-2xl p-5 bg-[#111428]/80">
              <h3 className="text-white font-semibold text-sm mb-4">Социальные сети</h3>
              <div className="space-y-2.5">
                {[
                  { icon: RiTelegramLine,  label: 'Telegram',  val: '@ihsan_academy' },
                  { icon: RiInstagramLine, label: 'Instagram', val: '@ihsanacademy' },
                  { icon: RiWhatsappLine,  label: 'WhatsApp',  val: '+996 700 123 456' },
                ].map(({ icon: Icon, label, val }) => (
                  <a key={label} href="#" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#5B5BD6]/8 transition-all group">
                    <div className="w-7 h-7 rounded-lg bg-[#5B5BD6]/15 flex items-center justify-center">
                      <Icon className="text-[#7B7FE8]" size={14} />
                    </div>
                    <div>
                      <p className="text-white text-xs font-medium">{label}</p>
                      <p className="text-[#7A82A8] text-xs">{val}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimSection>
        </div>

        {/* FAQ */}
        <AnimSection className="mb-2">
          <p className="text-[#7B7FE8] text-xs font-semibold uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="font-display text-2xl font-bold text-white mb-8">Часто задаваемые вопросы</h2>
        </AnimSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map(({ q, a }, i) => (
            <AnimSection key={q} delay={i * 60}>
              <div className="border border-[#1E2448] rounded-2xl p-5 bg-[#111428]/80">
                <p className="text-white text-sm font-semibold mb-2">{q}</p>
                <p className="text-[#7A82A8] text-sm leading-relaxed">{a}</p>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </main>
  );
}
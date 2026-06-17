import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiArrowRightLine, RiCheckLine, RiTimeLine, RiUserLine, RiCloseLine, RiCodeLine, RiGroupLine, RiMedalLine, RiBookOpenLine } from 'react-icons/ri';
import AnimSection from '../components/AnimSection';
import { courses } from '../data';

const levels = ['Все', 'Начинающий', 'Средний', 'Продвинутый'];

// Extra info per course (by index fallback)
const extras: Record<number, { langs: string[]; students: number; projects: number; about: string }> = {};
const defaultExtras = [
  { langs: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'], students: 120, projects: 5, about: 'Курс охватывает всё — от вёрстки до деплоя. Ты научишься создавать современные сайты и веб-приложения с нуля и выйдешь на рынок с портфолио.' },
  { langs: ['Python', 'Node.js', 'SQL', 'Docker', 'REST API'], students: 95, projects: 4, about: 'Глубокое погружение в серверную разработку: базы данных, API, деплой. После курса ты сможешь строить масштабируемые backend-системы.' },
  { langs: ['Figma', 'Adobe XD', 'Principle', 'Protopie'], students: 80, projects: 6, about: 'Научишься думать как дизайнер и создавать интерфейсы, которые работают. Практика на реальных проектах с фидбеком от ментора.' },
  { langs: ['Python', 'Pandas', 'NumPy', 'Sklearn', 'Jupyter'], students: 60, projects: 3, about: 'Машинное обучение, анализ данных, визуализация. Ты научишься находить смысл в больших массивах данных и строить модели.' },
  { langs: ['Linux', 'Kali', 'Wireshark', 'Metasploit', 'Python'], students: 45, projects: 3, about: 'Этичный хакинг, пентестинг, защита сетей. Курс для тех, кто хочет работать в сфере информационной безопасности.' },
  { langs: ['Swift', 'Kotlin', 'Flutter', 'Dart', 'Firebase'], students: 70, projects: 4, about: 'Разработка мобильных приложений под iOS и Android. Создашь несколько приложений и опубликуешь их в сторе.' },
];

export default function CoursesPage() {
  const [active, setActive] = useState('Все');
  const [selected, setSelected] = useState<number | null>(null);
  const location = useLocation();
  const filtered = active === 'Все' ? courses : courses.filter(c => c.level === active);
  const selectedCourse = courses.find(c => c.id === selected);
  const selectedExtra = selectedCourse ? (extras[selectedCourse.id] ?? defaultExtras[courses.indexOf(selectedCourse)] ?? defaultExtras[0]) : null;

  useEffect(() => {
    if (!location.hash) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(location.hash.slice(1));
    if (el) setTimeout(() => {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
    }, 100);
  }, [location.hash]);

  useEffect(() => {
    if (selected !== null) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">

        {/* Header */}
        <AnimSection className="mb-16">
          <p className="text-[#7B7FE8] text-xs font-semibold uppercase tracking-widest mb-2">Обучение</p>
          <div className="flex items-end gap-6 flex-wrap">
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-white leading-none">Курсы</h1>
            <span className="text-[#1E2248] font-bold text-5xl sm:text-7xl leading-none select-none">
              {String(courses.length).padStart(2, '0')}
            </span>
          </div>
          <p className="text-[#7A82A8] max-w-sm text-sm leading-relaxed mt-4">
            Нажми на курс чтобы узнать подробности. Практика, менторство, трудоустройство.
          </p>
        </AnimSection>

        {/* Filters */}
        <AnimSection className="flex gap-2 flex-wrap mb-10">
          {levels.map(l => (
            <button key={l} onClick={() => setActive(l)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === l ? 'bg-[#5B5BD6] text-white' : 'border border-[#1E2448] text-[#7A82A8] hover:border-[#5B5BD6]/40 hover:text-white'
              }`}>
              {l}
            </button>
          ))}
        </AnimSection>

        {/* Course rows */}
        <div className="space-y-5">
          {filtered.map((course, i) => {
            const Icon = course.icon;
            const num = String(i + 1).padStart(2, '0');
            const isSelected = selected === course.id;

            return (
              <AnimSection key={course.id} delay={i * 40}>
                <div
                  id={`course-${course.id}`}
                  onClick={() => setSelected(course.id)}
                  className={`group relative border rounded-2xl bg-[#0C0E1C] overflow-hidden cursor-pointer transition-all duration-300
                    ${isSelected ? 'border-[#5B5BD6]/60 bg-[#0F1128]' : 'border-[#181B30]'}
                    hover:border-[#5B5BD6]/50 hover:bg-[#0F1128] hover:shadow-[0_0_30px_-8px_rgba(91,91,214,0.25)]`}
                >
                  {/* Glow line on top on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5B5BD6]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-stretch">
                    {/* Number */}
                    <div className="w-16 sm:w-24 border-r border-[#181B30] group-hover:border-[#2A2E52] flex items-center justify-center shrink-0 transition-colors duration-300">
                      <span className="font-bold text-2xl sm:text-3xl text-[#1E2248] group-hover:text-[#3A3E72] transition-colors duration-300 select-none">
                        {num}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-4 p-5 sm:p-6 min-w-0">
                      <div className="flex items-center gap-4 sm:w-64 shrink-0">
                        <div className="w-11 h-11 rounded-xl bg-[#5B5BD6]/10 border border-[#5B5BD6]/20 group-hover:bg-[#5B5BD6]/15 group-hover:border-[#5B5BD6]/35 flex items-center justify-center shrink-0 transition-all duration-300">
                          <Icon size={20} className="text-[#7B7FE8]" />
                        </div>
                        <div>
                          <h3 className="font-display text-base font-semibold text-white group-hover:text-[#C0C4FF] transition-colors duration-300">{course.title}</h3>
                          <span className="text-xs text-[#7A82A8]">{course.level}</span>
                        </div>
                      </div>
                      <p className="text-[#7A82A8] text-sm leading-relaxed flex-1 hidden sm:block line-clamp-1 group-hover:text-[#9AA0C0] transition-colors duration-300">{course.description}</p>
                      <div className="hidden lg:flex flex-wrap gap-2 w-48 shrink-0">
                        {course.topics.slice(0, 3).map(t => (
                          <span key={t} className="flex items-center gap-1 text-xs text-[#9AA0C0] bg-[#181B30] group-hover:bg-[#1E2140] rounded-full px-3 py-1 transition-colors duration-300">
                            <RiCheckLine size={10} className="text-[#5B5BD6]/60" /> {t}
                          </span>
                        ))}
                        {course.topics.length > 3 && <span className="text-xs text-[#7A82A8] px-1 py-1">+{course.topics.length - 3}</span>}
                      </div>
                    </div>

                    {/* Price + CTA */}
                    <div className="border-l border-[#181B30] group-hover:border-[#2A2E52] flex flex-col items-end justify-center gap-2 px-5 sm:px-6 py-5 shrink-0 transition-colors duration-300">
                      <p className="text-white font-semibold text-base whitespace-nowrap group-hover:text-[#C0C4FF] transition-colors duration-300">{course.price}</p>
                      <p className="text-[#7A82A8] text-xs flex items-center gap-1 whitespace-nowrap">
                        <RiTimeLine size={11} /> {course.duration}
                      </p>
                      <div className="mt-1 flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#5B5BD6]/10 border border-[#5B5BD6]/20 group-hover:bg-[#5B5BD6]/20 group-hover:border-[#5B5BD6]/40 text-[#9B9FE8] text-sm font-medium transition-all duration-300 whitespace-nowrap">
                        Подробнее <RiArrowRightLine size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimSection>
            );
          })}
        </div>

        {/* Divider + stats */}
        <div className="border-t border-[#181B30] mt-10 mb-8" />
        <AnimSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex gap-10">
              {[{ value: '500+', label: 'Выпускников' }, { value: '92%', label: 'Трудоустройство' }, { value: '3+', label: 'Года на рынке' }].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-white font-bold text-2xl leading-none">{value}</p>
                  <p className="text-[#7A82A8] text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#5B5BD6]/30 text-[#9B9FE8] text-sm font-medium hover:bg-[#5B5BD6]/10 transition-all">
              <RiUserLine size={14} /> Получить консультацию
            </Link>
          </div>
        </AnimSection>
      </div>

      {/* Modal overlay */}
      {selected !== null && selectedCourse && selectedExtra && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={() => setSelected(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#04050F]/80 backdrop-blur-sm" />

          {/* Panel */}
          <div
            className="relative w-full sm:max-w-xl bg-[#0C0E1C] border border-[#1E2448] rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl z-10 animate-[slideUp_0.25s_ease]"
            style={{ animation: 'slideUp 0.25s cubic-bezier(0.16,1,0.3,1)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Top glow */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#5B5BD6]/60 to-transparent" />

            {/* Handle (mobile) */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-10 h-1 rounded-full bg-[#2A2E52]" />
            </div>

            <div className="p-6 sm:p-7">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#5B5BD6]/15 border border-[#5B5BD6]/25 flex items-center justify-center shrink-0">
                    {(() => { const Icon = selectedCourse.icon; return <Icon size={18} className="text-[#7B7FE8]" />; })()}
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-white">{selectedCourse.title}</h2>
                    <span className="text-xs text-[#7A82A8]">{selectedCourse.level}</span>
                  </div>
                </div>
                <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-lg bg-[#181B30] flex items-center justify-center text-[#7A82A8] hover:text-white transition-colors">
                  <RiCloseLine size={16} />
                </button>
              </div>

              {/* About */}
              <p className="text-[#9AA0C0] text-sm leading-relaxed mb-6">{selectedExtra.about}</p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: RiGroupLine, value: `${selectedExtra.students}+`, label: 'Студентов' },
                  { icon: RiTimeLine,  value: selectedCourse.duration,      label: 'Длительность' },
                  { icon: RiMedalLine, value: `${selectedExtra.projects}`,  label: 'Проекта' },
                ].map(({ icon: Ic, value, label }) => (
                  <div key={label} className="border border-[#1E2448] rounded-xl p-3 bg-[#0F1128] text-center">
                    <Ic size={14} className="text-[#7B7FE8] mx-auto mb-1.5" />
                    <p className="text-white font-semibold text-sm">{value}</p>
                    <p className="text-[#7A82A8] text-[10px] mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <RiCodeLine size={13} className="text-[#7B7FE8]" />
                  <p className="text-[#7A82A8] text-xs uppercase tracking-widest">Технологии</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedExtra.langs.map(l => (
                    <span key={l} className="text-xs text-[#9B9FE8] bg-[#5B5BD6]/10 border border-[#5B5BD6]/20 rounded-full px-3 py-1">{l}</span>
                  ))}
                </div>
              </div>

              {/* Topics */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <RiBookOpenLine size={13} className="text-[#7B7FE8]" />
                  <p className="text-[#7A82A8] text-xs uppercase tracking-widest">Программа</p>
                </div>
                <ul className="space-y-2">
                  {selectedCourse.topics.map(t => (
                    <li key={t} className="flex items-center gap-2.5 text-sm text-[#9AA0C0]">
                      <RiCheckLine size={13} className="text-[#5B5BD6]/70 shrink-0" /> {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="border-t border-[#1E2448] pt-5 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-lg">{selectedCourse.price}</p>
                  <p className="text-[#7A82A8] text-xs mt-0.5">за весь курс</p>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setSelected(null)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5B5BD6] text-white text-sm font-medium hover:bg-[#4a4ac4] transition-all shadow-lg shadow-[#5B5BD6]/20"
                >
                  Записаться <RiArrowRightLine size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
import { Link, useNavigate } from 'react-router-dom';
import { RiArrowLeftLine, RiArrowRightLine, RiUser3Line } from 'react-icons/ri';
import AnimSection from '../components/AnimSection';
import { teachers } from '../data';

export default function TeachersPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#07080F] text-white pt-28 pb-24 background: 'linear-gradient(135deg, #1a0533 0%, #0f0a2e 40%, #1e0a3c 70%, #0d0520 100%)'">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Back */}
        <AnimSection>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#7C3AED] hover:text-[#A855F7] transition-colors mb-10"
          >
            <RiArrowLeftLine size={16} />
            На главную
          </Link>
        </AnimSection>

        {/* Header */}
        <AnimSection>
          <div className="mb-16">
            <p className="text-[#6D28D9] text-xs font-bold uppercase tracking-widest mb-3">Команда</p>
            <h1 className="text-4xl sm:text-5xl font-black mb-4">Наши преподаватели</h1>
            <p className="text-[#94A3B8] text-base max-w-xl leading-relaxed">
              Опытные менторы с реальным опытом в индустрии. Они не просто учат — они помогают строить карьеру.
            </p>
          </div>
        </AnimSection>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, i) => (
            <AnimSection key={teacher.id} delay={i * 80}>
              <div
                onClick={() => navigate(`/teachers/${teacher.id}`)}
                className="group relative rounded-[2rem] border border-[#1E1B3A] bg-[#0D0B1E] p-8 shadow-[0_22px_120px_rgba(109,40,217,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#7C3AED]/40 hover:shadow-[0_30px_160px_rgba(124,58,237,0.20)] flex flex-col h-full overflow-visible cursor-pointer"
              >
                {/* Experience badge */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-4">
                  <span className="rounded-full border border-[#7C3AED]/20 bg-[#131127] px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-[#A78BFA] whitespace-nowrap inline-block">
                    {teacher.experience}
                  </span>
                </div>

                {/* Avatar + name */}
                <div className="flex items-center gap-3 mb-6 mt-5">
                  <div className="grid h-14 w-14 place-items-center rounded-[1.35rem] bg-gradient-to-br from-[#6D28D9] to-[#A855F7] text-base font-black text-white shadow-xl shadow-[#7C3AED]/15 shrink-0">
                    <RiUser3Line size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-base font-semibold leading-snug">{teacher.name}</p>
                    <p className="text-[#94A3B8] text-[11px] mt-1">{teacher.role}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-[#c7d2fe] text-sm leading-relaxed mb-6 flex-1">{teacher.bio}</p>

                {/* Subjects */}
                <div className="mb-6">
                  <p className="text-white text-xs font-semibold mb-3">Специализация</p>
                  <div className="flex flex-wrap gap-2">
                    {teacher.subjects.map(subject => (
                      <span
                        key={subject}
                        className="rounded-full border border-[#2b1b52] bg-[#100f26] px-3 py-1.5 text-xs text-[#dbeafe] font-medium transition-all duration-300 group-hover:border-[#7C3AED]/40 group-hover:bg-[#131127]"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer row */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-between pt-5 border-t border-[#1E1B3A]"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#a855f7] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(124,58,237,0.25)] transition-all duration-300 hover:brightness-110"
                  >
                    Записаться
                  </Link>
                  <span className="flex items-center gap-1 text-xs text-[#475569] group-hover:text-[#A855F7] transition-colors">
                    Подробнее <RiArrowRightLine size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimSection>
          <div className="mt-20 relative rounded-3xl overflow-hidden bg-[#0B0C12] border border-[#1F2130] py-14 px-8 sm:px-16 text-center" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #0f0a2e 40%, #1e0a3c 70%, #0d0520 100%)' }}>
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#A855F7]/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#6D28D9]/10 blur-[60px] pointer-events-none" />
            <div className="relative">
              <p className="text-[#6D28D9] text-xs font-bold uppercase tracking-widest mb-3">Готов начать?</p>
              <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">Учись у лучших</h2>
              <p className="text-[#94A3B8] mb-8 max-w-sm mx-auto text-sm leading-relaxed">
                Запишись на консультацию — подберём преподавателя и курс под твои цели.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#5B21B6] px-8 py-4 rounded-2xl text-sm font-black hover:bg-purple-50 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
              >
                Бесплатная консультация
                <RiArrowRightLine size={16} />
              </Link>
            </div>
          </div>
        </AnimSection>

      </div>
    </main>
  );
}
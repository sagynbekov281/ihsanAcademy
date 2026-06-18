import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiArrowRightLine, RiStarFill, RiArrowRightUpLine, RiUser3Line } from 'react-icons/ri';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AnimSection from '../components/AnimSection';
import { getStats, getCourses, getTestimonials, getTeachers } from '../data';

const TECHS = ['React', 'TypeScript', 'Node.js', 'Python', 'Figma', 'PostgreSQL', 'Docker', 'Git', 'Next.js', 'MongoDB', 'Vue.js', 'Django'];

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const stats = getStats(t);
  const courses = getCourses(t);
  const testimonials = getTestimonials(t);
  const teachers = getTeachers(t);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  const whyItems = [
    { n: '01', title: t('home.why.w1t'), text: t('home.why.w1d') },
    { n: '02', title: t('home.why.w2t'), text: t('home.why.w2d') },
    { n: '03', title: t('home.why.w3t'), text: t('home.why.w3d') },
    { n: '04', title: t('home.why.w4t'), text: t('home.why.w4d') },
    { n: '05', title: t('home.why.w5t'), text: t('home.why.w5d') },
    { n: '06', title: t('home.why.w6t'), text: t('home.why.w6d') },
  ];

  return (
    <main className="overflow-x-hidden bg-[#07080F] text-white">

      {/* ─── HERO: two-column split ─── */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(91,33,182,0.18) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 40% at 10% 80%, rgba(124,58,237,0.10) 0%, transparent 60%)' }} />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full pt-24 pb-16 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#A78BFA] border border-[#6D28D9]/40 bg-[#6D28D9]/10 px-3 py-1.5 rounded-full mb-7 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-pulse" />
              {t('home.badge')}
            </div>

            <h1 className="text-5xl sm:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              {t('home.hero1')}<br />
              <span className="relative inline-block">
                <span style={{ background: 'linear-gradient(90deg, #A855F7 0%, #C084FC 50%, #7C3AED 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {t('home.hero2')}
                </span>
                <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                  <path d="M2 6 Q75 2 150 5 Q225 8 298 3" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
                </svg>
              </span>
              <br />{t('home.hero3')}
            </h1>

            <p className="text-[#94A3B8] text-base leading-relaxed mb-8 max-w-sm">
              {t('home.heroSub')}
            </p>

            <div className="flex items-center gap-4 mb-10">
              <Link to="/courses"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white transition-all duration-200 hover:scale-[1.04] hover:brightness-110 active:scale-[0.97]"
                style={{ background: 'linear-gradient(135deg, #6D28D9, #9333EA)' }}>
                {t('cta.startLearning')}
                <RiArrowRightLine size={16} />
              </Link>
              <Link to="/about" className="text-sm text-[#7C3AED] font-semibold hover:text-[#A855F7] transition-colors flex items-center gap-1">
                {t('cta.learnMore')} <RiArrowRightUpLine size={14} />
              </Link>
            </div>

            {/* mini stats */}
            <div className="flex items-center gap-6 border-t border-white/5 pt-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-xl font-black" style={{ background: 'linear-gradient(135deg, #A855F7, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{value}</p>
                  <p className="text-[#475569] text-[11px] mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — floating code card */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-[340px]">
              <div className="rounded-3xl border border-[#2D1B69] bg-[#0E0B1F] p-6 animate-float"
                style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(109,40,217,0.15)' }}>
                {/* window dots */}
                <div className="flex items-center gap-1.5 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                  <span className="ml-auto text-[11px] text-[#334155] font-mono">index.tsx</span>
                </div>
                {/* fake code */}
                <div className="font-mono text-[12px] space-y-1 leading-relaxed">
                  <p><span className="text-[#7C3AED]">import</span> <span className="text-[#A78BFA]">React</span> <span className="text-[#7C3AED]">from</span> <span className="text-[#34D399]">'react'</span></p>
                  <p className="text-[#334155]">{'// Твой первый компонент'}</p>
                  <p className="mt-2"><span className="text-[#7C3AED]">export default function</span> <span className="text-[#C084FC]">App</span><span className="text-[#64748B]">{'() {'}</span></p>
                  <p className="pl-4"><span className="text-[#7C3AED]">return</span> <span className="text-[#64748B]">(</span></p>
                  <p className="pl-8"><span className="text-[#64748B]">{'<'}</span><span className="text-[#A855F7]">div</span> <span className="text-[#34D399]">className</span><span className="text-[#64748B]">{'="app">'}</span></p>
                  <p className="pl-12 text-[#94A3B8]">Привет, мир!</p>
                  <p className="pl-8"><span className="text-[#64748B]">{'</'}</span><span className="text-[#A855F7]">div</span><span className="text-[#64748B]">{'>'}</span></p>
                  <p className="pl-4 text-[#64748B]">)</p>
                  <p className="text-[#64748B]">{'}'}</p>
                </div>
                {/* progress */}
                <div className="mt-5 pt-4 border-t border-[#1E1B3A]">
                  <div className="flex justify-between text-[11px] text-[#475569] mb-2">
                    <span>Прогресс модуля</span>
                    <span className="text-[#A855F7] font-semibold">68%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#1E1B3A] overflow-hidden">
                    <div className="h-full w-[68%] rounded-full" style={{ background: 'linear-gradient(90deg, #6D28D9, #A855F7)' }} />
                  </div>
                </div>
              </div>

              {/* floating badge top-right */}
              <div className="absolute -top-4 -right-6 bg-[#0E0B1F] border border-[#2D1B69] rounded-2xl px-4 py-2.5">
                <p className="text-[11px] text-[#475569]">Зарплата после курса</p>
                <p className="text-base font-black text-white">от $800 <span className="text-[#A855F7]">/мес</span></p>
              </div>

              {/* floating badge bottom-left */}
              <div className="absolute -bottom-4 -left-6 bg-[#0E0B1F] border border-[#2D1B69] rounded-2xl px-4 py-2.5 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['АА', 'МИ', 'ДК'].map(a => (
                    <div key={a} className="w-7 h-7 rounded-full border-2 border-[#0E0B1F] flex items-center justify-center text-[9px] font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #4C1D95, #6D28D9)' }}>{a}</div>
                  ))}
                </div>
                <div>
                  <p className="text-white text-[11px] font-semibold">+47 студентов</p>
                  <p className="text-[#475569] text-[10px]">в этом месяце</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE TECH STRIP ─── */}
      <div className="border-y border-[#1E1B3A] bg-[#0A0B1A] py-4 overflow-hidden">
        <style>{`@keyframes marquee-scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
        <div className="flex gap-10 whitespace-nowrap" style={{ animation: 'marquee-scroll 28s linear infinite' }}>
          {[...TECHS, ...TECHS].map((tech, i) => (
            <span key={i} className="text-sm font-semibold text-[#334155] hover:text-[#A855F7] transition-colors cursor-default flex items-center gap-2.5 shrink-0">
              <span className="w-1 h-1 rounded-full bg-[#6D28D9]" />{tech}
            </span>
          ))}
        </div>
      </div>

      {/* ─── COURSES ─── */}
      <section className="py-24 bg-[#07080F]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <AnimSection className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-[#6D28D9] text-xs font-bold uppercase tracking-widest mb-2">{t('home.sectionCourses')}</p>
              <h2 className="text-3xl sm:text-4xl font-black">{t('home.sectionCoursesTitle')}</h2>
            </div>
            <Link to="/courses" className="text-sm text-[#7C3AED] font-semibold hover:text-[#A855F7] transition-colors flex items-center gap-1 shrink-0">
              {t('home.allPrograms')} <RiArrowRightLine size={14} />
            </Link>
          </AnimSection>

          <div className="flex flex-col gap-5">
            {courses.map((course, i) => (
              <AnimSection key={course.id} delay={i * 60}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate('/courses')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      navigate('/courses');
                    }
                  }}
                  className="group flex items-center gap-6 rounded-2xl border border-[#1E1B3A] bg-[#0D0B1E] px-6 py-5 hover:border-[#7C3AED]/50 hover:bg-[#110D2A] transition-all duration-300 cursor-pointer"
                >
                  <span className="text-4xl font-black text-[#1E1B3A] group-hover:text-[#6D28D9]/40 transition-colors duration-300 w-12 shrink-0 font-mono select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 border border-[#2D1B69]/60 group-hover:border-[#7C3AED]/50 transition-colors bg-[#0E0B1F]">
                    {(() => {
                      const Icon = course.icon;
                      return <Icon size={18} className="text-[#7B7FE8]" />;
                    })()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-base">{course.title}</h3>
                    <p className="text-[#475569] text-sm truncate">{course.description}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-8 shrink-0">
                    <div className="text-right">
                      <p className="text-[10px] text-[#334155] uppercase tracking-wider">{t('home.duration')}</p>
                      <p className="text-sm font-semibold text-white">{course.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-[#334155] uppercase tracking-wider">{t('home.level')}</p>
                      <p className="text-sm font-semibold text-[#A855F7]">{course.level}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-[#334155] uppercase tracking-wider">{t('home.price')}</p>
                      <p className="text-sm font-bold text-white">{course.price}</p>
                    </div>
                  </div>
                  <RiArrowRightLine size={18} className="text-[#334155] group-hover:text-[#A855F7] group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-24 bg-[#07080F]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <AnimSection className="text-center mb-16">
            <p className="text-[#6D28D9] text-xs font-bold uppercase tracking-widest mb-2">{t('home.sectionWhy')}</p>
            <h2 className="text-3xl sm:text-4xl font-black">{t('home.sectionWhyTitle')}</h2>
          </AnimSection>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">
            {whyItems.map(({ n, title, text }, i) => (
              <AnimSection key={n} delay={i * 70}>
                <div className="flex gap-5 group">
                  <span className="text-5xl font-black text-[#1E1B3A] group-hover:text-[#6D28D9]/30 transition-colors duration-300 leading-none shrink-0 font-mono select-none">{n}</span>
                  <div className="pt-1 border-l border-[#1E1B3A] group-hover:border-[#6D28D9]/40 pl-5 transition-colors duration-300">
                    <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-[#C084FC] transition-colors duration-200">{title}</h3>
                    <p className="text-[#475569] text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEACHERS ─── */}
      <section id="teachers" className="py-24 bg-[#07080F]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <AnimSection className="flex flex-col gap-4 sm:flex-row sm:items-end justify-between mb-14">
            <div>
              <p className="text-[#6D28D9] text-xs font-bold uppercase tracking-widest mb-2">{t('home.sectionTeachers')}</p>
              <h2 className="text-3xl sm:text-4xl font-black">{t('home.sectionTeachersTitle')}</h2>
            </div>
            <Link to="/teachers" className="text-sm text-[#7C3AED] font-semibold hover:text-[#A855F7] transition-colors flex items-center gap-1 shrink-0">
              {t('home.allTeachers')} <RiArrowRightLine size={14} />
            </Link>
          </AnimSection>

          <div className="grid gap-12 lg:grid-cols-3">
            {teachers.map((teacher, i) => (
              <AnimSection key={teacher.name} delay={i * 70}>
                <div
                  onClick={() => navigate('/teachers')}
                  className="group relative overflow-visible rounded-[2rem] border border-[#1E1B3A] bg-[#0D0B1E] p-8 shadow-[0_22px_120px_rgba(109,40,217,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#7C3AED]/40 hover:shadow-[0_30px_160px_rgba(124,58,237,0.20)] flex flex-col h-full cursor-pointer"
                >
                  <div className="absolute left-1/2 -translate-x-1/2 -top-4">
                    <span className="rounded-full border border-[#7C3AED]/20 bg-[#131127] px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-[#A78BFA] whitespace-nowrap inline-block">
                      {teacher.experience}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-6 mt-5">
                    <div className="grid h-14 w-14 place-items-center rounded-[1.35rem] bg-gradient-to-br from-[#6D28D9] to-[#A855F7] text-base font-black text-white shadow-xl shadow-[#7C3AED]/15 shrink-0">
                      <RiUser3Line size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-base font-semibold leading-snug">{teacher.name}</p>
                      <p className="text-[#94A3B8] text-[11px] mt-1">{teacher.role}</p>
                    </div>
                  </div>

                  <p className="text-[#c7d2fe] text-sm leading-relaxed mb-7 flex-1">{teacher.bio}</p>

                  <div className="mb-8 space-y-2.5">
                    <p className="text-white text-xs font-semibold mb-3">{t('home.specialization')}</p>
                    <div className="flex flex-wrap gap-2">
                      {teacher.subjects.map(subject => (
                        <span key={subject} className="rounded-full border border-[#2b1b52] bg-[#100f26] px-4 py-2 text-xs text-[#dbeafe] font-medium transition-all duration-300 group-hover:border-[#7C3AED]/40 group-hover:bg-[#131127]">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="mt-auto"
                  >
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7C3AED] to-[#a855f7] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(124,58,237,0.30)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110 w-full"
                    >
                      {t('cta.signUpToClass')}
                    </Link>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-[#07080F]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <AnimSection className="text-center mb-14">
            <p className="text-[#6D28D9] text-xs font-bold uppercase tracking-widest mb-2">{t('home.sectionTestimonials')}</p>
            <h2 className="text-3xl sm:text-4xl font-black">{t('home.sectionTestimonialsTitle')}</h2>
          </AnimSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((item, i) => (
              <AnimSection key={item.name} delay={i * 100}>
                <div className="relative rounded-3xl border border-[#1E1B3A] bg-[#0D0B1E] p-7 flex flex-col gap-5 h-full hover:border-[#7C3AED]/40 transition-all duration-300 group overflow-hidden">
                  <span className="absolute top-3 right-5 text-7xl font-black text-[#1E1B3A] group-hover:text-[#6D28D9]/20 transition-colors select-none leading-none pointer-events-none">"</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, idx) => <RiStarFill key={idx} className="text-[#7C3AED]" size={13} />)}
                  </div>
                  <p className="text-[#94A3B8] text-sm leading-relaxed flex-1 relative z-10">"{item.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#1E1B3A]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0"
                      style={{ background: 'linear-gradient(135deg, #6D28D9, #A855F7)' }}>
                      <RiUser3Line size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{item.name}</p>
                      <p className="text-[#475569] text-xs">{item.role}</p>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#07080F]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <AnimSection>
            <div className="relative rounded-3xl overflow-hidden bg-[#0B0C12] border border-[#1F2130]">
              <div className="absolute inset-0 opacity-[0.04] font-mono text-[11px] text-white leading-5 p-8 overflow-hidden select-none pointer-events-none break-all">
                {'const student = { name: "ТЫ", path: "IT" }; function startCareer(s) { const skills = learn(s); const job = getOffer(skills); return { success: true, salary: "$800+" }; } startCareer(student); // 🚀 '.repeat(20)}
              </div>
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#A855F7]/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#6D28D9]/10 blur-[60px] pointer-events-none" />

              <div className="relative py-16 px-8 sm:px-16 text-center">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#CBD5E1] border border-[#7C3AED]/15 bg-white/5 px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] animate-pulse" />
                  {t('home.ctaBadge')}
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight">
                  {t('home.ctaTitle')}
                </h2>
                <p className="text-[#94A3B8] mb-8 max-w-sm mx-auto text-sm leading-relaxed">
                  {t('home.ctaSub')}
                </p>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#5B21B6] px-8 py-4 rounded-2xl text-sm font-black hover:bg-purple-50 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]">
                  {t('cta.enrollFree')}
                  <RiArrowRightLine size={16} />
                </Link>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

    </main>
  );
}
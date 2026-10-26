import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiArrowRightLine, RiStarFill, RiUser3Line } from 'react-icons/ri';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AnimSection from '../components/AnimSection';
import { getStats } from '../data';
import { useCourses } from '../hooks/useCourses';
import { useTeachers } from '../hooks/useTeachers';
import { useTestimonials } from '../hooks/useTestimonials';
import teacherPhoto from '../assets/teacher.png';

const TECHS = ['React', 'TypeScript', 'Node.js', 'Python', 'Figma', 'PostgreSQL', 'Docker', 'Git', 'Next.js', 'MongoDB', 'Vue.js', 'Django'];

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const stats = getStats(t);
  const courses = useCourses();
  const testimonials = useTestimonials(); // отзывы с бэкенда (админка → «Отзывы»)
  const teachers = useTeachers();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    <main className="overflow-x-hidden bg-night text-white">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,800;1,700&display=swap');`}</style>

      {/* ─── HERO (E2): текст слева, фото справа с косым краем (от lg), на мобильных фото под текстом ─── */}
      <section className="relative flex items-center overflow-hidden lg:min-h-[788px]">
        {/* фото: начинается под шапкой, не шире 760px — остаётся чётким */}
        <div
          className="absolute bottom-0 right-0 top-[72px] hidden lg:block"
          style={{ width: 'min(46vw, 760px)', clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          <img
            src={teacherPhoto}
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 10%' }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-5 pb-8 pt-28 sm:px-8 lg:pb-20 lg:pt-[150px]">
          <div className="max-w-[600px] lg:max-w-[460px] xl:max-w-[600px]">
            <span className="inline-block rounded-xl bg-[#0057FF] px-5 py-2 font-headline text-base font-semibold italic text-white sm:px-6 sm:py-2.5 sm:text-lg">
              {t('home.heroTag', { defaultValue: 'IT КУРСЫ' })}
            </span>

            <h1
              className="mt-5 uppercase text-white sm:mt-6"
              style={{
                fontFamily: "'Montserrat', 'Manrope', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(26px, 3.4vw, 52px)',
                lineHeight: 1.25,
                letterSpacing: '-0.01em',
              }}
            >
              {t('home.slogan1', { defaultValue: 'Мы не просто учим — готовим' })}{' '}
              <span className="text-[#A66BFF]">{t('home.slogan2', { defaultValue: 'специалистов' })}</span>
            </h1>

            <p className="mt-5 max-w-[480px] text-base leading-relaxed text-white sm:mt-6 sm:text-lg">
              {t('home.heroSub')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
              <Link to="/courses" className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#0057FF] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_36px_rgba(0,87,255,0.5)] transition hover:bg-[#008CFF]">
                {t('cta.startLearning')} <RiArrowRightLine size={18} />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center rounded-[14px] border-[1.5px] border-[#0057FF] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#0057FF]/15">
                {t('cta.learnMore')}
              </Link>
            </div>
          </div>
        </div>

        {/* мобильное фото: во всю ширину, косой верхний край как на десктопе */}
      </section>
      <div
        className="lg:hidden"
        style={{
          height: 'min(112vw, 480px)',
          backgroundImage: `url(${teacherPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 8%',
          clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)',
        }}
      />

      {/* ─── STATS ─── */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 lg:pt-0">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="rounded-2xl bg-surface px-7 py-6">
              <p className="text-4xl font-black text-accent-light">{value}</p>
              <p className="mt-1 text-sm text-white">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MARQUEE TECH STRIP ─── */}
      <div className="overflow-hidden border-y border-line bg-surface py-4">
        <style>{`@keyframes marquee-scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
        <div className="flex gap-10 whitespace-nowrap" style={{ animation: 'marquee-scroll 28s linear infinite' }}>
          {[...TECHS, ...TECHS].map((tech, i) => (
            <span key={i} className="flex shrink-0 cursor-default items-center gap-2.5 text-sm font-semibold text-soft transition-colors hover:text-accent-light">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />{tech}
            </span>
          ))}
        </div>
      </div>

      {/* ─── COURSES ─── */}
      <section className="bg-night py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <AnimSection className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">{t('home.sectionCourses')}</p>
              <h2 className="text-3xl font-black sm:text-4xl">{t('home.sectionCoursesTitle')}</h2>
            </div>
            <Link to="/courses" className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-light transition-colors hover:text-accent-light">
              {t('home.allPrograms')} <RiArrowRightLine size={14} />
            </Link>
          </AnimSection>

          <div className="flex flex-col gap-5">
            {courses.map((course, i) => {
              const discountDate = course.discountEndsAt
                ? course.discountEndsAt.split('-').reverse().join('.')
                : t('courses.noDiscountDeadline');
              const deadline = course.discountEndsAt ? `${t('courses.discountUntil')} ${discountDate}` : discountDate;
              const Icon = course.icon;

              return (
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
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-line bg-surface px-5 py-5 transition-all duration-300 hover:border-accent/60 hover:bg-surface2 sm:px-6"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="w-9 shrink-0 select-none font-mono text-2xl font-bold text-accent/40 transition-colors duration-300 group-hover:text-accent sm:w-12 sm:text-4xl">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-night transition-colors group-hover:border-accent/60">
                        <Icon size={18} className="text-accent-light" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-semibold text-white">{course.title}</h3>
                        <p className="line-clamp-2 text-sm text-dim sm:line-clamp-1">{course.description}</p>
                      </div>

                      {/* десктоп: срок, уровень, цена справа */}
                      <div className="hidden shrink-0 items-center gap-8 sm:flex">
                        <div className="text-right">
                          <p className="text-[10px] uppercase tracking-wider text-dim">{t('home.duration')}</p>
                          <p className="text-sm font-semibold text-white">{course.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] uppercase tracking-wider text-dim">{t('home.level')}</p>
                          <p className="text-sm font-semibold text-accent-light">{course.level}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] uppercase tracking-wider text-dim">{t('home.price')}</p>
                          {course.discountPercent && (
                            <div className="mb-1 flex items-center justify-end gap-1.5 rounded-full bg-brand px-2.5 py-1 text-white shadow-md">
                              <span className="text-[10px] font-bold">-{course.discountPercent}%</span>
                              <span className="text-[9px]">{deadline}</span>
                            </div>
                          )}
                          {course.oldPrice && <p className="text-[10px] text-dim line-through">{course.oldPrice}</p>}
                          <p className={`font-bold text-white ${course.discountPercent ? 'text-base' : 'text-sm'}`}>{course.price}</p>
                        </div>
                      </div>
                      <RiArrowRightLine size={18} className="hidden shrink-0 text-dim transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent sm:block" />
                    </div>

                    {/* телефон: срок, уровень и цена отдельной строкой снизу */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-4 sm:hidden">
                      <span className="text-xs text-dim">{course.duration}</span>
                      <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-accent-light">{course.level}</span>
                      {course.discountPercent && (
                        <span className="rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-white">-{course.discountPercent}% · {deadline}</span>
                      )}
                      <div className="ml-auto flex flex-col items-end leading-tight">
                        {course.oldPrice && <span className="text-[11px] text-dim line-through">{course.oldPrice}</span>}
                        <span className="text-lg font-bold text-white">{course.price}</span>
                      </div>
                    </div>
                  </div>
                </AnimSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="bg-night py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <AnimSection className="mb-16 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">{t('home.sectionWhy')}</p>
            <h2 className="text-3xl font-black sm:text-4xl">{t('home.sectionWhyTitle')}</h2>
          </AnimSection>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyItems.map(({ n, title, text }, i) => (
              <AnimSection key={n} delay={i * 70}>
                <div className="card-hover h-full rounded-[22px] border border-line bg-surface p-8">
                  <span className="font-mono text-3xl font-black text-accent">{n}</span>
                  <h3 className="mb-2 mt-4 text-lg font-bold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-soft/80">{text}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEACHERS ─── */}
      <section id="teachers" className="bg-night py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <AnimSection className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">{t('home.sectionTeachers')}</p>
              <h2 className="text-3xl font-black sm:text-4xl">{t('home.sectionTeachersTitle')}</h2>
            </div>
            <Link to="/teachers" className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-light transition-colors hover:text-accent-light">
              {t('home.allTeachers')} <RiArrowRightLine size={14} />
            </Link>
          </AnimSection>

          <div className="grid gap-12 lg:grid-cols-3">
            {teachers.map((teacher, i) => (
              <AnimSection key={teacher.name} delay={i * 70}>
                <div
                  onClick={() => navigate('/teachers')}
                  className="group relative flex h-full cursor-pointer flex-col overflow-visible rounded-[2rem] border border-line bg-surface p-8 shadow-[0_22px_120px_rgba(166,107,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_30px_160px_rgba(166,107,255,0.2)]"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block whitespace-nowrap rounded-full border border-accent/30 bg-surface2 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-accent-light">
                      {teacher.experience}
                    </span>
                  </div>

                  <div className="mb-6 mt-5 flex items-center gap-3">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[1.35rem] bg-accent-deep shadow-xl shadow-accent/20">
                      <RiUser3Line size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-semibold leading-snug text-white">{teacher.name}</p>
                      <p className="mt-1 text-[11px] text-dim">{teacher.role}</p>
                    </div>
                  </div>

                  <p className="mb-7 flex-1 text-sm leading-relaxed text-soft">{teacher.bio}</p>

                  <div className="mb-8 space-y-2.5">
                    <p className="mb-3 text-xs font-semibold text-white">{t('home.specialization')}</p>
                    <div className="flex flex-wrap gap-2">
                      {teacher.subjects.map(subject => (
                        <span key={subject} className="rounded-full border border-line bg-night px-4 py-2 text-xs font-medium text-soft transition-all duration-300 group-hover:border-accent/40">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div onClick={(e) => e.stopPropagation()} className="mt-auto">
                    <Link to="/contact" className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,87,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-light">
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
      {testimonials.length > 0 && (
      <section className="bg-night py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <AnimSection className="mb-14 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">{t('home.sectionTestimonials')}</p>
            <h2 className="text-3xl font-black sm:text-4xl">{t('home.sectionTestimonialsTitle')}</h2>
          </AnimSection>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <AnimSection key={item.name} delay={i * 100}>
                <div className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-line bg-surface p-7 transition-all duration-300 hover:border-accent/50">
                  <span className="pointer-events-none absolute right-5 top-3 select-none text-7xl font-black leading-none text-accent/20 transition-colors group-hover:text-accent/30">"</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, idx) => <RiStarFill key={idx} className={idx < item.rating ? 'text-accent' : 'text-line'} size={13} />)}
                  </div>
                  <p className="relative z-10 flex-1 text-sm leading-relaxed text-soft">"{item.text}"</p>
                  <div className="flex items-center gap-3 border-t border-line pt-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-deep">
                      <RiUser3Line size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="text-xs text-dim">{item.role}</p>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ─── CTA ─── */}
      <section className="bg-night py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <AnimSection>
            <div className="relative overflow-hidden rounded-[28px] bg-accent-deep">
              <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-accent/30 blur-[80px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-60 w-60 rounded-full bg-brand/30 blur-[70px]" />
              <div className="relative px-8 py-16 text-center sm:px-16">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  {t('home.ctaBadge')}
                </div>
                <h2 className="mb-4 text-3xl font-black leading-tight text-white sm:text-5xl">{t('home.ctaTitle')}</h2>
                <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-white/80">{t('home.ctaSub')}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-black text-accent-deep transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]">
                  {t('cta.enrollFree')} <RiArrowRightLine size={16} />
                </Link>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

    </main>
  );
}
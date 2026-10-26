import AnimSection from '../components/AnimSection';
import { getStats } from '../data';
import { Link } from 'react-router-dom';
import { RiArrowRightLine, RiUser3Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { useTeachers } from '../hooks/useTeachers';

// Сколько человек показывать в блоке «Команда» (берутся из преподавателей, их добавляют в админке → «Учителя»)
const MAX_TEAM = 4;

export default function AboutPage() {
  const { t } = useTranslation();
  const stats = getStats(t);
  const team = useTeachers().slice(0, MAX_TEAM); // те же люди, что и в разделе «Учителя»

  const processSteps = [
    { step: '01', title: t('about.process.s1title'), text: t('about.process.s1text') },
    { step: '02', title: t('about.process.s2title'), text: t('about.process.s2text') },
    { step: '03', title: t('about.process.s3title'), text: t('about.process.s3text') },
    { step: '04', title: t('about.process.s4title'), text: t('about.process.s4text') },
  ];

  return (
    <main className="min-h-screen pt-24">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        {/* Header */}
        <AnimSection className="mb-14 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#A66BFF]">{t('about.tag')}</p>
          <h1 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">{t('about.title')}</h1>
          <p className="text-sm leading-relaxed text-white sm:text-base">{t('about.description')}</p>
        </AnimSection>

        {/* Stats */}
        <AnimSection className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="rounded-2xl bg-[#101336] p-5 text-center">
              <p className="mb-1 font-display text-3xl font-bold text-[#CDB2FF]">{value}</p>
              <p className="text-sm text-white">{label}</p>
            </div>
          ))}
        </AnimSection>

        {/* Mission */}
        <AnimSection className="mb-14">
          <div className="relative overflow-hidden rounded-2xl border border-[#2A2F7A] bg-[#101336] p-7 sm:p-10">
            <div className="absolute left-0 top-0 h-0.5 w-32 bg-gradient-to-r from-[#A66BFF]/70 to-transparent" />
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#A66BFF]">{t('about.missionTag')}</p>
            <p className="max-w-2xl font-display text-lg leading-relaxed text-white sm:text-xl">{t('about.missionText')}</p>
          </div>
        </AnimSection>

        {/* Команда: те же преподаватели, что в разделе «Учителя» */}
        <AnimSection className="mb-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#A66BFF]">{t('about.teamTag')}</p>
          <h2 className="mb-8 font-display text-2xl font-bold text-white">{t('about.teamTitle')}</h2>
        </AnimSection>
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <AnimSection key={m.name + i} delay={i * 80}>
              <Link to={`/teachers/${m.id}`} className="card-hover block h-full rounded-2xl border border-[#2A2F7A] bg-[#101336] p-5 text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#A66BFF]/40 bg-[#A66BFF]/15 text-[#CDB2FF]">
                  <RiUser3Line size={24} />
                </div>
                <p className="mb-0.5 text-sm font-semibold text-white">{m.name}</p>
                <p className="mb-1 text-xs text-[#CDB2FF]">{m.role}</p>
                <p className="text-xs text-[#C9D2F5]">{m.experience}</p>
              </Link>
            </AnimSection>
          ))}
        </div>

        {/* Process */}
        <AnimSection className="mb-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#A66BFF]">{t('about.processTag')}</p>
          <h2 className="mb-8 font-display text-2xl font-bold text-white">{t('about.processTitle')}</h2>
        </AnimSection>
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(({ step, title, text }, i) => (
            <AnimSection key={step} delay={i * 80}>
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#2A2F7A] bg-[#101336] p-5">
                <div>
                  <p className="mb-3 font-display text-4xl font-bold text-[#A66BFF]/30">{step}</p>
                  <h3 className="mb-1.5 text-sm font-semibold text-white">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#E6EAFF]">{text}</p>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection className="text-center">
          <Link to="/contact" className="btn-primary violet-glow mx-auto inline-flex items-center justify-center gap-2">
            {t('about.enrollCta')}
            <RiArrowRightLine size={16} />
          </Link>
        </AnimSection>
      </div>
    </main>
  );
}
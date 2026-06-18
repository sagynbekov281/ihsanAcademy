import AnimSection from '../components/AnimSection';
import { stats } from '../data';
import { Link } from 'react-router-dom';
import { RiArrowRightLine, RiUser3Line } from 'react-icons/ri';

const team = [
  { name: 'Ихсан Усупов',      role: 'Основатель & CEO',         exp: '8 лет в разработке',       },
  { name: 'Айбек Джакыпов',    role: 'Ведущий преподаватель',    exp: 'Senior Frontend Dev',         },
  { name: 'Нурлан Сатывалдиев',role: 'Backend ментор',           exp: '6 лет Node.js / Python',     },
  { name: 'Зарина Асанова',    role: 'UX/UI ментор',             exp: 'Product Designer @ Agency',   },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        {/* Header */}
        <AnimSection className="max-w-2xl mb-14">
          <p className="text-[#7B7FE8] text-xs font-semibold uppercase tracking-widest mb-2">О нас</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Академия, которая меняет карьеры
          </h1>
          <p className="text-[#7A82A8] leading-relaxed text-sm sm:text-base">
            IhsanAcademy основана в 2021 году с одной целью — дать каждому возможность войти в IT. 
            Мы учим не просто коду, а профессиональному мышлению и навыкам, которые нужны рынку прямо сейчас.
          </p>
        </AnimSection>

        {/* Stats */}
        <AnimSection className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map(({ value, label }) => (
            <div key={label} className="border border-[#1E2448] rounded-2xl p-5 bg-[#111428]/80 text-center">
              <p className="font-display text-3xl font-bold gradient-text mb-1">{value}</p>
              <p className="text-[#7A82A8] text-sm">{label}</p>
            </div>
          ))}
        </AnimSection>

        {/* Mission */}
        <AnimSection className="mb-14">
          <div className="relative border border-[#5B5BD6]/25 rounded-2xl p-7 sm:p-10 bg-gradient-to-br from-[#5B5BD6]/10 to-transparent overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r from-[#7B7FE8]/70 to-transparent" />
            <p className="text-[#7B7FE8] text-xs font-semibold uppercase tracking-widest mb-3">Наша миссия</p>
            <p className="text-white text-lg sm:text-xl font-display leading-relaxed max-w-2xl">
              «Сделать IT-образование доступным, практичным и результативным для каждого в Кыргызстане и Центральной Азии.»
            </p>
          </div>
        </AnimSection>

        {/* Team */}
        <AnimSection className="mb-4">
          <p className="text-[#7B7FE8] text-xs font-semibold uppercase tracking-widest mb-2">Команда</p>
          <h2 className="font-display text-2xl font-bold text-white mb-8">Наши преподаватели</h2>
        </AnimSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {team.map((m, i) => (
            <AnimSection key={m.name} delay={i * 80}>
              <div className="card-hover border border-[#1E2448] rounded-2xl p-5 bg-[#111428]/80 text-center">
                <div className="w-14 h-14 rounded-full bg-[#5B5BD6]/20 border border-[#5B5BD6]/40 flex items-center justify-center text-[#7B7FE8] mx-auto mb-3">
                  <RiUser3Line size={24} />
                </div>
                <p className="text-white font-semibold text-sm mb-0.5">{m.name}</p>
                <p className="text-[#7B7FE8] text-xs mb-1">{m.role}</p>
                <p className="text-[#7A82A8] text-xs">{m.exp}</p>
              </div>
            </AnimSection>
          ))}
        </div>

        {/* Process */}
        <AnimSection className="mb-4">
          <p className="text-[#7B7FE8] text-xs font-semibold uppercase tracking-widest mb-2">Процесс</p>
          <h2 className="font-display text-2xl font-bold text-white mb-8">Как проходит обучение</h2>
        </AnimSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {[
            { step: '01', title: 'Консультация',   text: 'Бесплатная встреча, выбор курса и формата.' },
            { step: '02', title: 'Обучение',        text: 'Практические занятия 3 раза в неделю с ментором.' },
            { step: '03', title: 'Проекты',         text: 'Реальные задачи и кейсы для портфолио.' },
            { step: '04', title: 'Карьера',         text: 'Помощь с резюме, собеседованиями и поиском работы.' },
          ].map(({ step, title, text }, i) => (
            <AnimSection key={step} delay={i * 80}>
              <div className="border border-[#1E2448] rounded-2xl p-5 bg-[#111428]/80 relative overflow-hidden flex h-full flex-col justify-between">
                <div>
                  <p className="font-display text-4xl font-bold text-[#5B5BD6]/15 mb-3">{step}</p>
                  <h3 className="text-white font-semibold text-sm mb-1.5">{title}</h3>
                </div>
                <p className="text-[#7A82A8] text-sm leading-relaxed">{text}</p>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection className="text-center">
          <Link to="/contact" className="btn-primary violet-glow inline-flex items-center justify-center gap-2 mx-auto">
            Записаться на консультацию
            <RiArrowRightLine size={16} />
          </Link>
        </AnimSection>
      </div>
    </main>
  );
}

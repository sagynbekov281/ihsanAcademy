import { Link, useParams, useNavigate } from 'react-router-dom';
import { RiArrowLeftLine, RiArrowRightLine, RiUser3Line, RiCheckLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import AnimSection from '../components/AnimSection';
import { getTeachers } from '../data';

export default function TeacherPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const teachers = getTeachers(t);
  const teacher = teachers.find(t => t.id === Number(id));

  if (!teacher) {
    return (
      <main className="min-h-screen bg-[#07080F] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#475569] text-lg mb-6">{t('teachers.notFound')}</p>
          <Link to="/teachers" className="text-[#7C3AED] hover:text-[#A855F7] transition-colors flex items-center gap-2 justify-center">
            <RiArrowLeftLine size={16} /> {t('teachers.backAll')}
          </Link>
        </div>
      </main>
    );
  }

  const otherTeachers = teachers.filter(t => t.id !== teacher.id);

  return (
    <main className="min-h-screen bg-[#07080F] text-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">

        {/* Back */}
        <AnimSection>
          <Link
            to="/teachers"
            className="inline-flex items-center gap-2 text-sm text-[#7C3AED] hover:text-[#A855F7] transition-colors mb-10"
          >
            <RiArrowLeftLine size={16} />
            {t('teachers.backAll')}
          </Link>
        </AnimSection>

        {/* Hero card */}
        <AnimSection>
          <div className="relative rounded-[2rem] border border-[#1E1B3A] bg-[#0D0B1E] p-10 mb-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#A855F7]/8 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#6D28D9]/8 blur-[60px] pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <div className="grid h-20 w-20 place-items-center rounded-[1.5rem] bg-gradient-to-br from-[#6D28D9] to-[#A855F7] shadow-2xl shadow-[#7C3AED]/30 shrink-0">
                <RiUser3Line size={32} className="text-white" />
              </div>

              <div className="flex-1">
                <span className="inline-block rounded-full border border-[#7C3AED]/20 bg-[#131127] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#A78BFA] mb-3">
                  {teacher.experience}
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-white mb-1">{teacher.name}</h1>
                <p className="text-[#94A3B8] text-base">{teacher.role}</p>
              </div>
            </div>

            <p className="text-[#c7d2fe] text-base leading-relaxed mb-8 relative">{teacher.bio}</p>

            <div className="mb-8">
              <p className="text-white text-sm font-semibold mb-3">{t('teachers.specialization')}</p>
              <div className="flex flex-wrap gap-2">
                {teacher.subjects.map(subject => (
                  <span
                    key={subject}
                    className="rounded-full border border-[#2b1b52] bg-[#100f26] px-4 py-2 text-sm text-[#dbeafe] font-medium"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#a855f7] px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(124,58,237,0.30)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
            >
              {t('teachers.enroll')} {teacher.name.split(' ')[0]}
              <RiArrowRightLine size={15} />
            </Link>
          </div>
        </AnimSection>

        {/* What you'll learn */}
        <AnimSection>
          <div className="rounded-[2rem] border border-[#1E1B3A] bg-[#0D0B1E] p-8 mb-8">
            <h2 className="text-xl font-black text-white mb-6">{t('teachers.whatLearn')}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {teacher.subjects.map((subject, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center shrink-0">
                    <RiCheckLine size={12} className="text-[#A855F7]" />
                  </div>
                  <span className="text-[#94A3B8] text-sm">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimSection>

        {/* Other teachers */}
        {otherTeachers.length > 0 && (
          <AnimSection>
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black text-white">{t('teachers.otherTeachers')}</h2>
                <Link to="/teachers" className="text-sm text-[#7C3AED] hover:text-[#A855F7] transition-colors flex items-center gap-1">
                  {t('teachers.all')} <RiArrowRightLine size={13} />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {otherTeachers.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => navigate(`/teachers/${t.id}`)}
                    className="group flex items-center gap-4 rounded-2xl border border-[#1E1B3A] bg-[#0D0B1E] p-5 hover:border-[#7C3AED]/40 hover:bg-[#110D2A] transition-all duration-300 cursor-pointer"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#6D28D9] to-[#A855F7] shrink-0">
                      <RiUser3Line size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold">{t.name}</p>
                      <p className="text-[#475569] text-xs truncate">{t.role}</p>
                    </div>
                    <RiArrowRightLine size={16} className="text-[#334155] group-hover:text-[#A855F7] group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>
        )}

      </div>
    </main>
  );
}
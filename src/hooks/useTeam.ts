import { useTranslation } from 'react-i18next';
import { useRemoteList } from './useRemoteList';

type ApiMember = { id: string; name: string; role: string; experience: string; roleKy?: string; experienceKy?: string };
export type TeamView = { name: string; role: string; experience: string };

const FALLBACK = [
  { name: 'Ихсан Усупов', key: 'founder' },
  { name: 'Айбек Джакыпов', key: 'leadTeacher' },
  { name: 'Нурлан Сатывалдиев', key: 'backendMentor' },
  { name: 'Зарина Асанова', key: 'designMentor' },
];

export function useTeam(): TeamView[] {
  const { t, i18n } = useTranslation();
  const remote = useRemoteList<ApiMember>('/api/team', 'team', 'ihsan_team_cache');
  const ky = !!i18n.resolvedLanguage?.startsWith('ky');

  if (!remote || remote.length === 0) {
    return FALLBACK.map((m) => ({
      name: m.name,
      role: t(`about.team.${m.key}.role`),
      experience: t(`about.team.${m.key}.experience`),
    }));
  }
  return remote.map((m) => ({
    name: m.name,
    role: ky && m.roleKy ? m.roleKy : m.role,
    experience: ky && m.experienceKy ? m.experienceKy : m.experience,
  }));
}
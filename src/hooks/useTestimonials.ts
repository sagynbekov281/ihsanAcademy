import { useTranslation } from 'react-i18next';
import { useRemoteList } from './useRemoteList';

type ApiTestimonial = { id: string; name: string; role: string; text: string; rating: number; roleKy?: string; textKy?: string };
export type TestimonialView = { name: string; role: string; text: string; rating: number };

// Только отзывы из админки. Если их нет — возвращает пустой список (блок на сайте скрывается).
export function useTestimonials(): TestimonialView[] {
  const { i18n } = useTranslation();
  const remote = useRemoteList<ApiTestimonial>('/api/testimonials', 'testimonials', 'ihsan_testimonials_cache');
  const ky = !!i18n.resolvedLanguage?.startsWith('ky');

  return (remote ?? []).map((r) => ({
    name: r.name,
    role: ky && r.roleKy ? r.roleKy : r.role,
    text: ky && r.textKy ? r.textKy : r.text,
    rating: r.rating || 5,
  }));
}
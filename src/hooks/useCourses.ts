import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { IconType } from 'react-icons';
import { RiBarChartLine, RiBrushLine, RiCodeLine, RiDatabaseLine, RiReactjsLine, RiShieldCheckLine, RiSmartphoneLine } from 'react-icons/ri';
import { getCourses, type Course } from '../data';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const CACHE_KEY = 'ihsan_courses_cache';

const icons: Record<string, IconType> = {
  code: RiCodeLine, react: RiReactjsLine, database: RiDatabaseLine, brush: RiBrushLine,
  chart: RiBarChartLine, shield: RiShieldCheckLine, phone: RiSmartphoneLine,
};
const courseKeys: Record<string, string> = {
  react: 'frontend', database: 'backend', brush: 'uiux', chart: 'data', shield: 'cyber', phone: 'mobile',
};

type ApiCourse = {
  id: string; title: string; description: string; about: string; duration: string;
  level: string; levelKey: Course['levelKey']; iconKey: string; topics: string[]; langs: string[];
  students: number; projects: number; price: number; finalPrice: number; discountPercent: number;
};

export type CourseView = Course & {
  oldPrice?: string; discountPercent?: number; about?: string;
  langs?: string[]; students?: number; projects?: number;
};

const money = (n: number) => `${n.toLocaleString('ru-RU')} сом`;

function readCache(): ApiCourse[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function useCourses(): CourseView[] {
  const { t } = useTranslation();
  const [remote, setRemote] = useState<ApiCourse[] | null>(readCache);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_URL}/api/courses`)
      .then((r) => r.json())
      .then((d) => {
        if (cancelled || !d.success || !Array.isArray(d.courses)) return;
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(d.courses)); } catch { /* ignore */ }
        setRemote(d.courses);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  if (!remote) return getCourses(t);

  return remote.map((c, i) => ({
    id: i + 1,
    title: localizedCourseValue(t, c.iconKey, 'title', c.title),
    description: localizedCourseValue(t, c.iconKey, 'description', c.description),
    duration: localizedCourseValue(t, c.iconKey, 'duration', c.duration),
    level: c.level === t(`courses.levels.${c.levelKey}`, { lng: 'ru' })
      ? t(`courses.levels.${c.levelKey}`)
      : c.level,
    levelKey: c.levelKey,
    price: money(c.finalPrice),
    oldPrice: c.discountPercent > 0 ? money(c.price) : undefined,
    discountPercent: c.discountPercent || undefined,
    icon: icons[c.iconKey] ?? RiCodeLine,
    topics: localizedCourseTopics(t, c.iconKey, c.topics),
    about: localizedCourseValue(t, c.iconKey, 'about', c.about || c.description),
    langs: c.langs,
    students: c.students,
    projects: c.projects,
  }));
}

function localizedCourseValue(
  t: ReturnType<typeof useTranslation>['t'],
  iconKey: string,
  field: string,
  source: string,
) {
  const courseKey = courseKeys[iconKey];
  if (!courseKey) return source;

  const translationKey = `courses.list.${courseKey}.${field}`;
  const russianValue = t(translationKey, { lng: 'ru' });
  return source === russianValue ? t(translationKey) : source;
}

function localizedCourseTopics(
  t: ReturnType<typeof useTranslation>['t'],
  iconKey: string,
  source: string[],
) {
  const courseKey = courseKeys[iconKey];
  if (!courseKey) return source;

  const translationKey = `courses.list.${courseKey}.topics`;
  const russianTopics = t(translationKey, { lng: 'ru', returnObjects: true }) as string[];
  if (JSON.stringify(source) !== JSON.stringify(russianTopics)) return source;
  return t(translationKey, { returnObjects: true }) as string[];
}
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getTeachers } from '../data';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const CACHE_KEY = 'ihsan_teachers_cache';
const REFRESH_INTERVAL_MS = 5_000;

type ApiTeacher = {
  id: string;
  name: string;
  role: string;
  experience: string;
  subjects: string[];
  bio: string;
  initials: string;
};

export type TeacherView = ReturnType<typeof getTeachers>[number];

function readCache(): ApiTeacher[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function useTeachers(): TeacherView[] {
  const { t } = useTranslation();
  const [remote, setRemote] = useState<ApiTeacher[] | null>(readCache);

  useEffect(() => {
    let cancelled = false;
    let refreshing = false;

    const refresh = async () => {
      if (cancelled || refreshing) return;
      refreshing = true;
      try {
        const response = await fetch(`${API_URL}/api/teachers`, { cache: 'no-store' });
        const data = await response.json();
        if (cancelled || !response.ok || !data.success || !Array.isArray(data.teachers)) return;
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(data.teachers)); } catch { /* ignore */ }
        setRemote((current) => JSON.stringify(current) === JSON.stringify(data.teachers) ? current : data.teachers);
      } catch {
        // Keep the latest cached or in-memory catalog when the API is temporarily unavailable.
      } finally {
        refreshing = false;
      }
    };

    const refreshWhenVisible = () => {
      if (document.visibilityState === 'visible') void refresh();
    };

    void refresh();
    const interval = window.setInterval(refresh, REFRESH_INTERVAL_MS);
    window.addEventListener('focus', refreshWhenVisible);
    document.addEventListener('visibilitychange', refreshWhenVisible);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
      window.removeEventListener('focus', refreshWhenVisible);
      document.removeEventListener('visibilitychange', refreshWhenVisible);
    };
  }, []);

  if (!remote) return getTeachers(t);

  return remote.map((tItem, i) => ({
    id: i + 1,
    name: tItem.name,
    role: localizedTeacherValue(t, tItem.name, 'role', tItem.role),
    experience: localizedTeacherValue(t, tItem.name, 'experience', tItem.experience),
    subjects: tItem.subjects,
    bio: localizedTeacherValue(t, tItem.name, 'bio', tItem.bio),
    initials: tItem.initials,
  }));

  function localizedTeacherValue(
    translate: typeof t,
    name: string,
    field: 'role' | 'experience' | 'bio',
    source: string,
  ) {
    const keys: Record<string, string> = {
      'Алена Нурбекова': 'frontend',
      'Бектур Султанов': 'backend',
      'Мария Жумабаева': 'uiux',
    };
    const teacherKey = keys[name];
    if (!teacherKey) return source;

    const translationKey = `teachers.list.${teacherKey}.${field}`;
    const russianValue = translate(translationKey, { lng: 'ru' });
    const sourceRole = {
      frontend: 'Senior Frontend Mentor',
      backend: 'Backend Team Lead',
      uiux: 'UI/UX Coach',
    }[teacherKey];

    if (field === 'role' && source === sourceRole) return translate(translationKey);
    return source === russianValue ? translate(translationKey) : source;
  }
}
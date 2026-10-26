import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Берёт список с бэкенда, кеширует в localStorage и обновляет раз в intervalMs.
// Если сервер отвечает 404 (такого адреса ещё нет), больше не опрашивает его.
export function useRemoteList<T>(path: string, key: string, cacheKey: string, intervalMs = 15_000): T[] | null {
  const [list, setList] = useState<T[] | null>(() => {
    try {
      const raw = localStorage.getItem(cacheKey);
      const parsed = raw ? JSON.parse(raw) : null;
      return Array.isArray(parsed) ? parsed : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    let cancelled = false;
    let timer: number | undefined;
    const load = async () => {
      try {
        const res = await fetch(`${API_URL}${path}`, { cache: 'no-store' });
        if (res.status === 404) { window.clearInterval(timer); return; }
        const data = await res.json();
        if (cancelled || !res.ok || !data.success || !Array.isArray(data[key])) return;
        try { localStorage.setItem(cacheKey, JSON.stringify(data[key])); } catch { /* ignore */ }
        setList((cur) => (JSON.stringify(cur) === JSON.stringify(data[key]) ? cur : data[key]));
      } catch {
        // сервер недоступен — остаёмся на кеше
      }
    };
    void load();
    timer = window.setInterval(load, intervalMs);
    return () => { cancelled = true; window.clearInterval(timer); };
  }, [path, key, cacheKey, intervalMs]);

  return list;
}
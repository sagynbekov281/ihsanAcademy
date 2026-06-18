import type { IconType } from 'react-icons';
import type { TFunction } from 'i18next';
import { RiBarChartLine, RiBrushLine, RiDatabaseLine, RiReactjsLine, RiShieldCheckLine, RiSmartphoneLine } from 'react-icons/ri';

// Защита: если ключ перевода для topics ещё не добавлен в один из языковых файлов,
// t() с returnObjects вернёт строку (сам ключ), а не массив — это крашит .map() на странице.
// Поэтому всегда приводим результат к массиву.
const getTopics = (t: TFunction, key: string): string[] => {
  const result = t(key, { returnObjects: true }) as unknown;
  return Array.isArray(result) ? (result as string[]) : [];
};

export type Course = {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  levelKey: 'beginner' | 'intermediate' | 'advanced';
  price: string;
  icon: IconType;
  topics: string[];
};

export const getCourses = (t: TFunction): Course[] => [
  {
    id: 1,
    title: t('courses.list.frontend.title'),
    description: t('courses.list.frontend.description'),
    duration: t('courses.list.frontend.duration'),
    level: t('courses.list.frontend.level'),
    levelKey: 'beginner',
    price: t('courses.list.frontend.price'),
    icon: RiReactjsLine,
    topics: getTopics(t, 'courses.list.frontend.topics'),
  },
  {
    id: 2,
    title: t('courses.list.backend.title'),
    description: t('courses.list.backend.description'),
    duration: t('courses.list.backend.duration'),
    level: t('courses.list.backend.level'),
    levelKey: 'intermediate',
    price: t('courses.list.backend.price'),
    icon: RiDatabaseLine,
    topics: getTopics(t, 'courses.list.backend.topics'),
  },
  {
    id: 3,
    title: t('courses.list.uiux.title'),
    description: t('courses.list.uiux.description'),
    duration: t('courses.list.uiux.duration'),
    level: t('courses.list.uiux.level'),
    levelKey: 'beginner',
    price: t('courses.list.uiux.price'),
    icon: RiBrushLine,
    topics: getTopics(t, 'courses.list.uiux.topics'),
  },
  {
    id: 4,
    title: t('courses.list.data.title'),
    description: t('courses.list.data.description'),
    duration: t('courses.list.data.duration'),
    level: t('courses.list.data.level'),
    levelKey: 'advanced',
    price: t('courses.list.data.price'),
    icon: RiBarChartLine,
    topics: getTopics(t, 'courses.list.data.topics'),
  },
  {
    id: 5,
    title: t('courses.list.cyber.title'),
    description: t('courses.list.cyber.description'),
    duration: t('courses.list.cyber.duration'),
    level: t('courses.list.cyber.level'),
    levelKey: 'intermediate',
    price: t('courses.list.cyber.price'),
    icon: RiShieldCheckLine,
    topics: getTopics(t, 'courses.list.cyber.topics'),
  },
  {
    id: 6,
    title: t('courses.list.mobile.title'),
    description: t('courses.list.mobile.description'),
    duration: t('courses.list.mobile.duration'),
    level: t('courses.list.mobile.level'),
    levelKey: 'intermediate',
    price: t('courses.list.mobile.price'),
    icon: RiSmartphoneLine,
    topics: getTopics(t, 'courses.list.mobile.topics'),
  },
];

export const getStats = (t: TFunction) => [
  { value: t('stats.graduates.value'), label: t('stats.graduates.label') },
  { value: t('stats.employment.value'), label: t('stats.employment.label') },
  { value: t('stats.directions.value'), label: t('stats.directions.label') },
  { value: t('stats.years.value'), label: t('stats.years.label') },
];

export const getTestimonials = (t: TFunction) => [
  {
    name: 'Айдана Карымова',
    role: 'Frontend Developer @ TechHub',
    text: t('testimonials.list.aidana.text'),
    avatar: 'А',
  },
  {
    name: 'Жалгас Бейсенов',
    role: 'Backend Engineer @ Startup',
    text: t('testimonials.list.jalgas.text'),
    avatar: 'Ж',
  },
  {
    name: 'Мадина Токтосунова',
    role: 'UI/UX Designer @ Agency',
    text: t('testimonials.list.madina.text'),
    avatar: 'М',
  },
];

export const getTeachers = (t: TFunction) => [
  {
    id: 1,
    name: 'Алена Нурбекова',
    role: 'Senior Frontend Mentor',
    experience: t('teachers.list.frontend.experience'),
    subjects: ['React', 'TypeScript', 'Next.js', 'Web Animation'],
    bio: t('teachers.list.frontend.bio'),
    initials: 'АН',
  },
  {
    id: 2,
    name: 'Бектур Султанов',
    role: 'Backend Team Lead',
    experience: t('teachers.list.backend.experience'),
    subjects: ['Node.js', 'Python', 'PostgreSQL', 'REST API'],
    bio: t('teachers.list.backend.bio'),
    initials: 'БС',
  },
  {
    id: 3,
    name: 'Мария Жумабаева',
    role: 'UI/UX Coach',
    experience: t('teachers.list.uiux.experience'),
    subjects: ['Figma', 'UX Research', 'Prototyping', 'Design Systems'],
    bio: t('teachers.list.uiux.bio'),
    initials: 'МЖ',
  },
];

export const faqs = [
  { q: 'Нужен ли опыт?', a: 'Нет, большинство курсов для полных новичков.' },
  { q: 'Как проходит обучение?', a: 'Очно 3 раза в неделю, также доступен онлайн.' },
  { q: 'Есть ли рассрочка?', a: 'Да, рассрочка до 6 месяцев без переплат.' },
  { q: 'Помогаете с работой?', a: 'Да! Карьерный отдел и партнёрские компании.' },
];
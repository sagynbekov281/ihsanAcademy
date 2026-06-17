import type { IconType } from 'react-icons';
import { RiBarChartLine, RiBrushLine, RiDatabaseLine, RiReactjsLine, RiShieldCheckLine, RiSmartphoneLine } from 'react-icons/ri';

export const courses: Array<{ id: number; title: string; description: string; duration: string; level: string; price: string; icon: IconType; topics: string[] }> = [
  {
    id: 1,
    title: 'Frontend разработка',
    description: 'HTML, CSS, JavaScript, React — от нуля до трудоустройства.',
    duration: '6 месяцев',
    level: 'Начинающий',
    price: '12 000 сом/мес',
    icon: RiReactjsLine,
    topics: ['HTML & CSS', 'JavaScript ES6+', 'React + TypeScript', 'Git & GitHub'],
  },
  {
    id: 2,
    title: 'Backend разработка',
    description: 'Node.js, Python, базы данных и серверная архитектура.',
    duration: '7 месяцев',
    level: 'Средний',
    price: '13 000 сом/мес',
    icon: RiDatabaseLine,
    topics: ['Python / Node.js', 'REST API', 'PostgreSQL', 'Docker'],
  },
  {
    id: 3,
    title: 'UI/UX Дизайн',
    description: 'Figma, дизайн-мышление, прототипирование и пользовательский опыт.',
    duration: '4 месяца',
    level: 'Начинающий',
    price: '10 000 сом/мес',
    icon: RiBrushLine,
    topics: ['Figma', 'UX Research', 'Wireframing', 'Design Systems'],
  },
  {
    id: 4,
    title: 'Data Science',
    description: 'Машинное обучение, анализ данных и нейронные сети.',
    duration: '8 месяцев',
    level: 'Продвинутый',
    price: '15 000 сом/мес',
    icon: RiBarChartLine,
    topics: ['Python', 'NumPy / Pandas', 'ML / Deep Learning', 'TensorFlow'],
  },
  {
    id: 5,
    title: 'Кибербезопасность',
    description: 'Защита систем, этичный хакинг и безопасность сетей.',
    duration: '6 месяцев',
    level: 'Средний',
    price: '14 000 сом/мес',
    icon: RiShieldCheckLine,
    topics: ['Linux', 'Penetration Testing', 'CTF', 'Network Security'],
  },
  {
    id: 6,
    title: 'Мобильная разработка',
    description: 'React Native и Flutter для создания мобильных приложений.',
    duration: '5 месяцев',
    level: 'Средний',
    price: '13 000 сом/мес',
    icon: RiSmartphoneLine,
    topics: ['React Native', 'Flutter', 'iOS & Android', 'App Store Deploy'],
  },
];

export const stats = [
  { value: '500+', label: 'Выпускников' },
  { value: '93%',  label: 'Трудоустройство' },
  { value: '6',    label: 'Направлений' },
  { value: '3 г.', label: 'На рынке' },
];

export const testimonials = [
  {
    name: 'Айдана Карымова',
    role: 'Frontend Developer @ TechHub',
    text: 'За 6 месяцев прошла путь от нуля до первой работы. Преподаватели — практикующие специалисты.',
    avatar: 'А',
  },
  {
    name: 'Жалгас Бейсенов',
    role: 'Backend Engineer @ Startup',
    text: 'Лучшее вложение в себя. Реальные проекты в портфолио и отличное комьюнити.',
    avatar: 'Ж',
  },
  {
    name: 'Мадина Токтосунова',
    role: 'UI/UX Designer @ Agency',
    text: 'Программа по дизайну дала мне все инструменты. Уже на 4-м месяце получила первый заказ.',
    avatar: 'М',
  },
];

export const teachers = [
  {
    id: 1,
    name: 'Алена Нурбекова',
    role: 'Senior Frontend Mentor',
    experience: '9 лет опыта',
    subjects: ['React', 'TypeScript', 'Next.js', 'Web Animation'],
    bio: 'Помогает студентам создавать современные интерфейсы на React и TypeScript. Учит архитектуре, тестированию и production-подходам.',
    initials: 'АН',
  },
  {
    id: 2,
    name: 'Бектур Султанов',
    role: 'Backend Team Lead',
    experience: '11 лет опыта',
    subjects: ['Node.js', 'Python', 'PostgreSQL', 'REST API'],
    bio: 'Наставник по серверным технологиям и архитектуре. Помогает студентам строить быстрые и надёжные API для реальных проектов.',
    initials: 'БС',
  },
  {
    id: 3,
    name: 'Мария Жумабаева',
    role: 'UI/UX Coach',
    experience: '8 лет опыта',
    subjects: ['Figma', 'UX Research', 'Prototyping', 'Design Systems'],
    bio: 'Обучает пользовательскому опыту, прототипированию и визуальному дизайну, чтобы проекты выпускников выглядели профессионально.',
    initials: 'МЖ',
  },
];

export const faqs = [
  { q: 'Нужен ли опыт?', a: 'Нет, большинство курсов для полных новичков.' },
  { q: 'Как проходит обучение?', a: 'Очно 3 раза в неделю, также доступен онлайн.' },
  { q: 'Есть ли рассрочка?', a: 'Да, рассрочка до 6 месяцев без переплат.' },
  { q: 'Помогаете с работой?', a: 'Да! Карьерный отдел и партнёрские компании.' },
];

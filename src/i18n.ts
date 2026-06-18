// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruTranslation from './locales/ru/translation.json'
import kyTranslation from './locales/ky/translation.json'

const resources = {
  ru: { translation: ruTranslation },
  ky: { translation: kyTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'ky',
    fallbackLng: 'ky',
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      kk: { translation: require('./locales/kk/translation.json') },
      ru: { translation: require('./locales/ru/translation.json') }
    },
    fallbackLng: 'ru',
    interpolation: { escapeValue: false }
  });

export default i18n;

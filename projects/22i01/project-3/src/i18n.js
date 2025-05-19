import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Инициализация i18next
i18n
    .use(LanguageDetector) // автоматически определяет язык пользователя
    .use(Backend) // для загрузки переводов с внешнего источника
    .use(initReactI18next) // интеграция с React
    .init({
        fallbackLng: 'en', // язык по умолчанию
        debug: true,
        interpolation: {
            escapeValue: false, // React уже защищает от XSS
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json', // путь к файлам с переводами
        },
    });

export default i18n;

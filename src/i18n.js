// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/en/common.json';
import arTranslation from './translations/ar/common.json';

const resources = {
  en: {
    translation: {
      title:'What do you want to eat?'
    }
  },
  ar: {
    translation: {
      title:'شنو راح تطبخ اليوم؟'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

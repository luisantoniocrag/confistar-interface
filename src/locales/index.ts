import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/translation.json';
import es from './es/translation.json';

i18n.use(initReactI18next).init({
  lng: process.env.REACT_APP_DEFAULT_LANG || 'en',
  debug: true,
  resources: {
    en: {
      translation: en
    },
    es: {
      translation: es
    }
  },
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

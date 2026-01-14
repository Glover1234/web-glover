import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import commonES from '../locales/es/common.json';
import commonEN from '../locales/en/common.json';
import homeES from '../locales/es/home.json';
import homeEN from '../locales/en/home.json';
import aboutES from '../locales/es/about.json';
import aboutEN from '../locales/en/about.json';
import businessES from '../locales/es/business.json';
import businessEN from '../locales/en/business.json';
import contactES from '../locales/es/contact.json';
import contactEN from '../locales/en/contact.json';
import sustainabilityES from '../locales/es/sustainability.json';
import sustainabilityEN from '../locales/en/sustainability.json';
import processesES from '../locales/es/processes.json';
import processesEN from '../locales/en/processes.json';
import salesroomES from '../locales/es/salesroom.json';
import salesroomEN from '../locales/en/salesroom.json';

const resources = {
  es: {
    common: commonES,
    home: homeES,
    about: aboutES,
    business: businessES,
    contact: contactES,
    sustainability: sustainabilityES,
    processes: processesES,
    salesroom: salesroomES,
  },
  en: {
    common: commonEN,
    home: homeEN,
    about: aboutEN,
    business: businessEN,
    contact: contactEN,
    sustainability: sustainabilityEN,
    processes: processesEN,
    salesroom: salesroomEN,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    defaultNS: 'common',
    ns: ['common', 'home', 'about', 'business', 'contact', 'sustainability', 'processes', 'salesroom'],
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    
    react: {
      useSuspense: false,
    },
  });

export default i18n;

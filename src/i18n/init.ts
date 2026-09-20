import i18next from 'i18next';
import LanguageDetector, {
  type DetectorOptions,
} from 'i18next-browser-languagedetector';

import en from '@/locales/en/translation.json';
import pt from '@/locales/pt/translation.json';
import { defaultLanguage } from './config';

const locales = {
  en: { translations: en },
  pt: { translations: pt },
};

// console.log(locales);

const detection: DetectorOptions = {
  // order and from where user language should be detected
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],

  // keys or params to lookup language from
  lookupCookie: 'lng',
  lookupLocalStorage: 'lng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'],

  cookieOptions: { path: '/', sameSite: 'strict' },
};

i18next.use(LanguageDetector).init({
  detection: detection,
  fallbackLng: defaultLanguage,
  resources: locales,
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18next;

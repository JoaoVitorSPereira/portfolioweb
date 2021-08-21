import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { languages, defaultLanguage } from './config';

const locales = Object.assign(
  {},
  ...Object.keys(languages).map(index => {
    return {
      [languages[index]]: {
        translations: require('../locales/' +
          languages[index] +
          '/translation.json'),
      },
    };
  }),
);

// console.log(locales);

const detection = {
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
  react: {
    wait: true,
  },
});

export default i18next;

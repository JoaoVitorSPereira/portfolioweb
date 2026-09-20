import i18next from 'i18next';

import { languages, defaultLanguage } from '../i18n/config';

export function getSortedLangsData() {
  return languages;
}

export function getAllLanguageSlugs() {
  return languages.map(lang => {
    return { params: { lang: lang } };
  });
}

export function getLanguage(lang: string) {
  return languages.includes(lang) ? lang : defaultLanguage;
}

export const isPt = () => !!i18next.language?.startsWith('pt');

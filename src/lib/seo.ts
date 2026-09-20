import { SITE_URL } from '@/lib/agent';
import en from '@/locales/en/translation.json';
import pt from '@/locales/pt/translation.json';

const copy = { en, pt };
const ogLocale = { en: 'en_US', pt: 'pt_BR' };

// Everything the page <head> needs for search engines and link previews.
export function getSeo(language: string) {
  const l = language === 'pt' ? 'pt' : 'en';
  return {
    language: l,
    title: copy[l].seoTitle,
    description: copy[l].seoDescription,
    url: `${SITE_URL}/${l}`,
    image: `${SITE_URL}/og.png`,
    locale: ogLocale[l],
    alternateLocale: ogLocale[l === 'en' ? 'pt' : 'en'],
  };
}

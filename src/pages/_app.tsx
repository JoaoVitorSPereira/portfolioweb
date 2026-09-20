import type { AppProps } from 'next/app';
import i18next from 'i18next';

import WebMCP from '@/components/WebMCP';
import '@/i18n/init';
import { madeMirage } from '@/styles/fonts';
import Theme from '@/styles/theme';

interface PageProps {
  language?: string;
}

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  i18next.changeLanguage(pageProps.language);
  return (
    <div className={madeMirage.className}>
      <WebMCP />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </div>
  );
}

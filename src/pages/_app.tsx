import Theme from '../styles/theme';
import '../i18n/init';
import i18next from 'i18next';
import { madeMirage } from '../styles/fonts';

export default function App({ Component, pageProps }) {
  i18next.changeLanguage(pageProps.language);
  return (
    <div className={madeMirage.className}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </div>
  );
}

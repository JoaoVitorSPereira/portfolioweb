import Theme from '../styles/theme';
import '../i18n/init';
import i18next from 'i18next';

export default function App({ Component, pageProps }) {
  i18next.changeLanguage(pageProps.language);
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

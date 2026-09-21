import HomeContent from '@/components/Contents/home/HomeContent';
import { useLanguageRedirect } from '@/hooks/useLanguageRedirect';

// Content of `/`: the same crawlable portfolio as /en (so crawlers that never
// run JS still see real content), then a client redirect to the visitor's language.
export default function RootContent() {
  useLanguageRedirect();

  return <HomeContent />;
}

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import i18next from 'i18next';

// Sends visitors on `/` to their detected language once the page has hydrated.
export function useLanguageRedirect(): void {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      router.replace('/' + i18next.language.substring(0, 2));
    }
  }, [router]);
}

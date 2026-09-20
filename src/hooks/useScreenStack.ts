import { useEffect, useState } from 'react';

interface ScreenStack<T extends string> {
  current: T | null;
  go: (id: T | null) => void;
}

// Which in-app screen is open (null = launcher). Remembered for the browser
// tab so a reload resumes instead of resetting.
export function useScreenStack<T extends string>(
  ids: readonly T[],
  storageKey: string,
): ScreenStack<T> {
  const [current, setCurrent] = useState<T | null>(null);

  const go = (id: T | null) => {
    setCurrent(id);
    try {
      if (id) sessionStorage.setItem(storageKey, id);
      else sessionStorage.removeItem(storageKey);
    } catch {}
  };

  useEffect(() => {
    try {
      const saved = ids.find(id => id === sessionStorage.getItem(storageKey));
      if (saved) setCurrent(saved);
    } catch {}
  }, []);

  return { current, go };
}

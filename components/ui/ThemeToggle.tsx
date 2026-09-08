'use client';

import { useEffect, useState } from 'react';
import { IconMoon, IconSun } from '@/components/ui/Icons';
import { site } from '@/content/site';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'tm-theme';

function readStoredTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

function storeTheme(theme: Theme): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* localStorage kann blockiert sein. Der Toggle funktioniert trotzdem. */
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = readStoredTheme();
    if (stored) {
      setTheme(stored);
      return;
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    storeTheme(next);
  }

  const isDark = theme === 'dark';
  const label = isDark ? site.header.themeToggle.toLight : site.header.themeToggle.toDark;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid h-11 w-11 place-items-center rounded border border-line text-ink transition-colors duration-200 hover:border-brass"
    >
      {/* Vor der Hydration wird nichts gezeigt, damit kein falsches Icon aufblitzt. */}
      {theme === null ? (
        <span className="block h-[18px] w-[18px]" />
      ) : isDark ? (
        <IconSun />
      ) : (
        <IconMoon />
      )}
    </button>
  );
}

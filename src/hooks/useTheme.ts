import { useEffect, useState } from 'react';
import type { Theme } from '../types';

export const useTheme = (): {
  theme: Theme;
  setTheme: (theme: Theme) => void;
} => {
  // Initialising localStorage settings
  const [theme, setTheme] = useState<Theme>((): Theme => {
    const saved = localStorage.getItem('app-theme') as Theme | null;
    if (saved) return saved as Theme;

    // Check OS theme preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect((): void => {
    // Changing the theme attribute on the root element
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return { theme, setTheme };
};

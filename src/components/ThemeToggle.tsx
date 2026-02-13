import React from 'react';
import { useTheme } from '../hooks/useTheme';
import type { Theme } from '../types';

const ThemeToggle = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <select
        value={theme}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
          setTheme(e.target.value as Theme)
        }
        aria-label="Select theme"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
  );
};

export default ThemeToggle;

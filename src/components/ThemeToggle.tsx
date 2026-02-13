import React from 'react';
import { useTheme } from '../hooks/useTheme';
import type { Theme } from '../types';
import { useTranslation } from 'react-i18next';

const ThemeToggle = (): JSX.Element => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="theme-toggle">
      <select
        value={theme}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
          setTheme(e.target.value as Theme)
        }
        aria-label="Select theme"
      >
        <option value="light">{t('theme_light', 'Light')}</option>
        <option value="dark">{t('theme_dark', 'Dark')}</option>
        <option value="sepia">{t('theme_sepia', 'Sepia')}</option>
      </select>
    </div>
  );
};

export default ThemeToggle;

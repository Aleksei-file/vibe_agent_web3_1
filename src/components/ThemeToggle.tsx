import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useTheme } from '../hooks/useTheme';
import type { Theme } from '../types';
import type { IDropdownItem } from './ui/DropdownSelector';
import DropdownSelector from './ui/DropdownSelector';

const ThemeToggle = (): JSX.Element => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const themes: IDropdownItem<Theme>[] = useMemo(
    (): IDropdownItem<Theme>[] => [
      { value: 'light', label: t('theme_light') },
      { value: 'dark', label: t('theme_dark') },
      { value: 'sepia', label: t('theme_sepia') },
    ],
    [t]
  );

  return (
    <DropdownSelector
      className="theme-toggle"
      options={themes}
      title={t('theme_select')}
      value={theme}
      onChange={setTheme}
    />
  );
};

export default ThemeToggle;

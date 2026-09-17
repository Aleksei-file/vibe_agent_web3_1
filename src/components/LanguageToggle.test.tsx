import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

describe('LanguageToggle', () => {
  test('should render correctly with default language and title', () => {
    render(<LanguageToggle />);
    expect(
      screen.getByRole('button', { name: /english/i })
    ).toBeInTheDocument();
    expect(screen.getByTitle('select_language')).toBeInTheDocument();
  });

  test('should change language', () => {
    const { i18n } = useTranslation();
    render(<LanguageToggle />);
    fireEvent.click(screen.getByRole('button', { name: /english/i }));
    fireEvent.click(screen.getByRole('button', { name: /русский/i }));
    expect(i18n.changeLanguage).toHaveBeenCalledWith('ru');
  });
});

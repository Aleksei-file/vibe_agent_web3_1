import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';

describe('ThemeToggle', () => {
  test('changing selected theme and updating the root theme attribute', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /theme_light/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const sepiaOption = screen.getByRole('button', { name: /theme_dark/i });
    fireEvent.click(sepiaOption);
    expect(
      screen.getByRole('button', { name: /theme_dark/i })
    ).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  });
});

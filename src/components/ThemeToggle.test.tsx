import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';

describe('ThemeToggle', () => {
  test('changing selected theme and updating the root theme attribute', () => {
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole('button', { name: /theme_light/i }));
    fireEvent.click(screen.getByRole('button', { name: /theme_dark/i }));
    expect(
      screen.getByRole('button', { name: /theme_dark/i })
    ).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  });
});

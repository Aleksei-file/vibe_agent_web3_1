import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import type { IDropdownItem } from './DropdownSelector';
import DropdownSelector from './DropdownSelector';

const options: IDropdownItem<string>[] = [
  { value: 'one', label: 'Option 1' },
  { value: 'two', label: 'Option 2' },
  { value: 'three', label: 'Option 3' },
];

describe('DropdownSelector', () => {
  test('displays the default option correctly', () => {
    render(
      <DropdownSelector options={options} value="one" onChange={() => {}} />
    );

    const button = screen.getByRole('button', { name: /option 1/i });
    expect(button).toBeInTheDocument();
  });

  test('should open the options list when clicking the trigger button', () => {
    render(
      <DropdownSelector options={options} value="one" onChange={() => {}} />
    );

    const button = screen.getByRole('button', { name: /option 1/i });
    fireEvent.click(button);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(options.length);
  });

  test('should call onChange with the correct value and close the dropdown', () => {
    const handleChange = vi.fn();
    render(
      <DropdownSelector options={options} value="one" onChange={handleChange} />
    );

    const button = screen.getByRole('button', { name: /option 1/i });
    fireEvent.click(button);
    const secondOption = screen.getByRole('button', { name: /option 2/i });
    fireEvent.click(secondOption);
    expect(handleChange).toHaveBeenCalledWith('two');
    const list = screen.queryByRole('list');
    expect(list).not.toBeInTheDocument();
  });

  test('should close dropdown on outside click', () => {
    render(
      <DropdownSelector options={options} value="one" onChange={() => {}} />
    );

    const button = screen.getByRole('button', { name: /option 1/i });
    fireEvent.click(button);
    expect(screen.getByRole('list')).toBeInTheDocument();
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  screen.logTestingPlaygroundURL();
});

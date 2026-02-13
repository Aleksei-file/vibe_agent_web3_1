import React, { useState, useRef, useEffect } from 'react';
import styles from './DropdownSelector.module.less';

export interface IDropdownItem<T> {
  value: T;
  label: string;
  icon?: React.ReactNode;
}

export interface IDropdownSelectorProps<T> {
  options: IDropdownItem<T>[];
  value: T;
  onChange: (value: T) => void;
  title?: string;
  className?: string;
}

const DropdownSelector = <T extends string | number>({
  options,
  value,
  onChange,
  title,
  className,
}: IDropdownSelectorProps<T>): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selectedOption: IDropdownItem<T> | undefined = options.find(
    (opt: IDropdownItem<T>): boolean => opt.value === value
  );

  const handleSelect = (val: T): void => {
    onChange(val);
    setIsOpen(false);
  };

  useEffect((): (() => void) => {
    const handleClick = (e: MouseEvent): void => {
      if (!rootRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return (): void => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div
      className={`${styles.container} ${className}`}
      ref={rootRef}
      title={title}
    >
      <button
        type="button"
        className={`${styles.trigger} ${isOpen && styles.triggerActive}`}
        onClick={(): void => setIsOpen(!isOpen)}
      >
        <span className={styles.content}>
          {selectedOption?.icon && (
            <span className={styles.icon}>{selectedOption.icon}</span>
          )}
          {selectedOption?.label}
        </span>
        <span className={`${styles.arrow} ${isOpen && styles.arrowUpside}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <ul className={styles.dropdown}>
          {options.map(
            (opt: IDropdownItem<T>): JSX.Element => (
              <li key={opt.value}>
                <button
                  type="button"
                  className={`${styles.option} ${opt.value === value && styles.optionSelected}`}
                  onClick={(): void => handleSelect(opt.value)}
                  title={opt.label}
                >
                  {opt.icon && <span className={styles.icon}>{opt.icon}</span>}
                  {opt.label}
                </button>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default DropdownSelector;

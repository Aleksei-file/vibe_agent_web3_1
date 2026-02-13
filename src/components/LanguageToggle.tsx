import React from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'pt' | 'ru';

const LanguageToggle = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lngType: Language) => {
    i18n.changeLanguage(lngType);
  };
  return (
    <div className="language-toggle">
      <select
        name="language"
        value={i18n.language}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
          changeLanguage(e.target.value as Language)
        }
        aria-label={t('select_language')}
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
};

export default LanguageToggle;

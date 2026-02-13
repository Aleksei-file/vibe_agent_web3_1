import { useTranslation } from 'react-i18next';
import type { IDropdownItem } from './ui/DropdownSelector';
import DropdownSelector from './ui/DropdownSelector';

type Language = 'en' | 'pt' | 'ru';

const LANGUAGES: IDropdownItem<Language>[] = [
  { value: 'en', label: 'English' },
  { value: 'pt', label: 'Português' },
  { value: 'ru', label: 'Русский' },
];

const LanguageToggle = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lngType: Language): void => {
    i18n.changeLanguage(lngType);
  };

  return (
    <DropdownSelector
      className="language-toggle"
      options={LANGUAGES}
      title={t('select_language')}
      value={i18n.language as Language}
      onChange={changeLanguage}
    />
  );
};

export default LanguageToggle;

import { useTranslation } from 'react-i18next';
import type { IDropdownItem } from './ui/DropdownSelector';
import DropdownSelector from './ui/DropdownSelector';
import Flag from 'react-world-flags';

type Language = 'en' | 'pt' | 'ru';

const LANGUAGE_FLAGS: Record<Language, string> = {
  en: 'us',
  pt: 'pt',
  ru: 'ru',
};

const LANGUAGES: IDropdownItem<Language>[] = [
  { value: 'en', label: 'English', icon: <Flag code={LANGUAGE_FLAGS.en} /> },
  { value: 'pt', label: 'Português', icon: <Flag code={LANGUAGE_FLAGS.pt} /> },
  { value: 'ru', label: 'Русский', icon: <Flag code={LANGUAGE_FLAGS.ru} /> },
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

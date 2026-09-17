import { useTranslation } from 'react-i18next';
import type { IDropdownItem } from './ui/DropdownSelector';
import DropdownSelector from './ui/DropdownSelector';
import ReactCountryFlag from 'react-country-flag';

type Language = 'en' | 'pt' | 'ru';

const LANGUAGE_FLAGS: Record<Language, string> = {
  en: 'US',
  pt: 'PT',
  ru: 'RU',
};

const LANGUAGES: IDropdownItem<Language>[] = [
  {
    value: 'en',
    label: 'English',
    icon: <ReactCountryFlag countryCode={LANGUAGE_FLAGS.en} svg />,
  },
  {
    value: 'pt',
    label: 'Português',
    icon: <ReactCountryFlag countryCode={LANGUAGE_FLAGS.pt} svg />,
  },
  {
    value: 'ru',
    label: 'Русский',
    icon: <ReactCountryFlag countryCode={LANGUAGE_FLAGS.ru} svg />,
  },
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

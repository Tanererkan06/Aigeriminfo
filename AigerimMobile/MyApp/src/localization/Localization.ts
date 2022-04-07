import i18nNext from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import moment from 'moment';
require('moment/locale/tr.js');

const I18N_NAME_SPACE = 'translation';

i18nNext.use(initReactI18next).init({
  resources: {},
  lng: 'en',
  fallbackLng: 'en',
  ns: I18N_NAME_SPACE,
  interpolation: {
    escapeValue: false,
  },
});

moment.locale('ru');

i18nNext.addResources('ru', I18N_NAME_SPACE, require('./locales/ru.json'));
i18nNext.addResources('kz', I18N_NAME_SPACE, require('./locales/kz.json'));
i18nNext.addResources('en', I18N_NAME_SPACE, require('./locales/en.json'));
i18nNext.addResources('tr', I18N_NAME_SPACE, require('./locales/tr.json'));

export const useLocalization = () => {
  const {t, i18n} = useTranslation();

  return {
    getString: (key: string) => t(key),
    changeLanguage: (lang: string) => {
      console.log('Change ', lang);
      moment.locale(lang);
      i18n.changeLanguage(lang);
    },
    currentLanguage: () => i18n.language,
  };
};

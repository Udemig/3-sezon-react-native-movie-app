import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {resources} from './resources';
import {I18nManager} from 'react-native';
import {language} from '../store/appSettings';

const default_language = 'en';

const activeLanguage = language;

i18n.use(initReactI18next).init({
  resources,
  lng: activeLanguage,
  fallbackLng: default_language,
  interpolation: {
    escapeValue: false,
  },
});

export const isRTL = i18n.dir() === 'rtl';

I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

export default i18n;

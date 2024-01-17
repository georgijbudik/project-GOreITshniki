import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header: {
            diary: 'Diary',
            products: 'Products',
            exercises: 'Exercises',
          },
          logout: 'Logout',
          welcome: {
            main_text: 'Transforming your body shape with Power Pulse',
            sign_in: 'Sign In',
            sign_up: 'Sign Up',
          },
        },
      },

      uk: {
        translation: {
          header: {
            diary: 'Щоденник',
            products: 'Продукти',
            exercises: 'Вправи',
          },
          logout: 'Вийти',
          welcome: {
            main_text: 'Зміни своє тіло разом з Power Pulse',
            sign_in: 'Увійти',
            sign_up: 'Зареєструватися',
          },
        },
      },
    },
  });

export default i18n;

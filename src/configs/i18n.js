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
            main_text: {
              part1: 'Transforming your',
              part2: 'body',
              part3: 'shape with Power Pulse',
            },
            sign_in: 'Sign In',
            sign_up: 'Sign Up',
          },
          main_image: {
            videos: 'Video tutorials',
            calories: 'cal',
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
            main_text: {
              part1: 'Зміни власне',
              part2: 'тіло',
              part3: 'разом із Power Pulse',
            },
            sign_in: 'Увійти',
            sign_up: 'Зареєструватися',
          },
          main_image: {
            videos: 'Відео туторіалів',
            calories: 'ккал',
          },
        },
      },
    },
  });

export default i18n;

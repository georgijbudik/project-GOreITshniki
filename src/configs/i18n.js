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
          user_settings: {
            themes: {
              theme: 'Theme',
              dark: 'Dark',
              light: 'Light',
            },
            language: 'Language',
            languages: {
              english: 'English',
              ukrainian: 'Ukrainian',
              spanish: 'Spanish',
            },
          },
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
          sign_up: {
            title: 'Sign Up',
            description:
              'Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.',
            name: 'Name',
            email: 'Email',
            password: 'Password',
            button: 'Sign Up',
            have_account: 'Already have an account?',
            sign_in_link: 'Sign In',
          },
          sign_in: {
            title: 'Sign In',
            description:
              'Welcome! Please enter your credentials to login to the platform:',
            email: 'Email',
            password: 'Password',
            button: 'Sign In',
            dont_have_account: "Don't have an account?",
            sign_up_link: 'Sign Up',
          },
        },
      },

      uk: {
        translation: {
          user_settings: {
            themes: {
              theme: 'Тема',
              dark: 'Темна',
              light: 'Світла',
            },
            language: 'Мова',
            languages: {
              english: 'Англійська',
              ukrainian: 'Українська',
              spanish: 'Іспанська',
            },
          },
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
            sign_up: 'Реєстрація',
          },
          main_image: {
            videos: 'Відео туторіалів',
            calories: 'ккал',
          },
          sign_up: {
            title: 'Реєстрація',
            description:
              'Дякуємо за проявлений інтерес до нашої платформи. Щоб завершити процес реєстрації, надайте нам наступну інформацію про Вас.',
            name: "Ім'я",
            email: 'Пошта',
            password: 'Пароль',
            button: 'Реєстрація',
            have_account: 'Уже маєте акаунт?',
            sign_in_link: 'Увійти',
          },
          sign_in: {
            title: 'Увійти',
            description:
              'Ласкаво просимо! Введіть свої дані для входу на платформу:',
            email: 'Пошта',
            password: 'Пароль',
            button: 'Увійти',
            dont_have_account: 'Не маєте акаунту?',
            sign_up_link: 'Реєстрація',
          },
        },
      },

      es: {
        translation: {
          user_settings: {
            themes: {
              theme: 'Tema',
              dark: 'Oscuro',
              light: 'Claro',
            },
            language: 'Idioma',
            languages: {
              english: 'Inglés',
              ukrainian: 'Ucraniano',
              spanish: 'Español',
            },
          },
          header: {
            diary: 'Diario',
            products: 'Productos',
            exercises: 'Ejercicios',
          },
          logout: 'Cerrar',
          welcome: {
            main_text: {
              part1: 'Transformando tu',
              part2: 'masa',
              part3: 'con Power Pulse',
            },
            sign_in: 'Iniciar',
            sign_up: 'Registrarse',
          },
          main_image: {
            videos: 'Video tutoriales',
            calories: 'cal',
          },
          sign_up: {
            title: 'Registrarse',
            description:
              'Gracias por tu interés en nuestra plataforma. Para completar el proceso de registro, por favor proporciona la siguiente información.',
            name: 'Nombre',
            email: 'Correo electrónico',
            password: 'Contraseña',
            button: 'Registrarse',
            have_account: '¿Ya tienes una cuenta?',
            sign_in_link: 'Iniciar',
          },
          sign_in: {
            title: 'Iniciar',
            description:
              '¡Bienvenido! Por favor, ingresa tus credenciales para iniciar sesión:',
            email: 'Correo electrónico',
            password: 'Contraseña',
            button: 'Iniciar',
            dont_have_account: '¿No tienes una cuenta?',
            sign_up_link: 'Registrarse',
          },
        },
      },
    },
  });

export default i18n;

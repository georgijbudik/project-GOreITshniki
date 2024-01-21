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
          profile: {
            user_form: {
              settings: 'Profile Settings',
              name: 'Name',
              name_example: 'Anna Rybachok',
              email: 'Email',
              height: 'Height',
              current_weight: 'Current Weight',
              desired_weight: 'Desired Weight',
              date_of_birth: 'Date of birth',
              blood: 'Blood',
              male: 'Male',
              female: 'Female',
              activity_1: 'Sedentary lifestyle (little or no physical activity)',
              activity_2: 'Light activity (light exercises/sports 1-3 days per week)',
              activity_3: 'Moderately active (moderate exercises/sports 3-5 days per week)',
              activity_4: 'Very active (intense exercises/sports 6-7 days per week)',
              activity_5: 'Extremely active (very strenuous exercises/sports and physical work)',
              save:'Save',
            },
            user_card: {
              profile_settings: 'Profile Settings',
              user: 'User',
              daily_calorie_intake:'Daily calorie intake',
              daily_phisycal_activity: 'Daily phisical activity',
              min: 'min',
              exclamation: 'We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.',
            logout:'Logout'
            }
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
          profile: {
            user_form: {
              settings: 'Налаштування',
              name: "Ім'я",
              name_example: 'Анна Рибачок',
              email: 'Пошта',
              height: 'Зріст',
              current_weight: 'Вага на зараз',
              desired_weight: 'Очікувана вага',
              date_of_birth: 'Дата народження',
              blood: 'Група крові',
              male: 'Чоловік',
              female: 'Жінка',
              activity_1: 'Сидячий спосіб життя (мала фізична активність або її відсутність)',
              activity_2: 'Легка активність (легкі вправи/спорт 1-3 дні на тиждень)',
              activity_3: 'Помірно активний (помірні вправи/спорт 3-5 днів на тиждень)',
              activity_4: 'Дуже активний (інтенсивні вправи/спорт 6-7 днів на тиждень)',
              activity_5: 'Надзвичайно активний (дуже виснажливі вправи/спорт і фізична робота)',
              save:'Зберегти',
            },
            user_card: {
              profile_settings: 'Налаштування',
              user: 'Користувач',
              daily_calorie_intake:'Добова норма споживання калорій',
              daily_phisycal_activity: 'Щоденна фізична активність',
              min: 'хв',
              exclamation: 'Ми розуміємо, що кожна людина унікальна, тому весь підхід до дієти є відносним і адаптованим до вашого унікального тіла та цілей.',
            logout:'Вихід'
            }
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
          profile: {
            user_form: {
              settings: 'Configuración de perfil',
              name: 'Nombre',
              name_example: 'Anna Rybachok',
              email: 'Correo electrónico',
              height: 'Altura',
              current_weight: 'Peso actual',
              desired_weight: 'Peso deseado',
              date_of_birth: 'Fecha de nacimiento',
              blood: 'Sangre',
              male: 'Masculino',
              female: 'Femenina',
              activity_1: 'Estilo de vida sedentario (poca o ninguna actividad física)',
              activity_2: 'Actividad ligera (ejercicios/deportes ligeros 1-3 días por semana)',
              activity_3: 'Moderadamente activo (ejercicios / deportes moderados 3-5 días a la semana)',
              activity_4: 'Muy activo (ejercicios/deportes intensos 6-7 días por semana)',
              activity_5: 'Extremadamente activo (ejercicios/deportes y trabajo físico muy extenuantes)',
              save:'Ahorrar',
            },
            user_card: {
              profile_settings: 'Configuración de perfil',
              user: 'Usuario',
              daily_calorie_intake:'Ingesta diaria de calorías',
              daily_phisycal_activity: 'Actividad física diaria',
              min: 'mín',
              exclamation: 'Entendemos que cada persona es única, por lo que todo el enfoque de la dieta es relativo y se adapta a su cuerpo y sus objetivos únicos.',
            logout:'Cerrar sesión'
            }
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

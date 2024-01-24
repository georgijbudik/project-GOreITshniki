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
      escapeValue: false,
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
            start: 'Dairy',
            settings: 'Profile',
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
              activity_1:
                'Sedentary lifestyle (little or no physical activity)',
              activity_2:
                'Light activity (light exercises/sports 1-3 days per week)',
              activity_3:
                'Moderately active (moderate exercises/sports 3-5 days per week)',
              activity_4:
                'Very active (intense exercises/sports 6-7 days per week)',
              activity_5:
                'Extremely active (very strenuous exercises/sports and physical work)',
              save: 'Save',
            },
            user_card: {
              profile_settings: 'Profile Settings',
              user: 'User',
              daily_calorie_intake: 'Daily calorie intake',
              daily_phisycal_activity: 'Daily phisical activity',
              min: 'min',
              exclamation:
                'We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.',
              logout: 'Logout',
            },
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
          exercises: {
            navigation: {
              title: 'Exercises',
              bodyparts: 'Body parts',
              muscles: 'Muscles',
              equipment: 'Equipment',
              back_link: 'Back',
            },
            exercise_item: {
              workout: 'WORKOUT',
              start: 'Start',
              burned_calories: 'Burned calories',
              body_part: 'Body part',
              target: 'Target',
            },
            exercise_modal: {
              time: 'Time',
              name: 'Name',
              target: 'Target',
              body_part: 'Body part',
              equipment: 'Equipment',
              burned_calories: 'Burned calories',
              add: 'Add to diary',
            },
            exercise_success: {
              title: 'Well done',
              time: 'Your time',
              burned_calories: 'Burned calories',
              next: 'Next exercise',
              diary: 'To the diary',
            },
          },
          products: {
            title: 'Products',
            product_list: {
              no_results_1: 'Sorry, no results were found',
              no_results_2:
                'for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide andyou have the opportunity to find more options that suit your needs.',
              no_results_3: 'Try changing the search parameters.',
            },
            product_item: {
              diet: 'DIET',
              recommended: 'Recommended',
              not_recommended: 'Not recommended',
              add: 'Add',
              calories: 'Calories',
              category: 'Category',
              weight: 'Weight',
            },
            filters: {
              title: 'Filters',
              search: 'Seacrh',
              all_categories: 'All categories',
              all: 'All',
              recommended: 'Recommended',
              not_recommended: 'Not recommended',
            },
            add_product: {
              grams: 'grams',
              calories: 'Calories',
              add: 'Add to diary',
              cancel: 'Cancel',
            },
            add_success: {
              title: 'Well done',
              calories: 'Calories',
              next: 'Next product',
              diary: 'To the diary',
            },
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
            start: 'Щоденник',
            settings: 'Профіль',
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
              activity_1:
                'Сидячий спосіб життя (мала фізична активність або її відсутність)',
              activity_2:
                'Легка активність (легкі вправи/спорт 1-3 дні на тиждень)',
              activity_3:
                'Помірно активний (помірні вправи/спорт 3-5 днів на тиждень)',
              activity_4:
                'Дуже активний (інтенсивні вправи/спорт 6-7 днів на тиждень)',
              activity_5:
                'Надзвичайно активний (дуже виснажливі вправи/спорт і фізична робота)',
              save: 'Зберегти',
            },
            user_card: {
              profile_settings: 'Налаштування',
              user: 'Користувач',
              daily_calorie_intake: 'Добова норма споживання калорій',
              daily_phisycal_activity: 'Щоденна фізична активність',
              min: 'хв',
              exclamation:
                'Ми розуміємо, що кожна людина унікальна, тому весь підхід до дієти є відносним і адаптованим до вашого унікального тіла та цілей.',
              logout: 'Вихід',
            },
          },
          sign_up: {
            title: 'Реєстрація',
            description:
              'Дякуємо за проявлений інтерес до нашої платформи. Щоб завершити процес реєстрації, надайте нам наступну інформацію.',
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

          exercises: {
            navigation: {
              title: 'Вправи',
              bodyparts: 'Частини тіла',
              muscles: "М'язи",
              equipment: 'Обладнання',
              back_link: 'Туди',
            },
            exercise_item: {
              workout: 'ВПРАВА',
              start: 'Почати',
              burned_calories: 'Спалено калорій',
              body_part: 'Частина тіла',
              target: 'Ціль',
            },
            exercise_modal: {
              time: 'Час',
              name: 'Назва',
              target: 'Ціль',
              body_part: 'Частина тіла',
              equipment: 'Обладнання',
              burned_calories: 'Спалено калорій',
              add: 'Додати до щоденника',
            },
            exercise_success: {
              title: 'Відмінно виконано',
              time: 'Ваш час',
              burned_calories: 'Спалено калорій',
              next: 'Наступне вправа',
              diary: 'До щоденника',
            },
          },
          products: {
            title: 'Продукти',
            product_list: {
              no_results_1: 'Вибачте, результатів не знайдено',
              no_results_2:
                'за обраними фільтрами продукту. Рекомендуємо розглянути інші параметри пошуку, щоб знайти потрібний товар. Наш асортимент широкий, і у вас є можливість знайти більше варіантів, які відповідають вашим потребам.',
              no_results_3: 'Спробуйте змінити параметри пошуку.',
            },
            product_item: {
              diet: 'ДІЕТА',
              recommended: 'Рекомендовано',
              not_recommended: 'Не рекомендовано',
              add: 'Додати',
              calories: 'Калорії',
              category: 'Категорія',
              weight: 'Вага',
            },
            filters: {
              title: 'Фільтри',
              search: 'Пошук',
              all_categories: 'Усі категорії',
              all: 'Усе',
              recommended: 'Рекомендовано',
              not_recommended: 'Не рекомендовано',
            },
            add_product: {
              grams: 'грами',
              calories: 'Калорії',
              add: 'Додати до щоденника',
              cancel: 'Скасувати',
            },
            add_success: {
              title: 'Відмінно',
              calories: 'Калорії',
              next: 'Продукти',
              diary: 'До щоденника',
            },
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
            start: 'Diario',
            settings: 'Profil',
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
              activity_1:
                'Estilo de vida sedentario (poca o ninguna actividad física)',
              activity_2:
                'Actividad ligera (ejercicios/deportes ligeros 1-3 días por semana)',
              activity_3:
                'Moderadamente activo (ejercicios / deportes moderados 3-5 días a la semana)',
              activity_4:
                'Muy activo (ejercicios/deportes intensos 6-7 días por semana)',
              activity_5:
                'Extremadamente activo (ejercicios/deportes y trabajo físico muy extenuantes)',
              save: 'Ahorrar',
            },
            user_card: {
              profile_settings: 'Configuración de perfil',
              user: 'Usuario',
              daily_calorie_intake: 'Ingesta diaria de calorías',
              daily_phisycal_activity: 'Actividad física diaria',
              min: 'mín',
              exclamation:
                'Entendemos que cada persona es única, por lo que todo el enfoque de la dieta es relativo y se adapta a su cuerpo y sus objetivos únicos.',
              logout: 'Cerrar sesión',
            },
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

          exercises: {
            navigation: {
              title: 'Ejercicios',
              bodyparts: 'Partes del cuerpo',
              muscles: 'Músculos',
              equipment: 'Equipo',
              back_link: 'Atrás',
            },
            exercise_item: {
              workout: 'ENTRENA',
              start: 'Comen',
              burned_calories: 'Calorías quemadas',
              body_part: 'Parte del cuerpo',
              target: 'Objetivo',
            },
            exercise_modal: {
              time: 'Tiempo',
              name: 'Nombre',
              target: 'Objetivo',
              body_part: 'Parte del cuerpo',
              equipment: 'Equipo',
              burned_calories: 'Calorías quemadas',
              add: 'Agregar al diario',
            },
            exercise_success: {
              title: 'Bien hecho',
              time: 'Tu tiempo',
              burned_calories: 'Calorías quemadas',
              next: 'Siguiente ejercicio',
              diary: 'Al diario',
            },
          },
          products: {
            title: 'Productos',
            product_list: {
              no_results_1: 'Lo siento, no se encontraron resultados',
              no_results_2:
                'para los filtros de producto seleccionados. Puede considerar otras opciones de búsqueda para encontrar el producto que desea. Nuestra gama es amplia y tiene la oportunidad de encontrar más opciones que se adapten a sus necesidades.',
              no_results_3: 'Intente cambiar los parámetros de búsqueda.',
            },
            product_item: {
              diet: 'DIETA',
              recommended: 'Recomendado',
              not_recommended: 'No recomendado',
              add: 'Agregar',
              calories: 'Calorías',
              category: 'Categoría',
              weight: 'Peso',
            },
            filters: {
              title: 'Filtros',
              search: 'Buscar',
              all_categories: 'Todas las categorías',
              all: 'Todo',
              recommended: 'Recomendado',
              not_recommended: 'No recomendado',
            },
            add_product: {
              grams: 'gramos',
              calories: 'Calorías',
              add: 'Agregar al diario',
              cancel: 'Cancelar',
            },
            add_success: {
              title: 'Bien hecho',
              calories: 'Calorías',
              next: 'Producto',
              diary: 'Al diario',
            },
          },
        },
      },
    },
  });

export default i18n;

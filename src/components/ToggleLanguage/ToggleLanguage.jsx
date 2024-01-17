import { useTranslation } from 'react-i18next';

const ToggleLanguage = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <button
        onClick={() => {
          i18n.changeLanguage('en');
        }}
      >
        EN
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage('uk');
        }}
      >
        UA
      </button>
    </div>
  );
};

export default ToggleLanguage;

import { HeroText, WelcomePageContainer, ButtonContainer } from './index';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';

const Welcome = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <WelcomePageContainer>
      <HeroText>{t('welcome.main_text')}</HeroText>
      <ButtonContainer>
        <Button onClick={() => navigate('/signup')}>
          {t('welcome.sign_up')}
        </Button>
        <Button secondary="black" onClick={() => navigate('/signin')}>
          {t('welcome.sign_in')}
        </Button>
      </ButtonContainer>
    </WelcomePageContainer>
  );
};

export default Welcome;

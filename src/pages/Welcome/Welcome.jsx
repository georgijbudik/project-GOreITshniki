import {
  HeroText,
  WelcomePageContainer,
  ButtonContainer,
  BodyElementSpan,
  BodyLine,
} from './index';
import { useNavigate } from 'react-router-dom';
import { TrackerCalories, TrackerVideo } from '../../components/Tracker/Tracker';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';

const Welcome = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <WelcomePageContainer>
      <HeroText>
        Transforming your
        <BodyElementSpan>
          body
          <BodyLine width="98" height="35" stroke="#E6533C">
            <use
              xlinkHref={
                process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-line'
              }
            ></use>
          </BodyLine>
        </BodyElementSpan>
        shape with Power Pulse
      </HeroText>
      <ButtonContainer>
        <Button onClick={() => navigate('/signup')}>Sign Up </Button>
        <Button secondary onClick={() => navigate('/signin')}>
          Sign In
      <ButtonContainer>
        <Button onClick={() => navigate('/signup')}>
          {t('welcome.sign_up')}
        </Button>
        <Button secondary="black" onClick={() => navigate('/signin')}>
          {t('welcome.sign_in')}
        </Button>
      </ButtonContainer>
      <TrackerVideo />
      <TrackerCalories />
    </WelcomePageContainer>
  );
};

export default Welcome;

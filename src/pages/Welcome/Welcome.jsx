import {
  HeroText,
  WelcomePageContainer,
  ButtonContainer,
  BodyElementSpan,
  BodyLine,
} from './index';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedin,
  selectUserBlood,
} from '../../redux/auth/authSelectors';

import Button from 'components/Button';
import MainImage from 'pages/SignUp/SignUpForm/MainImage';

const Welcome = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedin);
  const userInfo = useSelector(selectUserBlood);

  return (
    <WelcomePageContainer>
      <MainImage />
      <HeroText>
        {t('welcome.main_text.part1')}{' '}
        <BodyElementSpan>
          {t('welcome.main_text.part2')}{' '}
          <BodyLine width="98" height="35" stroke="#E6533C">
            <use
              xlinkHref={
                process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-line'
              }
            ></use>
          </BodyLine>
        </BodyElementSpan>
        {t('welcome.main_text.part3')}{' '}
      </HeroText>

      {isLoggedIn ? (
        userInfo ? (
          <ButtonContainer>
            <Button onClick={() => navigate('/diary')}>
              {t('welcome.start')}
            </Button>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <Button onClick={() => navigate('/profile')}>
              {t('welcome.settings')}
            </Button>
          </ButtonContainer>
        )
      ) : (
        <ButtonContainer>
          <Button onClick={() => navigate('/signup')}>
            {t('welcome.sign_up')}
          </Button>
          <Button secondary="black" onClick={() => navigate('/signin')}>
            {t('welcome.sign_in')}
          </Button>
        </ButtonContainer>
      )}
    </WelcomePageContainer>
  );
};

export default Welcome;

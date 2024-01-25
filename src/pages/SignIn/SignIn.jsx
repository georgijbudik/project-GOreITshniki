import { useTranslation } from 'react-i18next';

import TitlePage from 'components/TitlePage';
import MainImage from 'pages/SignUp/SignUpForm/MainImage/MainImage';
import SignInForm from './SignInForm';

import {
  TitleWrapper,
  Info,
  Container,
  InfoLink,
  StyledLink,
} from '../SignUp/SignUpForm/SignUpForm/SignUpForm.styled';

const SignIn = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <MainImage />
      <TitleWrapper>
        <TitlePage>{t('sign_in.title')}</TitlePage>
      </TitleWrapper>
      <Info>{t('sign_in.description')}</Info>
      <SignInForm />
      <InfoLink>
        {t('sign_in.dont_have_account')}{' '}
        <StyledLink to="/signup">{t('sign_in.sign_up_link')}</StyledLink>
      </InfoLink>
    </Container>
  );
};

export default SignIn;

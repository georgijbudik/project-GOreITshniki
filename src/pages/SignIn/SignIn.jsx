import { useTranslation } from 'react-i18next';

import SignInForm from './SignInForm';
import {
  Heading,
  Info,
  Container,
  InfoLink,
  StyledLink,
} from '../SignUp/SignUpForm/SignUpForm/SignUpForm.styled';
import MainImage from 'pages/SignUp/SignUpForm/MainImage/MainImage';

const SignIn = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <MainImage />
      <Heading>{t('sign_in.title')}</Heading>
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

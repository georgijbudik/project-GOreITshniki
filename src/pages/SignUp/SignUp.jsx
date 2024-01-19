import { useTranslation } from 'react-i18next';
import SignUpForm from './SignUpForm/SignUpForm';
import {
  Heading,
  Info,
  Container,
  InfoLink,
  StyledLink,
} from './SignUpForm/SignUpForm/SignUpForm.styled';
import MainImage from './SignUpForm/MainImage';

const SignUp = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <MainImage />
      <Heading>{t('sign_up.title')}</Heading>
      <Info>{t('sign_up.description')}</Info>
      <SignUpForm />
      <InfoLink>
        {t('sign_up.have_account')}{' '}
        <StyledLink to="/signin">{t('sign_up.sign_in_link')}</StyledLink>
      </InfoLink>
    </Container>
  );
};

export default SignUp;

import { useTranslation } from 'react-i18next';

import TitlePage from 'components/TitlePage';
import MainImage from './SignUpForm/MainImage';
import SignUpForm from './SignUpForm/SignUpForm';

import {
  TitleWrapper,
  Info,
  Container,
  InfoLink,
  StyledLink,
} from './SignUpForm/SignUpForm/SignUpForm.styled';

const SignUp = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <MainImage />
      <TitleWrapper>
        <TitlePage>{t('sign_up.title')}</TitlePage>
      </TitleWrapper>
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

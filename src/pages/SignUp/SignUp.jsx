import { useTranslation } from 'react-i18next';
import SignUpForm from './SignUpForm';
import {
  Heading,
  Info,
  Container,
  InfoLink,
  StyledLink,
} from './SignUpForm/SignUpForm.styled';
import MainImage from './SignUpForm/MainImage';
import { TrackerCalories, TrackerVideo } from 'components/Tracker/Tracker';

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
      <TrackerVideo/>
     <TrackerCalories/>
     </Container>
  );
};

export default SignUp;

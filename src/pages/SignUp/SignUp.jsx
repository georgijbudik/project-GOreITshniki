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
import { selectIsFetching } from '../../redux/auth/authSelectors';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';

const SignUp = () => {
  const { t } = useTranslation();
  const  isLoading  = useSelector(selectIsFetching);

  return (
    <Container>
      <MainImage />
      <Heading>{t('sign_up.title')}</Heading>
      <Info>{t('sign_up.description')}</Info>
       {isLoading && <Loader />}
      <SignUpForm />
      <InfoLink>
        {t('sign_up.have_account')}{' '}
        <StyledLink to="/signin">{t('sign_up.sign_in_link')}</StyledLink>
      </InfoLink>
    </Container>
  );
};

export default SignUp;

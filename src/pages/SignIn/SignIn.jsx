import SignInForm from './SignInForm';
import {
  Heading,
  Info,
  Container,
  InfoLink,
  StyledLink,
} from '../SignUp/SignUpForm/SignUpForm.styled';

const SignIn = () => {
  return (
    <Container>
      <Heading>Sign In</Heading>
      <Info>
        Welcome! Please enter your credentials to login to the platform:
      </Info>
      <SignInForm />
      <InfoLink>
        Don’t have an account? <StyledLink to="/signup">Sign Up</StyledLink>
      </InfoLink>
    </Container>
  );
};

export default SignIn;

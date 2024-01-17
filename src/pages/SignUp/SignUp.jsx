import SignUpForm from './SignUpForm';
import {
  Heading,
  Info,
  Container,
  InfoLink,
  StyledLink,
} from './SignUpForm/SignUpForm.styled';

const SignUp = () => {
  return (
    <Container>
      <Heading>Sign Up</Heading>
      <Info>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </Info>
      <SignUpForm />
      <InfoLink>
        Already have an account? <StyledLink to="/signin">Sign In</StyledLink>
      </InfoLink>
    </Container>
  );
};

export default SignUp;

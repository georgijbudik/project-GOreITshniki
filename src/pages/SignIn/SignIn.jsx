import { Link } from 'react-router-dom';
import SignInForm from './SignInForm';
import { Heading, Info } from './SignInForm/SignInForm.styled';

const SignIn = () => {
  return (
    <>
      <Heading>Sign In</Heading>
      <Info>
        Welcome! Please enter your credentials to login to the platform:
      </Info>
      <SignInForm />
      <Info>
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </Info>
    </>
  );
};

export default SignIn;

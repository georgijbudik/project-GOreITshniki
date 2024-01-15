import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import { Heading, Info } from './SignUpForm/SignUpForm.styled';

const SignUp = () => {
  return (
    <>
      <Heading>Sign Up</Heading>
      <Info>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </Info>
      <SignUpForm />
      <Info>
        Already have an account? <Link to="/signin">Sign In</Link>
      </Info>
    </>
  );
};

export default SignUp;

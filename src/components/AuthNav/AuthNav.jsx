import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </>
  );
};

export default AuthNav;

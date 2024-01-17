import { useSelector } from 'react-redux';
import { selectIsLoggedin } from '../redux/auth/authSelectors';

import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, navigateTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedin);

  if (!isLoggedIn) {
    return <Navigate to={navigateTo} />;
  }

  return children;
};

export default PrivateRoute;

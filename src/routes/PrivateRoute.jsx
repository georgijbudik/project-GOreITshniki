import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectIsLoggedin, selectUserBlood } from '../redux/auth/authSelectors';

import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedin);
  const userInfo = useSelector(selectUserBlood);

  if (isLoggedIn && !Boolean(userInfo) && pathname !== '/profile') {
    return <Navigate to="/profile" />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;

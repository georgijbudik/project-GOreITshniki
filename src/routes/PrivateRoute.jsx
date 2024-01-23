import { useSelector } from 'react-redux';
import { selectIsLoggedin, selectUserBlood } from '../redux/auth/authSelectors';

import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, navigateTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedin);
  const userInfo = useSelector(selectUserBlood);

  if (!userInfo) {
    return <Navigate to="/profile" replace />;
  }

  if (!isLoggedIn) {
    return <Navigate to={navigateTo} replace />;
  }

  return children;
};

export default PrivateRoute;

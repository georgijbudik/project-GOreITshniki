import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectIsLoggedin, selectUserBlood } from '../redux/auth/authSelectors';
import { selectToken } from '../redux/auth/authSelectors';
import { refreshUser } from '../redux/auth/authOperations';

import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedin);
  const userInfo = useSelector(selectUserBlood);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [token, dispatch]);

  if (isLoggedIn && !Boolean(userInfo) && pathname !== '/profile') {
    return <Navigate to="/profile" />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;

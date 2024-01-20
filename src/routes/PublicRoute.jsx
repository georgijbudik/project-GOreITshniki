import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsLoggedin,
  selectToken,
  selectUserBlood,
} from '../redux/auth/authSelectors';
import { refreshUser } from '../redux/auth/authOperations';

import { Navigate } from 'react-router-dom';

const PublicRoute = ({ restricted = false, children }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [token, dispatch]);

  const isLoggedIn = useSelector(selectIsLoggedin);
  const userInfo = useSelector(selectUserBlood);
  const shouldRestrict = isLoggedIn && restricted;

  return shouldRestrict ? (
    userInfo ? (
      <Navigate to="/diary" replace />
    ) : (
      <Navigate to="/profile" replace />
    )
  ) : (
    children
  );
};

export default PublicRoute;

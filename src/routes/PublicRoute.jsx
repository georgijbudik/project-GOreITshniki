import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsFetching } from '../redux/auth/authSelectors';

import {
  selectIsLoggedin,
  selectToken,
  selectUserBlood,
} from '../redux/auth/authSelectors';
import { refreshUser } from '../redux/auth/authOperations';

import { Navigate } from 'react-router-dom';
import Loader from 'components/Loader';

const PublicRoute = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsFetching);

  const isLoggedIn = useSelector(selectIsLoggedin);
  const userInfo = useSelector(selectUserBlood);

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [token, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (!userInfo && isLoggedIn) {
    return <Navigate to="/profile" replace />;
  }

  if (isLoggedIn) {
    return <Navigate to="/diary" replace />;
  }

  return children;
};

export default PublicRoute;

import { useSelector } from 'react-redux';
import { selectToken } from '../redux/auth/authSelectors';

import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ children, navigateTo = '/diary' }) => {
  const token = useSelector(selectToken);

  if (token) {
    return <Navigate to={navigateTo} replace />;
  }

  return children;
};

export default RestrictedRoute;

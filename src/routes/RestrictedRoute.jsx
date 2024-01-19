import { useSelector } from 'react-redux';
import { selectToken, selectUserInfo } from '../redux/auth/authSelectors';

import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ children }) => {

  const token = useSelector(selectToken);
  const userInfo = useSelector(selectUserInfo);
  const shouldRedirect = token && userInfo;
  const navigateTo = shouldRedirect ? '/diary' : 'profile';

  if (shouldRedirect) {
    return <Navigate to={navigateTo} replace />;
  }

  return children;
};

export default RestrictedRoute;

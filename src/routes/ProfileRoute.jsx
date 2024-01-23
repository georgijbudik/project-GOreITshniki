import { useSelector } from 'react-redux';
import { selectIsLoggedin, selectUserBlood } from '../redux/auth/authSelectors';

import { Navigate } from 'react-router-dom';

const ProfileRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedin);
  const unserInfo = useSelector(selectUserBlood);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  if (unserInfo) {
    return <Navigate to="/diary" replace />;
  }

  return children;
};

export default ProfileRoute;

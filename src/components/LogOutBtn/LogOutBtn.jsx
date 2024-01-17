import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import toast from 'react-hot-toast';

import {
  StyledLogOutBtn,
  StyledLogOutBtnIcon,
  StyledLogOutBtnText,
} from './LogOutBtn.styled';
import { selectIsLoggedin } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';

const LogOutBtn = ({ filled, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    const promise = dispatch(logOut());
    toast.promise(
      promise,
      {
        success: 'You were successfully logged out!',
        error: 'Something went wrong.',
        loading: 'Logging you out...',
      },
      {
        duration: 2000,
        icon: '🏋️‍♀️',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
    onClose?.();
    navigate('/');
  };

  return (
    <StyledLogOutBtn onClick={handleLogOut}>
      <StyledLogOutBtnText>Logout</StyledLogOutBtnText>
      <StyledLogOutBtnIcon
        $filled={filled}
        width="20"
        height="20"
        stroke="rgba(230, 83, 60, 1)"
      >
        <use
          xlinkHref={
            process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-log-out'
          }
        />
      </StyledLogOutBtnIcon>
    </StyledLogOutBtn>
  );
};

export default LogOutBtn;

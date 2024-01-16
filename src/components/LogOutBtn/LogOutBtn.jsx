import { useDispatch, useSelector } from 'react-redux';
import {
  StyledLogOutBtn,
  StyledLogOutBtnIcon,
  StyledLogOutBtnText,
} from './LogOutBtn.styled';
import { selectIsLoggedin } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';

const LogOutBtn = ({ filled }) => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedin);
  // const email = useSelector(selectUserEmail);

  const handleLogOut = () => {
    dispatch(logOut());
    // toast(`We will miss you, ${email}`, {
    //   duration: 2000,
    //   position: 'top-right',
    //   icon: '🤠',
    //   style: {
    //     borderRadius: '10px',
    //     background: '#333',
    //     color: '#fff',
    //   },
    // });
  };

  return (
    isLoggedIn && (
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
    )
  );
};

export default LogOutBtn;

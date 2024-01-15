import Button from 'components/Button';
import { UserSvgLogout } from './Header.styled';
import { selectIsLoggedin } from '../../redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

export function Header() {
  const isLoggedIn = useSelector(selectIsLoggedin);
  const dispatch = useDispatch();
  // const email = useSelector(selectUserEmail);

  const handleLogOut = () => {
    console.log('fuck logout');
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
    <div>
      {isLoggedIn && (
        <Button
          type="button"
          secondary
          paddingY={12}
          paddingX={12}
          onClick={handleLogOut}
        >
          Logout
          <UserSvgLogout width="20" height="20" stroke="#E6533C">
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-log-out'
              }
            ></use>
          </UserSvgLogout>
        </Button>
      )}
    </div>
  );
}

// {isLoggedIn ? <UserMenu /> : <AuthNav />}

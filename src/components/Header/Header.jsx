// import { useDispatch, useSelector } from 'react-redux';

// import {
//   selectIsLoggedin,
//   selectUserEmail,
// } from '../../redux/auth/authSelectors';
// import { logOut } from '../../redux/auth/authOperations';

import Logo from 'components/Logo';
import UserNav from 'components/UserNav';
import UserBar from 'components/UserBar';

import { StyledHeader, StyledHeaderUserMenu } from './Header.styled';

// import toast from 'react-hot-toast';

export function Header() {
  // const dispatch = useDispatch();

  // const isLoggedIn = useSelector(selectIsLoggedin);
  // const email = useSelector(selectUserEmail);

  // const handleLogOut = () => {
  //   dispatch(logOut());
  //   toast(`We will miss you, ${email}`, {
  //     duration: 2000,
  //     position: 'top-right',
  //     icon: '🤠',
  //     style: {
  //       borderRadius: '10px',
  //       background: '#333',
  //       color: '#fff',
  //     },
  //   });
  // };

  return (
    <StyledHeader>
      <Logo filled />

      <StyledHeaderUserMenu>
        <UserBar />
        <UserNav />
      </StyledHeaderUserMenu>
    </StyledHeader>
  );
}

// {isLoggedIn ? <UserMenu /> : <AuthNav />}

//  {
//    isLoggedIn && (
//      <Button
//        type="button"
//        secondary
//        paddingY={12}
//        paddingX={12}
//        onClick={handleLogOut}
//      >
//        Logout
//        <UserSvgLogout width="20" height="20" stroke="#E6533C">
//          <use
//            xlinkHref={
//              process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-log-out'
//            }
//          ></use>
//        </UserSvgLogout>
//      </Button>
//    );
//  }

// import { useSelector } from 'react-redux';
// import { selectIsLoggedin } from '../../redux/auth/authSelectors';

import Logo from 'components/Logo';
import UserNav from 'components/UserNav';
import UserBar from 'components/UserBar';
// import { selectIsLoggedin } from '../../redux/auth/authSelectors';

import { StyledHeader, StyledHeaderUserMenu } from './Header.styled';

export function Header() {
  // const isLoggedIn = useSelector(selectIsLoggedin);

  return (
    <StyledHeader>
      <Logo filled />

      <StyledHeaderUserMenu>
        <UserBar />
        <UserNav />
      </StyledHeaderUserMenu>

      {/* {isLoggedIn && (
        <StyledHeaderUserMenu>
          <UserBar />
          <UserNav />
        </StyledHeaderUserMenu>
      )} */}
    </StyledHeader>
  );
}

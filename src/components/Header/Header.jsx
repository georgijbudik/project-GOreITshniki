import { useSelector } from 'react-redux';
import { selectIsLoggedin } from '../../redux/auth/authSelectors';

import Logo from 'components/Logo';
import UserNav from 'components/UserNav';
import UserBar from 'components/UserBar';

import { StyledHeader, StyledHeaderUserMenu } from './Header.styled';

export function Header() {
  const isLoggedIn = useSelector(selectIsLoggedin);

  return (
    <StyledHeader $isLoggedIn={isLoggedIn}>
      <Logo filled />

      {isLoggedIn && (
        <StyledHeaderUserMenu>
          <UserBar />
          <UserNav />
        </StyledHeaderUserMenu>
      )}
    </StyledHeader>
  );
}

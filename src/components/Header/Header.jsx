import { useSelector } from 'react-redux';
import {
  selectIsLoggedin,
  selectUserBlood,
} from '../../redux/auth/authSelectors';

import Logo from 'components/Logo';
import UserNav from 'components/UserNav';
import UserBar from 'components/UserBar';
import LanguageToggle from 'components/LanguageToggle';
import ThemeToggle from 'components/ThemeToggle';

import { StyledHeader, StyledHeaderUserMenu } from './Header.styled';

export function Header() {
  const isLoggedIn = useSelector(selectIsLoggedin);
  const userInfo = useSelector(selectUserBlood);

  return (
    <StyledHeader $isLoggedIn={isLoggedIn}>
      <Logo filled />

      {isLoggedIn && userInfo ? (
        <StyledHeaderUserMenu>
          <UserBar />
          <UserNav />
        </StyledHeaderUserMenu>
      ) : (
        <StyledHeaderUserMenu>
          <LanguageToggle />
          <ThemeToggle />
        </StyledHeaderUserMenu>
      )}
      {/* {isLoggedIn ? (
        <StyledHeaderUserMenu>
          <UserBar />
          <UserNav />
        </StyledHeaderUserMenu>
      ) : (
        <StyledHeaderUserMenu>
          <LanguageToggle />
          <ThemeToggle />
        </StyledHeaderUserMenu>
      )} */}
    </StyledHeader>
  );
}

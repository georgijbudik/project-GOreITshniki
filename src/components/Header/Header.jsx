import { useSelector } from 'react-redux';
import {
  selectIsLoggedin,
  // selectUserBlood,
} from '../../redux/auth/authSelectors';

import Logo from 'components/Logo';
import UserNav from 'components/UserNav';
import UserBar from 'components/UserBar';

import { StyledHeader, StyledHeaderUserMenu } from './Header.styled';

export function Header() {
  const isLoggedIn = useSelector(selectIsLoggedin);
  // const userInfo = useSelector(selectUserBlood);

  return (
    <StyledHeader $isLoggedIn={isLoggedIn}>
      <Logo filled />
      {/* 
      {isLoggedIn && userInfo && (
        <StyledHeaderUserMenu>
          <UserBar />
          <UserNav />
        </StyledHeaderUserMenu>
      )} */}

      {isLoggedIn && (
        <StyledHeaderUserMenu>
          <UserBar />
          <UserNav />
        </StyledHeaderUserMenu>
      )}
    </StyledHeader>
  );
}

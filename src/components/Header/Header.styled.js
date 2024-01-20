import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;

  padding-top: ${({ $isLoggedIn }) => ($isLoggedIn ? '12px' : '24px')};
  padding-bottom: ${({ $isLoggedIn }) => ($isLoggedIn ? '12px' : '24px')};

  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: ${({ $isLoggedIn }) => {
    if ($isLoggedIn) {
      return '1px solid rgba(239, 237, 232, 0.2)';
    } else {
      return 'none';
    }
  }};

  @media screen and (min-width: 768px) {
    padding-top: ${({ $isLoggedIn }) => ($isLoggedIn ? '20px' : '32px')};
    padding-bottom: ${({ $isLoggedIn }) => ($isLoggedIn ? '20px' : '32px')};
  }
`;

export const StyledHeaderUserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 32px;
  }
`;

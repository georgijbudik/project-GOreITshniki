import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: transparent;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding-top: 19px;
    padding-bottom: 19px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    padding-bottom: 20px;
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

export const StyledHeaderLogoMenu = styled.div`
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

import styled from 'styled-components';
import { StyledButton } from 'components/Button/Button.styled';

export const StyledUserNav = styled.nav`
  line-height: 0;

  @media screen and (min-width: 1440px) {
    order: 1;
  }
`;

export const StyledUserNavBurgerButton = styled.button`
  line-height: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const StyledUserNavBurgerIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke-width: 1px;
  stroke: rgba(230, 83, 60, 1);

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const StyledUserNavButtonList = styled.ul`
  @media screen and (max-width: 1439px) {
    display: none;
  }

  padding: 0;
  margin: 0;

  display: flex;
  gap: 16px;
`;

export const StyledUserNavButton = styled(StyledButton)`
  padding: 10px 27px;
  font-size: 16px;
  line-height: 150%;
`;

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

export const StyledUserNavMobileNavModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(4, 4, 4, 0.4);
`;

export const StyledUserNavMobileNavModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: 200px;
  height: 100vh;
  background-color: var(--accent-color);

  @media screen and (min-width: 768px) {
    width: 350px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const StyledUserNavMobileNavContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const StyledUserNavMobileNavCloseButton = styled.button`
  position: absolute;
  top: 19px;
  right: 20px;

  line-height: 0;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 26px;
    right: 32px;
  }
`;

export const StyledUserNavMobileNavCloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: rgba(239, 237, 232, 1);

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const StyledUserNavMobileNavLogoOutBtnWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;

  @media screen and (min-width: 768px) {
    bottom: 32px;
    left: 32px;
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

  @media screen and (max-width: 1439px) {
    color: var(--main-text-color);
    border: ${({ $active }) =>
      $active
        ? '1px solid var(--main-text-color)'
        : '1px solid rgba(239, 237, 232, 0.2)'};
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: ${({ $secondary }) =>
      $secondary ? 'transparent' : 'var(--accent-color)'};

    border: ${({ $secondary }) =>
      $secondary
        ? `1px solid var(--accent-color)`
        : '1px solid var(--accent-color)'};
  }
`;

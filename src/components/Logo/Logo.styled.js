import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledLogoText = styled.svg`
  width: 82px;
  height: 12px;

  stroke: var(--main-text-color);

  @media screen and (min-width: 768px) {
    width: 99.527px;
    height: 15.26px;
  }
`;

export const StyledLogoIcon = styled.svg`
  width: 36px;
  height: 13px;

  fill: var(--accent-color);

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 17px;
  }
`;

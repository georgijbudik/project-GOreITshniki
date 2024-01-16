import styled from 'styled-components';

export const StyledLogo = styled.button`
  padding: 0;
  line-height: 0;
  border: none;
  background-color: transparent;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledLogoIcon = styled.svg`
  fill: ${({ $filled }) =>
    $filled ? 'var(--accent-color)' : 'var(--main-text-color)'};
`;

export const StyledLogoText = styled.svg`
  stroke: var(--main-text-color);
`;

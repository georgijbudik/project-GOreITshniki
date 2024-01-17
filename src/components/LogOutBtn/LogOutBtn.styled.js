import styled from 'styled-components';

export const StyledLogOutBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1440px) {
    &:hover {
      & > span {
        color: var(--accent-color);
      }
    }
  }
`;

export const StyledLogOutBtnText = styled.span`
  color: ${({ theme }) => {
    return theme.palette.text.primary;
  }};
  font-size: 14px;
  line-height: 128.571%;

  transition: var(--transition);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const StyledLogOutBtnIcon = styled.svg`
  width: 20px;
  height: 20px;

  stroke: ${({ $filled }) =>
    $filled ? 'rgba(230, 83, 60, 1)' : 'rgba(239, 237, 232, 1)'};
`;

import styled from 'styled-components';

export const StyledLanguageToggleList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;

export const StyledLanguageToggleListItem = styled.li`
  display: flex;

  &:not(:last-child) {
    &::after {
      content: '';
      display: block;
      width: 1px;
      height: 18px;
      background-color: var(--accent-color);
      margin-left: 10px;
    }
  }
`;

export const StyledLanguageToggleListButton = styled.button`
  line-height: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${({ $active, theme }) =>
    $active ? 'var(--accent-color)' : theme.palette.text.primary};

  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

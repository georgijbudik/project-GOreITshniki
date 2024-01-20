import styled from 'styled-components';

export const StyledLanguageToggleList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledLanguageToggleListItem = styled.li`
  display: flex;

  &:not(:last-child) {
    &::after {
      content: '';
      display: block;
      width: 1px; /* Adjust the width as needed */
      height: 18px; /* Adjust the height as needed */
      background-color: var(--accent-color);
      margin-left: 10px; /* Adjust the margin as needed */
    }
  }
`;

export const StyledLanguageToggleListButton = styled.button`
  line-height: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${({ $active }) =>
    $active ? 'var(--accent-color)' : 'var(--main-text-color)'};

  font-size: 14px;
`;

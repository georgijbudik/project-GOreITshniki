import styled from 'styled-components';

export const StyledThemeToggleButton = styled.button`
  padding: 5px;
  line-height: 0;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  transition: var(--transition);

  &:hover {
    background-color: rgba(200, 200, 200, 0.3);
  }
`;

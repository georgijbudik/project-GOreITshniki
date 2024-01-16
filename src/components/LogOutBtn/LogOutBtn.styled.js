import styled from 'styled-components';

export const StyledLogOutBtn = styled.button`
  color: var(--main-text-color);
  font-size: 16px;

  display: none;

  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  & > span {
    transition: var(--transition);
  }

  &:hover {
    & > span {
      color: var(--accent-color);
    }
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

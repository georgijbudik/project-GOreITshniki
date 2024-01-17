import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    overflow: ${({ $isModalOpen }) => ($isModalOpen ? 'hidden' : 'auto')}
  }
`;

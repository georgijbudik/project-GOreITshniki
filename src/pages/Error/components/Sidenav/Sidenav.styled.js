import styled from 'styled-components';

export const StyledSidenavWrapper = styled.div`
  padding: 24px 20px;
  background-color: var(--accent-color);
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 96px;
    width: auto;
  }
`;

export const StyledSidenavContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
